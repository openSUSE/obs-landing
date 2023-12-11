---
layout: post
title: "Severe Service Degradation: OBS Unavailable"
category: deployments
---

There was a service degradation of our [reference server](https://build.opensuse.org/).

On December 7, 2023 for 35 minutes the response time of OBS was slow for anyone trying to use
the server and in many cases connections were even dropped completely with an error
message: "This website is under heavy load (queue full)".

We want to give you some insight into what happened and what we are doing to
avoid similar problems in the future.

## Detection

We got notified through automatic alerts coming from our monitoring. Additionally people
affected, used IRC to tell us about their problem.

## Root Cause

An unusual high amount of HTTP requests where made to the interconnect API and exhausted
our request queue. The majority of requests came from one such instance.

## Trigger

Whenever a major event (large drop of maintenance updates etc.) happens for openSUSE Leap and/or SUSE Linux
Enterprise distributions many OBS instances that connect to our reference server,
via the [interconnect feature](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.concepts#id-1.5.10.3.5),
start to schedule rebuilds against those changes.

## Resolution

We "just" weathered the storm for now and created follow up action items:

| Action Item | Owner |
|---          |---    |
| Review concurrency for interconnect requests | Backend Developer Team |
| Review project setups in SUSEs OBS to avoid unnecessary requests from this instance | Backend Developer Team |
| Long term: [Scaling Interconnect Feature #15348](https://github.com/openSUSE/open-build-service/issues/15348)| Developer Team|

## Lessons Learned

First and foremost: You don't have scaling problems until you have scaling problems!

**What went well?**

- Automatic alerts from our monitoring informed us about problems quickly

**What went wrong?**

* It took us too long to declare the incident
* We did no declare the incident resolved

**Where we got lucky?**

* Production logs included information where bulk requests were coming from and that OBS instance is under our control too.

## Timeline (CET)

- *12:52* We received alerts about [application performance](https://obs-measure.opensuse.org/d/1hfbqvOMz/apm-overview?orgId=1&viewPanel=31&from=1701947807530&to=1701952737355)
- *12:58* We realized from [our monitoring](https://obs-measure.opensuse.org/d/H_EK_qvGk/passenger?orgId=1&viewPanel=8&from=1701948004957&to=1701953478197) that we were dropping connections
- *13:01* People started to complain on our IRC support channel about dropped connections
- *13:05* The application performance went back to acceptable levels
- *13:15* We declared the incident
- *13:17* Our monitoring declared the alerts as resolved
