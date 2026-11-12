---
layout: post
title: "Revamped Request List"
category: development
---

In our latest sprint, we focused on improving the usability of the requests list. The main goal of this page is simple: show just enough relevant information so you can recognize a single request at a glance and jump right into it. Here is what we identified and how we cleaned it up.

{% include partials/_series-of-posts-about-request-index.md %}

### What Changed

Use the following two images to compare the page design _before_ and _after_ the changes we have just introduced.

<figure>
  <img src="/images/posts/2026-11-16/request_list_before_revamping.png" alt="Request list before revamping" />
  <figcaption>Request list before revamping</figcaption>
</figure>

At first glance, you can notice a reduction in visual noise in the request list.

<figure>
  <img src="/images/posts/2026-11-16/revamped_request_list.png" alt="Request list after revamping" />
  <figcaption>Request list after revamping</figcaption>
</figure>

To make the list easier to scan, we stripped out redundant labels and summarized the details without hiding what matters:

- Removed redundant wording: Dropped the word "Request" which was repeated across every single item. Since you are already on the requests list, this added unnecessary eye-pollution without giving you any useful context

- Shorter, clearer titles: Trimmed submit request titles down to `sourcePackage → targetProject`, highlighting the key information immediately.

- Better summaries for multi-action requests: Condensed long descriptions and oversized tooltips, adding a clearer preview of mixed action types so you can quickly grasp both the volume and variety of actions inside a request.

- Use self-explaining icons: drop the words "comments" and "reviews" to label their counts, the icons identify them clearly.

When you are dealing with tons of requests in your daily work, it can be hard to know where to start. You can now use the new sorting options in the top dropdown menu: `Most Actions` and `Least Actions`.

We have also improved the text search on the top of the list to support partial matches across source and target projects and packages. Now you can easily find what you are looking for even if you don't remember the exact full name.

Give the updated list a try and let us know what you think!

{% include partials/_how-to-give-us-feedback.md %}
