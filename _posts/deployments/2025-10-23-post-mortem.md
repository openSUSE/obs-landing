---
layout: post
title: "Severe Service Degradation: OBS Unreliable/Unavailable"
category: deployments
author: Henne Vogelsang <hvogel@suse.com>
---

There was a service degradation of our reference server.

<!--
  What happened, for how long and who was impacted by it?
  For customers to be able to identify if their problem is related to this post-mortem or not.
-->

On Wednesday, October 15 from 05:00 in the morning, the response time of OBS was slow for anyone trying to use the server and in many cases connections were even dropped completely. Additionally at 14:10 UTC,
the service went offline for a period of 84 minutes.

build.opensuse.org was back to normal operation at 15:37 UTC, so users were impacted by this during roughly 10.5 hours.

We want to give you some insight into what happened and what we are doing to avoid similar problems in the future.

## Detection
<!--
  How did we get alerted that the problem happened?
  To demonstrate to customers how we are (hopefully automatically) alerted about problems.
-->

Our [monitoring system](https://obs-measure.opensuse.org/) alerted us about increased traffic, high failure rates and unavailable services automatically.

## Root Cause
<!--
  What was it and what triggered it?
  For customers and community to understand what happened technically.
-->

Yet another malicious (AI?) bot crawling OBS resources and us failing to handle this traffic somehow. The downtime was caused by a failure in our firewall configuration, apparently firewalld/nftables does not like if you have overlapping IP ranges.

## Resolution
<!--
  How did you resolve or work around this problem?
  For customers and community to understand what happened technically.
-->

- We blocked another 85 IP ranges that we saw illegitimate traffic from.
- We fixed our firewall config and wrote test to make sure we don't deploy overlapping IP ranges.

### Action Items

<!--
  Are there any actions we are going to do that are not done yet?
  For customers and community to be able to follow up on this.
-->

Scaling OBS is since a while an ongoing effort for us. We are working on figuring out which of the classic scaling topics are useful for us.

- scale up (more hardware)
- scale out (more nodes + load balance)
- caching
- optimizing performance

But also mending the symptoms by introducing traffic prioritization or and "blocking" illegitimate traffic by rate limiting, proof-of-work/javascript gating ([berghain](https://github.com/DropMorePackets/berghain)) and in general getting faster at identifying and blocking sources.

## Lessons Learned
<!--
  Describe what went well, what went wrong and where we go lucky during the resolution of this problem.
-->

- We need to put more effort into scaling and handling illegitimate traffic.

## Timeline (All Time in UTC)

- 2025-10-15 05:00 The system started to experience increased traffic on certain OBS routes (requests)
- 2025-10-15 09:37 First alerts about earlyoom killing processes arrive
- 2025-10-15 09:54 The team starts to investigate the source of the traffic
- 2025-10-15 10:05 The team identifies a specific cloud via IP ranges and starts gathering data
- 2025-10-15 10:41 We issue a first warning about potential problems ahead to users
- 2025-10-15 10:43 As this is over 1.5K individual IPs we start gathering methods to block all IP ranges from the cloud
- 2025-10-15 13:00 First alerts about general memory consumption arrive, some OBS threads and support processes get killed by earlyoom
- 2025-10-15 14:01 We finally identified all subnets from which we've seen traffic with the help of https://www.openrdap.org/
- 2025-10-15 14:10 We block all subnets we have seen illegitimate traffic from
- 2025-10-15 14:13 Applying changes to (one of our) firewall(s) goes wrong and left OBS network unreachable
- 2025-10-15 15:02 We discover that firewalld/nftables does not like if you have overlapping IP ranges
- 2025-10-15 15:37 We fixed the firewall configuration, systems are back online