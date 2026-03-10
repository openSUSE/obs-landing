---
layout: post
title: "Post-mortem: Stuck Critical Jobs Queue"
category: deployments
author: the OBS Team
---

Between March 4th and 5th, the Open Build Service (OBS) experienced a service degradation.

**Impact:** Users weren't able to retrieve the diff changes of submit requests.

## Detection

The issue was first identified by team members who noticed that diffs for new submit requests were not loading.
Minutes later, it was confirmed that this issue was affecting all submit requests across the production instance.

## Root Cause

Due to multiple factors, the latest code changes increased the number of project and package updates.
Consequently, the number of calls to `PopulateToSphinxJob` tasks started to accumulate, which saturated the queue and prevented diff-related jobs from being processed.

## Resolution

We manually cleared failing jobs and scaled the number of worker daemons to clear the backlog.
Additionally, we deployed a change to production to limit the conditions under which `PopulateToSphinxJob` tasks are triggered.

### Action Items

* Fix Anitya field data to prevent recurring validation failures.
* Fix logic to prevent the creation of unnecessary `PopulateToSphinxJob` tasks.
* Implement automated alerts for high queue depth.

## Lessons Learned

* New features should be monitored with a focus on their impact on shared resources (like queues).
* Monitoring and alerting for critical paths should be implemented *before* or alongside the deployment of new features.

## Timeline (All Time in UTC)

- 2026-03-04 09:25: Internal reports of stuck jobs in the queue.
- 2026-03-04 13:07: Incident officially declared.
- 2026-03-04 13:15: Identified validation errors with jobs of the Anitya distribution.
- 2026-03-04 13:17: Temporarily disabled the new Anitya validation and restarted the delayed jobs.
- 2026-03-04 13:20: Job count began to slowly decrease from 97400.
- 2026-03-04 13:27: Identified and removed two specific jobs causing validation errors.
- 2026-03-04 13:31: Identified ~50K jobs of class `PopulateToSphinxJob`. We left them untouched.
- 2026-03-04 13:47: Identified and removed ~500 stuck jobs of job_class: `BsRequestActionWebuiInfosJob`.
- 2026-03-04 13:53: Scaled capacity by starting 10 additional systemd worker daemons for the `quick` queue.
- 2026-03-04 13:56: Verified diff generation was working. Queue size was around 93700.
- 2026-03-04 14:18: Re-verified diff generation. Initial slowness observed, but processing confirmed.
- 2026-03-04 14:29: Incident closed.
