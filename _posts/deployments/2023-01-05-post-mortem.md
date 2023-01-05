---
layout: post
title: "Post-mortem: Downtime on January 5, 2023"
category: deployments
---

Some maintenance operations caused a long downtime on our [reference server](https://build.opensuse.org).
In the lines below you will find a detailed explanation of what happened.

## Impact

Our [reference server](https://build.opensuse.org) was offline for around 2 hours.
The application responded with a maintenance message or with a 503 HTTP error (Service Unavailable).
No one was able to work with the API or web interface during that time.

## Root Causes

It is common to perform updating operations in our systems
during maintenance windows (Thursdays 8AM - 10AM CET/CEST).
But this time, a chain of issues happened during the process.

First of all, the update started after the maintenance window by mistake (wrongly assuming its end at 11AM).

One of the updated packages, `haproxy` included configuration changes, which were unexpected.

Switching over to the secondary HAproxy system did not help because the system's certificates were outdated.
The automated sync of renewed certificates stopped without prior notice.

Once the configuration files were adapted, the service kept down for a while because there was a "MAINTENANCE" flag left in the Apache configuration on another server, which went unnoticed. The flag let this other Apache show the maintenance page and not starting Passenger. Once the flag got removed, everything started working again.

## Trigger

- Updating the `haproxy` package in the reference server.

## Detection

Both the team and the customers detected the application was down.
Customers warned us through different communication channels.

## Resolution

Adjusting all the HAproxy configuration files, removing the maintainer mode flag in Apache and restarting the server.

## Action Items

- [ ] Discuss if a maintenance configuration block is a benefit or a problem.
- [ ] Review the synchronization of SSL certificates for the secondary proxies

## Lessons Learned

- Better analyze the consequences of running "zypper up", some upgrades need attention.
- Keep an eye on the secondary machines and their configurations. While we usually deploy everything with Salt, we missed the certificates for the secondary machines this time.
- If Passenger is started via Apache, the Passenger process will not start if Apache is reporting or having problems. Better check the whole Apache configuration twice, even if the daemon itself starts without visible problems.
- Expect the unexpected after a long vacation break.

### What Went Well?

The problem was detected right after the update and the people involved started to work on it immediately.

### What Went Wrong?

- Not double checking the consequences of the updates beforehand.
- Not having the second system's certificates up-to-date.
- Leaving an Apache flag on a machine that is usually not used with this flag.

### Where We Got Lucky

* No permanent damage.

## Timeline (times in UTC)

- 10:26 start zypper update
- 10:27 OBS is down
- 10:35 try to use the secondary HAproxy system without success
- 10:47 start adapting the configuration
- 11:27 debugging to guess why the server is not up again
- 12:18 remove the maintenance mode flag and restart the server
- 12:20 OBS is up again
