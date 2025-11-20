---
layout: post
title: "Labels and Assignment Improvements"
category: development
---

On our latest development iteration we have introduced new filtering capabilities using labels
and we have polished the Submit Request workflow when there are assigners involved.
These improvements make managing and tracking your work more efficient and organized.

These updates are part of the `Labels` and `Foster Collaboration` beta program. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}

## Label-Based Filtering

Managing a high volume of packages, requests and notifications just got easier. We've introduced the possibility to filter and organize your work using labels.

In case you are not familiar with labels yet we've published dedicated [documentation for the labels feature](https://openbuildservice.org/help/manuals/obs-user-guide/cha-obs-labels).

### Packages by Label

Clicking on a label within the package list, inside a project page, will instantly show you a filtered list of all other packages carrying that same label. This makes tracking related packages more intuitive than ever.

<figure>
  <img src="/images/posts/sprint_203/filter-by-label.png" alt="Filter by Label on the project page">
  <figcaption>Filter by Label on the project page</figcaption>
</figure>

### Requests by Label

The `Your Requests` page now allows you to filter requests based on applied labels. Type the name of the label you want to focus on and you'll get only the related requests.

<figure>
  <img src="/images/posts/sprint_203/request_filter_by_label.png" alt="Filter by Label on the project page">
  <figcaption>Filter by Label on the project page</figcaption>
</figure>

### Notifications by Label

We know how critical it is to manage your inbox effectively. Following the introduction of labels for certain notifiable items (like Package and Request), you can now also filter your notifications based on these labels. This means less noise and quicker identification of the notifications that matter most to your current tasks.

## Automated Package Assignment Management

Did you know you can assign a responsible person for a specific package? That's what we call Assignment and is a feature we introduced recently. However, so far, you had to manually remove your user assignment from a package after your related submit request was accepted. Now, right after the acceptance, the package automatically expires the current assignment, saving some manual steps on your daily work.

<figure>
  <img src="/images/posts/sprint_203/assignment.png" alt="Unassign user to package">
  <figcaption>Unassign user to package</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
