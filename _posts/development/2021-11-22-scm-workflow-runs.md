---
layout: post
title: SCM/CI Workflow Runs and More
category: development
---

We go further with the SCM/CI workflow integration in OBS. You, beta testers, had difficulties in understanding why your integration failed when something did not go as planned. This is solved with the new _workflow runs_ UI feature, with detailed information about every workflow that ran once you triggered a workflow token. Keep reading for more details.

Do not forget this feature is under the [the beta program](/2018/10/04/the-beta-program/). Join!

{% include partials/_series-of-posts-about-scm-integration.md %}

# Tokens Web UI

At this point, you might be familiar with the tokens web UI. After a few improvements, it looks like follows.

<figure>
  <img src="/images/posts/sprint_107_tokens_ui_index.png" alt="Latest version of the tokens web UI" />
  <figcaption>Latest version of the tokens web UI</figcaption>
</figure>

The token id is now visible from the list of tokens and we have introduced a new link to the workflow runs <img src="/images/posts/sprint_107_workflow_runs_icon.png" alt="Workflow runs icon" />.

# Workflow Runs

You created your workflow token in OBS and prepared the project you wanted to work with. You also defined the configuration file, `.obs/workflows.yml`, and set up everything on the SCM side. However, you did not get the result you expected. Something was wrong but you had no clue why. That was a common scenario when integrating an SCM and OBS to run some workflows for the first time. But we have good news for you!

From now on, every time a workflow token is triggered, OBS will track information about each workflow run.

<figure>
  <img src="/images/posts/sprint_107_tokens_ui_index_with_arrow.png" alt="Workflow runs link" />
  <figcaption>Workflow runs link</figcaption>
</figure>

You will get details like:

- the start time and the status of the workflow run (running/fail/success) represented by icons;
<figure>
  <img src="/images/posts/sprint_107_workflow_runs_list.png" alt="Workflow runs list" />
  <figcaption>Workflow runs list</figcaption>
</figure>

- the request headers and the payload received from the SCM;

<figure>
  <img src="/images/posts/sprint_107_workflow_runs_request.png" alt="Workflow runs request tab" />
  <figcaption>Workflow runs request tab</figcaption>
</figure>

- the response body sent from OBS to the SCM, containing the error messages in case of a failed run.

<figure>
  <img src="/images/posts/sprint_107_workflow_runs_response.png" alt="Workflow runs response tab" />
  <figcaption>Workflow runs response tab</figcaption>
</figure>

Although this tool will be of great help to you, we recommend that you follow the [instructions](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html) thoroughly for successful integration.

# Push Events for Tags

Our workflows now accept push events for tags. You could, for example, run a certain workflow only when a tag is pushed to a repository rather than on every push to a branch.

You can filter by this type of event as shown in the following example. Read more [here](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#id-1.5.8.5.2.8.10.8).

```
workflow:
  steps:
    - branch_package:
        source_project: games
        source_package: ctris
        target_project: home:jane_doe
  filters:
    event: tag_push
```

For the branch package and link package steps, the package created by those steps will contain the name of the tag which triggered the webhook event.

Refer to the [documentation about the steps](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.setup.obs_workflows.steps) for details on this.

To ensure this is correctly working, you need to modify your webhook on GitLab to trigger _"Tag push events"_ if this isn't already done. For GitHub, you need nothing apart from _"Pushes"_.

# And Much More

Apart from the big changes in the web UI, we continue improving other areas. We now handle other possible errors and display a more readable version of the text in the SCM checks by using the short version of commit SHAs for push events.

<figure>
  <img src="/images/posts/sprint_107_short_commit_sha.png" alt="SCM checks display short commit SHA" />
  <figcaption>SCM checks display short commit SHA</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}