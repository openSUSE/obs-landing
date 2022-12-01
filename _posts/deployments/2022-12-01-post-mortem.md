---
layout: post
title: "Post-mortem: Downtime on November 30, 2022"
category: deployments
---

After yesterday’s deployment, we faced a downtime on our [reference server](https://build.opensuse.org).
We want to share with you a detailed explanation of what happened.

## Impact

Our [reference server](https://build.opensuse.org) was offline for 13 minutes starting at 09:50 (CEST).
Our instance responded to every request with a maintenance message.
No one was able to work with the API or user interface during that time.


## Root Causes

Around **09:49** (CEST), we ran a deployment.
The script used to run the deployment alerted us that the deployment finished with an error.
From that time on, our instance responded to every request with a maintenance message.
We noticed that this was caused by an upgrade of our obs-api package without upgrading other required packages, related to the ruby package update.
At 10:02 (CEST) we installed the missing packages and restarted the services affected.
Our reference server was back to normal at 10:03 (CEST).


## Trigger

Deploying changes to production.


## Detection

The script used to run the deployment responded with errors.
We received alerts from our monitoring system and were informed by our users via different channels.


## Resolution

Updating the ruby packages.


## Action Items

- The script used to deploy will be improved to alert when other packages need to be updated, not only the `obs-api` package.


## Lessons Learned

### What Went Well?

Collaboration among the team to resolve the issue.


### What Went Wrong?

- The test instance already had the updates applied, automatically, without reporting any error.
  There was an excess of confidence about not having any problem deploying in production, if there wasn't any problem in the test instance.


### Where We Got Lucky

No permanent damage or data loss.


## Timeline (times in UTC)

- 09:49 Start the deployment which isn't successful.
- 09:50 Notice that the deployment failed.
- 10:02 Update the needed packages in the system: `zypper up -r OBS:Server:Unstable`.
- 10:03 Restart the affected services: `systemctl restart obs-api-support.target`. OBS is back.
