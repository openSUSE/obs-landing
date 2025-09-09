---
layout: post
title: "The New Request Workflow in Detail"
category: development
---

After a couple of months beta testing, the new request workflow user interface is enabled for everyone now.
Let's take a closer look at the key improvements and what they mean for you.

Working together on software in an OBS request brings a lot of information. A conversation between people/tools about the changes proposed, the changes to the sources (the patch!) and, as OBS is about building binary packages from sources, the builds of the proposed changes.

With the old user interface (UI) all of this information was stuffed onto one page without any particular order. To enhance collaboration we introduced a hierarchy for the information to help everyone to understand, navigate and collaborate on requests as easy as possible.

## Request Details

At the top of the page and always visible, you'll find essential request details such as the number, status, and creator, along with messages that provide additional context like "_Waiting to be staged_" or "_This is a Maintenance Release request_".

<figure>
  <img src="/images/posts/2025-09-11/request_details_header.png" alt="Request new UI">
  <figcaption>Request new UI with the most relevant details</figcaption>
</figure>

## The Default Tab (Conversation)

### Conversation / History

The most important aspect about collaboration on the OBS is the people that talk, critique and find an agreement about proposed changes.
That is why the new design considers the _Conversation_ and _History_ the most important information about the request.

Here you can find the whole history of the request in chronological order.

<figure>
  <img src="/images/posts/2025-09-11/conversation.png" alt="Conversation">
  <figcaption>The Conversation/History of a Request</figcaption>
</figure>

### Reviews

To reach an agreement among people about proposed changes, reviewer need to give a formal verdict. Reviews are an equal important part of the collaboration process. That is why we show the reviews and their status right next to the conversation.

From this section of the page you can also involve more people and give your own verdict on the proposed changes.

<figure>
  <img src="/images/posts/2025-09-11/conversation_reviews.png" alt="Reviews">
  <figcaption>Reviews of a Request</figcaption>
</figure>

### Making a decision

The lower part of the page is all about making a decision after reviewing the requests conversation, reviews, changes and build results.

To help you to understand if you can make this decision, we again display a summary of the build results and the reviews right before the buttons to make a decision.

<figure>
  <img src="/images/posts/2025-09-11/conversation_decision.png" alt="Making a decision">
  <figcaption>Making a decision about a Request</figcaption>
</figure>

There are different ways to accept a request, depending on what you want to happen afterward. In the new interface we grouped all the actions together into one "accept button" to make it more obvious what happens afterward.

<figure>
  <img src="/images/posts/2025-09-11/conversation_accept_button.png" alt="New Accept Button">
  <figcaption>New Accept Button, grouping different decisions</figcaption>
</figure>

## The Build Results Tab

Depending on the setup, build results are not always a simple affair. In the new build results tab you can drill down into all the builds of the proposed changes. We summarized the results as best as we could so the most relevant information catches your attention first. For instance, results that are disabled/excluded/unknown are not visible at first glance.

Moreover, the build results area comes with a powerful tool: a filter to help you find what you need.

<figure>
  <img src="/images/posts/2025-09-11/build-results.png" alt="Build results area">
  <figcaption>Build results area new design</figcaption>
</figure>

### RPM Lint Interface

TO BE WRITTEN and screenshotted

## The Changes Tab

Often, to have a meaningful conversation about code changes, it's important to have the conversation reference a specific line.
That's why we made it possible to add comments on specific lines of a patch.

<figure>
  <img src="/images/posts/2025-09-11/changes.png" alt="Changes tab">
  <figcaption>Changes tab</figcaption>
</figure>

### Multiple Actions

Sometimes a request is changing multiple packages at once. The new changes tab provides an interface to navigate the changes. To avoid getting lost, we made it possible for you to mark which of them you already have seen.

<figure>
  <img src="/images/posts/2025-09-11/changes_multiple_actions.png" alt="Request actions dropdown">
  <figcaption>Request actions dropdown</figcaption>
</figure>

## The Mentioned Issues Tab

The issues mentioned in the changes files are now shown on their own tab. We extended the information with a link to the issue, its status and the description.

<figure>
  <img src="/images/posts/2025-09-11/mentioned-issues.png" alt="Mentioned issues">
  <figcaption>Mentioned issues</figcaption>
</figure>

We hope you like the new interface, if not we are looking forward to your feedback!

{% include partials/_how-to-give-us-feedback.md %}
