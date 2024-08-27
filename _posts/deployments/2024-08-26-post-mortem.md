---
layout: post
title: "Service degradation of OBS Web and Email Notifications system"
category: deployments
author: Rubhan Azeem <rubhan.azeem@suse.com>
---

Our Email and Web notifications system experienced a service degradation.

No user of build.opensuse.org received notifications via the web interface / email from Friday, August 23rd at 11:59 UTC until Monday, August 26th at 10:16 UTC. No notification / email was lost, all of them got delivered with a delay. Some of them with a delay of several days.

The cause of this was mis-matching database table column size restrictions we did not notice.

As a result, when the system attempted to create a notification an exception was raised, causing the notification creation process to fail entirely.

## Detection

We received the first alert on Friday, August 23rd at 15:00 UTC, indicating that no notifications had been sent in the last three hours.

## Root Cause

In February we changed the size limitations of the `payload` field in the `events` table from TEXT to MEDIUMTEXT ([PR#15649](https://github.com/openSUSE/open-build-service/pull/15649)). During the notification process we copy the content of this column to another to the `event_payload` field in the `notifications` table with it TEXT. This mismatch caused an exception to be raised when the system attempted to create a notification from an event with a very long `payload` column.
Additionally the queue the handles the notification creations work sequentially, with a very many retries and very long hold off time. That blocked the creation of *all* email and web notifications.

## Resolution

We identified the problematic event and took it out of the queue. After this, the system began to recover itself gradually.

### Action Items

Additionally we have created some follow up action items:

| Action Item | Owner |
|---          |---    |
| [Data migration to update column size](https://github.com/openSUSE/open-build-service/pull/16751) | Developer Team |
| [Improve exception handling](ihttps://github.com/openSUSE/open-build-service/pull/16751#issuecomment-2309776466) | Developer Team |

## Lessons Learned

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

