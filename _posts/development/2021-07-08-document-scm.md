---
layout: post
title: Common Pitfalls to Avoid in the Continuous Integration with OBS and GitHub/GitLab
category: development
---

Many of you are already playing around with our new beta feature: Source Code Management system (SCM) integration with OBS.
You might have faced some errors during this time. Here you have a list of the most common errors you can face and how to solve them.

Have a look at our previous blog posts regarding the topic to find complete instructions for the SCM integration.
[Improvements for the Continuous Integration with OBS and GitHub/GitLab](https://openbuildservice.org/2021/06/14/scm-integration-improvements/) and
[Continuous Integration with OBS and GitHub/GitLab](https://openbuildservice.org/2021/05/31/scm-integration/).


## Where to See the Errors?
One good place to identify the errors for Github is
Settings -> Webhooks -> Edit webhook -> Recent Deliveries (tab).
<figure>
  <img src="/images/posts/document-scm/github-error-reporting.png" alt="Webhook errors" width="1000px" />
  <figcaption>Github Webhook Errors</figcaption>
</figure>

For Gitlab you can find the errors under Project -> Settings -> Weebhooks -> Edit -> Recent Deliveries (bottom of the page).
<figure>
  <img src="/images/posts/document-scm/gitlab-error-reporting.png" alt="Webhook errors" width="1000px" />
  <figcaption>Gitlab Webhook Errors</figcaption>
</figure>

## Errors & Solutions
Some common errors and their solutions.

- Invalid Yaml file  
OBS assumes that your repository contains a `.obs/workflows.yml` file. To get the idea of how to format the workflows.yml file you can see the sample [here](https://github.com/openSUSE/open-build-service/tree/master/.obs). OBS only considers this file to be present in your base branch and will not consider any updates to this file in other branches.  

- No SCM token provided  
Don't forget to provide your SCM personal access token when you create an OBS workflow token.

- The project and/or package in the yml file doesn't exist on OBS  
Your project and package on OBS must have the same name as it's defined in `.obs/workflows.yml`. 

- The package doesn't build after the webhook is sent
Possible problems:
    - You  didn't add the `_service` file  
    You can check a sample project published on [OBS](https://build.opensuse.org/package/view_file/OBS:Server:Unstable/obs-server/_service?expand=0&rev=424295e96102d316454e624b0a3d1ae3)

{% include partials/_how-to-give-us-feedback.md %}