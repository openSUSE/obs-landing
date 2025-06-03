---
layout: post
title: "Degraded performance of OBS Web and Email Notifications system"
category: deployments
author: Rubhan Azeem <rubhan.azeem@suse.com>
---

<!--
  Classify the severity of this problem. We usually say:
  - service degradation: if only a few customers where impacted
  - severe service degradation: if nearly every customer was impacted
  - downtime: if every visit to the OBS ended up on some error page
-->

Our Email and Web notifications system experienced a service degradation.

<!--
  What happened, for how long and who was impacted by it?
  For customers to be able to identify if their problem related to this post mortem or not.
-->

On Friday, August 23rd at 11:59 UTC, Email and Web notifications stopped working until August 26th at 10:16 UTC.

In the notification creation process, the `payload` field in the `events` table is copied to the `event_payload` field in the `notifications` table. These fields are required to have the same column size, but we discovered they don't have the same size.

As a result, when the system attempted to create a notification for an event with a long description in its payload, an exception was raised, causing the notification creation process to fail.

## Detection

We received the first Grafana alert on Friday, August 23rd at 15:00 UTC, indicating that no notifications had been sent in the last three hours. Upon checking Errbit, we found a single exception with over 100,000 occurrences

## Root Cause

The root cause of the problem was a mismatch in column sizes between the `payload` field in the `events` table and the `event_payload` field in the `notifications` table. Because of this mismatch, when the system attempted to create a notification from an event with a very long description in its payload, an exception was raised, that blocked the creation of further email and web notifications.

## Resolution
<!--
  How did you resolve or work around this problem?
  For customers and community to understand what happened technically.
-->

We were able to identify the problematic event, take a backup of that event, and then delete it. After this, the system began to recover gradually.

### Action Items

<!--
  Are there any actions we are going to do that are not done yet?
  For customers and community to be able to follow up on this.
-->

Additionally we have created some follow up action items:

| Action Item | Owner |
|---          |---    |
| [Data migration to update column size](https://github.com/openSUSE/open-build-service/pull/16751) | Developer Team |
| [Improve exception handling](ihttps://github.com/openSUSE/open-build-service/pull/16751#issuecomment-2309776466) | Developer Team |

## Lessons Learned
<!--
  Describe what went well, what went wrong and where we go lucky during the resolution of this problem.
-->

- Ensure that all connected tables have consistent column sizes by thoroughly reviewing the system architecture. We recognize that there is close coupling of components, and this design can be improved.
- We had failed notifications in delayed jobs, and that saved us from data loss.
- Errbit and Grafana alerts helped us realize the problem.

## Timeline (All Time in UTC)

- *August 23rd, 11:59* The system stopped creating web and email notifications
- *August 23rd, 15:00* We received the first alert from Grafana
- *August 26th, 06:25* We checked the exceptions on Errbit
- *August 26th, 09:31* We declared the incident
- *August 26th, 10:16* We identified and deleted the event record causing the problem. Failed notifications began to recover slowly
- *August 26th, 10:20* We declared the incident resolved

