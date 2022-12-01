---
layout: post
title: "Post-mortem: Downtime on November 30, 2022"
category: deployments
---

After yesterday’s deployment, we faced a downtime on our [reference server](https://build.opensuse.org).
We want to share with you a detailed explanation of what happened.

## Impact

Our [reference server](https://build.opensuse.org) was offline for 13 minutes.
The application responded to every request with a maintenance message. No one
was able to work with the API or user interface during that time.

## Root Causes

After deploying changes to production the application could not load some of our
Ruby gems anymore and exited with the message:

```bash
bundler: failed to load command: rails (/usr/lib64/obs-api/ruby/3.1.0/bin/rails)
/usr/lib64/ruby/3.1.0/bundler/definition.rb:481:in `materialize':
Could not find mysql2-0.5.4, nokogiri-1.13.9, yajl-ruby-1.4.3, haml-6.0.12,
redcarpet-3.5.1, xmlhash-1.3.8, bcrypt-3.1.18, bigdecimal-3.1.2, ruby-ldap-0.9.20,
rbtree3-0.7.0, ffi-1.15.5, nio4r-2.5.8, websocket-driver-0.7.5,
rbtree-0.4.5 in any of the sources
```

This was caused by a change in the recent [Ruby 3.1.3 update](https://www.ruby-lang.org/en/news/2022/11/24/ruby-3-1-3-released/)
around [Linux OS version detection](https://github.com/rubygems/rubygems/commit/9eead86abc268408b84bfc0dfa56cace40e9cefc). This
practically changed the location of Rubygem C extensions *on disk* from `extensions/x86_64-linux` to `extensions/x86_64-linux-gnu`.
Which made it impossible for bundler to load *any* gem with C extensions without rebuilding them to get their extensions "moved"
to the new location.

We did not expect this to happen, especially not in a minor Ruby update, neither where we really aware of this change.
So we did not deploy application changes and ruby update together.

## Trigger

Deploying changes to production.

## Detection

Our deployment responded with errors. We received alerts from our monitoring system and were informed by our users via different channels.

## Resolution

Deploying the ruby update.

## Action Items

- [ ] Change the deployment to warn us if other package updates are pending
- [ ] Change the deployment to apply all package updates we are confident about together

## Lessons Learned

Whenever there is a problem with the staging environment take extra care about the next deployment. Feel confident but double check.

### What Went Well?

Collaboration among the team to resolve the issue.

### What Went Wrong?

We ran into the same problem while deploying our staging instance a day before. Sadly we just recently changed the deployment method
on that host so we shrugged off those errors to this.

### Where We Got Lucky

No permanent damage or data loss.

## Timeline (times in UTC)

- 09:49 Start of the deployment
- 09:50 We noticed that the deployment failed
- 10:00 We noticed pending package updates, including the ruby stack
- 10:02 Deploy the pending package updates
- 10:03 Restart the affected services: `systemctl restart obs-api-support.target`, OBS is back
