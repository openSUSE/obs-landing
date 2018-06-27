---
layout: post
title: "Post-mortem: Downtime on June 27, 2018"
category: deployments
---

After today's deployment we faced a downtime of our reference server. We want to give you some insight into what happened.

## What happend?

At **10:37** we deployed a new version of OBS in our instance.
The deployment was very fast (taking as reference the previous deployments) and that was strange.
So we checked that the status of the deployed version was correct and after that, we looked into our services.
DelayedJob service status was "fail".
We tried to restart it, but it failed again.
Then we decided to kill the orphan processes of DelayedJob and restart the service again.
Sadly, it still failed.
Looking at the message error of systemctl status, using `journalctl -xe`, we realized that the issue was produced by a rake task that was trying to load rubocop in production.
Once we fixed that and killed again all the orphan processes, DelayedJob was up again.

After this issue got solved Dimstar reported a problem with obs_factory, that was easy to solve.

## Why did it happen?

Regarding the delayed job the issue happened in the last deployment.
We didn't realize that there was a problem because we didn't check it and nothing was reported to errbit.

Respect to obs_factory the issue was that we integrated it in OBS without tests and we started refactoring it without adding tests for the touched code.

## How are we going to do better in the future?

Try to write test before refactoring code and check DelayedJob service after each deployment.
