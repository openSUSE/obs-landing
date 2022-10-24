---
layout: post
title: Request Page Redesign - Build results and superseded conversations
category: development
---

We don't stop improving the requests workflow and we are actively working on the feedback. This time we worked on including conversations from superseded requests and presenting build results.

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}

## Build results

Build results are specifically important for requests because they help you to verify if the submitted changes are working or not. Now we present build results in a separate tab on request page.

<figure>
  <img src="/images/posts/build-results.png" alt="A screenshot of the build results" />
  <figcaption>Build results</figcaption>
</figure>

## Superseded conversations

In the old design, the conversation of a superseded request was presented in a tab. Because the conversation on the current request is very often "just" the continuation of people talking about the previous request. We brought this back and integrated the conversation right into the stream (collapsed by default).

<figure>
  <img src="/images/posts/superseded-conversations.png" alt="A screenshot of the conversation" />
  <figcaption>Conversation and history from superseded request</figcaption>
</figure>

This is not the last time we are going to iterate over this. There is much more to come. And please, let us know what you think.

{% include partials/_how-to-give-us-feedback.md %}
