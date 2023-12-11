---
layout: post
title: "Post-mortem: Backend Overload"
category: deployments
---

## OBS was unresponsive because of slow backend response on 7th of December


**Date**: 07.12.2023

**Impact**: Response time was longer than expected and in some cases, connections were dropped.

**Root Causes**: OBS response was slow as the backend was under heavy load because of too many interconnect requests from the IBS.

**Trigger**: Too many build requests from interconnect.

**Resolution**: Everything went back to normal after the build requests processed.

**Detection**: We got notified through alerts coming from our monitoring.

## Lessons Learned

**What went well?**

* We found the root cause and discussed to take precautions to minimize the chances of such overload in future.

**What went wrong?**

* We did not declare the incident soon enough and waited couple of minutes to get the system back in normal state.

**Where we got lucky?**

* Monitoring alerts were very helpful in realizing the backend load.
* Production logs made it clear where bulk requests were coming from.

## Timeline (CEST)

- *12:52* Alerts started firing
- *13:10* We made the announcement in IRC and #help-obs
- *13:13* We informed buildops about backend over load
- *13:19* We declared the incident resolved
- *13:22* We informed users on IRC
