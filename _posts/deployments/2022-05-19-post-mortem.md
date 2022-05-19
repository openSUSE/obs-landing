---
layout: post
title: "Post-Mortem: Events Table Overflow on May 18, 2022"
category: deployments
author: Saray
---

There was a severe service degradation of our [reference server](https://build.opensuse.org). On 2022-05-18 the events system of OBS started to fail, causing problems in different areas of the application. We want to give you some insight into what happened.

## Impact

OBS users started to have issues when working on different areas of the application.

The issue was causing some data loss, so the team decided to switch the application to maintenance mode to stop loosing more data while working on the solution.

Our [reference server](https://build.opensuse.org) was offline for 16 minutes. No one was able to work with the API or user interface during that time. Other services depending on OBS (like [https://software.opensuse.org](https://software.opensuse.org)) were taken down by this as well.

The data we lost was about events. Some events were not stored in the database. Therefore, some emails were not sent, and OBS did not report back some results for SCM/CI integrations.

## Root Causes

The events table reached the maximum value possible for the id column. It overflowed and it was not possible to store new events on the table.

## Trigger

The number of events we generate daily is high, so the table reached the maximum value possible for the id column now.

## Detection

- OBS users started to report internal server errors via IRC channel.
- A colleague reported the increase of errors via Slack.
- Thousands of errors were tracked by the error tracking service.

## Resolution

We switched the application to maintenance mode while working on the solution.
We created and ran a database migration to change the id column type from integer to bigint in order to store a bigger amount of events.
We finally restarted the server.

## Action Items

- Disabling the relationship events subscriptions by default.
- Adding to the code base the migration we ran on the fly.
- Improving monitoring and alerts to be notified about these kinds of issues earlier.

## Lessons Learned

### What Went Well

Collaboration among the team to resolve this.
Communication from other colleagues and users to inform us about the issue.

### What Went Wrong

- Some events were not stored in the database. This caused some emails were not sent and OBS did not report back the result of some SCM/CI integrations with OBS.
- Our monitoring system did not alert us about the issue.

### Where We Got Lucky

The events table is cleaned up daily. Thanks to that, the migration was relatively quick.
And we were lucky that we did not lose data apart from the events.

## Timeline (times in UTC)

- 09:17 Users and colleagues start to report the issues via IRC and Slack.
- 09:26 The Build Solutions Team starts to tackle the issue.
- 09:40 We switch the application to maintenance mode.
- 09:51 Run the migration to extend the capacity of the id column in the events table (from integer to bigint).
- 09:56 Server is restarted and we inform the users.
