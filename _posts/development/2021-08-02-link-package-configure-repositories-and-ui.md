---
layout: post
title: "SCM Integration: Step by Step"
category: development
---

Branching packages is not enough for you? Let's go step by step 😉  
OBS moves forward on its integration with GitHub/GitLab by adding two new steps: `link_package` and `configure_repositories`.
Starting today, you can set up your OBS workflows to create a package linked to an existing one.
You can also configure the repositories of a project in which you want to build packages.
And as if that weren’t enough, you are now able to manage the tokens through the web UI.
Join [the beta program](/2018/10/04/the-beta-program/) and keep reading to discover all you can do.

{% include partials/_series-of-posts-about-scm-integration.md %}

## Tokens on the Web User Interface

In our [first blog post](/2021/05/31/scm-integration) regarding the SCM integration with OBS, we explained how to handle workflow tokens via API.

As we strive to make your work easier, from now on you can manage any kind of OBS tokens through the web interface.

Go to your profile page and click on the action `Manage Your Tokens` in the left-hand side menu.

<figure>
  <img src="/images/posts/step_by_step/manage_your_tokens.png" alt="Link to Manage Your Tokens in the web UI" width="500px" />
  <figcaption>Link to "Manage Your Tokens" in the web UI</figcaption>
</figure>

<figure>
  <img src="/images/posts/step_by_step/tokens_ui.gif" alt="Managing tokens in the web UI" width="1000px" />
  <figcaption>Managing tokens in the web UI</figcaption>
</figure>

For now, only workflow tokens can be updated to change the SCM token attached to them. This is in case you had to regenerate the SCM token if you, for example, lost it.


## The `link_package` Step

You probably tested the first step we implemented: `branch_package`.
You configured the workflow and ... 💣 boom! a new project/package appeared in OBS and the result of its builds were reported back to your pull/merge request.

What if you want to do the same but instead of branching the package you simply want to **link it**? Now you can.

Follow these easy steps for that:

- Set up the integration between GitHub/GitLab and OBS. If you have not yet, please refer to this [blog post](/2021/05/31/scm-integration/).
- Add the new step to `.obs/workflows.yml`

```
workflow:
  steps:
    - link_package:
        source_project: games
        source_package: ctris
```

Providing the source project `games` and the source package `ctris`, OBS will link the package `home:$OBS_USER:games:PR-$PR_NUMBER/ctris` to `games/ctris`.

This step is equivalent to **osc linkpac**.
Unlike the `branch_package` step, the `link_package` step creates a new package
but does not copy the files nor the repositories from the source package.

**NOTE:**
The target project is going to be named after the source project, `home:$OBS_USER:$SOURCE_PROJECT_NAME:PR-$PR_NUMBER`,
and will contain the linked package, i.e. `home:Iggy:games:PR-14/ctris`.


## The `configure_repositories` Step

You can not imagine how versatile workflows could be with this new step!

Inside the SCM configuration file, simply indicate which repositories you want for a project in which you'll build your packages for. Easy peasy!

- Set up the integration between GitHub/GitLab and OBS. If you have not yet, please refer to this [blog post](/2021/05/31/scm-integration/).
- Add the new step to `.obs/workflows.yml`

```
workflow:
  steps:
    - link_package:
      source_project: games
      source_package: ctris
    - configure_repositories:
        project: games
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

Providing the project `games` and a list of repositories, OBS will configure the target project,`home:$OBS_USER:$PROJECT_NAME:PR-$PR_NUMBER`,
with the provided repositories and architectures.

A name, a target project, a target repository and the architectures are required to define each repository.

**NOTE:**  
**The project** has to be a project which was a source project from a previous step like `link_package` or `branch_package`.  
The project where OBS is going to set the repositories, will be named after the project, `home:$OBS_USER:$PROJECT_NAME:PR-$PR_NUMBER`, i.e. `home:Iggy:games:PR-14`.

## More to Come!

Do not miss upcoming blog posts, there are a lot of features to come:

- Reporting results for multiple packages
- New workflow steps apart from the `branch_package`, `link_package` and `configure_repositories`
- Filtering by branch or SCM event
- Multiple workflows
- Integrate with more SCM services like Pagure
- OBS triggering webhooks on some other services

{% include partials/_how-to-give-us-feedback.md %}
