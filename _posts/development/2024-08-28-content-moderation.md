---
layout: post
title: "Improving notifications to stay informed about moderation reports"
category: development
---

In the latest set of improvements coming to the content moderation feature we focused on improving the experience of moderators reviewing incoming reports. By including more information about the state of reports we make it easier for moderators to comprehend the user reported content in the notifications. This will lower the time the moderators need to respond to reports.

*Content Moderation* is part of the [beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-content-moderation.md %}

### Notification filter

Moderators have gained access to a new filter in the notification view, that allows them to filter the reports more precisely. The currently implemented filters include:

* Decision state (with/without a decision)
* Reported content type (package, project, request, user, comment)

<figure>
  <img src="/images/posts/sprint_172/notification-filter.png" alt="Reports notifications filter" />
  <figcaption>Expanded reports notifications filter</figcaption>
</figure>

### Notification content

Moderators will now see more in-depth information about a report and reported content within the report notification. All report notifications specify whether the notification has a decision, and for notifications about a report on a content that has multiple existing reports, the number of additional reports will be noted next to the title of the notification. In addition to that, the notification description may include some additional information about what the state of the user is, about how many reports the author of the comment has, or how many reported comments a reported user has.

<figure>
  <img src="/images/posts/sprint_172/notification-content.png" alt="Two report notifications" />
  <figcaption>Report notifications with more in depth options</figcaption>
</figure>


{% include partials/_how-to-give-us-feedback.md %}
