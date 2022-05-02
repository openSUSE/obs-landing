---
layout: post
title: Notify Me If You Need Me
category: development
---

Would you like to be notified if someone adds you as, let's say, maintainer of a project?
We know many of you would, we have read your feedback 😉 and that's the reason why we have introduced
two new types of notifications. OBS can now inform you when someone adds or removes you from a project or
package with any kind of role.

# Relationship Events Subscription

First of all, you need to be subscribed to the new events:

- **Relationship was created**: when someone adds you or your group to a project or package, with any role.
- **Relationship was deleted**: when someone removes you or your group from a project or package, no matter the role you had.

You can do it from _Profile > Change Your Notifications_.

<figure>
  <img src="/images/posts/sprint_117_subscriptions.png" alt="Subscription to Relationship events">
  <figcaption>Subscription to Relationship events</figcaption>
</figure>

# What Do Relationship Notifications Look Like?

Once you subscribe to the relationship events for the web channel, you will start receiving the new type of notifications.
They will contain the following information:

- which project or package is involved,
- which role is involved,
- if you were added or removed,
- who did it.

<figure>
  <img src="/images/posts/sprint_117_relationship_notifications.png" alt="Web notifications for Relationship events">
  <figcaption>Web notifications for Relationship events</figcaption>
</figure>

# Narrow It Down

With the new event subscriptions also come new filters: Roles Granted and Roles Revoked. Use them to narrow down the results.

<figure>
  <img src="/images/posts/sprint_117_relationship_filters.png" alt="Filters for Relationship events">
  <figcaption>Filters for Relationship events</figcaption>
</figure>

# And What About The New Watchlist?

Attending to your feedback, we have also worked on improving our new Watchlist you can find under the [the beta program](/2018/10/04/the-beta-program/).

- The lists of projects and packages inside the watchlist are alphabetically sorted.
- You can directly remove the items in the list without going to the specific pages.
- The list of requests is a bit more descriptive now that we display the type of action, but if you need further information you can hover over the question mark icon to reveal more details.

<figure>
  <img src="/images/posts/sprint_117_watchlist.png" alt="Improvements in the Watchlist">
  <figcaption>Improvements in the Watchlist</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
