---
layout: post
title: Update on the SCM/CI Integration - Performance and Documentation Improvements
category: development
---

We took another step on the SCM/CI integration of the Open Build Service. This time
we improved the rendering time of the workflow runs UI and enhanced the user
documentation.

### Reduced Rendering Time of Workflow Runs UI

Previously with a lot of workflow runs being present, the UI took multiple
seconds in order to load and render. This was above whats acceptable, so
we took another look onto it and reduced the overall rendering times quite a bit.

```
Calculations are based on 20000 workflow run records:

Before: Loading time was > 6 seconds
After: Loading time is < 1 second (~0.17 seconds)

```

### Use Case Documentation of Placeholder Variables and Configuration File URL

We already created chapters in the user documentation around the placeholder variables
and configuration file url. But we didn't provide a real life example of what is
possible to do with it. We caught up on it and added a new section where we explain
what you can achieve with it by using those two features in combination.
You can find the new chapter [here](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.use_cases.config_url_and_placeholder_variables).

### No Branches Filter Option for Tag Push Events

We received reports from users that faced failing workflows on tag pushes on the SCM.
This was caused by the usage of the branches filter. Workflows for `tag_push` events
don't allow the usage of a branch filter, since the tag's do not have a reference to
a certain branch, they a referencing a commit. Therefore we can't apply filters for
branches in these cases. We improved the error messages for this case, so it's not silently erroring
out without any hint of whats wrong. We also added a note in this [section](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.filters.branches_filter) of the user documentation.


{% include partials/_how-to-give-us-feedback.md %}
