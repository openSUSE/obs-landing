---
layout: post
title: Highlights of the OBS frontend development - Sprint 37
category: development
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-04-16 to 2018-05-04).


# Features

## Bundle gems service

Packaging Ruby (on Rails) projects can be tiresome as you often end up in packaging hundreds of dependencies.
In [OBS:Server:Unstable](https://build.opensuse.org/project/show/OBS:Server:Unstable) there are currently 201 rubygem packages out of 293 packages in total.
Too many for our taste :cry:

Not only we were tired of packaging rubygems, also [Duncan MacVicar](https://github.com/openSUSE/obs-service-bundle_gems/commits?author=dmacvicar) was it and created an OBS source service to download all gems.
However, the initial implementation makes use of the download file service (which is great because it makes use of a global cache) but for instance hardcodes the download URLs.  
Therefore we decided to extend this service to make use of bundler and creating a vendor.obscpio file instead of adding all files into the package directory.

We also investigated how we can implement a global gem cache and now we will make use of the awesome [geminabox](https://github.com/geminabox/geminabox) as a rubygems.org proxy :smile:
Have a look at the [pull request](https://github.com/openSUSE/obs-service-bundle_gems/pull/3) if you want to see all details.


# Bugfixes

## Fix multibuild binary view

OBS allows to build multiple packages from within one package container, so called multibuilds.
While this has been around since a while, not everywhere in OBS we've been supporting multibuilds as we should.
The task of this card was to fix the binaries view to make it show binaries created by a multibuild package.
Before that page would not list any binary at all when the requested package was a multibuild.

And here is how it looks now: :tada:

This is the package container view, with all it's build results for every sub-package:

<img src="/images/posts/sprint_37_multibuild_source_view.png" style="margin: 10px 0 10px 0;">

And this is the binaries view of a single multibuild package:

<img src="/images/posts/sprint_37_multibuild_binaries_view.png" style="margin: 10px 0 10px 0;">

As you can see it now shows each package binary of a multibuild, as it should. :bowtie:

While working on this task we noticed that some of the pages the binaries view is linking to are not showing the correct content for multibuilds.
To address this we created follow up [tasks](https://trello.com/b/kCXtUSYN/obs-frontend-backlog) for this.


## Fix bs request validation of forwarded requests

When a [request](https://openbuildservice.org/help/manuals/obs-beginners-guide/#pro.obsbg.uc.branchprj.sr) gets accepted in OBS such a request get's forwarded to the linked upstream project,
if such a link is defined.
In such a case OBS would go through all request actions that belong to the request and add them to the new, forwarded request.
Failures that happen when forwarding a request, are logged as exception and also shown to the user via an error message.
Some weeks ago we noticed that there were quite some exceptions occuring in https://build.opensuse.org.
So we decided to investigate this during our next sprint. :mag:

There were 3 different causes of why forwarded requests would fail:

* The target project is configured not to accept requests.  

  That's fine since that is expected and we also make this notice visible to the user that forwards the request.  

* A `MissingAction` exception was raised.  

  This exception is thrown when the source diff between request source and target is empty, because someone already updated the target package. So also nothing we have to worry about.

* The `BsRequest` is invalid.  

  This one wasn't that clear and we had to dig a bit deeper...  
  What we found out was that validation errors of related `BsRequestActions` would cause request forwarding to fail, but the actual validation error message of the request action would not be added to the `BsRequest` validation error.
  We fixed that in [PR#4872](https://github.com/openSUSE/open-build-service/pull/4872/commits/e5707528197a2851d4ed4c21efe13fcfa445db3e) together with some code refactorings.

  Another issue was that any forwarded request action would be converted to a submit request action.
  Since there is a validation that only allows one submit request action per request this would cause validation errors amost every time this happens.  
  Moreover convering a delete, set_bugowner or any other request type to a submit request doesn't seem to make a whole lot of sense. :wink:
  So we [fixed](https://github.com/openSUSE/open-build-service/pull/4921/commits/8232fdd4c42762edde3e79019a796c8d148ffbb1) this as well.


# Build Service Frontend Team – Onsite meeting

We had to interrupt our Sprint for a short, one week long, OBS onsite meeting :confetti_ball:.
Moisés and David travelled :airplane: to Nuremberg and meet with the rest of the team to discuss where we are heading next with the development of OBS.

As a result of these discussions we decided to:

* Have a [HA-Proxy](https://trello.com/c/7i2Dpg9y/1398-setup-test-ha-system) in front of our OBS rails app.  

  This will allow us to safely [rollback](https://trello.com/c/Qyel9UKD/1395-rollback) from deployments that caused breakage.
  As you might have noticed not all our deployments are flawless. :flushed:  
  This also allows us to have deployments with none or at least minimal downtime.  
  Part of this will be that we want to spent some effort into [automating](https://trello.com/c/cZiVZoKg/1390-recipe) our deployments as much as possible.

* Write metrics for Application Health Monitoring  

  During the onsite we sat together and checked what's left to finally have some nice metrics to watch at.
  As you might know we've been working on this since a while now. :wink:  
  The result can be seen on [metrics.opensuse.org](https://metrics.opensuse.org/d/cqzJSqWik/obs-main?orgId=1).  
  That's of course not the end. [More](https://trello.com/c/hDRryF6c/118-setup-influx-tracking-for-general-rails-statistics) [tasks](https://trello.com/c/nkvduA5c/1371-integrate-mysql-stats) [are](https://trello.com/c/RNVUMiWu/1372-integrate-memcache-stats) [already](https://trello.com/c/RNVUMiWu/1372-integrate-memcache-stats) [planned](https://trello.com/c/vPwwSkUA/1373-integrate-passenger-stats). :blush:

* Investigate different [frontend frameworks](https://trello.com/c/HhbQzp60/1399-ui-requirements)  
  We decided to implement a simple and a more complicated page of OBS in [Bulma](https://bulma.io/), [Bootstrap](https://getbootstrap.com/) and [Semantic UI](https://semantic-ui.com/).
  This gives us some ground on comparing them and pick the one that fits us best. :smiley:

Beside discussing all these things and mob programming some first Health Monitoring metrics, we also drank some beer and ate [Schäufele](https://de.wikipedia.org/wiki/Sch%C3%A4ufele#/media/File:Schaeufele_01.jpg).


We hope you enjoyed the read! :bouquet:
