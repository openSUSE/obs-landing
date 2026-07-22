---
layout: post
title: "Post-mortem: Backend overloaded by interconnect traffic"
category: deployments
author: the OBS Team
---

On July 15th, the Open Build Service (OBS) experienced a service degradation.

**Impact:** The OBS service became overloaded and eventually stopped responding, leaving users unable to use it.

## Detection

The issue first generated alerts at 15:08, and it was reported to the team at 15:10. Shortly after, we observed a high load on the service coming through the `/public` endpoints (interconnect).

## Root Cause

A low-level release led to a large amount of interconnect traffic which, combined with a large amount of authenticated traffic hitting the `/public` endpoints, saturated the backend capabilities until it stopped responding.

## Resolution

Once the source of the excessive load was identified, we brought the backend back to a responsive state and traffic returned to normal levels.

## Lessons Learned

* Low-level releases can generate a disproportionate amount of interconnect traffic.

## Timeline (All Time in UTC)

- 2026-07-15 15:10: Incident reported to the team.
- 2026-07-15 15:20: High load observed on the backend coming through the `/public` endpoints (interconnect).
- 2026-07-15 15:44: The backend stopped responding due to the high load coming through the interconnect.
- 2026-07-15 16:05: Identified that a low-level release led to a large amount of interconnect traffic, along with a large amount of authenticated traffic, that saturated the backend capabilities.
- 2026-07-15 16:16: Incident resolved.
