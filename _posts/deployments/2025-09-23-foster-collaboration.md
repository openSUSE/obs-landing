---
layout: post
title:  Introducing Release Monitoring in OBS
category: development
---
Over the last few days, we’ve been focused on bringing release monitoring to OBS to help you keep track of the local and upstream releases.

These updates are part of the `Foster Collaboration` beta program. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}

### OBS:AnityaDistribution Attribute

To keep track of upstream releases, OBS uses a project attribute called **`OBS:AnityaDistribution`**.
The value of this attribute can be the name of any distribution listed on [release-monitoring.org](https://release-monitoring.org/distros/).

Once the attribute is set, OBS will take care of the rest. After you assign the value, OBS will automatically search for your packages on [release-monitoring.org](https://release-monitoring.org/distros/) and keep track of the latest version. This makes it much easier in OBS to stay up to date with the latest upstream releases of your packages.

<figure>
  <img src="/images/posts/2025-09-23/anitya-distribution-attr.png" alt="Screenshot of the Attribute" />
  <figcaption>`OBS:AnityaDistribution` Attribute</figcaption>
</figure>

### Finding the Local and Upstream Version

OBS also allows you to compare your **local package version** (defined in the `spec` file) with the **upstream version**.
Both versions are shown side by side: on the **project page** in the package list, and on the **individual package page**.

<figure>
  <img src="/images/posts/2025-09-23/version1.png" alt="Screenshot of the local and upstream version" />
  <figcaption>Versions shown in the package list</figcaption>
</figure>

<figure>
  <img src="/images/posts/2025-09-23/version2.png" alt="Screenshot of the local and upstream version" />
  <figcaption>Versions shown on the package page</figcaption>
</figure>


{% include partials/_how-to-give-us-feedback.md %}

