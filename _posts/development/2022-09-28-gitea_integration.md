---
layout: post
title: Gitea Joins the SCM/CI Party!
category: development
---

As we disclosed a few days ago, the roll-out of the SCM/CI feature was not the
end.  The proof is that we are here to announce another important milestone
regarding the OBS SCM/CI integration. Starting today, Gitea is available for
you to be integrated with OBS!

{% include partials/_series-of-posts-about-scm-integration.md %}

<figure>
  <img src="/images/posts/sprint_126_gitea_plus_obs_transparent.png" alt="Gitea and OBS logos" style="display: block; margin: 0 auto"/>
  <figcaption>Gitea and Open Build Service Integration</figcaption>
</figure>

It was our idea from the beginning to make this feature SCM-agnostic because
there are so many of them we would like to support.  In a similar way you did
with GitHub or GitLab before, you can run different workflows in OBS when some
relevant events happen on the Gitea side. For instance, a newly created pull
request in Gitea can trigger the building of the corresponding packages in OBS
or some changes pushed to a branch can end up re-building a package in our
instance.

All you need to know is available in our [user documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html). Enjoy setting up the integration with Gitea and please let the feedback coming.
 
{% include partials/_how-to-give-us-feedback.md %}
