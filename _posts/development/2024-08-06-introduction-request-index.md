---
layout: post
title: New Feature! - Unified Page to List Requests Across OBS
category: development
---

We kicked off a new feature in OBS.
The goal is to have a unified way of listing requests for all the different places like packages, projects and what is currently found under "Tasks".
We started this by porting some of the core functionality of the "Tasks" page to the new unified version with a couple of search and filter options.
The `Request Index` feature is part of the [beta program](/2018/10/04/the-beta-program/) and the requests list can be found under `Requests` on the on the _Places_ menu.

### List All, Incoming and Outgoing Requests

The look and feel of the new requests page might feel familiar to you in case you are a user of the web notifications.
Right now we support listing all the requests, as well as filtering them by your incoming and outgoing ones.
Basically what you already know from the "Tasks" page.

### Other Currently Supported Filter Options

As of now we allow filtering the requests by

- one or multiple creators,
- action types (like Submit Requests, Role Change, Delete Request etc.),
- requests states.

All those filters can be combined to fine-grain the resulting list of requests.
More filter options will follow!

### Search through Requests

The search field found on the page supports searching through the requests by its description or the text of comments and reviews associated with it. This allows you to quickly find a request even if you just remember some words of a sentence related to it.

<figure>
  <img src="/images/posts/2024-08-06/screenshot-request-index-beta.png" alt="Screenshot of the new requests page" />
  <figcaption>The Requests Page</figcaption>
</figure>

### Outlook and Feedback

These are just the first steps towards a unified version to list and manage requests across OBS.
Many things are already on the TODO list.
But as always, we appreciate your feedback!
Let us know what you think, miss or would do differently.

{% include partials/_how-to-give-us-feedback.md %}



