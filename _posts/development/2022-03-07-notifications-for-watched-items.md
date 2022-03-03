---
layout: post
title: What You Watch Is What You Get
category: development
---

In our previous blog post, we announced a new beta feature that allows you to add packages and requests to your watchlist, not only projects.
With that improvement, what really matters is more accessible for you.
But this time, we have gone one step further and you can also start receiving notifications about relevant events related to those packages and requests you have in your watchlist.

## You Watch It, You Get A Notification About It

We invite you to move to the Notifications page and then click on the "Change Your Notifications" link on the Actions menu.
There, you can configure which events you want to be notified about and through which channels (email, web or RSS), depending on the relationship you have with the involved item.
Let's use an example to clarify this.

<figure>
  <img src="/images/posts/sprint_113/notifications_watched_target_project.png" alt="Notifications for watched target project" />
  <figcaption>Notifications for watched target project</figcaption>
</figure>

Following the configuration in the previous image,
if the **project** `home:scp` is in your watchlist, you will get emails
when people submit requests towards packages that belong to the project you are watching.
This functionality is not new.

What is new is that you can now configure something similar for packages.

<figure>
  <img src="/images/posts/sprint_113/notifications_watched_target_package.png" alt="Notifications for watched target package" />
  <figcaption>Notifications for watched target package</figcaption>
</figure>

This way, if the **package** `home:scp/hello_world` is in your watchlist,
you will get an email and a web notification
if the request related to the package you are watching changes its state.

This improvement helps you narrow down the number of notifications you get.
You can now decide which packages you are interested in, by adding them to the watchlist.
Then, you will be notified about the requests related to those packages only, not all the packages belonging to the watched project.

And as if that weren’t enough, your configuration can be even more precise if you enable the notifications only for a **request** you are interested in.
Simply add the request to your watchlist and configure the notifications as shown in the next image.

<figure>
  <img src="/images/posts/sprint_113/notifications_watched_request.png" alt="Notifications for watched request" />
  <figcaption>Notifications for watched request</figcaption>
</figure>

To sum up, being able to configure notifications for projects, packages and requests you are watching opens a wide range of possibilities and allows you to decide which specific notifications you want to receive. Give it a try! But don't forget to join [the beta program](/2018/10/04/the-beta-program/) first.

## More To Come

There are more improvements to come for the notifications.
Would you like to be notified if someone adds you as, let's say, maintainer of a project?
Stay tuned, this improvement is on our table right now and we will come up with this and other new types of notifications soon.

{% include partials/_how-to-give-us-feedback.md %}

