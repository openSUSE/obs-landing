---
layout: post
title: Introducing Comment Locking and Categories for Reports
category: development
---

Big projects usually shift the conversation to external bug tracking platforms and therefore don't want to end up having lots of comments on their OBS project.
For this reason we are introducing comment locks.
On top of this we enhanced the reporting feature by a set of categories to ease the submission.

*Content Moderation* is part of the [beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-content-moderation.md %}


### Comment Locks

There can be several reasons for not wanting comments on specific projects, packages or requests.
A very common one is simply to shift the daily conversations to a dedicated place that is better suited for this purpose.
Until now, the only option you had was to leave a friendly comment with a hint.
From now on, you can simply lock the commenting functionality directly from the comment section.
As a maintainer you still will be able to leave a comment.
For everyone else it will be locked.

Locked comment section from the maintainer perspective:

<figure>
  <img src="/images/posts/comment_locks_and_report_categories/screenshot_comment_lock.png" alt="Screenshot of a locked comment section" />
</figure>

### Report Categories

The reasons for reporting a project, package, user or comment are often similar.
Comments often fall under the category spam, packages might be submitted with a forbidden license, ...
To avoid that you have to repeat yourself, we introduced a set of categories from which you can simply select when submitting a report.
For cases that are not obvious you can still explain yourself in more detail with an additional note in the reason field.

<figure>
  <img src="/images/posts/comment_locks_and_report_categories/screenshot_report_categories.png" alt="Screenshot of report categories" />
  <figcaption>Report categories selection</figcaption>
</figure>

### Comment history

Moderators didn't have a way to check the original content of a comment after it got edited.
Without the full picture it is hard to make a decision for a reported comment.
Was the user really behaving inappropriately at some point in the comment section?
With the newly added comment history, we can judge better from now on.

<figure>
  <img src="/images/posts/comment_locks_and_report_categories/screenshot_comment_history_dropdown.png" alt="Screenshot of the comment history dropdown" />
  <figcaption>Comment history dropdown</figcaption>
</figure>

<figure>
  <img src="/images/posts/comment_locks_and_report_categories/screenshot_comment_history_modal.png" alt="Screenshot of the comment history modal" />
  <figcaption>Comment history modal</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
