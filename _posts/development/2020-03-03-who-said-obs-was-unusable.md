---
layout: post
title: Who Said OBS Was Not Responsive?
category: development
---

If you believe so, we're hopefully going to change your opinion next time you surf OBS within our [beta program](https://openbuildservice.org/beta/).
In the last two weeks, we kept working in improving responsiveness following a mobile-first approach.
Lots of issues were fixed and a bunch of changes were made.

## What's New?

We have focused on specific components, most of them widely used in several parts of the application:

### Datatables

We changed how the search box and the pagination look like, mainly to have them fit on smaller screens.
We also fixed some issues when switching tabs on the page of a user's tasks, where the tables were overflowing the main container.

<img src="/images/posts/who-said-obs-was-unusable/datatables-search-box.png" alt="Datatables Search Box" style="width: 30%;" class="left" />
<img src="/images/posts/who-said-obs-was-unusable/datatables-pagination.png" alt="Datatables Pagination" style="width: 30%;" class="right" />
<img src="/images/posts/who-said-obs-was-unusable/datatables-fix-tab.png" alt="Datatables Fix Tab" style="width: 30%;" class="right" />

There are still other tables that we have to look into for different resolutions.
In the end we want to have a shared look and feel for all of them.

### Build Results

We have been rethinking the build results, added some features and also fixed some issues.
One of the most relevant features is the refresh button which is now sticky to the build result area.
So for extensive build result list, you don't need anymore to go up to refresh the view.
This button was also moved to the right side to make it more thumb-friendly in mobile devices.

<img src="/images/posts/who-said-obs-was-unusable/sticky-refresh-button.gif" alt="Sticky Refresh Button" width="400" />

Another feature, closely related to the previous one, enables you to collapse the build results of multibuild targets.
This way you can focus only on the results of packages you are interested in.

<img src="/images/posts/who-said-obs-was-unusable/multibuild-collapsible.gif" alt="Multibuild Collapsible" width="400" />

And last but not least, tooltips were removed in favor of a bigger help content section, showing all the help information for a particular build result.

<img src="/images/posts/who-said-obs-was-unusable/build-result-context-help.gif" alt="Multibuild Collapsible" width="400" />

### Modals

In the past, we might have been a bit overly enthusiastic regarding modals.
They are quite present throughout the application.
In some cases, they are the right component to use.
In other instances, there are way better alternatives to modals.

This is what we are working on addressing as of today.
Depending on what we're achieving with the various modals, they will either stay or be replaced.
Modals used to confirm actions will stay as they are a good choice when users need to focus on an action and confirm it.
As for creating, editing and displaying data in a modal, this will all change.
Creating and displaying data is going to be on a page instead of a modal.
We will favor inline editing whenever possible instead of having a modal for editing data.
This all boils down to improve the experience of users on devices with smaller viewports.
Modals, especially those for creating and editing data, are often completely filling up the screens of such devices.
This is what we want to avoid.

This was the case of showing the GPG Key and the SSL Certificate of a project:

<img src="/images/posts/who-said-obs-was-unusable/gpg-key-and-ssl-certificate.png" alt="GPG Key and SSL Certificate" width="400" />

### Navigation

We did an extensive research regarding navigation components (navigation bars, tabs, breadcrumbs, contextual links, ...).
Stay tuned.
In the next weeks, we will provide a nice and coherent solution to make it easier to view and navigate through what matters to you.


## Try It out and Give Us Some Feedback

This time, we received fast feedback about some changes made in the beta program regarding improvement of responsiveness.
These issues were created from the feedback of OBS' users:
- [Unreadable package names on project#monitor](https://github.com/openSUSE/open-build-service/issues/9145)
- [Refresh button in repository view drags a white rectangle with it hiding repositories](https://github.com/openSUSE/open-build-service/issues/9157)

This allowed us to fix them before the majority of users noticed.
We appreciate that and we thank you!

Please keep sending us feedback.
And if you haven't done it already, please join [the beta program](https://openbuildservice.org/beta/), try the new features and tell us what you think about them.

There are two ways to reach us:
- On GitHub, by opening an issue and / or commenting on an already opened issue.
- On IRC, by talking directly to us. We are in the channel #opensuse-buildservice on Libera.Chat.

Please note that we favor GitHub to gather feedback as it allows us to easily keep track of the discussions.
