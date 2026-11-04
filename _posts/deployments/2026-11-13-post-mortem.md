---
layout: post
title: "Post-mortem: Errors for Users with Requests on their Watchlist"
category: deployments
author: the OBS Team
---

On November 3rd, the OBS reference server (build.opensuse.org) experienced a service degradation following a deployment. Certain users encountered 500 errors while interacting with the platform for approximately one hour.

We want to share what happened, how we mitigated the failure, and the steps we are taking to avoid similar disruptions in future releases.

## Detection

Shortly after running the deployment, some of us faced 500 errors on every page they visited on build.opensuse.org
and our error-tracking system began receiving errors indicating that other users were affected as well.

The backtrace of the error gave the clue about the request-watchlist combination causing the problem.
We confirmed this by removing all requests from the watchlist of a user's account, and that user immediately stopped encountering the errors.

## Root Cause

The deployment introduced both a schema migration and a data migration.
They introduced a counter cache for an association to cache the number of BsRequestAction a BsRequest has.

The cache count defaulted to 0 in our schema migration, however, the code assumed that every BsRequest has
at least one or more BsRequestAction, what made the application to crash because we did not consider this in our deployment.

## Resolution

We ran the data migration which recalculated the number of BsRequestAction for every BsRequest.

## Lessons Learned

Deploying code that immediately depends on the completion of a data migration should receive special attention: planning deployments during a maintenance window and being aware of the size of affected tables.

## Timeline (All Time in UTC)

- 2026-11-03 10:25: Started deployment of commit ac7108c317...5ddf74e398.
- 2026-11-03 10:27: Executed the included database schema migration.
- 2026-11-03 10:31: First application exceptions detected in the issue tracker.
- 2026-11-03 10:32: Data migration initiated.
- 2026-11-03 10:37: Incident officially declared.
- 2026-11-03 10:46: Stopped the running data migration under suspicion of causing the degradation.
- 2026-11-03 11:20: Root cause identified: data state mismatch with the newly deployed codebase.
- 2026-11-03 11:26: Started mitigation by executing an adjusted data migration manually.
- 2026-11-03 11:36: Mitigation took effect; application crashes ceased across the reference server.
- 2026-11-03 11:45: Corrective migration completed fully; incident resolved.
