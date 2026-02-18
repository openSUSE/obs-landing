---
layout: post
title: "Post-mortem: Service Degradation in OBS"
category: deployments
author: the OBS Team
---

Between February 15th and 18th, the Open Build Service (OBS) experienced intermittent service degradations.

Users experienced sporadic latency across various workflows (with delayed jobs involved), leading to periods of total service unavailability for most users.

Those were the consequences of a huge traffic spike. We want to give you some insight into what happened and what we plan to do to handle similar circumstances in the future more efficiently.

## Detection

The dashboards on BuildOps monitoring system showed how delayed jobs were piling up over the weekend.
Some users reported that the `changes` tab on the request pages was taking too long to load.
Our monitoring system also alerted about increased traffic and hence a decrease in performance.

## Root Cause

After our investigations, we conclude that there was a high volume of HTTP requests to our servers from a certain range of IPs during those days.

Firstly, the only symptom was the long-lasting delayed jobs, especially `BsRequestActionWebuiInfosJob` on the `quick` queue. However, at some point, the traffic was so high that it reached the limit of Passenger instances and the whole service became unavailable.

## Resolution

We blocked multiple IP address ranges in one of our firewalls.

### Action Items

- Improve response time for identifying and blocking sources by introducing alerts for "abnormal" (not only "fatal") amounts of traffic, and about the delayed job wait time / queue size.
- Introducing traffic prioritization. For example, giving the `BsRequestActionWebuiInfosJob` that are scheduled by authenticated users higher priority in the queue. They should have more priority than legitimate bots (search engines, AIs, etc.) and, of course, illegitimate bots to fill the queue.
- Moving `SyncUpstreamPackageVersionJob` out of the `quick` queue.

## Lessons Learned

Early detection and action is key to avoid service disruption.

## Timeline (All Time in UTC)

- 2026-02-15 10:24 BuildOps informed about delayed jobs piling up
- 2026-02-16 11:10 Started investigations to detect the delayed jobs involved
- 2026-02-16 14:10 Setting up to 3 extra `quick` queues
- 2026-02-16 14:21 Decided to wait until the next day to evaluate the impact
- 2026-02-17 10:02 Setting up to 9 `quick` queues
- 2026-02-17 12:42 Received alerts from our monitoring system
- 2026-02-17 13:08 Investigation led us to a bot that sent a high volume of HTTP requests, from hundreds of different IP addresses, in a short period of time. A.K.A. DDOS
- 2026-02-17 13:13 Gathered the responsible IP addresses in order to block them
- 2026-02-17 13:27 MR opened for our salt repository to indicate the IP range involved
- 2026-02-17 13:38 MR merged and new firewall rules deployed
- 2026-02-17 14:06 The volume of traffic started to settle
- 2026-02-17 14:35 Volume of traffic went back to normal levels. Incident resolved
- 2026-02-18 10:36 Tracked up to 30K BsRequestActionWebuiInfosJob in the quick queue. Those jobs were cleared
