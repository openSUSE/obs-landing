---
layout: post
title: "Post-mortem: Lack of Emails/Notifications from April 6 to April 11, 2023"
category: deployments
---

After implementing the feature that allows the users to comment on specific lines in the changes
of a request, we also introduced the possibility to notify about them. However, there was a
corner case which caused the notifications to fail, so our [reference server](https://build.opensuse.org) did not send any web notifications or emails during the Easter holidays (from 6th to 11th April).

## Impact

Our [reference server](https://build.opensuse.org) did not send any notifications (web or email) for round about four and a half days.

## Root Causes

A `BsRequest` in OBS can have one or more `BSRequestAction`. Each `BsRequestAction` can generate it's own diff. So with the new [diff comments feature](/2023/03/07/request-workflow-redesign/) the thing we create `Notification` about is an individual `BsRequestAction` and not the generic `BsRequest`.

The code we run to figure out who this `Notification` concerns (`NotifiedProjects`) did not consider this change, which made the `ActiveJob` that tries to generate the `Notification` crash. As the generation of `Notification` and the sending of Emails happens in the same job the application did not manage to send out emails or create notifications. 💥

## Trigger

Users creating comments on diffs.

## Detection

[Grafana](https://obs-measure.opensuse.org/d/SKLo7evMk/emails?orgId=1&viewPanel=4&from=1680611722451&to=1681272572759) alerted us with the information about the issue about 3 hours after it first happened, and then a few times in the following days.

## Resolution

A [patch](https://github.com/openSUSE/open-build-service/pull/14128) was introduced and then merged to handle the notifications for comments on changes properly.

## Action items

- Errors on the web notifications handling affected the email deliveries. It's important to split the code in the delayed job.
- Set alerts when the number of web notifications is under the average.

## Lessons learned

Errors do not always correlate with the latest deployed changes.

## What Went Well?

- Once the issue was analyzed thoroughly, we were able to come up with a patch that fully fixed the issue.
- The patch was applied right before our users' activity was fully restarted after the Easter period.

## What Went Wrong?

- It wasn't easy to correlate the issue with the latest deployed changes.
  The error happened more than 11 hours after the last deployment. Moreover, we received the alerts around 3 hours after the error.
  That made it difficult to understand the root cause and made the operator put the focus in the wrong place: a change in the system.
  Spending too much time analyzing logs (application log, zypper log, history and rpm latest updates).
- The alerts received in Slack were a bit confusing. We got a "RESOLVED" alert at some point,
  not because of a fix but because an email from `AdminMailer` was delivered while the `EventMailer` was still broken.
  We track both types of mailers in the same Grafana panel.

## Where We Got Lucky

Not many people noticed due to the Easter holidays.

## Timeline (times in UTC)

- 06/04/2023 21:42 - A notification was created for the last time but its event wasn't marked as sent.
- 07/04/2023 01:00 - First alert on Slack coming from Grafana, during Easter period.
- 10/04/2023 09:21 - First regular working day after Easter. Start investigating the alerts.
- 10/04/2023 10:30 - Check the email delivery is not broken by sending an event email from the Rails console.
- 10/04/2023 10:52 - Start many unsuccessful attempts to find the root cause and reproduce it in development environment (checking deployed changes, server updates, logs etc.)
- 11/04/2023 08:14 - Find the root cause and apply manual fix on the reference server.
- 11/04/2023 08:35 - Restart the delayed jobs service related to the mailers queue. Grafana starts tracking emails again. The number of pending jobs in the mailers queue starts to decrease.

