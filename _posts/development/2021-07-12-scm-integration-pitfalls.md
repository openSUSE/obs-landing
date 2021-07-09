---
layout: post
title: Common Pitfalls to Avoid in the Continuous Integration with OBS and GitHub/GitLab
category: development
---

Many of you are already playing around with our new beta feature: Source Code Management (SCM) system integration with OBS. You might have faced some errors during this time.

{% include partials/_series-of-posts-about-scm-integration.md %}

Here you can find a list of the most common pitfalls you can face and how to solve them.

### Not Authorized

**Error message:** "You are not authorized to create this Token/workflow."

This SCM integration feature is only available for users in the beta program. Please [join the beta program](/2018/10/04/the-beta-program/) in OBS to be able to use this new feature.

### Non-existent YAML Configuration File

**Error message:** ".obs/workflows.yml could not be downloaded on the SCM branch <branch_name>".

The feature requires that your SCM repository contains a `.obs/workflows.yml` file. OBS only considers this file in your default branch (i.e master or main) and will not consider this file in other branches or forks.

Make sure you place the configuration file in the default branch before you set up your webhooks.

### Invalid YAML Configuration File

**Error message:** "Invalid workflow step definition", "Unsupported filters" or "Filters <filter_names> have unsupported keys."

To get an idea of how to format the `.obs/workflows.yml` file, you can see a sample [here](https://github.com/openSUSE/open-build-service/tree/master/.obs/workflows.yml). You can find some guidelines in this article:
[Continuous Integration with OBS and GitHub/GitLab](/2021/05/31/scm-integration/).

 [YAML Checker](https://yamlchecker.com) can help you too.

### Invalid SCM Token

**Error message:** "Bad credentials".
  
If the SCM token is not correct you'll receive this error. To resolve this you can create a new OBS workflow token with valid SCM token and delete the existing one. `osc token -d <token_id>` can be used to delete the token and Check sections 1 and 2 of [Continuous Integration with OBS and GitHub/GitLab](/2021/05/31/scm-integration/) for more details.

### Non-existent Project or Package

**Error message:** "Project not found <project>" and "Package not found <package>".

In the configuration file `.obs/workflows.yml`, you have to specify the name of the project and package you want to connect with the SCM.

Make sure the project and package really exist in OBS before you set up the webhook.

### Missing or Invalid `_service` File

The OBS package you are going to use in the integration should contain a `_service` file pointing to the right SCM repository and branch, as it's described 
in the [Use the SCM Sources in Your OBS package](/2021/05/31/scm-integration/) section of a previous blog post. If the `_service` file is not setup correctly 
the package will still be able to build but it will not contain the latest changes from your target branch.

You can check a sample of `_service` file published on [OBS](https://build.opensuse.org/package/view_file/OBS:Server:Unstable/obs-server/_service?expand=0&rev=424295e96102d316454e624b0a3d1ae3).

### No Build Result Updates Are Displayed in Your PR/MR
If somehow a package can't be build, then the status of the check in your pull/merge request will never change. Some of the more frequent causes of packages not building are:
- A build is unresolvable
- A build is broken
- No repositories defined on your source project
You should check the project directly on OBS and [help each other](/support) with problems.

### Where to See the Errors?

Some errors you will also see in your pull/merge request or in OBS itself. Once you set the webhooks, you can detect the errors returned by OBS in the webhook response.

In GitHub, you can find them in:
Settings -> Webhooks -> Edit webhook -> **Recent Deliveries** (tab)

<figure>
  <img src="/images/posts/document-scm/github-error-reporting.png" alt="Webhook errors" width="1000px" />
  <figcaption>GitHub Webhook Errors</figcaption>
</figure>

In GitLab, you can find them under:
Project -> Settings -> Webhooks -> Edit -> **Recent Deliveries** (at the bottom of the page).

<figure>
  <img src="/images/posts/document-scm/gitlab-error-reporting.png" alt="Webhook errors" width="1000px" />
  <figcaption>GitLab Webhook Errors</figcaption>
</figure>
