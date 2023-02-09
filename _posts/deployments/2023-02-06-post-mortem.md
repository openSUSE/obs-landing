---
layout: post
title: "Post-mortem: Failing email deliveries on 6th February, 2023"
category: deployments
author: Saray, Lukas
---

Our [reference server](https://build.opensuse.org) stopped sending out email notifications on February 3th, 2023.
In the lines below you will find a detailed explanation of what happened.

## Impact

Our [reference server](https://build.opensuse.org) wasn't sending out email notifications (or only partially) to the users starting
Feburary 3th, 2023 around 11:37PM until February 6th, 2023 13:06PM.

## Root Causes

The problem was caused by an exception thrown in the `SendEventEmailsJob` due to not properly querying "hidden projects",
which made the job fail.

## Trigger

A recent change of user roles on a "hidden project" on our [reference server](https://build.opensuse.org) server, started
to trigger queuing `SendEventEmailsJob`'s to send emails to the subscribed users.

## Resolution

Temporarily ignoring the events coming from the hidden project in the `SendEventEmailsJob` in order to allow mailer jobs
to be processed again.

## Detection

* An alert about receiving no new data from `ActionMailer` in Grafana in our chat.
* Report from a user in the `#opensuse-buildservice` IRC channel.
* Receiving exceptions in Errbit regarding failures in the `SendEventEmailsJob`.

## Action Items

* Correct handling of hidden projects in the `SendEventEmailsJob`. Right now we use a default scope when querying
the projects. This leads to the failure in the job, since it cannot find the hidden project.
See [issue 13636](https://github.com/openSUSE/open-build-service/issues/13636).

## Lessons Learned

### What went well?

Collaboration among the team to resolve the issue.

### What went wrong?

Not considering the default scope when querying the projects in the `SendEventEmailsJob`.

### Where we got lucky?

Once the problem was clear, it was easy to temporarily exclude the project that caused the issue from the `SendEventEmailsJob`.

## Timeline (CET)

- **2023-02-03 23:37** Errbit starts to track errors in `delayed_job#SendEventEmailsJob`.
- **2023-02-04 03:08** Start to receive an alert in our chat that no data is received in Grafana for the `ActionMailer`.
- **2023-02-05 15:26** Users informed in IRC that they didn't receive emails since `2023-02-03T22:11`.
- **2023-02-06 11:50** Start analyzing the issue. Our exception tracking tool Errbit showed almost 100.000 exceptions
where the `SendEventEmailsJob` couldn't find a hidden project.
- **2023-02-06 12:13** Detect that Postfix wasn't sending out any mails since `2023-02-05T07:38`.
- **2023-02-06 12:16** The delay job queue for 'mailers' is unusually high (7243).
- **2023-02-06 12:26** We declare the incident
- **2023-02-06 12:30** Remove the queued jobs related to the hidden project. After that we realized that this is not enough,
since new jobs related to the same hidden project were queued again, which led to make the mailer job fail again.
- **2023-02-06 12:58** We monkey patch `app/jobs/send_event_emails_job.rb` to avoid sending emails or web notifications related to the projects causing the issues.
- **2023-02-06 13:06** Restart the server and delayed jobs for the `mailers` queue.
- **2023-02-06 13:08** The alert for the `ActionMailer` is resolved and emails are send again.
