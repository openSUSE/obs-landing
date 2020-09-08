---
layout: post
title: "Post-Mortem: Search Unavailable on September 3, 2020"
category: deployments
author: Dany and Henne
---

There was a severe service degradation of our [reference server](https://build.opensuse.org). We want to give you some insight into what happened.

End of August we fixed an issue with our search indexes that required us to rebuild them. We did so and everything was running fine. Then on September 3rd we noticed after a deployment that the search service did not start successfully. During our attempt to mitigate this, we destroyed the search indexes, which lead to this service degradation.

## Impact

The search was unavailable for 13 minutes. User visible errors also happened whenever projects and packages where created/updated due to a tight integration of those object with the search engine. Once the search service was back, we only provided partial search results for some hours.

## Root Causes

To fix issue [#9436](https://github.com/openSUSE/open-build-service/issues/9436) we rebuilt our search indices at the end of August. Unfortunately we ran this command not as the usual user we run our `searchd` service with so it created
a process and files belonging to another user.

## Trigger

After deploying on September 3, 2020 at 13:57 (CEST), we noticed that the `searchd` `systemd` unit couldn't restart.
Restarting the unit always failed to bind to localhost. While trying to mitigate this, we removed the search indices because they had wrong ownership and we wanted to start fresh. This caused the `searchd` service to fail, which took Project/Package writes with it.

## Resolution

After a while we noticed that there was a `searchd` process running that was not controlled by `systemd`. It was running as the user we re-indexed with in August. We stopped the `searchd` gracefully to have all remnants from the previous process removed. And then used the `systemd` unit to start the `searchd` properly.

Afterward we had to rebuilt the search indices, but this time, as the right user in the context of our application.

## Detection

We got errors about the search being down in our errors tracker.

## Action Items

- Running `bundle`, `rails` and `rake` should do nothing besides emitting a warning on how to run those commands as the right user in the context of our application. We already implemented that now.
- [Prevent errors from ActiveRecord callbacks when Sphinx's daemon is down](https://trello.com/c/AXOe6AGO/2022-prevent-errors-when-sphinxs-daemon-is-down)

## Lessons Learned

### What Went Well

We were quickly aware of the issue with the help of our errors tracker.

### What Went Wrong

We don't guard ourselves against running "standard" Ruby on Rails commands in production as the wrong user. Our monitoring for the `searchd` service is not sophisticated enough. And the integration of the ActiveRecord callbacks and `searchd` is too fragile.

### Where We Got Lucky

The issue was quite severe, but not the whole application went down with it.

## Timeline (times in CEST)

- **2020-08-27 08:09**: We rebuild the search indices as the wrong user
- **2020-08-27** to **2020-09-03** Everything was seemingly working fine. However, the `searchd` `systemd` unit was failing. Which we don't monitor, we only monitor for the existence of a process named `searchd`
- **2020-09-03 13:57**: We ran a deployment
- **13:59**: We notice that the `systemd` service of the search failed to start
- **14:00**: We notice a dangling `searchd` process
- **14:25**: We create a PID file in an attempt to have the `systemd` service manage the dangling process
- **14:34**: We notice wrong file permissions on the search indices and a message about this in the `searchd` logs
- **14:40**: In an desperate attempt, we remove the indices. **The search is down**
- **14:47**: We start the `searchd` process as user root, **the search is no longer down**
- **14:57**: We stop the `searchd` process gracefully, which briefly degrades the service again
- **14:57**: We start the `searchd` using `systemd` again. It can now start without any issue
- **15:06**: We start re-indexing the search
- **20:30**: The search indices are up-to-date
