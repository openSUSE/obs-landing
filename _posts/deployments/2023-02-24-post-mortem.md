--- 
layout: post
title: "Post-mortem: Downtime on February 23, 2023"
category: deployments
--- 

Some maintenance operations plus a missing configuration rollback caused a 20 minutes 
certificate error on our [reference server](https://build.opensuse.org).

In the lines below you will find a detailed explanation of what happened.

## Impact

Our [reference server](https://build.opensuse.org) was providing an wrong/ outdated 
certificate for around 20 minutes. As result, no one was able to work with the API 
or web interface during that time. 

## Root Causes

It is common to perform updating operations in our systems during maintenance windows 
(Thursdays 8AM - 10AM CET/CEST).

But this time, a planned improvement of our Salt deployment together with a missed 
configuration rollback from the debugging of the 
[Downtime on January 5](https://openbuildservice.org/2023/01/05/post-mortem/) lead to 
a system, that could not deliver the requested pages any longer

Switching over to the secondary system did not work as intended, as the keepalived 
service on this backup system was not started and could not take over the external 
IP addresses from the broken system. 

## Trigger

- Changing the dehydrated configuration from a manual deployed configuration to 
  a setup that is completely generated and deployed via Salt
- Missing fallback capabilities because of disabled service on the backup
  node

## Detection

The team detected directly that the post-run hook of dehydrated went wrong and 
the webserver was unable to start afterward. While checking the 
deployment scripts, the team noticed that the secondary node did not take 
over as expected - and needed to check for the root cause there as well. 

## Resolution

- Fixing the missing/wrong parts in the post-run hook script of dehydrated and 
  also adjust some filesystem ACLs fixed the problem with the certificates.
- Re-enabling keepalived on the secondary node fixed the failover. 

## Action items

- [x]  Check and fix the Salt profile for dehydrated
- [x]  Always run a 'Salt highstate' once a machine gets included in the production 
       workload again.

## Lessons learned

- Our test environment did not cover the dehydrated setup, as we are using Let's 
  encrypt to request public certificates for the production environment. While 
  our internal step-ca provides a similar workflow to request certificates, this 
  is currently not included in the normal deployment tests and should be fixed mid-term.<br>
  The problem here is that we need some (fake) DNS entries plus the availability of 
  step-ca inside the test environment, which need some time to setup and configure 
  properly. A short-term solution is therefor not possible. 
- Leaving the secondary machine in debugging state was a human error. Usually, we 
  do an explicit highstate on such machines to get them in a well defined state 
  after debugging a problem. We changed the maintenance workflow (scripts) now to 
  execute a Salt highstate at the end of installing updates automatically. 

## What Went Well?

The team quickly realized the broken certificate and was working closely together 
to solve the problem from different angles.

## What Went Wrong?

- Not running highstate on all machines after the last downtime 

## Where We Got Lucky

- Directly getting aware of the problem.

## Timeline (times in UTC)

- 10:00 started to deploy the new Salt setup
- 10:05 noticed a problem with the webserver on the main login-proxy
- 10:06 checking the failover machine 
- 10:10 found the issue on the failover machine and started keepalived again
- 10:20 found the issue on the main machine and fixed the scripts and filesystem ACLs
- 10:25 final rollout of the fixed scripts and rollback of the services to the main machine

