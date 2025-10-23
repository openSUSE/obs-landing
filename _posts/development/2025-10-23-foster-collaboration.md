---
layout: post
title:  Relevant Upstream Package Version Information
category: development
---
Our recent contribution to the package versions tracking includes displaying accurate information about the upstream version and providing the link to the release monitoring within easy reach.

These updates are part of the `Foster Collaboration` beta program. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}

### Tracking Upstream Package Version

The **upstream package version**, at the project page in the package list and in the individual package page, becomes an interactive link that lets you open https://release-monitoring.org directly to the relative upstream version.
Additionally, it delivers three different status of the information itself:
- `no upstream` in case no upstream version is available or not reachable
- `up to date` in case the local and the upstream version match
- `1.2.3 available` in case the local and the upstream version differ

<figure>
  <img src="/images/posts/2025-10-23/version-link.png" alt="Screenshot of version link in the package page" />
  <figcaption>Version link in the package page</figcaption>
</figure>

<figure>
  <img src="/images/posts/2025-10-23/version-status.png" alt="Screenshot of different status of the upstream version" />
  <figcaption>Different status of the upstream version</figcaption>
</figure>


### Anitya Distribution Name

To keep track of upstream releases, OBS used to use a project attribute called `OBS:AnityaDistribution`. That attribute is **no longer** in use, the value is part of the project overview.

<figure>
  <img src="/images/posts/2025-10-23/project-anitya.png" alt="Screenshot of project details with the Anitya distribution form field" />
  <figcaption>Project details with the Anitya distribution form field</figcaption>
</figure>



{% include partials/_how-to-give-us-feedback.md %}

