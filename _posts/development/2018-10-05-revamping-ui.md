---
layout: post
title: OBS Is Revamping Its User Interface, Help Us to Make It Awesome
category: development
---

{% include partials/_revamping-ui-releases-history.md index="1" %}

We have kicked off the migration to a new user interface for OBS.
We started with the homepage and the package pages.

Here is a comparison of the new and old user interface of the package overview page:

<img src="/images/posts/revamping-ui/comparison.gif" alt="Comparison between new and old user interface of the package overview page" />

We need your feedback to make this even better! We are looking for:

- Bugs, so anything breaking workflows.
- Design feedback, so anything related to the user experience and interface.
- How it works on your device / browser.

Keep in mind that at the moment, we are migrating to the new technology, but
without making significant design and workflow changes. It would be really
confusing for everyone, if from one day to another, we changed the whole
interface. For this reason, design and workflow changes will be progressively
introduced, only after the migration is completed and the new user interface is
enabled for all users.

# How Give Us Feedback

You need to join the [beta program on OBS](/2018/10/04/the-beta-program/) if you
haven't already.

There are two ways to reach us:

- On GitHub, by [opening an
  issue](https://github.com/openSUSE/open-build-service/issues/new/choose)
  and / or [commenting on an already opened
  issue](https://github.com/openSUSE/open-build-service/issues).
- On IRC, by talking directly to us. We are in the channel
  `#opensuse-buildservice` on *Libera.Chat*.

Please note that we favor GitHub to gather feedback as it allows us to easily
keep track of the discussions.

# Why Are We Revamping the User Interface?

We refresh the whole UI to improve your user experience. It includes:

- Improving consistency among the application.
- Responsive pages, so you can use OBS on phones and tablets.
- Modern look and feel.

On top of this, there are benefits for developers and contributors too:

- Improved code consistency, readability and ease of maintenance by using
  Bootstrap's excellent components and utilities.
- Reduced unnecessary technical complexity, effectively helping us in fixing
  bugs and adding UI-related features.

It's a win-win situation for all OBS users, developers and contributors.

# The New Pages

Let's take a tour together to go through the major changes. You will see, the
package pages in the new UI look great!

The overview of a package:

<img src="/images/posts/revamping-ui/package-overview.png" alt="Package overview in new UI">

The repositories configuration for a package:

<img src="/images/posts/revamping-ui/package-repositories.png" alt="Package repositories configuration in new UI">

The revisions of a package:

<img src="/images/posts/revamping-ui/package-revisions.png" alt="Package revisions in new UI">

The changes of package's revision:

<img src="/images/posts/revamping-ui/package-revision-changes.png" alt="Package revision changes in new UI">

The requests for a package:

<img src="/images/posts/revamping-ui/package-requests.png" alt="Package requests in new UI">

The users of a package:

<img src="/images/posts/revamping-ui/package-users.png" alt="Package users in new UI">

The attributes of a package:

<img src="/images/posts/revamping-ui/package-attributes.png" alt="Package attributes in new UI">

The meta configuration of a package:

<img src="/images/posts/revamping-ui/package-meta.png" alt="Package meta configuration in new UI">

{% include partials/_revamping-ui-what-is-coming-next.md pages="Project, User and Group" %}
