---
layout: post
title: "Post-mortem: Downtime on December 5, 2022"
category: deployments
---

After yesterday’s deployment, we faced a downtime on our [reference server](https://build.opensuse.org).
In the lines below you will find a detailed explanation of what happened.

## Impact

Our [reference server](https://build.opensuse.org) was offline for 20 minutes.
The application responded to every request with a maintenance message. No one
was able to work with the API or user interface during that time.

## Root Causes

After deploying changes to production the application could not load some of our
Ruby gems anymore and exited with the message:

```
/usr/lib64/obs-api/ruby/3.1.0/gems/zeitwerk-2.6.6/lib/zeitwerk/kernel.rb:38:in `require': cannot load such file -- mail/indifferent_hash (LoadError)
        from /usr/lib64/obs-api/ruby/3.1.0/gems/zeitwerk-2.6.6/lib/zeitwerk/kernel.rb:38:in `require'
        from /usr/lib64/obs-api/ruby/3.1.0/gems/mail-2.8.0/lib/mail.rb:14:in `<module:Mail>'
        from /usr/lib64/obs-api/ruby/3.1.0/gems/mail-2.8.0/lib/mail.rb:3:in `<top (required)>'
        from /usr/lib64/obs-api/ruby/3.1.0/gems/zeitwerk-2.6.6/lib/zeitwerk/kernel.rb:38:in `require'
        from /usr/lib64/obs-api/ruby/3.1.0/gems/zeitwerk-2.6.6/lib/zeitwerk/kernel.rb:38:in `require'
        from /usr/lib64/obs-api/ruby/3.1.0/gems/actionmailer-7.0.4/lib/action_mailer/base.rb:3:in `<top (required)>'
        from /usr/lib64/obs-api/ruby/3.1.0/gems/zeitwerk-2.6.6/lib/zeitwerk/kernel.rb:38:in `require'
        from /usr/lib64/obs-api/ruby/3.1.0/gems/zeitwerk-2.6.6/lib/zeitwerk/kernel.rb:38:in `require'
        from /srv/www/obs/api/app/mailers/admin_mailer.rb:1:in `<top (required)>'
```

This was caused by the update of the [mail](https://github.com/mikel/mail) gem to version 2.8.0.
The issue [1516](https://github.com/mikel/mail/issues/1516) also describes this problem.
It basically reports a file permission problem.

## Trigger

Deploying changes to production.

## Detection

Our deployment responded with errors. We received alerts from our monitoring system and were informed by our users via different channels.

## Resolution

We applied the workaround detailed in [a comment](https://github.com/mikel/mail/issues/1516#issuecomment-1336437018) of the same issue.

## Action Items

- [ ] Adapt the CI to warn us about failures like this one
- [ ] Introduce Blue/Green Deployments

## Lessons Learned

The staging environment should have been checked beforehand.

### What Went Well?

Collaboration among the team to resolve the issue.

### What Went Wrong?

Our CI didn't warn about any failure.
This happened because in the CI we use the same user for the installation of the gems and for booting the app.
Therefore, the files are readable by the file owner.

### Where We Got Lucky

* No permanent damage or data loss.
* The bug was already reported and analyzed upstream.

## Timeline (times in UTC)

- 09:49 Start of the deployment
- 09:50 We noticed that the deployment failed
- 09:52 We detected a problem with the recent update of the `mail` gem
- 10:05 We realized that [the issue](https://github.com/mikel/mail/issues/1516) is already reported upstream
- 10:06 A workaround was found in [a comment](https://github.com/mikel/mail/issues/1516#issuecomment-1336437018)
  of the same issue, related to fix file permissions, and was applied
- 10:11 Restart the affected services: `systemctl restart obs-api-support.target`, OBS is back
