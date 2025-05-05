---
layout: post
title:  Labeling outside of OBS with an API
category: development
---

Over the last few weeks we worked to improve the functionality of Labels. Now, we are ready to present the fruit of that labour.

These updates are part of the `Labels` beta programs. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}

### Label API

The `label` beta program now includes a way to list, create and delete labels on projects, packages and requests with the use of API.
That opens up their use with tooling external to OBS, making this functionality more useful to teams that script their workflow around OBS.

<figure>
  <img src="/images/posts/2025-01-21/screenshot-label-api.png" alt="Screenshot of the label API documentation" />
  <figcaption>Label API documentation</figcaption>
</figure>

### Improvements to the pulse page

The pulse page now differentiates between successful and failed build better, to make it easier to see what happened in the project.

<figure>
  <img src="/images/posts/2025-05-05/screenshot-pulse.png" alt="Screenshot of the build results on the pulse page" />
  <figcaption>Build results on the pulse page</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}

