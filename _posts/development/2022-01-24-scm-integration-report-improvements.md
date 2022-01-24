---
layout: post
title: UI and Reporting Improvements for the Continuous Integration with OBS and GitHub/GitLab
category: development
---

Today, we have some improvements around UI and reporting and user feedback for the continuous integration we unveiled in our [previous blog post](https://openbuildservice.org/2021/05/31/scm-integration/).

## Token Creation UI
(TODO those changes aren't visible to the user, so I'm not sure we should
discuss about it)


## Improvement for WorkflowRuns UI
To make easier to debug and troubleshoot broken SCM integrations, now we are
correlating the log displayed on the `WorkflowRuns UI` with specific steps on
the SCM integration

TODO: Add screenshot 

## Multibuild reporting

There were some issues with OBS reporting back to the SCM when building
multibuild packages. Now the issue is solved and you will be able track the
build process from all multibuild flavors on the PR/MR as it should. (TODO: Add
screenshots)

## Track artifacts of OBS workflow runs

To make easier to give you a better feedback of what happened on OBS while
running your defined steps, we are generating a report per each step. This
information is available under the WorkflowRun UI (TODO: be more precise where
it is located)


{% include partials/_how-to-give-us-feedback.md %}
