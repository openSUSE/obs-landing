---
layout: post
title: The Configuration Pages Are Now Part of the Revamped User Interface
category: development
---

{% include partials/_revamping-ui-releases-history.md index="4" %}

We are one step closer to revamping the whole OBS user interface!

Here is a comparison of the old and new user interface of the main configuration page:

<img src="/images/posts/revamping-configuration-ui/configuration-comparison.gif" alt="Main Configuration Page Comparison" style="width: 80%;" class="center" />

# Architectures

You can now see all architectures at a glance and enable/disable them all at once.
Everything is done through AJAX, thus removing the need for an 'Update' button and saving you a click.

<img src="/images/posts/revamping-configuration-ui/architectures.png" alt="Architectures Page" style="width: 80%;" class="center" />

# Manage Users

This page is now usable with thousands of users.
We only fetch the users to be displayed instead of fetching them all.

We have simplified the 'Actions' column of the table to only show the three most important actions: 'Edit User', 'Send Email to User' and 'Delete User'.
You can still lock/confirm a user and make him/her an Admin, it's all on the 'Edit User' page.

<img src="/images/posts/revamping-configuration-ui/manage-users.png" alt="Manage Users Page" style="width: 80%;" class="center" />

# Manage Groups

These pages were migrated without major changes, except for the group members tab on the group overview page.
We put the focus on the group members and their avatar, displaying them side by side to efficiently use the available space.

<img src="/images/posts/revamping-configuration-ui/group-members.png" alt="Group Members Redesign" style="width: 80%;" class="center" />

# Interconnect

We replaced the unorthodox form and form-filler button combo by a list of default interconnects and a modal to add custom interconnects.

<img src="/images/posts/revamping-configuration-ui/interconnect.png" alt="Interconnect Redesign" style="width: 80%;" class="center" />

# And Much More

We addressed some issues we identified and gathered from your feedback.
Here’s a subset of [what has been fixed and improved](https://github.com/openSUSE/open-build-service/issues?q=is%3Aissue+label%3A%22Bootstrap+%3Arocket%3A%22+is%3Aclosed).

We use modals on a few pages and the text of their submit button used to always be 'Accept'.
It could confuse users depending on the context of the modal, so we aligned the submit button's text to their action.

On the project overview page, the modal for linking projects is now correctly working.

<img src="/images/posts/revamping-configuration-ui/linking-projects.gif" alt="Linking Projects Modal" style="width: 80%;" class="center" />

Timestamps for all pages of the source files table on the package overview page are now relative.
Only the first page of the table used to have relative timestamps.

<img src="/images/posts/revamping-configuration-ui/relative-timestamps-source-files-table.gif" alt="Relative Timestamps for Sources Files table" style="width: 80%;" class="center" />

We also continued using server side pagination for our tables.
Only the data which is displayed will be fetched.
This greatly improves the page loading time on pages with tables having thousands of rows.
We implemented these changes for the packages table on the Project overview page,
the users table on the Manage Users page and the tables on the Subprojects tab for the Project pages.

{% include partials/_revamping-ui-how-to-give-us-feedback.md %}

{% include partials/_revamping-ui-what-is-coming-next.md pages="Search and Maintainance" %}
