---
layout: post
title: SCM/CI Workflow Versions. Making Larger Changes Less Painful For You.
category: development
---

Today we're going to explain the versioning system we're using to release new features to the SCM/CI integration.

# Versioning the Workflow Configuration

We are introducing the versioning as a way to release new features in the SCM/CI without breaking existing user's configuration. Those features are going to be released under a MAJOR.MINOR version scheme. You know the drill already: current version is 1.0, so the next minor version will be 1.1 and the next major version will be 2.0.

A major version update will introduce big features and may bring breaking changes, so it will require adapting your workflow configuration once you update to a new major version.

A minor version update will only include small, backwards-compatible changes. If you don't touch anything, your workflow will still work as before. Only when you make some minor adjustments to your workflow configuration you'll benefit of a new feature.

The workflow version can be set as the top-level element of the workflow configuration yaml file. Like this:

    version: 1.0
    workflow:
        step:
            - link_package:
                source_project: GNOME:Factory
                source_package: gnome-shell
                target_project: home:jane:playground

We won't enforce any specific version in the yaml configuration. So if you don't set any version, your Workflow configuration will default to the lowest minor version.

# A Small Present

We just released a minor feature to be used with the new 1.1 version! An alias to the `pull_request` event filter called `merge_request`. Those of you that use GitLab instead of Github may want to try it ;)

    version: 1.1
    workflow:
      steps:
        - branch_package:
            source_project: home:jane_doe
            source_package: ctris
            target_project: games
      filters:
        event: merge_request
        branches:
          only:
            - master
            - staging

# This Just Got Started

We just released v1.1, but as we release more versions and features, please check the [OBS User Guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.workflow_version_table) to know more details about each one.

{% include partials/_how-to-give-us-feedback.md %}