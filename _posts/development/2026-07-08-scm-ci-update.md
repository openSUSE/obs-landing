---
layout: post
title: "SCM/CI: Project Links and Better Handling of Disconnected Branches"
category: development
---

We have some news to share regarding the SCM/CI integration for the Open Build Service.
The feature has been extended with a link project step, allowing you to create project links in your workflows.
On top of that, we improved the handling of Git branches that do not contain a workflow definition (`workflow.yml` file).

### Link Projects in Your Workflows

One missing piece for SCM/CI integration, needed to allow full project rebuilds for PR/MR sources (stagings), was the ability to create project links.
Now workflows can be extended with the `link_project` step, allowing you to do just that.
Additionally, the `configure_repositories` step now supports the `rebuild` and `linkedbuild` attributes, which can be used to set the desired build options for packages from the linked project.
Check out the documentation for the [link_project step](https://openbuildservice.org/help/manuals/obs-user-guide/cha-obs-scm-ci-workflow-integration#sec-obs-obs-scm-ci-workflow-integration-obs-workflows-steps-link-project) for details.

### Ignoring Branches Without a Workflow Definition

Webhooks are not scoped to a specific branch on the Git repository and are always triggered based on the action.
This led to a problem where, for example, pull requests or commits that targeted a branch without a `workflow.yml` file ended up being listed as a failed workflow run in the Open Build Service.
This polluted the workflow run listing with false-positive results.
Some users worked around this problem by creating empty `workflow.yml` files on those branches.
This is not required anymore.
From now on, we will simply drop the workflow run and report back a success message, with a hint that we did not find a workflow.yml, to the SCM service in those cases.

{% include partials/_how-to-give-us-feedback.md %}

