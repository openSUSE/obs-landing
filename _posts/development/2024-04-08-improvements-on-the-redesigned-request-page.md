---
layout: post
title: Improvements On the Redesigned Request Page
category: development
---

So, we're back after Easter Holidays! In this blog post we're going to see some improvements we've been working on lately on the redesigned Request page.

{% include partials/_series-of-posts-about-request-redesign.md %}

### Defer Loading Content in the Request Show Page

Users trying to look into the changes of Submit Requests had to wait for the whole content to load before seeing anything. When those changes were big, they had to wait a lot. 

We deferred the loading of the content of the file changes so now users don't have to wait too much before something appears on the page.

![](/images/posts/2024-04-08/defer_content_loading.gif)

### Showing The Reason Why a Review Was Asked in the Review Popup

When someone asks for a review, they can leave a reason for it. The review popup now shows what the review creator entered as the reason for the review.

![](/images/posts/2024-04-08/reason_for_a_review.png)

### Don't Collapse the Message About Why the Request Was Declined

When someone declines a request they usually leave a message explaining why. That message was collapsed by default until now, making it harder for the request creator to understand why that request was declined. This is now shown by default.

![](/images/posts/2024-04-08/reason_request_declined.png)

### Display Link to Staging Project in Conversation

When a Request has to be reviewed by a project and that project is a staging project, we display a link to it instead of plain text.

### Try It Out

Join [the beta program](/2018/10/04/the-beta-program/) now and explore the revamped request build results page and the new dark mode.
Your feedback is crucial as we continue refining OBS!

{% include partials/_how-to-give-us-feedback.md %}
