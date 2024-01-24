---
layout: post
title: Revamping the Request Build Status Page and Introducing the Dark Mode
category: development
image: images/posts/sprint_157/page_image_revamping_build_results.png
---

The beginning of the year has started strong in OBS.
We are glad to be back to you in a new year with a blog post full of interesting updates, most of them improving our Request page.
Take a seat, a fresh breath, and enjoy!

{% include partials/_series-of-posts-about-request-redesign.md %}


### Revamping the Request Build Status Page

You create a request to modify a package in OBS and use a combination of repositories and architectures.
After a while, you come back to the page to see the build results of the request.
And you miss a general overview of the status of all build results, and also filtering the results.
There you have it!
Now you can use the revamped Request Build Status page.
Things are clear now!

![Revamping the Request Build Status Page](/images/posts/sprint_157/revamping-build-status-page.png)


### Summary Graph for rpmlint Linter Results

The same as for the Request Build Status page applies to the rpmlint linter logs page.
You miss an overview of the errors returned by the linter, so you don't have to read the file.
Again, there you have it!
Now, every time there is an error found in a rpmlint log, you will be shown a graphic with those errors and their error level (a.k.a. Badness punctuation).

![Summary Graph for rpmlint Linter Results](/images/posts/sprint_157/rpmlint-linter-results.png)


### Introducing the Dark Mode

We are always happy to receive external contributions.
These last weeks, we received a very special one, coming from [Moisés](https://github.com/mdeniz).
He already worked for OBS a while ago, and he came back by proposing a long requested feature: introducing dark mode pages.
In first instance, enter the beta program configuration page and enable the "Color Theming" beta flag.
Now you can select the theme:

   * Go to your user profile, clicking on your avatar
   * Edit your profile, clicking on the "Edit" button
   * Change the Theme, selecting the one you prefer
   * Save the changes by clicking on "Update"
   * Reload the page

Isn't it awesome?

![Dark Mode](/images/posts/sprint_157/dark-mode.png)

### Try It Out

Join [the beta program](/2018/10/04/the-beta-program/) now and explore the revamped request build results page and the new dark mode.
Your feedback is crucial as we continue refining OBS!

{% include partials/_how-to-give-us-feedback.md %}
