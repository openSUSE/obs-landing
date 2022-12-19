---
layout: post
title: More Flexibility for Workflows in the OBS and SCM Integration
category: development
---

Right in time for the holiday season, we have prepared you a gift for the
continuous integration between OBS and SCMs. We are introducing placeholder
variables and for your workflows configuration files, a customizable location.
Let's see how this new flexibility helps you in your work.

{% include partials/_series-of-posts-about-scm-integration.md %}

## Placeholder Variables

Whenever a webhook event comes in, OBS downloads the workflows configuration
file and parses it. This was previously static, but you can now use placeholder
variables to tell OBS to replace them with data from the webhook event payload.

As of this writing, four placeholder variables are supported. Below is a workflows
configuration file example with the `%{SCM_REPOSITORY_NAME}` placeholder variable:

```yaml
# The test_build workflow will branch a package based on the SCM repository name from which the webhook event came from.
test_build:
  steps:
    - branch_package:
        source_project: hello_world
        source_package: %{SCM_REPOSITORY_NAME}
        target_project: hello_world:CI
  filters:
    event: pull_request
```

We are sure you will come up with a lot of interesting ways to use this. For more
details on this feature, we invite you to read the [user
documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.setup.obs_workflows.placeholder_variables).

## A New Path

By default, OBS expects your workflows configuration file to be at
`.obs/workflows.yml` within your SCM repository. For any reason, you might want
to store this file somewhere else and this is completely fine. This is now
possible and it's as simple as [editing your token in the web
UI](https://build.opensuse.org/my/tokens). Here's an example of a workflow token
for which OBS now expects the workflow configuration file to be at
`ci/my_workflows.yml`:

<figure>
  <img src="/images/posts/scm-ci-integration-workflow-file-path.png" alt="OBS Web UI - Workflow token with a customized path for the workflows configuration file" style="display: block; margin: 0 auto"/>
  <figcaption>Workflow token with a customized path for the workflows configuration file</figcaption>
</figure>

This is customizable on every workflow token, so two tokens could have a
different path for the workflows configuration file.

## Another Location For Your Workflows Configuration File

Having your workflows configuration file in each one of your SCM repositories might be good
enough for you, perhaps they are all different in their own ways and this is
perfectly acceptable if it fits your needs.

Sometimes, this is however resulting in a lot of duplication and maintenance
work for you. Avoid all of this by setting, for your workflow tokens, an URL
where OBS should download the workflows configuration file. As long as OBS can
reach this URL, you are free to store your workflows configuration file wherever
you like. It could be a SCM repository where you already store global
configuration files, a S3 bucket on AWS, a Gist on GitHub, anything... you
choose.

This URL can be individually configured per [workflow token in the web
UI](https://build.opensuse.org/my/tokens).

<figure>
  <img src="/images/posts/scm-ci-integration-workflow-file-url.png" alt="OBS Web UI - Workflow token with a URL set for the workflows configuration file" style="display: block; margin: 0 auto"/>
  <figcaption>Workflow token with a URL set for the workflows configuration file</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
