---
layout: post
title: Request Page Redesign - Diff Comments, Request Actions for Role Additions, and More
category: development
---

For some time now we have been working on the request page redesign. This time we have focused on adding comments on changed or removed lines in a diff, supporting add role requests, and enhancing the requests with multiple actions.

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}


### Comments on Diffs

A review process is incomplete until it is possible to have a conversation about code changes. Sometimes a reviewer would like to know the reason for a specific change, or the creator of the request would like to point out a line of code they have changed in their request. It is easy to lose track of conversation when the process is not seamlessly defined. That's why now it is possible to add comments on changed and removed lines.

<figure>
  <img src="/images/posts/sprint-135-diff-comments.png" alt="A screenshot of diff comment" />
  <figcaption>Diff comment</figcaption>
</figure>

Please bear in mind that this is only the first step. There are more updates yet to come like notifying the involved users when someone writes a comment on a diff or displaying that comment in the general conversation tab.

### Add Request Actions for Role Additions

A request in OBS can have many types of actions. Until now, the redesign had focused on the submit actions only. This time we have also covered the role addition actions, which are used when a user or a group wants to be a Maintainer or Bugowner of a project or a package. The UI is adapted for the add role actions to provide action-specific information that can help the reviewers.

<figure>
  <img src="/images/posts/sprint-135-add-role.png" alt="A screenshot of add role action" />
  <figcaption>Add Role Action</figcaption>
</figure>


### Next And Previous Buttons

To address requests with many actions we already have a dropdown with the list of actions. This time we have taken it one step forward and introduced the next and previous buttons to navigate between the request actions.

<figure>
  <img src="/images/posts/sprint-135-next-prev-buttons.png" alt="A screenshot of next and previous buttons" />
  <figcaption>Next And Previous Buttons</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
