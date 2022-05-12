---
layout: post
title: "Post-Mortem: Conflict with ruby standard gems on May 10, 2022"
category: deployments
author: Lukas
---

There was a severe service degradation of our [reference server](https://build.opensuse.org). On 2022-05-10 a deployment of OBS failed and
led to a downtime. We want to give you some insight into what happened.

## Impact

build.opensuse.org was offline for 20 minutes. No one was able to work with the API or user interface. Services depending on OBS (like software.opensuse.org) where taken down by this too.

## Root Causes

After the update of the `strscan` ruby gem in our bundle, we had two `strscan` versions on our production installation. One provided by Ruby 3.1 stdlib (3.0.1) and one by our gem bundle (3.0.2). `bundler` itself requires `strscan` to function and loads from stdlib by default. During booting
`bundler` noticed the mismatch and wasn't able to spawn new instances of the application anymore.


```
Could not spawn process for application /srv/www/obs/api: The application encountered the
following error: You have already activated strscan 3.0.1, but your Gemfile requires strscan 3.0.2.
Since strscan is a default gem, you can either remove your dependency on it or try updating to a
newer version of bundler that supports strscan as a default gem. (Gem::LoadError)
```

## Trigger

Merging and deploying the `strscan` gem update.

## Detection

The deployment showed failures and we received alerts from our monitoring.

## Resolution

Setting back the version of `strscan` by monkey patching the version number defined
in the `Gemfile.lock` and restarting the server resolved the incident.

## Action Items

- Reverting the version update and deploying again. ✔️
- Pin the version of `strscan` until it's solved/released upstream in the bundler dependency [`psych`](https://github.com/ruby/psych/pull/534). ✔️
- Try if we can make our production and CI bundle setup more similar.

## Lessons Learned

### What Went Well

Collaboration among the team to resolve this.

### What Went Wrong

Our continuous integration cycle did not catch this as we are bundling differently on production. On CI we bundle to [`vendor/bundle`](https://github.com/openSUSE/open-build-service/blob/master/.circleci/conditional_config.yml#L69) on production we bundle to [`/usr/lib64/obs-api/`](https://github.com/openSUSE/open-build-service/blob/master/dist/obs-server.spec#L479). Apparently those paths lead to a different load order.

### Where We Got Lucky

No permanent damage or data loss.

## Timeline (times in UTC)

- 14:24 Started the deployment which wasn't successful.
- 14:26 We started to receive alerts.
- 14:28 We declared an incident and started to follow our [Incident Management Protocol](https://github.com/openSUSE/open-build-service/wiki/Incident-Management-Protocol).
- 14:31 Tried to turn it (apache) on and off again.
- 14:32 Detected the conflict of the gem versions in the log files.
- 14:41 Monkey patched the version of `strscan` from 3.0.2 back to 3.0.1 in the `Gemfile.lock`.
- 14:41 Restarted the server.
- 14:42 Alerts resolved itself.
