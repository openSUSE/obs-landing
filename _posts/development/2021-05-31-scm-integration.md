---
layout: post
title: Continuous Integration with OBS and GitHub/GitLab
category: development
---

Most of the code you implement nowadays is managed collaboratively through source code management (SCM) systems
like GitHub, GitLab or Pagure. And an increasing number of you also want to handle their package sources with those systems.
While there are various ways to integrate OBS into your SCM, they can definitely be extended and improved.
In today's post, we are sharing the first beta for a deeper integration between SCMs and OBS. 

We have started to implement a scenario that seems to be the most expected one among you:
running an OBS build in your pull/merge request continuous integration cycle. SCM to collaborate, OBS to build.

We are following the process you probably already know from setting up other continuous integration tools:

1. You allow OBS and GitHub/GitLab to talk to each other via tokens
1. GitHub/GitLab tells OBS that a new pull/merge request was opened via webhooks
1. You configure the workflow that should run on OBS in a YAML file stored in your GitHub/GitLab repository
1. OBS executes the workflow you configured
1. OBS reports the status (pending, success or failure) of the workflow to the pull/merge request that was opened

There are some prerequisites we assume you already have. First, if you haven't done it yet,
you have to join [the beta program](https://openbuildservice.org/2018/10/04/the-beta-program/), so you can try this new feature.
And surprise surprise, you will need a repository on GitHub/GitLab and a package on build.opensuse.org you want to integrate! 🤓

Let's set things up.

## Authentication Setup

First of all, we have to make sure that OBS and your SCM service are *allowed* to talk to each other. Tokens are the
way to make this happen.

### 1. Create a GitHub/GitLab Personal Access Token

You have to give OBS permissions to report the build status to the pull/merge request to the SCM on your behalf.

For this, you have to create a personal access token. Check [GitHub's](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and [GitLab's](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#creating-a-personal-access-token) documentation to learn how.

Make sure the access token you generate has *at least* those scopes assigned:

- **GitHub**: `repo`
- **GitLab**: `api`

Note down this access token, you are going to use it in the next step. For our examples, let's say your GitHub/GitLab access token is: `abcdefg`.

### 2. Create a Workflow Token in OBS

You also have to give your SCM permissions to trigger a workflow inside OBS on your behalf.
That's why you need to create an OBS access token.

You can create one using `osc`. Be sure to replace `YOUR_OBS_USERNAME` with your OBS username:

```
$ osc api -X POST "/person/YOUR_OBS_USERNAME/token?operation=workflow&scm_token=abcdefg"
Create a new token
<status code="ok">
  <summary>Ok</summary>
  <data name="token">uvwxyz</data>
  <data name="id">12345</data>
</status>
```

Of course, you should provide your real SCM personal access token here, created in the previous step.
By specifying the operation `workflow` you limit the scope of this token to this kind of operation.
Note down this access token and its ID, you are going to use them in the next step. For the sake of
clarity, let's pretend your OBS access token is: `uvwxyz` and its numerical ID is `12345`.

**WARNING:** Tokens are like the keys to (parts of) your house. You have to keep your token secret
to prevent someone else from triggering operations in your name!

You can always revoke your token and create a new one if you suspect it was leaked by you somehow.

```
osc token # list all your tokens
osc token --delete <token_id> # remove the token with the given id
```

By the way, there are also various other types of tokens in the OBS that can help you to authenticate for
operations in OBS. Check out [the manual](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.authorization.token.html#id-1.5.10.16.4) if you're interested.

## Set Up a Webhook

Now that OBS and your SCM are *allowed* to speak to each other, let's actually make them talk! [Webhooks](https://www.getvero.com/resources/webhooks/) are the way to make this happen.

### On GitHub

In GitHub, you can go to *Settings -> Webhooks*.

<figure>
  <img src="/images/posts/sprint_95_github_webhook_form.png" alt="GitHub Webhook Form" />
  <figcaption>GitHub Webhook Form</figcaption>
</figure>

You have to fill in the form with
- **Payload URL**: `https://build.opensuse.org/trigger/workflow?id=12345`.
  <br /> Replace `12345` with the OBS token numerical ID obtained above.
- **Content type**: `application/json`
- **Secret**: `uvwxyz`.
  <br /> Replace `uvwxyz` with the OBS token secret string obtained above.
- **Enable SSL verification**.
- **Let me select individual events**: `Pull requests`

### On GitLab

In GitLab, you can go to *Settings -> Webhooks*.

<figure>
  <img src="/images/posts/sprint_95_gitlab_webhook_form.png" alt="GitLab Webhook Form" />
  <figcaption>GitLab Webhook Form</figcaption>
</figure>

You have to fill in the form with
- **URL**: https://build.opensuse.org/trigger/workflow?id=12345
  <br /> Replace `12345` with the OBS token numerical ID obtained above.
- **Secret Token**: `uvwxyz`
  <br /> Replace `uvwxyz` with the OBS token secret string obtained above.
- **Trigger**: `Merge Requests`

## Set Up the OBS Workflow

Now that the two services talk to each other, we need to configure what should happen on OBS when a new
pull/merge request is opened. To do so, in the root directory of your GitHub/GitLab repository, create a directory
`.obs` which contains a file called `workflows.yml`.

The content of the file should be:

```
workflow:
  steps:
    - branch_package:
        source_project: home:hennevogel
        source_package: ctris
        target_project: releases
```

- **source_project**: The name of the project that contains the package you want to branch and test build
- **source_package**: The name of the package you want to test build
- **target_project**: The name of the project that will contain the branched package

Now every time this workflow is triggered by a webhook, OBS will branch the
package `ctris` from the project `home:hennevogel` and build it. Depending on
the webhook event, the package will be branched differently. In the case of a
pull request event, `home:hennevogel/ctris` will be branched to
`releases:$SCM_ORGANIZATION:$SCM_PROJECT:PR-$PR_NUMBER/ctris`. For a push event,
`home:hennevogel/ctris` will be branched to `releases/ctris-$COMMIT_SHA`.
Finally, OBS will report back the build results to GitHub or GitLab.

<figure>
  <img src="/images/posts/sprint_95_checks_github.png" alt="Checks GitHub" />
  <figcaption>Checks GitHub</figcaption>
</figure>

<figure>
  <img src="/images/posts/sprint_95_checks_gitlab.png" alt="Checks GitLab" />
  <figcaption>Checks GitLab</figcaption>
</figure>

## Use the SCM Sources in Your OBS package

We have come very far! The services talk to each other, OBS knows what to do and where to report to.
But that's not all, right? You probably also want to make the package, you are testing, use the sources from the pull/merge request.

For this, you can make use of the existing [obs-service-tar_scm](https://github.com/openSUSE/obs-service-tar_scm#user-documentation) service.
obs-service-tar_scm will automatically use the sources of the pull/merge request that triggered it: Magic 🪄

## Current Limitations

As you might notice, in this first beta, we are just triggering operations right after a new pull/merge request is
created. What happens if a new commit is added to the pull/merge request or if someone force pushes some changes?
We don't handle this yet.

Depending on the package you branch, it might build for more than one repository or architecture. Currently
we will report the *last* build result that occurs.

## But More To Come!

Keep an eye on the new blog posts to come, there are a lot more features we plan to work on:

- Handling updates on a existing pull/merge request
- Reporting results for projects with many repositories
- Reporting results for multiple packages
- New workflow steps apart from the `branch_package` one
- Filtering by branch or SCM event
- Managing tokens via UI
- Multiple workflows
- Integrate with more SCM services like Pagure
- OBS triggering webhooks on some other services 

{% include partials/_how-to-give-us-feedback.md %}
