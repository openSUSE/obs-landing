---
layout: post
title: Notifications round two!
category: development
---

Previously we started to introduce a new notification area in the Open Build Service webui.
The goal of this is to enable the users, to stay on one medium in order to get the work done.
No need to continuously switch between the browser and their email-clients in order to see
where an action is needed. This is about a full-fledged notification system in the UI that
not just shows raw requests in a table.
To reach our aim, we worked out new feature to bring all of this to the next level...

## Notifications page improvements

The notifications now have a bit of context of what they are and where they come from. Notitifications for comments now will display a fragment of that comment, notifications for new reviews have a fragment of the review text, new request notifications have a bit of the request description, and request changes have a bit of information about what changed to what.

Users can mark notifications done and undone again, and they'll be sent to the right comment when clicking on a notification for a new comment.

## Notifications configuration overhaul

We've added new ways of keep users in the loop of their requests. Users can now receive notifications via email, RSS feeds and in the OBS web page Notifications area.

This is configurable, to do it, the Actions menu that appears when you are on the Notifications page has a link to the Notifications configuration page.

There, for each event type, and for each role (Maintainer, Bug owneer and so on) the user can change how is getting those notifications. He or she can, for example get them through all available channels, or just only one, whatever works better.

<img src="/images/posts/notifications_round_two/notifications_configuration.png" alt="Notifications configuration" width="500"/>

## Paginate long lists of notifications

You can't make an omelette without breaking eggs. Users that are involved in a lot of
projects will receive a lot of notifications. Therefore we started to paginate
the list of notifications. This prevents slow page loads and leads to a neatly arranged
list.

<img src="/images/posts/notifications_round_two/notifications_pagination_01.png" alt="Notifications pagination navigation" width="500"/>
<img src="/images/posts/notifications_round_two/notifications_pagination_02.png" alt="Notifications pagination page details" width="500"/>

## All the user's requests have a new home

Previously a user could reach the his/her requests clicking on the "All Requests" tab. After receiving feedback we decided to move it into the "Tasks" link in the "Places" menu.

<img src="/images/posts/notifications_round_two/tasks_link_in_places_menu.png" alt="Tasks link in Places menu" width="500"/>

## And some more minor improvements

We addressed some visual feedback, like:

- Telling the user there are no new notifications in the Notifications page.
- The number of unread notifications appears above the Notifications item in the top menu bar.
