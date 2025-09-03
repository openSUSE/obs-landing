---
layout: post
title: "The New Request Workflow in Detail"
category: development
---

The new Request Workflow is already enabled for many of you.
Let's take a closer look at the key improvements and what they mean for you.

## Why We Redesigned the Request Page

With the new UI we introduce an information hierarchy which intends to enhance collaboration.
The redesign separates the information into four tabs: Conversation, Build Results, Changes, and Mentioned Issues.
This will provide a clear and broader idea about the request and will make it easier to find what you need without having to scroll through the entire page.
Users can now focus on important elements like conversations, people involved or workflow steps which were previously lost among other details and code changes.

Compare these two images:

<figure>
  <img src="/images/posts/2025-08-10/old-ui.png" alt="Request old UI">
  <figcaption>Request old UI</figcaption>
</figure>

<figure>
  <img src="/images/posts/2025-08-10/new-ui.png" alt="Request new UI">
  <figcaption>Request new UI with the most relevant details</figcaption>
</figure>

## Key Improvements

### Request Details Header

At the top of the page and always visible, you'll find essential request details such as the number, status, and creator, along with messages that provide additional context like "_Waiting to be staged_" or "_This is a Maintenance Release request_".

<figure>
  <img src="/images/posts/2025-08-10/request_details_header.png" alt="Request new UI">
  <figcaption>Request new UI with the most relevant details</figcaption>
</figure>


### Multiple Actions

Sometimes you have to deal with many actions in one single request.
The new UI provides a dropdown with the whole list of actions and buttons to navigate to the next or previous action. To avoid getting lost, you can mark which of them you have seen already.

<figure>
  <img src="/images/posts/2025-08-10/request-actions-selector.png" alt="Request actions dropdown">
  <figcaption>Request actions dropdown</figcaption>
</figure>

### Conversation Tab

Requests are the means to collaborate in OBS.
The request page is where the contributors talk, review, agree on decisions, and perform actions regarding the proposed changes.
That's why the new design considers the _Conversation_ as the main area of the request. There you can find, in chronological order, both the comments from the contributors and the history of the request.

Among the items of the conversation you can find:

  - comments from the contributors
  - who was involved in the decisions and which role they played (package maintainer, group, etc.)
  - the conversation of a superseded request (collapsed by default)
  - history elements

<figure>
  <img src="/images/posts/2025-08-10/conversation.png" alt="Request conversation area">
  <figcaption>Request conversation area</figcaption>
</figure>

Right before the conversation timeline, you can find the description of the request and the patchinfo details.

<figure>
  <img src="/images/posts/2025-08-10/patchinfo.png" alt="Patchinfo and description">
  <figcaption>Patchinfo and description</figcaption>
</figure>

### Review Area

Next to the Conversation you can find the Review Area.
From there you can ask for reviews or see the list of reviewers and project maintainers.

<figure>
  <img src="/images/posts/2025-08-10/review_area.png" alt="Review area">
  <figcaption>Review area</figcaption>
</figure>

### Review Summary

To help you out with the decision-making, we display a summary of the reviews right before the buttons to accept, revoke, decline, etc.

<figure>
  <img src="/images/posts/2025-08-10/reviews_summary.png" alt="Reviews summary">
  <figcaption>Reviews summary</figcaption>
</figure>

### Grouped Actions

In the old UI there were a wide variety of buttons and checkboxes spread all over the page, that, sometimes combined, allowed you to perform different actions on the current request.
Right now, all the relevant actions are placed together as buttons or dropdown buttons in the area designated to take a decision regarding the request.

<figure>
  <img src="/images/posts/2025-08-10/grouped_actions.png" alt="Grouped actions">
  <figcaption>Grouped actions</figcaption>
</figure>

### Build Results Tab

In the context of a request, the build results used to be displayed on a small area on the right side of the page. There, the scroll was the only tool you had to find what you wanted to focus on.

After the redesign, the build results tab occupies the whole width of the page.
In this tab you can have a general overview of the status of all the build results.
We have organized the results in a way that the most relevant information catches your attention first.
Results that are disabled/excluded/unknown are not visible at first glance.
Moreover, the build results area comes with a powerful tool: a filter that helps you find what you need easily.

<figure>
  <img src="/images/posts/2025-08-10/build-results.png" alt="Build results area">
  <figcaption>Build results area new design</figcaption>
</figure>

But that's not all; right after you open a request page and before moving to the Build Results tab, you can also see the Build Result Summary chart.
The chart is only displayed when there is a long list of repositories involved in the builds.
We invite you to click on the bars to get more information.

<figure>
  <img src="/images/posts/2025-08-10/build_summary_chart.png" alt="Build Results Chart">
  <figcaption>Build Results Chart</figcaption>
</figure>

### RPM Lint

We applied the same idea we had for the Build Results to the RPM Lint Results: providing an overview first of all.
You no longer have to dig through the whole file to find problems. We've added a new graphic that gives you a quick overview of all the errors and their severity, so you can see what needs your attention right away.

<figure>
  <img src="/images/posts/2025-08-10/rpm_lint.png" alt="RPM Lint Chart">
  <figcaption>RPM Lint Chart</figcaption>
</figure>

You have the link to the RPM Lint on each build result badge.

<figure>
  <img src="/images/posts/2025-08-10/rpm-lint-link.png" alt="RPM Lint Link">
  <figcaption>Link to the RPM Lint on the build results</figcaption>
</figure>

### Changes Tab

Another key area is the Changes Tab. To have a conversation about code changes, it's important to point out some lines of code.
That's why now it's possible to add comments on added, changed, and removed lines.
Those comments added to the changes will also be displayed as part of the Conversation.

<figure>
  <img src="/images/posts/2025-08-10/changes.png" alt="Changes tab">
  <figcaption>Changes tab</figcaption>
</figure>

### Mentioned Issues

The issues mentioned in the changes files are shown on their own tab.
We not only provide the link to the issue but its status and description if any.

<figure>
  <img src="/images/posts/2025-08-10/mentioned-issues.png" alt="Mentioned issues">
  <figcaption>Mentioned issues</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
