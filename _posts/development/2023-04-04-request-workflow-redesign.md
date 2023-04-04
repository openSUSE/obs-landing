---
layout: post
title: Request Page Redesign - Two More Action Types and Better Comments on Changes
category: development
---

We are back to working on the request page redesign. This time we have focused on improving comments on lines in the Changes tab, enhancing the requests with multiple actions and supporting requests that intend to delete projects/packages and to change the development package of a package.

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}


### Comments on Changes Improvements
After adding the comments on submit action changes last time around, we received a lot of valuable feedback from users on the ways to improve them. We tackled some:
- displaying changes comments in the Conversation tab,
- notifying the involved users after a new changes comment is written, and
- implementing speed improvements to the page.

In the Changes tab, the files containing changes comments will now be expanded by default as well.

<figure>
  <img src="/images/posts/sprint-137-diff-comments.png" alt="A screenshot of changes comment" />
  <figcaption>Comments on Changes in the Conversation tab</figcaption>
</figure>

### Add Request Actions for Deleting Packages and Projects
Besides reviewing adding and modifying packages and projects, it's important to have a way to review removing them. For this reason we focused on adding request action support to do that.

<figure>
  <img src="/images/posts/sprint-137-remove-package.png" alt="A screenshot of remove package action" />
  <figcaption>Remove Package Action</figcaption>
</figure>

### Add Request Actions for Changing the Development Package
The development of large package repositories is made easier with packages being first updated and built in smaller projects/packages. OBS offers a way to do that with the Development Package (Devel Package) concept. A user can request to change the development from one package to another, which can now be reviewed in the beta review workflow.

<figure>
  <img src="/images/posts/sprint-137-change-devel.png" alt="A screenshot of change development project action" />
  <figcaption>Change Development Project Action</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
