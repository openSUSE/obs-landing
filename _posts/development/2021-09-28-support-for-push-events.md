---
layout: post
title: Support for Push Events, a Rebuild Step and More for the SCM Integration
category: development
---

We again moved forward with the integration of source code management systems (SCM)
in the Open Build Service. This time with a new rebuild step, support for push events,
and filter for branches and events. Some of the new features introduce breaking changes
for existing workflows. So keep reading if you want to know how to adapt your
existing workflows and how to use the new features.

If you haven't already, join [the beta program](/2018/10/04/the-beta-program/)
to start integrating OBS with SCMs.

{% include partials/_series-of-posts-about-scm-integration.md %}

# Select the Target Project for Your Steps (Breaking Change)

The target project for the currently supported steps used to default
to the home project of the corresponding token user. From now on, you
must set the target project yourself by adding the `target_project` key
to all `branch_package` and `link_package` steps.

```
workflow:
  steps:
    - link_package:
        source_project: games
        source_package: ctris
        target_project: home:obs_user
```

# Renamed the Source Project Key for the Configure Repository Step (Breaking Change)

Not a new feature, but still worth to mention. We renamed the `source_project` key in
the configure repository step to simply `project`. This is just for the sake of clarity.
Make sure to adapt existing workflow configuration files.

```
workflow:
  steps:
    - configure_repositories:
        project: OBS:Server:Unstable:CI
        repositories:
          - name: openSUSE_Tumbleweed
            target_project: openSUSE:Factory
            target_repository: snapshot
            architectures:
              - x86_64
              - i586
          - name: openSUSE_Leap_15.2
            target_project: openSUSE:Leap:15.2
            target_repository: standard
            architectures:
              - x86_64
```

# Run Multiple Workflows

Defining multiple workflows in the `.obs/workflows.yml` configuration was already possible
in the past, but we can now confirm that this is working and we are considering this
for future adaptions. One thing worth to mention is that every workflow needs a unique name
in order to be processed.

```
first_workflow:
  steps:
    - branch_package:
        source_project: test-project
        source_package: test-package
        target_project: test-target-project

second_workflow:
  steps:
    - branch_package:
        source_project: another-project
        source_package: another-package
        target_project: another-target-project
```

#  Support for Push Events and Event Filters

So far, it was only possible to run the workflows for pull/merge requests
in GitHub and GitLab. With the new event filter section, we also start to support
push events. This enables you to run workflows if you, for example, push directly
to a development branch in your repository or on the latest commit merged into the
main branch. For now, you can choose between the `pull_request` and the `push` events.


```
workflow:
  steps:
    - branch_package:
        source_project: games
        source_package: ctris
        target_project: home:jane_doe
  filters:
    event: push
```

# Run Workflows Only on Selected Branches

Especially after adding support for the push events, it might be interesting
for some of you to run workflows only for certain branches. It is now possible
to ignore or select certain branches in the filters section. As with the other
filters `only` has precedence over `ignore` if both are set.

```
workflow:
  steps:
    - branch_package:
        source_project: games
        source_package: ctris
        target_project: home:jane_doe
  filters:
    event: push
    branches:
      only:
        - main
        - staging
      ignore:
        - development
```

# Trigger Rebuilds of Packages in Workflows

Last but not least, there is a new rebuild step for the workflows. It makes
it possible to trigger the rebuild of a selected package inside the OBS.
One use case for this could be to trigger the rebuild of a package after
a new commit got pushed to the main branch.

```
workflow:
  steps:
    - rebuild_package:
        project: home:Admin
        package: ctris
```

{% include partials/_how-to-give-us-feedback.md %}
