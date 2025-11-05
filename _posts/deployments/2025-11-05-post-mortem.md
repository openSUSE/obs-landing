---
layout: post
title: "Severe Service Degradation: OBS Unreliable/Unavailable"
category: deployments
author: Lukas Krause
---

There was a service degradation of our reference server.

<!--
  What happened, for how long and who was impacted by it?
  For customers to be able to identify if their problem is related to this post-mortem or not.
-->

The response time of the build.o.o frontend started to increase at 13:35 UTC and reached critical levels around 13:55 UTC (reaching levels of 4 seconds and more on average).
At 14:05 UTC we started to reach the maximum amount of passenger instances (150), and therefore couldn't spawn new one's.
This led to the situation that new incoming requests couldn't be answered and were dropped.

This state lasted until 16:05 UTC. In total the service was slow and partially unresponsive for 2h 10m.

## Detection
<!--
  How did we get alerted that the problem happened?
  To demonstrate to customers how we are (hopefully automatically) alerted about problems.
-->

We received an alert from our monitoring suite about degraded backend performance at 13:55 UTC.
Shortly after we received more alerts about heavy memory usage and approaching the maximum amount of passenger instances.

## Root Cause
<!--
  What was it and what triggered it?
  For customers and community to understand what happened technically.
-->

The root cause was a build service submit request with more than 6000 actions associated and the attempt to render it.
The redesign of the request workflow introduced a summary chart for the build results of a build service request.
This chart asynchronously refreshed itself (in an open browser session) every minute and fetches the latest build results from the backend.
Since the amount of actions associated with this build service request was extremely high, the backend was never able to finish the calculation of the build results and to answer the request.
This kept the passenger instance that performed the call open waiting.
Since the automatic refresh was in place, another request followed asking for the build results again (spawning another passenger instance, again waiting for the answer from the backend).
This was repeatedly performed every minute. Each of those passenger instances, kept blocking a slot on the backend side.
Soon more than half (about 82) of the maximum amount of possible passenger instances were occupied just by one person/browser session attempting to render this build service request (with the build results summary chart).
Since each of those requests blocked a slot on the backend, the response time there also slowed down drastically, which made the leftover passenger instances wait as well.


## Resolution
<!--
  How did you resolve or work around this problem?
  For customers and community to understand what happened technically.
-->

We applied a monkey patch to stop serving anything for this particular build service request and restarted (switched to maintenance mode for ~2 minutes) the server to free up the blocked passenger instances and to stop the requests to the backend produced by those.

### Action Items

<!--
  Are there any actions we are going to do that are not done yet?
  For customers and community to be able to follow up on this.
-->

We are tracking the open action items for this particular issue in a [trello card](https://trello.com/c/qVBWuNrS/367-build-results-for-very-large-requests).

The following action items are already completed:

- Do not allow loading of the build result summary chart for anonymous users.
- Do not show the build results and build result summary chart if the build service request exceeds 300 actions.
- Removal of the auto refresh for the build result summary chart.

## Lessons Learned
<!--
  Describe what went well, what went wrong and where we go lucky during the resolution of this problem.
-->

We have to work out sensible limits for build service requests and potentially other areas.
We simply can not serve all the build results at once for a build service request with +6000 associated actions.
We have to be more careful about the scale of those workflows in the future and prevent it from happening.


## Timeline (All Time in UTC)

* 2025-10-29 13:55 Received the first alert about slow response times on the backend.
* 2025-10-29 14:05 Communcicated the degraded performance to our users on the usual channels.
* 2025-10-29 14:11 Incident announced to the team and further investigation was started.
* 2025-10-29 14:45 We identified some IP addresses creating requests to the backend, potentially slowing it down.
* 2025-10-29 15:05 We blocked the IP addresses (and one user account) in doubt. We did not detect much of an improvement and continued investigating.
* 2025-10-29 15:23 Preventively reloaded the passenger service.
* 2025-10-29 15:48 Started to work out a monkey patch to prevent expensive calls to the `chart_build_results` route for one build service request.
* 2025-10-29 15:52 Applied the monkey patch to production.
* 2025-10-29 16:03 We put build.o.o into maintenance mode to cut all ongoing connections and give the backend a short moment to recover.
* 2025-10-29 16:05 We brough back build.o.o from maintenance mode.
* 2025-10-29 16:16 After observing the recovery of the system we communicated the incident as resolved.
