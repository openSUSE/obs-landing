---
layout: post
title: General Availability of the SCM/CI Integration Feature
category: development
---

In May of 2021 we took our first steps towards putting OBS builds into the
continuous integration cycle with the SCM/CI feature. Thanks to the valuable
feedback we received from users who started as early testers and became heavy
users of the feature, we are ready today to push it out of the beta program,
making it generally available in OBS.

### What Is This About?

With the SCM/CI feature you can take advantage of source code management (SCM)
systems like GitHub or GitLab to manage your package sources and integrate OBS
to run different continuous integration workflows.

You can set up workflows to
build a package in OBS after each pull request and then report back the result to the SCM,
to rebuild a package after each change (push event) in a branch,
or to create a package in OBS for every software release using Git tags,
among others.

<figure>
  <img src="/images/posts/sprint_126_workflow_runs.png" alt="Workflow runs in OBS" />
  <figcaption>Details about the workflow runs in OBS</figcaption>
</figure>

<figure>
  <img src="/images/posts/sprint_126_checks.png" alt="Checks results on GitHub" />
  <figcaption>Checks results on GitHub</figcaption>
</figure>

Haven't you started with the integration yet?  All you need to know is in [our
documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html).
Give it a try!

### This Is Not The End

We haven't finished off with the SCM/CI integration feature.
The current version of the feature is quite stable and helpful so we want all our users can take advantage of it.
But we have more ideas and improvements in our backlog. Stay tuned!

{% include partials/_how-to-give-us-feedback.md %}
