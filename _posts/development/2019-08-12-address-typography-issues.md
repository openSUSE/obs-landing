---
layout: post
title: Addressing Typography Issues in the new User Interface
category: development
---

We tackled typography issues after receiving feedback from multiple users.

### The Tackled Issues

Beside defining the font-stack, we revisited the homepage, requests, projects and packages looking for the following issues and fixing them:

- Looking for different font-sizes and reducing the number of different font-sizes per page to at most 3.
- Looking for color contrasts which could be bad for people with visual issues.
- Reducing the usage of small classes for buttons and other components if not necessary.
- Reworking the hierarchy of the information/text.
- Limiting the line length to 80 characters for readability reasons.

For the curious ones, here are some examples of what changed:

#### The Footer Before:
<img src="/images/posts/address-typography-issues/footer_before.png" alt="footer-before-screenshot" style="width: 100%;" class="center" />

#### The Footer After:
<img src="/images/posts/address-typography-issues/footer_after.png" alt="footer-after-screenshot" style="width: 100%;" class="center" />

#### The Repositories Before:
<img src="/images/posts/address-typography-issues/repositories_before.png" alt="repositories-before-screenshot" style="width: 100%;" class="center" />

#### The Repositories After:
<img src="/images/posts/address-typography-issues/repositories_after.png" alt="repositories-after-screenshot" style="width: 100%;" class="center" />

#### The Build Results Before:
<img src="/images/posts/address-typography-issues/build_results_before.png" alt="build-results-before-screenshot" class="center" />

#### The Build Results After:
<img src="/images/posts/address-typography-issues/build_results_after.png" alt="build-results-after-screenshot" class="center" />

### Design and Decisions

Most of the design decisions were just taken over from the old user interface without any iteration.
So this time, we asked ourselves questions such as "Should we use system fonts?", "Which information should be prominent?" or "Is the constrast good?".
This is one of many deliverables in which we are going to question the current design and then act on what needs to be addressed.
The end goal is to improve the user experience regarding usability and mobile.


### OBS Pattern Library

We document as much as we can about our design decisions and which components we are using on OBS.
The OBS Pattern Library can be found at <https://obs-patterns.netlify.com/>.
As usual, we value your feedback on this as well.
See the *How to Contribute* section on the homepage of the OBS Pattern Library for instructions.

### How to Give Us Feedback

As always, we need your feedback to keep on improving the user interface.
Have a look at what changed and tell us what you think about it.

There are two ways to reach us:

- On GitHub, by [opening an issue](https://github.com/openSUSE/open-build-service/issues/new/choose)
  and / or [commenting on an already opened issue](https://github.com/openSUSE/open-build-service/issues).
- On IRC, by talking directly to us. We are in the channel `#opensuse-buildservice` on *Freenode*.

Please note that we favor GitHub to gather feedback as it allows us to easily
keep track of the discussions.
