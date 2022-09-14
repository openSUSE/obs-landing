---
layout: post
title: Request Page Redesign - Round Two
category: development
---

[Previously](/2022/08/15/request-workflow-redesign) we started the redesign of the request workflow as part of the beta program.
We received a lot of feedback from you and still have a lot on our TODO list.
This time we focused our attention on the support of multi-action submit requests and on creating more
clarity in the conversations area by highlighting comments.

## Support of Multi-Action Submit Requests

One important feature was still missing, the support of requests with multiple actions.
We simply showed the first action of the request. From now on, you can select and review
the individual actions through a dropdown. Temporarily, we are limiting the dropdown content to submit actions.

<figure>
  <img src="/images/posts/multi_action_dropdown.png" alt="A screenshot of the request action selection through the dropdown" />
  <figcaption>Dropdown listing the individual actions of a request</figcaption>
</figure>

## Visually Separate Comments in the Conversations

We received feedback from you regarding the way we display the comments of users as part of the timeline
in the conversations area. The conversation happening through the comments was a bit drowned between
all the other events that occur during the lifecycle of a request. We've heard you and started to highlight
the comments in order to make them stick out.

<figure>
  <img src="/images/posts/highlight_comments_in_conversations_area.png" alt="A screenshot of the highlighted comments in the conversations tab" />
  <figcaption>Highlighted comments in the conversations area</figcaption>
</figure>

This for sure isn't the last time we are going to iterate over this. There is so much more to come. As usual, you can follow what we are planning in our [backlog](https://trello.com/b/kCXtUSYN) and on [GitHub issues and pull requests](https://github.com/openSUSE/open-build-service). And please, don't be shy to give us feedback. You need to tell us what you think, we do this for you! 💚

{% include partials/_how-to-give-us-feedback.md %}
