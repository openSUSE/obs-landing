---
layout: post
title: Token Party!
category: development
---

With the introduction of the workflows, a wide range of integrations became available for individual users. Now those integrations start to get interesting at team level too. But, until now, you could not use the same workflow token with a group of users. We've fixed that for you. 

{% include partials/_series-of-posts-about-scm-integration.md %}

# One Token To Rule Them All

Let's say a group of maintainers automated the rebuild of packages when new commits are pushed into their associated GitLab repositories. To do that, those users needed a Workflow Token, and that token is bound to a single user. The only way to trigger the workflow by more than one user was to share the user credentials.

It works, but it's far from perfect.

A better solution is to share that workflow token with your colleagues. Now, you can add other users and groups as owners of a workflow token, and those users will be able to add and remove other users and groups as well. It's perfect for team collaboration, because your colleagues can help you to manage and trigger your workflows.

To do it you need to go to the Token page you want to share. There you'll notice a new icon.

<figure>
  <img src="/images/posts/sprint_120_token_page.png" alt="The Token Page" style="width: 80%">
  <figcaption>The Token's page</figcaption>
</figure>

Click on it and you'll get to the Token User page. From there, you can add single users or whole groups, whose users will be able to work with those tokens also.

<figure>
  <img src="/images/posts/sprint_120_token_users_page.png" alt="Token Users Page" style="width: 80%">
  <figcaption>The Token's users page</figcaption>
</figure>

As always, try it and tell us what you think!

{% include partials/_how-to-give-us-feedback.md %}
