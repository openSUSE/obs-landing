---
layout: post
title: "Post-Mortem: Rack Gem Version Mismatch on May 31, 2022"
category: deployments
author: Saray
---

There was a severe service degradation of our [reference server](https://build.opensuse.org). On 2022-05-31 a deployment of OBS failed and led to a downtime. We want to give you some insight into what happened.

## Impact

Our [reference server](https://build.opensuse.org) was offline for 27 minutes. No one was able to work with the API or user interface during that time. Other services depending on OBS (like [https://software.opensuse.org](https://software.opensuse.org)) were taken down by this as well.

## Root Causes

Our deployment is based on the [passenger](https://www.phusionpassenger.com/) app server. We deploy this gem via an [RPM package](https://build.opensuse.org/package/show/OBS:Server:Unstable/rubygem-passenger) to the system. The `passenger` gem requires another ruby gem: `rack`. We deploy
this gem requirement to the system also via an [RPM package](https://build.opensuse.org/package/show/OBS:Server:Unstable/rubygem-rack).

Now to make things complicated, the OBS application also requires the ruby gem `rack` to function. We deploy the ruby gems the OBS application requires to an application-specific directory (`/usr/lib64/obs-api`).

If you have been paying attention to the [post mortem from beginning of this month](/2022/05/11/post-mortem/) you probably know where this is heading.

On the day before we deployed we updated the ruby gem `rack` in our bundle and in our OBS repository. Then we deployed the OBS application bundle. But we did not update the system ruby gem `rack`. Which lead to a mismatch of the rack version passenger loaded from the system (2.2.3) and the rack version the application needed for it's bundle (2.2.3.1). Can't have both versions loaded at the same time, so passenger was unable to boot the OBS application.

## Trigger

Deploying changes to production.

## Detection

The deployment showed failures, we received alerts from our monitoring system and users informed via different channels.

## Resolution

Updating the rack package (`zypper up ruby3.1-rubygem-rack`)

## Action Items

- Requiring a specific rack version in `obs-bundled-gems` again ([we removed this some time ago](https://github.com/openSUSE/open-build-service/commit/4d078f955b0c68d3753cd4fd293d0e7783fc5d41))
- Fix our long standing OPS TODO with [blue/green deployments](https://en.wikipedia.org/wiki/Blue-green_deployment)

## Lessons Learned

### What Went Well

Collaboration among the team to resolve this.

### What Went Wrong

We haven't resolved all the action items from the [`strscan` incident](https://openbuildservice.org/2022/05/11/post-mortem/#action-items) yet. Bringing the CI ruby gem setup closer to production maybe could have saved us.

There was a handover between operators on Monday (the day the changes got implemented) and Tuesday (the day the changes got deployed). This didn't go too well.

- On Monday evening we did not block the deployment / informed people even though we were aware of possible problems
- On Tuesday we deployed without checking in with the previous operator

### Where We Got Lucky

No permanent damage or data loss.

## Timeline (times in UTC)

- 08:33 Start the deployment which isn't successful.
- 08:35 Deployment failed.
- 08:36 Detect the server is down.
- 08:40 Receive alerts from our monitoring system.
- 08:44 We informed people on different channels.
- 08:51 Try to restart Apache.
- 08:55 See the message on the Passenger log:
        "You have already activated rack 2.2.3, but your Gemfile requires rack 2.2.3.1. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)"
- 08:58 Change the rack gem version on Gemfile.lock and restart Apache. We had the impression that the problem wasn't solved, but it was a matter of time.
- 09:01 Update the package in the system: `zypper up ruby3.1-rubygem-rack`.
- 09:02 Change back the rack gem version on Gemfile.lock and restarted Apache. OBS is back.
