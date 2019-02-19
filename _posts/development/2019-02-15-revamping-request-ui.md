---
layout: post
title: Another Milestone for the Revamped User Interface, Now for the Request Pages
category: development
---

{% include partials/_revamping-ui-releases-history.md index="3" %}

New year, new milestone!

Here is a comparison of the old and new user interface of the request overview page:

<img src="/images/posts/revamping-request-ui/comparison-old-new.gif" alt="Comparison of the old and new user interface" style="width: 80%;" class="center" />

# The Request Overview Page

This is where most of our work happened in this release.
We refreshed the page while keeping its current form.
We added some quality of life improvements, such as the `Expand/Collapse all` buttons for the diffs.

<img src="/images/posts/revamping-request-ui/expand-collapse-all.gif" alt="Expand/Collapse all buttons" style="width: 80%;" class="center" />

The comments from a superseded request are now under a tab, next to the request's comments.

<img src="/images/posts/revamping-request-ui/superseded-comments.gif" alt="Superseded comments" style="width: 80%;" class="center" />

## Improvements for the Project Monitor Page

We improved the usability of the filters.
They previously closed whenever checking/unchecking one of their checkboxes.
This is fixed.

The datatable had rendering errors when used in combination with the `table-sm` _Boostrap_ class due to a bug in the JavaScript library we use.
As good open-source users, we reported it [upstream](https://github.com/mkhairi/jquery-datatables/issues/17).

## And Much More

We addressed some issues we identified and gathered from your feedback.
Here's a list of what has been done.

The counters for the comments are displayed with the _Badge_ component from _Bootstrap_, just like other counters in the revamped user interface.

<img src="/images/posts/revamping-request-ui/badge-comments-counter.png" alt="Badge for comments counter" style="width: 80%;" class="center" />

The build results didn't display all architectures and they didn't work for multibuild packages.
This is now resolved.
They are also collapsible, which is the first step to improve the usability of this section for many repositories and architectures.

<img src="/images/posts/revamping-request-ui/collapsible-build-results.gif" alt="Collapsible build results" style="width: 40%;" class="center" />

On a more technical note, we refactored the _show_ action of the _request_ controller.
This involved removing some unneeded code and adapting the views to those changes.
We also changed the datatables' pagination to be server-side.
This is a performance improvement for datatables with large amounts of data.
One concrete example of this is _openSUSE:Tools_ with 74 packages.
There is a difference of approximately 2 seconds in the page loading time (from ~ 5.3 to ~3.2 seconds).

{% include partials/_revamping-ui-how-to-give-us-feedback.md %}

{% include partials/_revamping-ui-what-is-coming-next.md pages="Admin and Search" %}
