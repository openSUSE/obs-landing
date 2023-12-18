---
layout: post
title: Notifications About Failed SCM/CI Workflows and More
category: development
image: images/posts/sprint_152/page_image_workflow_runs_notifications.png
---

A lot of things happen behind the scenes whenever OBS runs an SCM/CI workflow. Sometimes, you might want to know which workflow failed or completed successfully and the only way to do this is by visiting the workflow runs UI. This time we tried to improve this and other details in the SCM/CI integration.

{% include partials/_series-of-posts-about-scm-integration.md %}

## Notifications About Failed SCM/CI Workflows

Whenever an SCM/CI workflow is executed, you get a new entry of workflow run that gives all the details about status, event type, event source etc. But now OBS also gives you the possibility of receiving a notification as soon as one workflow run fails.

<figure>
  <img src="/images/posts/workflow-run-notification-1.png" alt="Screenshot of workflow run notification activation" />
</figure>

<figure>
  <img src="/images/posts/workflow-run-notification-2.png" alt="Screenshot of failed workflow run" />
</figure>

## Workflow Configuration File and SetFlag Step Artifacts in Workflow Run

Previously, the workflow run details only included the URL or path to the workflow configuration file. Now it also includes the file content so you can always check what was the configuration at the time the workflow ran.

<figure>
  <img src="/images/posts/workflow-config.png" alt="Screenshot of workflow configuration file" />
</figure>

In addition to the configuration file the workflow run now also stores the artifacts of the SetFlag step.

{% include partials/_how-to-give-us-feedback.md %}
