---
layout: post
title: Notifications - Report of Build Failures for Web Notifications
category: development
---

You might already use the email channel to get notified about build failures
on package builds. From now on you can also subscribe to receive those
notifications through the web channel and review them directly in the
Open Build Service.

The checkboxes in the `my/subscription` area, that used to be disabled, are
now usable. Just check the ones you are interested in for the web channel
and start to receive the notifications for build failures through the
web interface.

<figure>
  <img src="/images/posts/event_subscription_build_fail_web_channel.png" alt="A screenshot of the event subscriptions for build failures" />
  <figcaption>Event Subscription for Build Failures</figcaption>
</figure>

As with the other types of notifications, we provide a filter for them.

<figure>
  <img src="/images/posts/build_failure_notifications_and_filter.png" alt="A screenshot of build failure notifications and filter" />
  <figcaption>Filter Build Failure Notifications</figcaption>
</figure>

### No Notifications for User and Group Role Changes Triggered by Yourself

Previously you received notifications about role changes even when
they were caused by yourself (in case you are subscribed to the relationship
create or delete events). For example when you create a new
project, you are becoming the maintainer of it by default. Do you want to get
notified about that? Probably not, you know you've created it and you are the
maintainer. So we considering those cases now and don't send out a notification
anymore.

{% include partials/_how-to-give-us-feedback.md %}
