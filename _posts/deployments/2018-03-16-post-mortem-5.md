---
layout: post
title: "Post-mortem: Deployment on March 15, 2018"
category: deployments
---

During yesterday's deployment we faced some issues. We want to give you some insight into what happened.

### What, How, When and Why

At 15:10 we deployed and we realized that there were lots of exceptions on errbit with rpmlint_log because of a non-existent route.
The removed (changed) route was used in some javascript so it was not evident how to fix this easily with a routing helper.
When trying to revert the route change we introduced a syntax error which brought down the rails app around 15:40.
We realized and fixed the syntax error and brought up the application after a couple of minutes again.

Another deployment was done at 18:09 to fix the rpmlint error introduced in the previous deployment.
We thought that all was fixed but 30 minutes ago some users reported the Factory Dashboard broken.
DimStar / David pointed out that new introduced routes which are used globally need to go into the Factory Dashboard (separate project / repository).
We hot fixed the routes in the dashboard on production that running on same server as the frontend (OBS) and at 18:48 Factory Dashboard up again.


### How are we going to do better in the future?

Shit :hankey: (Syntax errors) happen, so we want only monkey patch serious issues that block people from working at all and
only doing monkey patches in pair programming.
We also have to think again how we can make our deployment cycle faster, it's too slow currently to get to a working package.
Looking to what happen with factory dashboard, we should figure out how to pull it into our CI cycle, but until that has happened
we need to take a closer look at it's state after our deployments.
