---
layout: post
title: 'Notifications: Improved Token and Role Transparency'
category: development
---

We have just deployed some updates to build.opensuse.org focused on permission transparency. Our goal is to ensure that OBS users and administrators stay informed in real-time about who can access their resources.

### Token Access Notifications

Whoever sets a token for a SCM/CI integration in OBS, can also share the token with their colleagues.
Therefore, they can see the workflow runs and manage the token on their behalf.
OBS now automatically notifies users and groups whenever they are added to or removed from a token
to ensure they are properly informed.

### Global Roles Shifts

All current Admins, Staff, and Moderators will now be notified whenever a new member is appointed to any of these roles.
This ensures constant visibility over high-level privilege changes.

### Stay Informed

If you haven't yet, we encourage you to use web notifications. Start by [subscribing](https://build.opensuse.org/my/subscriptions) so you never miss a critical update.
Haven't tried them yet? Now is the perfect time to stay on top of your workflow and in the loop.

<figure>
  <img src="/images/posts/2026-04-29/notifications.png" alt="Screenshot of the notifications page" />
  <figcaption>Notifications Page</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
