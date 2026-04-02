---
layout: post
title: New Version Tracking through API and Automatic Labeling
category: development
---

Building on our recent enhancements to Foster Collaboration, we are excited to introduce our latest updates, including automatic version labeling, handling package versions through API, and more.

These updates are part of the `Foster Collaboration` beta program. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}

### Adding Labels Automatically
Package tracking is now more intuitive with the introduction of automatic status labels. To help you monitor your packages at a glance,
OBS automatically adds one of these three new labels (Outdated, Up to Date, and No Upstream) which instantly communicate the current state of the package.

<figure>
  <img src="/images/posts/2026-03-03/labels.png" alt="Screenshot of the labels" />
  <figcaption>Labels for Package Version</figcaption>
</figure>

### Package Versions on API
To give you more control, a new view value, `view=versions`, is now available to fetch the local and upstream version status for every package in a project.
Check out the documentation [here](https://api.opensuse.org/apidocs/index#/Sources%20-%20Projects/get_source__project_name__view_info) for integration details.

### Notifications Filter
To complement the new version update notifications, we’ve added a dedicated filter to the notifications UI. This allows you to quickly isolate version-specific
alerts from your general activity.

<figure>
  <img src="/images/posts/2026-03-03/version-notification-filter.png" alt="Notification Filter" />
  <figcaption>Notification Filter for PAckage Version Update</figcaption>
</figure>


### Information About Last Synced
In addition to the labels, packages now display when they were last synced. This shows exactly when the upstream version was fetched from release monitoring for that specific package.

<figure>
  <img src="/images/posts/2026-03-03/upstream_version_info.png" alt="Upstream version last fetched" />
  <figcaption>Upstream Version Last Fetched</figcaption>
</figure>

