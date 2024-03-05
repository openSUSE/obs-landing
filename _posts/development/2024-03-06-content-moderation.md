---
layout: post
title: 'Enhancements in OBS Content Moderation: Canned Responses, User Insights, UI Upgrades, and Documentation Updates'
category: development
---

Over the past few weeks, we've dedicated our efforts to enhancing content moderation within OBS. This time around, our focus has been on refining canned responses, implementing a comprehensive comment listing feature for individual users, making various UI enhancements, and updating our user documentation.

*Content Moderation* is part of the [beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-content-moderation.md %}

### Customizing Canned Responses

We're excited to announce the addition of decision types for canned responses. Users now have the flexibility to tailor their canned responses to different scenarios. You can choose from three options: `none`, `cleared`, or `favor`.

Select `none` if you wish to apply the canned response to regular comments only. Opt for `cleared` or `favor` if you intend to use it specifically for moderator decisions.

<figure>
  <img src="/images/posts/sprint_160/canned-response-1.png" alt="Canned response decision kind" />
  <figcaption>Decision kind</figcaption>
</figure>

<figure>
  <img src="/images/posts/sprint_160/canned-response-2.png" alt="Canned response usage" />
  <figcaption>Canned response</figcaption>
</figure>


### User-Specific Comment Listings

As a moderator have you ever wondered if a user's behavior in one comment aligns with their conduct elsewhere? To address this, we've introduced a new feature to list all comments by a specific user.

<figure>
  <img src="/images/posts/sprint_160/user-comments.png" alt="List of user comments" />
  <figcaption>User comments</figcaption>
</figure>

### Comment History API

For those curious about a comment's past, we've introduced a new API to retrieve its history. Explore this functionality in our [API documentation](https://api.opensuse.org/apidocs/index#/Comments/get_comment__comment_id__history).


### UI Enhancements

We've rolled out several UI improvements, including a user status badge, which aids moderators in quickly assessing a user's profile status.

<figure>
  <img src="/images/posts/sprint_160/user-status-badge.png" alt="User status badge" />
  <figcaption>User status</figcaption>
</figure>

User's role badge is also displayed on comments to help moderators.

<figure>
  <img src="/images/posts/sprint_160/user-role.png" alt="User role badge" />
  <figcaption>User role</figcaption>
</figure>

### Updated Documentation on Reporting and Moderation

To assist users in understanding our moderation processes better, we've expanded our documentation. Check out this [new chapter](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.moderation) covering the report and moderation process for insights on how moderators operate and how to report problematic content effectively.

{% include partials/_how-to-give-us-feedback.md %}
