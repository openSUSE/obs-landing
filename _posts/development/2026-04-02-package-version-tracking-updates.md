---
layout: post
title: "Quick Update on the Package Version Tracking Feature in OBS"
category: development
---

We have a couple of news to share with you on the package version tracking feature in OBS.
We extended the feature in the API space, allow to skip version tracking for individual packages and display the version info in a couple more places.

These updates are part of the `Foster Collaboration` beta program. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}


### Show Upstream and Local Version of a Package Through API

From now on, it is possible to list the current upstream and local package version for a specific package through the API.
Passing the `view=versions` query parameter to the endpoint documented [here](https://api.opensuse.org/apidocs/#/Sources%20-%20Files/get_source__project_name___package_name_) will do the trick.


### Skip Version Tracking for Individual Packages

For some packages (like product definitions) it does not make much sense to track the upstream version (since it is only relevant for OBS and usually no upstream project exists).
In those cases the package will always be shown as "Outdated" which is misleading.
That is why we added an option to manually disable the upstream version tracking for those.
Just head over to the package overview, there you can toggle a checkbox under "Edit" (where the package description, title etc. can be set).

<img src="/images/posts/2026-04-02/screenshot_anitya_ignore.png" alt="Disable Anitya Distribution Tracking on Package" style="width:800px" />


### Package Version Shown on Requests and Notifications

Packages are usually updated through submit requests.
It is one of the places where the current package version is interesting.
That's why we included the current package version to the request index, request show and notification views for submit requests.
If both the source and target project have package version tracking enabled, you can see right away from which to which version a package gets updated.


<img src="/images/posts/2026-04-02/screenshot_package_version_submit_request.png" alt="Package Version Displayed in Submit Request" style="width:800px" />
<img src="/images/posts/2026-04-02/screenshot_package_version_notification.png" alt="Package Version Displayed in Notification" style="width:800px" />


{% include partials/_how-to-give-us-feedback.md %}
