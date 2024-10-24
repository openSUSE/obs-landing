---
layout: post
title: 3 Improvements For Collaboration on the Request Page
category: development
---
Today we want to tell you about three significant improvements we have just introduced that make it easier to collaborate on the request page. Those improvements are part of the [beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}

## More Clarity on the Diffs

The diff tab now shows small highlights (called eyecatchers) that show the exact change. Those eyecatchers will help you see what exactly is new or changed and allow you to focus better on those differences, making it easier to review the request.

<figure>
  <img src="/images/posts/2024-10-23/eyecatchers.png" alt="Eyecatchers in a file diff" />
  <figcaption>Eyecatchers in a file diff</figcaption>
</figure>

## Less Clutter in Conversations

Before we had two boxes on the conversation timeline: if you wanted to write a comment, you had to find the comment box, if you wanted to give a reason because you declined something you had to find the decision box. Now, you only have one box, so you don't have to think where you write things anymore because there is no choice!

<figure>
  <img src="/images/posts/2024-10-23/decision_and_comment_boxes_combined.png" alt="Review decisions and comment boxes combined" />
  <figcaption>Review decisions and comment boxes combined</figcaption>
</figure>

## Less Noise in the Build Results

The build results of a request were showing a lot of information that is not really useful to decide if you should merge the request or not, like the "Excluded" state. We limited the build results in the overview to succeeded/failed and building now. This will make easier for you to understand the state of the request and help you make a decision about it.

<figure>
  <img src="/images/posts/2024-10-23/better_build_results.png" alt="Better build results" />
  <figcaption>Better build results</figcaption>
</figure>

We hope those changes will help you focus better on the important bits of a request. As always we are eager to know what do you think about this!

{% include partials/_how-to-give-us-feedback.md %}
