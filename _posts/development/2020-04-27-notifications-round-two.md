---
layout: post
title: Notifications Round Two!
category: development
---

Previously we started to introduce a new notification area in the Open Build Service web interface.
The goal of this is to enable the users to stay on one medium to get the work done.
There is no need to continuously switch between the browser and email-clients to see where some actions are needed.

In the end, we want this to be a full-fledged notification system in the user interface that helps you to keep track of all the things that might require your action.
Like answering the comments another packager has left on your project.
Or keeping track of the state and reviews of the submit requests you've sent or received.


## Notifications Configuration Overhaul

We've added new ways of keeping you in the loop of your requests.
Since a couple of weeks, you were receiving notifications via email, RSS feeds and on the notifications page.

Now, you can configure under which conditions you receive each type of notification (email, RSS and web).
This is can be done on the notifications configuration page.

<img src="/images/posts/notifications_round_two/notifications_configuration.png" alt="Notifications configuration" width="600"/>


## Notifications Filtered by Project

When we are checking the notifications page, sometimes we are only interested in notifications related to a certain project.
For that, we added a new filter to display unread notifications grouped by project.


<img src="/images/posts/notifications_round_two/notifications_project_filter.png" alt="Notifications pagination navigation" width="600" />

## Paginate Long Lists of Notifications

You can't make an omelette without breaking eggs.
Users that are involved in a lot of projects will receive a lot of notifications.
Therefore we started to paginate them.

<img src="/images/posts/notifications_round_two/notifications-pagination.gif" alt="Notifications pagination" width="600" />


## All User's Requests Have a New Home

In our first version of the notifications page, a user could reach his/her requests by clicking on the "All Requests" tab.
After receiving feedback we decided to bring the tasks page back, where the requests can be found.
However, the "Tasks" link has been moved into the "Places" menu.


<img src="/images/posts/notifications_round_two/tasks_link_in_places_menu.png" alt="Tasks link into the Places menu" width="600" />


## Notifications Page Improvements


#### Read / Unread

From now on, the notifications can be marked as "read" or "unread":

<img src="/images/posts/notifications_round_two/notification-read-unread.gif" alt="Notification read/unread link" />


#### Show More Information in Notification

Also the notifications now have a bit of context of what they are and where they come from.
For each kind of notification, we display an excerpt of relevant information:

<img src="/images/posts/notifications_round_two/notification_excerpt.png" alt="Notification excerpt" />

The new information displayed is the comment's body, the request's description and the review's reason.


#### And Some More Minor Improvements

We addressed some visual feedback, like:

- Display a message when there are no notifications in the Notifications page.
- The number of unread notifications appears above the "Notification" icon in the top menu bar.


## Try It out and Give Us Some Feedback

If you haven't done it already, please join [the beta program](https://openbuildservice.org/2018/10/04/the-beta-program/), try the new features and tell us what you think about them.

There are two ways to reach us:
- On GitHub, by opening an issue and / or commenting on an already opened issue.
- On IRC, by talking directly to us. We are in the channel #opensuse-buildservice on Freenode.

Please note that we favor GitHub to gather feedback as it allows us to easily keep track of the discussions.
