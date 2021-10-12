---
layout: post
title: Manage and Filter Your Group Notifications
category: development
---

After a long break, we're back with improvements for the notifications feature part of the [beta program](https://openbuildservice.org/2018/10/04/the-beta-program). Based on your feedback, we have introduced filters for your group notifications, a button to mark all your notifications as read and a notifications API.

## Group Filters

On the `My Notifications` page, you can now filter notifications by groups. Here's how it looks:

<figure>
  <img src="/images/posts/sprint-104-group-notifications.png" alt="Group notifications" width="1000px" />
  <figcaption>Group notifications</figcaption>
</figure>

## Manage Group Subscriptions

You can subscribe to the events from your groups on the [My Subscriptions](https://build.opensuse.org/my/subscriptions) page.
You will be notified in the web interface, by RSS, and via emails depending on the subscriptions you set for each event. 

## Mark All Notifications as Read

Previously, it wasn't possible to mark all your notifications as read. You could only select up to 300 notifications at once and then mark them as read.
Now, the sky is the limit! Marking _all_ your notifications as read is now possible.

## Notifications API

Last but not least, we introduced a new API to help you as a power user in reading your notifications. For now, this is only for requests and it supports `projects` filter.

```
osc api '/my/notifications?project=home:Admin'
```
You can find the API documentation [here](https://build.opensuse.org/apidocs-new)

{% include partials/_how-to-give-us-feedback.md %}