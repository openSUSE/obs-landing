---
layout: post
title:  Introducing Assignments
category: development
---
Over the last few days, we’ve been focused on improving how responsibility is tracked in packages. Today, we’re excited to introduce Assignments.

These updates are part of the `Foster Collaboration` beta programs. You can find more information about the beta program [here](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-foster-collaboration.md %}

### Using Assignments in the UI

Assignments allow collaborators to designate someone as the responsible person for a specific package for a specific amount of time.
This makes it clear who’s currently responsible for that package. It helps prevent confusion, ensures clear ownership, and supports better coordination across the team.
Assignments can be updated as responsibilities shift, keeping things flexible and transparent. Bear in mind that they expire after 24 hours.

<figure>
  <img src="/images/posts/2025-05-13/screenshot-assignments-ui.png" alt="Screenshot of the Assignments UI" />
  <figcaption>Assignments UI</figcaption>
</figure>

### Using Assignments from the API

Assignments are also accessible via the API, with support for listing, creating, and deleting assignments.
This allows teams to integrate assignment management into their existing workflows and tools.

<figure>
  <img src="/images/posts/2025-05-13/screenshot-assignments-api.png" alt="Screenshot of the assignments API documentation" />
  <figcaption>Assignments API documentation</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}

