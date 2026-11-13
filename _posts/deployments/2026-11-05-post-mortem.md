---
layout: post
title: "Post-mortem: Database Outage Caused by a Backlog of Delayed Jobs"
category: deployments
author: the OBS Team
---


On November 5th, the OBS experienced a service disruption. A large backlog of `BsRequestActionWebuiInfosJob` delayed jobs piled up in the queue, and the measures taken to work through it ended up overloading the database, which ran out of memory. As a result, the application was unable to connect to the database for roughly 40 minutes.

We want to share what happened, how we mitigated the failure, and the steps we are taking to avoid similar disruptions in the future.

## Detection

Our monitoring raised an alert about too many queued Passenger requests. Shortly afterwards, connections from the application servers to the database started failing.

## Root Cause

An unusually high number of `BsRequestActionWebuiInfosJob` jobs had accumulated in the delayed job queue. To process the backlog faster, the number of delayed job queues had been increased from 4 to 9.

The additional workers caused a significant increase in load and memory usage on the database server, which eventually ran out of memory (OOM). The resulting stream of failed connections caused MariaDB to block the application host entirely ("Host is blocked because of many connection errors"), so no new database connections could be established.

## Resolution

We first reduced the number of delayed job queues from 9 to 7 to lower the pressure on the database.
Restarting Passenger did not restore connectivity. Only after killing the last remaining Ruby process were the application servers able to connect to the database again.
Finally, we removed all pending jobs from the queue to prevent the backlog from overloading the database once more.

## Lessons Learned

Scaling up background workers to clear a backlog has a direct impact on the database. Any increase in the number of delayed job queues should take the database's capacity into account and be done gradually while watching its memory usage.

As follow-up actions, we will reduce the number of delayed job queues back to the original 5 and restart the affected services.

## Timeline (All Time in UTC)

- 2026-11-05 11:25: Received the first alert about too many queued Passenger requests.
- 2026-11-05 11:26: Incident officially declared.
- 2026-11-05 11:30: Reduced the number of delayed job queues from 9 to 7.
- 2026-11-05 11:44: Database connections failing; MariaDB blocked the application host due to too many connection errors.
- 2026-11-05 12:02: Restarted Passenger; database connectivity was not restored.
- 2026-11-05 12:03: Killed the last remaining Ruby process; database connections immediately recovered.
- 2026-11-05 12:05: Removed all jobs from the delayed job queue; incident resolved.
