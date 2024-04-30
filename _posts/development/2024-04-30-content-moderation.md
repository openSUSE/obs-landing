---
layout: post
title: 'Improved communication and decision making in OBS Content Moderation'
category: development
---

Over the past weeks, we've spent some time improving Content Moderation feature within OBS. Users now have the ability to block other users. We focused on making it easier for Moderators to act on reports, by implementing "decision actions", which allow Moderators to perform moderation actions while making decisions. We also created a dedicated comment section for Moderators to be able to discuss the report with the reporter.

*Content Moderation* is part of the [beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-content-moderation.md %}

### Blocking Users

Every user now has the ability to block any other user within OBS, making it easier to limit contact with users you might have disagreements with. This currently hides contents of the comments of the blocked user, so while you will still know that they have commented, you will not have to see what they wrote.

<figure>
  <img src="/images/posts/sprint_164/user-blocking.png" alt="Button that lets you block a user" />
  <figcaption>Button that lets you block a user</figcaption>
</figure>

### Decision Actions

Decision Actions reduce the amount of steps needed to take moderation actions, by combining Decisions and moderation actions. Now, instead of just `cleared` and `favored` Decision types, you have multiple `favored` options, that correspond to various moderation actions. This means that for instance whenever there is a Report on a Package or Project, a Moderator can create a Delete Request that removes the offending object. Here's a full list of currently implemented Decision Actions:

* "Applying User Comment Restrictions" available when deciding on a Comment
* "Moderate Comment" available when deciding on a Comment
* "Create Delete Request" available when deciding on a Project or a Package
* "Delete User" available when deciding on a Request, a Comment or a User

<figure>
  <img src="/images/posts/sprint_164/decision-actions.png" alt="List of decision actions" />
  <figcaption>List of decision actions</figcaption>
</figure>

### Commenting on Reports

Up until now, in order to ask a creator of a Report any questions, Moderators had to resort to using email. While a great solution to some, it's not foolproof, so we needed to solve this within OBS. Now the Moderators can communicate with reporters using Report comments to discuss the report in full, get some more details they need, and act with more evidence and confidence.

<figure>
  <img src="/images/posts/sprint_164/report-comments.png" alt="View that enables you to comment on reports" />
  <figcaption>View that enables you to comment on reports</figcaption>
</figure>


{% include partials/_how-to-give-us-feedback.md %}
