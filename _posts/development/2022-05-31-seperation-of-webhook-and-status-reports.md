---
layout: post
title: Clear Separation Between Incoming Webhooks and Status Reports for the SCM/CI Integration
category: development
---

Another round of SCM/CI integration. This time we focused on a better separation between the
incoming webhooks and the status reports we send back to the SCM for the individual workflow runs.
On top of this we made the error messages more meaningful, in case something goes wrong 
when reporting back to the SCM.

Haven't you tried the SCM/CI integration yet? Please join [the beta
program](/2018/10/04/the-beta-program/) and read our previous blog posts to
learn about the topic.

{% include partials/_series-of-posts-about-scm-integration.md %}

# Incoming Webhook or Outgoing Status Report?

Previously it was hard to tell where the data we show for the workflow runs is coming from. 
Is the request/response coming from the webhook produced by the SCM or is this something we've 
produced and sent back? 
We worked on a clear separation between those two cases. From now on we show two tabs, one for
the data received through the incoming webhook from the SCM and one for the status reports we
send back.

<figure>
  <img src="/images/posts/scm_status_reports_tab.png" alt="SCM status reports tab" />
  <figcaption>SCM status reports tab</figcaption>
</figure>

# Improved Error Messages for SCM Status Reports

Besides the improved separation, we also worked on the error message we produce when something
goes wrong while reporting back the status to the SCM. This will help you to debug common issues,
like an expired token, insufficient permissions or network problems.

{% include partials/_how-to-give-us-feedback.md %}
