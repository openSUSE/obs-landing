---
layout: post
title: A Bit of Action for Pull/Merge Requests and the Tokens UI
category: development
---

After a quiet vacation month in August, we're back with changes to improve
workflows in the integration between OBS and source code management systems
(SCM) like GitHub and GitLab. Workflows are cleaning up after themselves when
pull/merge requests are closed or merged. And additionally to that, you can now
regenerate and trigger tokens in the web UI.

If you haven't already, join [the beta program](/2018/10/04/the-beta-program/)
to start integrating OBS with SCMs.

{% include partials/_series-of-posts-about-scm-integration.md %}

# Some More Action?

From now on, we support closed, merged and reopened pull/merge requests.

Workflows are cleaning up after themselves when pull/merge requests are closed
or merged. Projects in which you branched or linked packages will be deleted,
same thing for the repositories you configured for those projects.

Don't worry though, if you change your mind and reopen a pull/merge request
which was previously closed, this will also be handled by workflows. Your
projects, their branched/linked packages and their configured repositories will
be restored.

# Regenerate and Trigger Tokens in the UI

Previously, if you happened to lose the secret string of a token, you had to
delete it and create a new token. While this definitely works, we can do better!
There is now a `Regenerate` button on the `Edit Token` page. Here's how it
looks:

<figure>
  <img src="/images/posts/scm-more-pull-request-actions-and-ui/regenerate-token.png" alt="Regenerate tokens in the web UI" width="1000px" />
  <figcaption>Regenerate tokens in the web UI</figcaption>
</figure>

It's not all we did in the web UI. Tokens can now be triggered on the `Trigger
Token` page. This is available for all token types, except workflow tokens. This
is how it works:

<figure>
  <img src="/images/posts/scm-more-pull-request-actions-and-ui/trigger-token.gif" alt="Trigger tokens in the web UI" width="1000px" />
  <figcaption>Trigger tokens in the web UI</figcaption>
</figure>

# What's Next?

In the upcoming weeks, we will be working on supporting push events from GitHub
and GitLab. This will allow you to run workflows when pushing commits to a
branch. We're pretty sure you'll create useful workflows with that. There will
also be new workflow steps going with this! Until then, give us feedback, it
really helps!

{% include partials/_how-to-give-us-feedback.md %}
