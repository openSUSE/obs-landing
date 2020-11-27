---
layout: post
title: Revisit actions in the left side navigation
category: development
---

August this year we started to introduce a new pattern in the webui, the
[left side navigation](https://openbuildservice.org/2020/08/17/left-side-navigation/).
From the technical side this is just working fine, but an important piece was still
missing, called consistency. We heard your feedback, here is what we did...

Should the action end up in the left side navigation or stay contextual in the area it
influences within the main view? No matter which decision is taken, in the end it should
be applied consistently throughout the application. This important part got overlooked
in certain areas. Even us developers were caught thinking about "where is the X option again".

The main reason to move the actions to the left menu was to help the users to easily
find all the possible actions in one spot. The left menu navigation is a widely known
navigation style, and there are many [studies](https://uxmovement.com/navigation/the-fastest-navigation-layout-for-a-three-level-menu/)
supporting it. Scanning just one menu for actions, is easier, especially for new users.
But here things start to get tricky. Sometimes you can take the same kind of action (e.g add, edit)
on different resources. It makes it hard to distinct the actions, particulary in
the collapsed state where only the icon is visible.

<figure>
  <img src="/images/posts/sprint_88_example_repeated_actions.png" alt="Duplicated add action for project repositories">
  <figcaption>Actions to add a repository from different sources to a project</figcaption>
</figure>

That's why we only kept the generic actions, those that affect the
the current resource, in the left side navigation menu. Every action taken here,
will influence the resource you actively navigated to. The reasoning is to
avoid having duplicates of certain actions in the sidebar.

<figure>
  <img src="/images/posts/sprint_88_example_generic_actions_of_project.png" alt="Generic actions in the project view">
  <figcaption>Generic actions in the project view</figcaption>
</figure>

The contextual actions, those that affect associated resources, will stay close to the
corresponding representation in the main view. This way we build up a visual scope
between the action and the resource it's going to act on. Keeping them tight in one
spot will reduce the need of big movements inside the views in order to get
the job done.

<figure>
  <img src="/images/posts/sprint_88_move_contextual_actions.png" alt="Contextual actions of project for associated repositories">
  <figcaption>Contextual actions of project for associated repositories after the adjustments</figcaption>
</figure>

Some actions don't match any of these patterns. They are not generic, but there
is also no representation of the associated resource in the view available. Those
will stay in the sidebar.

Moving around the tools that many of you use on a daily base imply confusion.
Thats is why we acted now, in order to introduce a pattern that enables us to stay
consistent after this get's rolled out of the beta program in the foreseeable future.

{% include partials/_how-to-give-us-feedback.md %}

