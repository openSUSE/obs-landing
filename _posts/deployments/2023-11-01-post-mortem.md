---
layout: post
title: "Post-mortem: Service Degradation in the Notifications System"
category: deployments
---

## Absence of Notifications on the 27th of November

On November 27th, OBS users did not receive any notification from the system for more than three hours. Here is what caused the problem.

**Date**: 27.11.2023

**Impact**: Users and groups did not receive any RSS, web or email notification from OBS for more than three hours.

**Root Causes**: After the deployment of [this line of code](https://github.com/openSUSE/open-build-service/pull/15238/files#diff-f892a3ae7cf7e43e45ace79d30674d1d1293747be0040aca1bd03ba40c650673R70), the delayed job that creates notifications based on the latest events crashed and was not able go on creating more notifications.
The error was raised when trying to fetch the `rss_secret` of a group. Groups do not provide any `rss_secret` as OBS does not support RSS subscriptions for groups.
In fact, the error revealed a bug in the underlying subscriptions' code.

**Trigger**: A deployment.

**Resolution**: Initially, we applied a quick patch with [PR #15276](https://github.com/openSUSE/open-build-service/pull/15276) and then we dug into the root cause and fixed it with [PR #15290](https://github.com/openSUSE/open-build-service/pull/15290).

**Detection**: Users warning and error tracking tool.

## Action Items

| Action Item | Owner |
|---          |---    |
| Add an alert in monitoring if no notifications happen in a certain period. | Notifications opportunity leader. |
| Refactor the subscriptions and notifications codebase, which is quite complex to debug. | Notifications opportunity leader. |

## Lessons Learned

**What went well?**

* After the patch was applied, all the notifications were successfully sent.

**What went wrong?**

* The team did not receive any automatic alert until 3 hours later (related to the lack of emails) but none about the lack of notifications.

**Where we got lucky?**

* There was no data loss.

## Timeline (CEST)

* *10:32* The error tracking tool displays the error for the first time.
* *12:58* The error was detected by the team and some users.
* *14:00* The team received an alert from the monitoring system about the lack of emails.
* *14:08* Production is monkey-patched and the delayed job starts creating notifications little by little.