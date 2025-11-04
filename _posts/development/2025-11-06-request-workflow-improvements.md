---
layout: post
title: "Less Noise, More Focus: Enhancements to the Request Page"
category: development
---

We're back with major progress on the Open Build Service (OBS) Request Page redesign, and we’re excited to share the latest round of improvements!
This iteration focuses sharply on information priority and efficiency.
This is the next step in making the request browsing experience faster, clearer, and less overwhelming for everyone.

Here’s what’s new in this iteration, starting with our most powerful addition:


## Introducing Important Build Targets

Reviewing build results for every repository and architecture combination isn't always feasible or necessary, especially for complex project and package setups.
We've introduced a powerful new way for project maintainers to define and highlight which build results are truly essential for accepting a submit request.

You can now explicitly set certain repository/architecture tuples as "important."
Simply go to your project page, click on the Repositories tab, and use the star icon to mark or unmark the desired repositories and architectures.
When these markers are set, the Request Page will automatically filter the Build Results to show only this critical subset of targets.

#### Select Repository/Architecture Combination

![Important Build Targets - Select Repository/Architecture](/images/posts/2025-11-16-request-workflow-improvements/important-build-targets-1.png)

#### How Selected Combinations are Shown

![Important Build Targets - Show Repository/Architecture](/images/posts/2025-11-16-request-workflow-improvements/important-build-targets-2.png)

#### How Build Results are Shown

![Important Build Targets - Show Build Results](/images/posts/2025-11-16-request-workflow-improvements/important-build-targets-3.png)


## Improved General Build Results Usability

Beyond content filtering and prioritization, we also took time to refine the overall user experience (UX) and visual clarity of the Build Results page.

We've implemented several small but meaningful UX enhancements focused on improving scannability, clarity, and persistence.

This includes:

   - *Sticky Architectures Table:* The architectures table is now sticky, ensuring you always see which architecture corresponds to the results, regardless of how far you scroll down.
   - *Preventing Single-Result Collapse:* Build results with only one entry will no longer automatically collapse.
   - *Uniform Build Status Width:* We standardized the width of all build statuses for a cleaner, less jarring visual experience across the entire table.
   - *Clear Unresolvable Status:* The 'unresolvable' build status is now rendered in orange. This clear visual distinction makes it easier to tell apart from the 'failed' (red) status at a glance.

These collective adjustments make it significantly easier to track and scan build results.


## Better Filtering for Build Results

Reviewing long lists of build results in large requests can be overwhelming.

We've introduced filter improvements to the Build Results view.
Now, you get clear visual feedback on the filters currently applied.

![Better Filtering for Build Results](/images/posts/2025-11-16-request-workflow-improvements/better-filtering.png)


## Never Lose a Comment: Draft Persistence

It’s frustrating when you write a detailed review comment, navigate away, and lose your progress.

Not anymore!
We've implemented draft comment persistence.
If you start writing a comment but don’t submit it, OBS will now save your text locally.
When you refresh the page or return later, your draft will be waiting for you in the comment box, ready to be completed.


## Conclusion

What's Next? Try It Out!

We encourage you to jump into the redesigned Request Page and check out the new features.

We build OBS for you, so your feedback is always valuable.
Let us know what you think by sharing your experience.

{% include partials/_how-to-give-us-feedback.md %}
