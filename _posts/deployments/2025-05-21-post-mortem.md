---
layout: post
title: "Downtime of OBS on 21. May 2025"
category: deployments
---

There was a downtime of our reference server.

After a deployment of build.opensuse.org on Wednesday, 21. May at 11:51 UTC,
OBS started encountering authorization errors.

We want to give you some insight into what happened and what we are doing to
avoid similar problems in the future.

## Detection
We noticed OBS showed 403 errors on form submissions.

## Root Cause
The root cause was the update to Rack 3.

## Resolution
We manually reverted the update and restored the service back to working order

## Lessons Learned
- Test major dependency updates in build-test.opensuse.org before deployment to build.opensuse.org
- Make sure that the dependencies are compatible with other dependencies in production

## Timeline (All Time in UTC)

* 11:51 We deployed a new version of rack, among other things, into production.
* 12:10 We realized that OBS experiences problems submitting forms and throws 403
* 13:10 We meet to resolve the issue and started to revert an recent update of the rack gem that seems to cause the problem
* 13:18 We look back in the deployment history to double check if other changes could cause the issues we currently face
* 13:22 We put build.o.o into maintenance mode since we observed random user got assigned to requests in the production log files
* 13:25 We communicate with build ops to check if changes to the login proxy happend
* 13:39 Removed an old dangling package of rack from production which did not had an effect
* 13:50 We start to trigger a build to get back the package of rack 2.2 which was used prior the update in order to rollback
* 14:00 Deployment of the dowgrade performed
* 14:03 Double checking that this resolved the issue
* 14:05 Dowgrade was successful, and resolved the incident
