---
layout: post
title: Request Page Redesign - Facilitating the Review Process
category: development
---

Collaboration is the heart of the OBS project. Therefore, we have been working on the request page redesign for a while,
the page where most of the collaboration happens.
This time, we have focused on
improving the handling of requests with multiple actions,
facilitating the review process by enhancing the code changes and
helping out with decision-making, among others.

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}


### Handling Multiple Actions

Sometimes you have to deal with many actions in one single request.
With the page redesign, you have to move along a dropdown list of actions to select the one you want to review next. It's easy to get lost, we know. That's why we now offer a way to mark those you have already seen.

<figure>
  <img src="/images/posts/sprint_133_mark_as_seen.png" alt="A screenshot of the Action Seen button" />
  <figcaption>Mark Action as Seen</figcaption>
</figure>

Apart from that, detecting which is the current action is easier from now on:
  - it is better highlighted in the dropdown list,
  - the dropdown always scrolls towards the current action once you open it,
  - you will always see the position of the action in comparison with the total number of actions

But an image is worth a thousand words:

<figure>
  <img src="/images/posts/sprint_133_dropdown_improvements.gif" alt="Gif showing the improvements on the request actions dropdown list" />
  <figcaption>Improvements on the request actions dropdown list</figcaption>
</figure>

### Reviews Summary

To accept, or not to accept, that is the question.
And to help you out with the decision-making,
we display a summary of the reviews right before the buttons to accept, revoke, decline or re-open the request.

<figure>
  <img src="/images/posts/sprint_133_reviews_summary.png" alt="A screenshot of the reviews' summary before the request buttons" />
  <figcaption>Reviews Summary</figcaption>
</figure>


### Enhancing Code Changes

Please compare these two images:

<figure>
  <img src="/images/posts/sprint_133_code_changes_before.png" alt="A screenshot of the code changes editor before redesign" />
  <figcaption>Code changes editor before redesign</figcaption>
</figure>

<figure>
  <img src="/images/posts/sprint_133_code_changes_after.png" alt="A screenshot of the new way to enhance the code changes" />
  <figcaption>Enhancing the code changes</figcaption>
</figure>

We are sure you perceive the difference.
Apart from increasing the spacing,
line numbers correctly map to the changed lines.

We are doing things differently behind the scenes,
which allows us to have a more versatile code editor for changes.
There is more to come. Stay tuned!

{% include partials/_how-to-give-us-feedback.md %}
