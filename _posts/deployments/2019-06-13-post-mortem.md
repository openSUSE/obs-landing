---
layout: post
title: "Post-mortem: Downtime on June 13, 2019"
category: deployments
---

After today’s deployment, we faced a downtime of our reference server for users in our beta program.
We want to give you some insight into what happened.

## Problems/Timeline
Around **09:50** (CEST), we ran a deployment. After the deployment finished, we noticed that some URLs
were responding fine (/about) while others did not and produced an exception. After looking into our
exception tracker, we noticed that this had something to do with how we run our beta program. Around
10:00, we monkey-patched the code path responsible to disable the beta program globally.

## What Went Wrong?
Yesterday, we introduced a change in how we decide which changes are in the beta program and which aren't
based on a configuration file (features.yml) by introducing a new setting. This configuration file is not
automatically updated by the deployment so it was missing the new setting which made the code-path crash.

## How Did We Fix It?
We made the code more robust in handling missing setting keys.

## How Do We Do Better in the Future?
This is the second time a change in the configuration file format has led to a downtime for us. We need
to be more rigorous in not accepting changes without tests in this area, even if the changes look simple.
