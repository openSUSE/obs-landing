---
layout: post
title: "Open Build Service Service Disruption"
category: deployments
author: Saray Cabrera
---

The Open Build Service (OBS) experienced a service disruption.

Last Monday, December 1st, immediately following a deployment, OBS was inoperative for about 35 minutes. All OBS users were affected, and build.opensuse.org returned to normal operation around 12:30 UTC.

We want to give you some insight into what happened and what steps we are taking to prevent similar problems in the future.

## Detection

An error was raised during the deployment process and we could immediately confirm that build.opensuse.org was inoperative, on Maintenance Mode.

The Buildops team warned that the problem might be related to Webrick, as similar issues had occurred on the test machine (obs-devel) and had been fixed manually a few days prior.

## Root Cause

The root cause was an incompatibility between Ruby gem versions. The deployed changes included an update for the Webrick Ruby gem to version 1.9.2 (specified in the Gemfile). However, the gem was already installed on the server with version 1.9.1 (which Passenger requires to be installed system-wide).

The Passenger log (`/var/log/apache2/passenger_log`) contained a clear error message:

```
App 21258 output: Error: The application encountered the following error: You have already activated webrick 1.9.1, but your Gemfile requires webrick 1.9.2. Prepending `bundle exec` to your command may solve this. (Gem::LoadError)
```

## Resolution

Updating the system gem version resolved the problem:

```
zypper in ruby3.4-rubygem-webrick-1.9.2
```

### Action Items

Set alerts on the test machine (obs-devel) to help us catch up failed deployments as soon as possible.

## Lessons Learned

- We need a reliable test/staging instance and to be alerted immediately as soon as a deployment fails on it.
- We need to improve the communication between teams, especially following manual intervention.

## Timeline (All Time in UTC)

- 2025-12-01 11:55: Deployment with an error raised.
- 2025-12-01 11:57: Confirmed OBS was in Maintenance Mode.
- 2025-12-01 12:22: Buildops team warns the issue might be related to Webrick, citing similar issues in obs-devel.
- 2025-12-01 12:28: Ran `zypper in ruby3.4-rubygem-webrick-1.9.2` in production.
- 2025-12-01 12:30: OBS is back online.
