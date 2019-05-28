---
layout: post
title: The Search and Kiwi Editor Pages Are Now Part of the Revamped User Interface
category: development
---

# Revamping Search & Kiwi Editor

Another Milestone for the Revamped User Interface, now for the Search and Kiwi Editor pages.

We also reduced the number of open issues related with the revamping of the user interface.

Thank you for all the reports, please keep them coming!

{% include partials/_revamping-ui-releases-history.md index="6" %}

# Search

The Search page was splitted in two.
This aims to improve the usability by clearly having a search for projects and packages on one page while on a new page, a search based on issues which is under the Issues tab.
Some filters were moved from the Advanced section to outside.

<img src="/images/posts/revamping-search-ui/search-package.png" alt="Search Package" style="width: 80%;" class="center" />

The Search Owner page has also been improved.
The maintainers/bugowners are not displayed as a simple list anymore. Their avatar is more prominent and their name/login can be easily copied.
It's also easier to contact maintainers/bugowners, which is now only a click away with the new email links.
The form is now more intuitive, with filters directly displayed under the search box.
Oh and of course, this page is also responsive.

<img src="/images/posts/revamping-search-ui/search-owner.png" alt="Search Owner" style="width: 80%;" class="center" />


# Image Template

The Image Template was also moved to Bootstrap. For those who don't know about this functionality,
we provide a list of pre-configured image configurations which for the most part, are based on the various openSUSE and SUSE distributions.

<img src="/images/posts/revamping-search-ui/image-template.png" alt="Image Template" style="width: 80%;" class="center" />


# Kiwi Editor

The Kiwi Editor was almost entirely migrated by [@hellcp](https://github.com/hellcp). He did a great job!
Only a few tweaks were needed to complete migration.

<img src="/images/posts/revamping-search-ui/kiwi-editor-1.png" alt="Kiwi Overview" style="width: 80%;" class="center" />


This migration also introduces some improvements in the UI, like the packages list which is now orderly.
Thanks to @hellcp for his contribution.

<img src="/images/posts/revamping-search-ui/kiwi-editor-4.png" alt="Kiwi Software" style="width: 80%;" class="center" />


# Contribution Graph

[@coolo](https://github.com/coolo/) and [@Ana06](https://github.com/Ana06) worked on an awesome contribution graph to show an overview
of a user's contributions. These include requests, comments and reviews. This new feature is on the user profile page.

<img src="/images/posts/revamping-search-ui/contribution-graph.png" alt="Contribution Page" style="width: 80%;" class="center" />

# Fixed Issues

We now display the review box only for requests which can be reviewed.

Error messages are displayed on the groups/users pages when something goes wrong.
It wasn't the case before whenever adding users/groups.

We migrated the modal to submit/revert a revision on the revision diff page.

{% include partials/_revamping-ui-how-to-give-us-feedback.md %}
