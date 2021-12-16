---
layout: post
title: Notifications Feature Release for All Users
category: development
---

We are happy to release the Notifications feature for all the OBS users. :tada:
After testing it with the beta program's users for some months, we believe it is ready to be used by all of you.
From now on, you will be notified about some important events, not only via email or RSS feeds but also via web UI.

You can find detailed descriptions about the feature in our [user documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.notifications.html).

## Where Did My Tasks Go?

Do not panic! The _Tasks_ menu entry has not disappeared. We have simply moved it to a different navigation area.

On large viewports, the _Tasks_ link is now displayed on the left-side menu, under _Places_, and the new _Notifications_
link occupies its place on the top area.

<figure>
  <img src="/images/posts/sprint_109/notifications_tasks_links.png" alt="New position of Tasks and Notifications links" />
  <figcaption>New position of Tasks and Notifications links</figcaption>
</figure>

These are the positions of the links on small viewports:

<figure>
  <img src="/images/posts/sprint_109/notifications_link_mobile.png" alt="New position of links for small viewports" />
  <figcaption>New position of links for small viewports</figcaption>
</figure>

The _Notifications_ menu entry comes with a counter that tells you the number of unread notifications you have.
Click on it to discover the new notifications page which is already available for every single user!

## Notifications Configuration

You might be receiving notifications via email and RSS feeds so far. Now you can also receive them on the web UI.
To do so, you need to configure your notifications first. You can find the link to _Change Your Notifications_
in both the notifications page and your profile page.

<figure>
  <img src="/images/posts/sprint_109/notifications_configuration.png" alt="Link to Notifications configuration" />
  <figcaption>Link to Notifications configuration</figcaption>
</figure>

From there, you can configure which events you want to be notified of and where (email, RSS, web). Not only as an individual but as part of a group.

<figure>
  <img src="/images/posts/sprint_109/notifications_configuration_groups.png" alt="Notifications configuration page" />
  <figcaption>Notifications configuration page</figcaption>
</figure>

## The Notifications Page

This is what the notifications page looks like on large and small viewports:

<figure>
  <img src="/images/posts/sprint_109/notifications_index.png" alt="Notifications page" />
  <figcaption>Notifications page</figcaption>
</figure>

<figure>
  <img src="/images/posts/sprint_109/notifications_index_mobile.png" alt="Notifications page for small viewports" />
  <figcaption>Notifications page for small viewports</figcaption>
</figure>

This page lists the notifications you have received.
You can receive notifications from different events like comments on a package or changes in a request you are involved in, among others.

The notifications themselves have a bit of context of what they are, where they come from, and who is involved.
We display different information depending on the type of notification.

<figure>
  <img src="/images/posts/sprint_109/notifications_detail.png" alt="Notifications detail" />
  <figcaption>Notifications detail</figcaption>
</figure>

On the page, you can also find several filters that will help you narrow down the number of notifications.
You can choose between unread and read notifications and also filter by incoming or outgoing requests, by projects, by groups etc.

<figure>
  <img src="/images/posts/sprint_109/notifications_filters.png" alt="Notifications filters" />
  <figcaption>Notifications filters</figcaption>
</figure>

Read more about the filters and other elements on this page in our [user documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.notifications.html).

## OMG! So Many Notifications!

How do you deal with all those notifications on your notifications page? :scream:

First of all, take advantage of the filters on the left.
Then, once you have read your notifications, you can mark them as read.
Use the different buttons and checkboxes provided to do that.

You can mark each notification one by one. You can mark many of them. But you can even mark all the existing notifications at once.

<figure>
  <img src="/images/posts/sprint_109/notifications_mark.png" alt="Mark notifications as read" />
  <figcaption>Mark notifications as read</figcaption>
</figure>

## Read More

Don't miss any detail about the new Notifications feature. You can find extended documentation [here](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.notifications.html).

You can also check our old blog posts about the topic to know more about the journey we have made:

- [Fresh Notifications and much more](https://openbuildservice.org/2020/03/24/notifications-redesign/)
- [Notifications Round Two!](https://openbuildservice.org/2020/04/27/notifications-round-two/)
- [Left Side Navigation](https://openbuildservice.org/2020/08/17/left-side-navigation/)
- [Lots of Notifications?](https://openbuildservice.org/2020/10/05/lots-of-notifications/)
- [Revisit actions in the left side navigation](https://openbuildservice.org/2020/12/03/revisit-actions-left-side-navigation/)
- [New Filters for Notifications](https://openbuildservice.org/2021/02/15/notifications-new-filters/)
- [Manage and Filter Your Group Notifications](https://openbuildservice.org/2021/10/12/notifications-group-filter/)

{% include partials/_how-to-give-us-feedback.md %}
