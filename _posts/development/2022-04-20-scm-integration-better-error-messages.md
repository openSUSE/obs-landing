---
layout: post
title: What's Wrong With My SCM/CI integration?
category: development
---

Many of you are taking advantage of the SCM/CI integration in OBS. Sometimes
the integration fails and it's hard to find out why. In the last weeks, we
have focused on improving the error handling and adding more meaningful error
messages to make things easier for you.

Haven't you tried the SCM/CI integration yet? Please join [the beta
program](/2018/10/04/the-beta-program/) and read our previous blog posts to
learn about the topic.

{% include partials/_series-of-posts-about-scm-integration.md %}

# The Workflow Runs Page Helps You Understand

You can find the list of workflow runs on _Profile > Manage Your Tokens_.

The workflow runs are there to help you understand what's going on with every
workflow you run: its state, the sources and artifacts involved etc. But
probably the most interesting piece of information is in the Response tab,
where you can check if everything went well or you can read a descriptive
error if something went wrong.

<figure>
  <img src="/images/posts/sprint_116_response_body.png" alt="Errors on Response tab">
  <figcaption>Errors on Response tab</figcaption>
</figure>

Thanks to the errors displayed on that tab you can learn if your configuration
file is incorrect, if there was any problem while performing the steps and,
from now on, you can also see if there was any issue when OBS tried to report
back to the SCM. 

{% include partials/_how-to-give-us-feedback.md %}
