---
layout: post
title: "Post-mortem: Database Cluster Crashes"
category: deployments
---

## Downtime in the noon hours of 18th of August


**Date**: 18.08.2023

**Impact**: build.opensuse.org experienced a downtime of 50 minutes.

**Root Causes**: OBS went into maintenance mode as the database cluster became unresponsive due to broken indices on the reviews table.

**Trigger**: TODO

**Resolution**: Restoring the indices on the review table.

**Detection**: We got notified through alerts coming from our monitoring. Our exception tracker
showed a lot of exceptions related to failing attempts trying to establish a connection to the database.

## Lessons Learned

**What went well?**

* We learned about the database crash soon after it happened.

**What went wrong?**

* TODO

**Where we got lucky?**

* Only one table was affected.
* Our database admins where around to help us in getting the database back to usable state.

## Timeline (CEST)

- *12:18* Alerts started firing
- *12:23* We declared the incident
- *12:25* We informed the DB cluster admins and they started the recovery
- *12:27* We informed users on matrix
- *12:31* We informed users on slack
- *12:36* We turned services off completely (delayed jobs and the apache server)
- *12:37* We informed users via https://status.opensuse.org/
- *12:40* We informed users on IRC
- *12:57* The DB cluster problem was resolved
- *12:58* The services were back
- *12:59* We informed users on IRC & slack
- *13:02* We informed users on matrix
- *13:06* We declared the incident resolved
