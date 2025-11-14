---
layout: post
title: "The Labels Feature Has Come to Stay"
category: development
---

The Labels feature is officially a core feature starting today.
We introduced labels to foster better collaboration and organization.
Benefit from the labels to make your projects, packages and requests handling more intuitive and powerful!

## What are Label Templates?

The Label Templates allow you to efficiently manage and standardize your labels.
You can set Label Templates on a project level and then you can create labels on the project's packages or their related requests based on the templates.

You can easily copy label templates from one project to another, ensuring consistency without tedious manual recreation.

<figure>
  <img src="/images/posts/2025-11-17/label_templates.png" alt="Label Templates">
  <figcaption>Label Templates</figcaption>
</figure>

Admins can also set up standardized Project Labels on the Configuration page.

## What are Labels?

Labels are a visual system for organizing work across your projects, packages and requests.
You can create and customize labels with unique names and colors tailored to the specific needs of your items.
These labels allow you to categorize items based on importance, status, topic, or any other marker you can define.

<figure>
  <img src="/images/posts/2025-11-17/labels_on_request.png" alt="Labels on request">
  <figcaption>Labels on request</figcaption>
</figure>

It is possible to find packages belonging to a certain category (i.e., with a specific label) by clicking the corresponding label on the Project page, or by using the label filter on `Your Requests` page.

<figure>
  <img src="/images/posts/2025-11-17/filter-by-label.png" alt="Filter by Label on the project page">
  <figcaption>Filter by Label on the project page</figcaption>
</figure>

## Labels API Integration

 API endpoints for [Labels](https://api.opensuse.org/apidocs/#/Labels) and [Label Templates](https://api.opensuse.org/apidocs/#/Label%20Templates) are also available, allowing you to list, create, and delete labels on projects, packages, and requests programmatically. This lets you connect smoothly with outside tools and automate things with scripts.

{% include partials/_how-to-give-us-feedback.md %}
