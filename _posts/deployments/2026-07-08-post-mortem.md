---
layout: post
title: "Post-mortem: Service under excessive load"
category: deployments
author: the OBS Team
---

On July 8th, the Open Build Service (OBS) experienced a service degradation.

**Impact:** Users weren't able to use service consistently, experiencing timeouts and general service degradation.

## Detection

The issue first generated alerts at 03:46 in the morning. The team learned about the issues following the alerts and user reports.

## Root Cause

Someone ran a [Distributed Denial of Service](https://en.wikipedia.org/wiki/Denial-of-service_attack) attack on our service.

## Resolution

We discovered a pattern in the malicious requests and applied limits to requests showing this pattern.

## Lessons Learned

* **Distributed** DoS means a reasonable amount of traffic from an unreasonable amount of distinct IPs
* Check the most resource heavy endpoints for signs of increased traffic, as it has the most potential for taking up instances

## Timeline (All Time in UTC)
- 2026-07-08 01:46: Alert reporting high number of app instances
- 2026-07-08 07:23: Users started to reported problems
- 2026-07-08 07:25: Incident announced
- 2026-07-08 07:37: DDoS identified
- 2026-07-08 07:59: Gathered up IPs ranges
- 2026-07-08 08:20: Forwarded IPs to buildops
- 2026-07-08 09:09: New block list deployed by buildops
- 2026-07-08 09:09: Block list rolled back due to useful IPs being included
- 2026-07-08 11:32: We identified a certain pattern in the malicious traffic and blocked requests that match this pattern
- 2026-07-08 11:50: Traffic started slowly going down
- 2026-07-08 12:15: Incident closed
