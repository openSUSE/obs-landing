---
layout: post
title: "Post-Mortem: Search Unavailable on September 3, 2020"
category: deployments
---

The search of the <https://build.opensuse.org> OBS instance was unavailable for
13 minutes, outside of our maintenance window.  We want to give you some insight
into what happened.

- **Date**: 2020-09-03
- **Authors**: Dany and Henne

## Summary

After a deployment, the searchd process running on our server crashed after
we've attempted to fix an issue in how this process is tracked and monitored.
The search was unavailable for 13 minutes. Errors also happened whenever
updating projects and packages due to a tight integration with the search
engine.

## Impact

Nobody could search. Any code updating the search indices through callbacks
caused errors (500) while the search was down. Project and package pages were
affected by this. Once it was back, we had partial search results while we
reindexed the search.

## Root Causes

We rebuilt the search indices as root on August 27th, 2020 at 8:09 (CEST).

## Trigger

After deploying on September 3, 2020 at 13:57 (CEST), we noticed that the
systemd service for the search couldn't restart. We found out that the search
indices were created as root. This created files as root and the searchd process
couldn't be managed by its systemd service. We created a PID file for the
systemd service in an attempt to have the systemd service manage the process,
but it made the searchd process crash.

## Resolution

We had to restart the searchd process as root, then gracefully stop it to have
all remnants from the previous process removed. We then started the systemd
service for the search. We had to rebuilt the search indices, but this time, as
the right user in the context of our application.

## Detection

We got errors about the search being down in our errors tracker.

## Action Items

- Running `bundle`, `rails` and `rake` as root does nothing now, beside emitting
  a warning on how to run those commands as the right user in the context of our
  application.
- Prevent errors from callbacks when Sphinx's daemon is down: https://trello.com/c/AXOe6AGO/2022-prevent-errors-when-sphinxs-daemon-is-down

## Lessons Learned

### What Went Well

We were quickly aware of the issue with the help of our errors tracker.

### What Went Wrong

We weren't notified about the failure of systemd service for the search. This
prevented us from knowing that we made a mistake by indexing the search as root.
We also had to rebuild the search indices.

### Where We Got Lucky

The issue was quite severe, but not the whole application went down with it.

## Timeline (times in CEST)

- **2020-08-27 08:09**: We rebuild the search indices as root, which created files for search indices as root
- Everything was working
- **2020-09-03 13:57**: Deployment
- **13:59**: We notice that the systemd service of the search failed to start
- **14:00**: We notice a dangling searchd process
- **14:25**: We create a PID file in an attempt to have the systemd service
    manage the dangling process
- **14:34**: We notice wrong file permissions on the search indices. The searchd
    process crashes. **The search is down**
- **14:40**: We remove the files for the search indices
- **14:47**: We start the searchd process as root again, **the search is no longer down**
- **14:57**: We stop the searchd process gracefully
- **14:57**: We start the systemd service for the search. It can now start
    without any issue
- **15:06**: We start reindexing the search
- **20:30**: The search indices are up-to-date
