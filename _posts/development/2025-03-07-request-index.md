---
layout: post
title: Requests For Groups And More Filters to the Request Index
category: development
---
Another round of changes for the request index beta feature! This time we improved working with requests for a group by using the request index ui you already use in package, project and in "Your Requests". We also expanded the request index by adding two more filters.

{% include partials/_series-of-posts-about-request-index.md %}

### The Groups New Requests UI

The group detail has three tabs that you can use to check "Incoming Reviews", "Incoming Requests" and "All Requests". For those of you using the Request Index feature of the Beta program there is only one tab now, showing the request index page to find requests involving that group. That way it is now consistent with the way you can look for requests in package, project and user pages.

<figure>
  <img src="/images/posts/2025-03-07/group-requests.png" alt="Requests for the opensuse-review-team group" width="1000px"/>
  <figcaption>Requests for the opensuse-review-team group</figcaption>
</figure>

### The Two New Filters in the Requests UI

We added two more filters to the request index page to filter by package and project names.

<figure>
  <img src="/images/posts/2025-03-07/package-and-project-filters.png" alt="Package and project filters" width="300px"/>
  <figcaption>Package and project filters</figcaption>
</figure>

When you type a name in the Package name field it will try to autocomplete the package name, and then will try to filter those requests having request actions where any of the source package or target package matches that name.

The same will happen but for projects, when typing into the Projects field.

{% include partials/_how-to-give-us-feedback.md %}
