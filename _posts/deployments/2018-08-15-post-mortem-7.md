---
layout: post
title: "Post-mortem: Downtime on August 15, 2018"
category: deployments
---

After today's deployment we faced a downtime of our reference server. We want to give you some insight into what happened.

## What Happened?

At **10:10**, we deployed a new version to our reference server
build.opensuse.org. Right after the deployment, the application didn't boot
anymore and displayed our error page. We immediatly recognized that a change in
the configuration was causing the issues. After fixing the configuration, we
were back online at **10:13**.

## Why Did It Happen?

The deployed version contained changes to the configuration of our application.
The format in the `config/options.yml` file changed to group keys per
environment. In order to transition from the previous format to this one, we
need to run a Rake task (`migrate_options_yml`)

The changes were not backward compatible, so this is why it caused issues. We
documented this change in our release notes, which is intented to be used for
the stable releases. Therefore, it's not part of our daily deployment process.

## Other Side-Effects

The full crash of the application also caused a crash of the delayed jobs workers, which we use for asynchronous jobs. This was back online at **10:30**.

## How Are We Going to Do Better in the Future?

### Introduce Backward Compatible Changes

The changes were not backward compatible in the first batch of changes. Later
on, we discovered a way to be backward compatible which we missed in our review process.

We need to put more efforts into making our changes backward compatible. Always
make sure that such changes are really necessary.

### Faster Deployment Revert

We didn't fully address the faster deployment revert yet, because there were
issues like packaging the gem dependencies in dedicated packages. This is now
addressed with the introduction of the bundle_gems service. In our sprint
backlog, we have an epic `Robust Deployment` in which we track the steps to move
this forward.

### Better Documentation & Cleanup

To share documentation between the developers, we have two options here:
- MOTD
- Release Notes

We will discuss this more in our team's mailing list. For now, we use the MOTD
on our production instance to share important notices about patches for
deployments. However, we don't share other important information there.

We could also share anything related to the deployment (such as breaking
changes) in the MOTD or the Release Notes.
