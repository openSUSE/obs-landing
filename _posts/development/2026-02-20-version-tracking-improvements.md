---
layout: post
title: Package Version Tracking Gains New Capabilities
category: development
---

Since we last tackled Version Tracking, we've been exploring several ways to enhance the feature. We implemented several improvements, including notifications about a new version (upstream) being available and user documentation, with even more coming over the next two weeks. Let's dive into what's live today.

These updates are part of the `Foster Collaboration` beta program. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}

### User Documentation for Version Tracking

Package Version Tracking is now covered in the [Open Build Service User Documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha-obs-versiontracking). This will help new users get up to speed with the feature more quickly.

<figure>
  <img src="/images/posts/2026-02-20/user-documentation.png" alt="Screenshot of the User Documentation" />
  <figcaption>User Documentation for Version Tracking</figcaption>
</figure>

### Filtering Packages by Version State

You can now quickly filter packages by version state: up-to-date, new version available, or no upstream set. This provides an immediate snapshot of your project's overall health and maintenance needs.

<figure>
  <img src="/images/posts/2026-02-20/package-filtering.png" alt="Screenshot of package filtering" />
  <figcaption>Package Filtering</figcaption>
</figure>

### Notifications on New Upstream Releases

Last but not least, you can now subscribe to receive notifications whenever a new update is available for a package you maintain. If the project (with the Anitya Distribution Name set) contains any devel packages, the maintainers of those development packages will be notified instead. We hope this makes staying on top of updates even easier.

<figure>
  <img src="/images/posts/2026-02-20/version-subscription.png" alt="Screenshot of the Version Tracking notifications subscription" />
  <figcaption>Notification Subscription Settings</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}

