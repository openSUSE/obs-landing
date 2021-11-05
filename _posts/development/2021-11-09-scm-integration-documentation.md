---
layout: post
title: User Documentation for SCM/CI Workflow Integration and More
category: development
---

We don't stop improving the integration between OBS and SCMs.  We heard your
feedback and created a section in our OBS user manual and redesigned the tokens
UI, among other improvements you can read below.

To start integrating OBS with SCMs, just join [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-scm-integration.md %}

# User Documentation for SCM/CI Workflow Integration

Since we started to implement the SCM/CI Workflow Integration beta feature, we
have been publishing a series of blog posts. Those posts contained the
instructions to configure and use the feature. After several publications, it
was hard to follow the instructions spread in so many pieces of information.

Now, we have gathered all these information pills and have presented them in a
more readable way by creating a new section in our OBS manual:
[SCM/CI Workflow Integration](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html)

Be aware that this is still a beta feature, so its documentation could change
in the future. Please, have a look and keep your feedback coming.

# Redesign of the Tokens UI

The Tokens UI has been redesigned. This UI has not only improved in terms of
responsiveness, it also allows you to name your tokens in order to easily
identify them.

Futhermore, it also displays the last time each token was triggered.

<figure>
  <img src="/images/posts/sprint-106-token-ui-revamp.gif" alt="List and edit tokens with name in the web UI" />
  <figcaption>List and edit tokens with name in the web UI</figcaption>
</figure>

# And Much More

Apart from these visible UI changes, we also have improved the detection and
the error reporting of invalid workflows configurations. This makes it easier
to recognize possible pitfalls. Just check for the responses of the SCM
webhooks.

{% include partials/_how-to-give-us-feedback.md %}
