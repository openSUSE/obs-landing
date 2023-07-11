---
layout: post
title: Request Page Redesign - See Diff Comments Outside Beta and Set Bug Owner Action
category: development
---

We have been working on the request workflow redesign and continuously trying to improve it with the help of your feedback. This time we have focused on showing diff comments for non-beta users and a new request type Set Bug Owner.

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}


### Diff comments for non-beta users

The request workflow redesign is currently a beta feature. It is quite possible that some people are using this beta feature and some are not. When you are using the request workflow redesign beta feature you have some extra features that come with it. For example, the possibility of adding diff comments. The members who have not activated this beta feature were not able to see those diff comments and that could cause a communication gap in reviewing process. With these new changes, non-beta users can now see the diff comments added by the users using this beta feature.

<figure>
  <img src="/images/posts/sprint-144-diff-comments-non-beta.png" alt="A screenshot of diff comment for non-beta users" />
  <figcaption>Diff comments view for non-beta users</figcaption>
</figure>

Please note, non-beta users are just able to see the diff comments. It is not possible to create diff comments for non-beta users. To use diff comments you'll have to join request redesign beta program.

### Add Request Actions for Set Bug Owner

A request in OBS can have many types of actions. Until now, the Set Bug Owner actions were not supported in the request workflow redesign feature. This time we have also covered the set bug owner actions, which are used when a user or a group wants to be a Bugowner of a project or a package. The UI is adapted for the Bugowner action to provide action-specific information that can help the reviewers.

<figure>
  <img src="/images/posts/sprint-144-set-bug-owner.png" alt="A screenshot of bugowner action" />
  <figcaption>Bugowner Action</figcaption>
</figure>

### More improvements

We have also worked on highlighting the request description in order to have a better overview for reviewers.

<figure>
  <img src="/images/posts/sprint-144-request-desc.png" alt="A screenshot request description" />
  <figcaption>Request description</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
