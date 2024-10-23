---
layout: post
title: Make it easier for users to understand what is there on a request
category: development
---
To make it easier for users to understand what is there on a request page we've introduced three significant improvements.

This blog post is part of the [beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}

We've added eyecatchers on the request's diff page. The diff component now shows small highlights that help users understand what exactly changed before and after.

<figure>
  <img src="/images/posts/2024-10-23/eyecatchers.png" alt="Eyecatchers in a file diff" />
  <figcaption>Eyecatchers in a file diff</figcaption>
</figure>

To reduce some clutter on a request's conversation timeline we combined the review decision and the comment boxes into a single, more streamlined one.

<figure>
  <img src="/images/posts/2024-10-23/decision_and_comment_boxes_combined.png" alt="Review decisions and comment boxes combined" />
  <figcaption>Review decisions and comment boxes combined</figcaption>
</figure>

Finally, we removed all the states that the user cannot do anything about from the request's build results, like "Excluded" state. This makes easier for you to understand the state of a request.

<figure>
  <img src="/images/posts/2024-10-23/better_build_results.png" alt="Better build results" />
  <figcaption>Better build results</figcaption>
</figure>

