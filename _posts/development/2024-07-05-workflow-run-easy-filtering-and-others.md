---
layout: post
title: Workflow Run Easy Filtering And Others
category: development
---

In this round of SCM/CI Integration improvements, we have simplified the way you can filter by event source and
have modified the notifications about workflow run failures to reach users or groups the token is shared with.

# Better Workflow Runs Filtering

You might deal with tons of workflow runs in *Your Profile > Manage Your Tokens > Workflow Runs*. That's why we have been determined to improve the filtering on that page. This time, we have simplified how you can filter by **event source** (PR/MR number or commit sha).

Apart from using the text box on the left, you can also click on the link to the event source to filter by its value.
But sometimes you really want to follow the link to reach the event source in the SCM!
Therefore, we let you decide what to do when you click on it.

<figure>
  <img src="/images/posts/sprint_168/filter_event_source.png" alt="Filter by event source when clicking on the value" />
  <figcaption>Easy filtering by event source</figcaption>
</figure>

# Get Notified When A Token Is Shared With You

Whoever sets up the SCM/CI Integration needs to create a workflow token in OBS. That person can share the token with other users or groups to let them see the workflow runs and manage the token on their behalf.

So far, when a workflow run failed, the workflow token creator received a notification. From now on, those users and groups they shared the token with will receive the notification as well.

# Documentation About GitHub Fine-grained Tokens

GitHub currently supports two types of personal access tokens:

- fine-grained personal access tokens
- personal access tokens (classic)

In OBS you can use any of them for the SCM/CI Integration. However, our documentation was not clear enough in this regard until now.
You can learn about *fine-grained personal access tokens* [here](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration#sec.obs.obs_scm_ci_workflow_integration.setup.token_authentication.how_to_authenticate_obs_with_scm),
which is [GitHub's recommended option](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) whenever possible.

{% include partials/_how-to-give-us-feedback.md %}
