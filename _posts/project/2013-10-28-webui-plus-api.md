---
layout: post
title: WEBUI+API = ♥ 
category: project
author: Henne Vogelsang
---
As Coolo "announced" the week before last in his
[mail](http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00086.html)
about his hackweek project we're about to marry the WEBUI with the API.
Adrian, Ancor, Coolo and me, Henne, just had a meeting about how we go about
to push forward with this unholy communion. Here are the results, but
first let me explain how we came to the decision to do this:

## What's wrong?
Over time the initial design decision to make the WEBUI just another API
client has proven to be a huge burden for WEBUI development. Especially
because it separates the WEBUI from the API database where nearly all
the OBS data is stored/referenced.

This separation not only introduces another layer in between (activexml)
with all the overhead such a layer brings in terms of network, parsing,
rendering etc. this separation also forces us to replicate a lot of the
cool (database) abstraction a framework such as Ruby on Rails brings.

Additionally it raises the hurdle for new (RoR) developers to contribute
as they need to learn all the inner workings of this setup and it
hinders the adoption of new (RoR) tools and best practices as it's so
different.

In the last couple of months we explored to minimize the problem by
having a special WEBUI route in the API that only serves/receives data
specially crafted for/by the WEBUI. This already helped a lot but is
still not enough in our opinion. This is why we are going to eliminate
this separation

## What we are going to do about it?
Obviously we're getting rid of the separation to expose the API database
to the WEBUI and ultimately converting everything to the "frontend"
(name not chosen yet..) an RoR app that serves the XML API and the HTML
views. In order to get there we agreed to do the following three sprints:

### Affiance - Bind what belongs together.
1. Merge Coolos hackweek progress into master (coolo)
2. Document what changes for OBS admins and hackers (henne, adrian)
   * Especially where all the config options are now & where they could
     be before.
   * The new structure of the app, how to hack on and how to test it.
3. Deploy master to build-test.opensuse.org and pound on it.
4. Make a milestone release
5. Inform the OBS admins we know about the change, ask them to help
   (adrian, henne)

### Marriage - Conflate what belongs together.
1. Organize a test coverage sprint so we can be sure that nothing
   breaks when we merge.
2. Re-factor all WEBUI controllers to use API models
3. Get rid of all the WEBUI models, moving things we need into the API
   models.
4. Setup a standardized authorization system
5. Merge WEBUI/API login

### Honeymoon - Enjoy together.
1. Come up with a new layout for the HTML views. One that's using an
   mobile first front-end framework (most likely getbootstrap.com) and
   a design pattern library (most likely pattern-lab.info)
2. Get rid of the sub-domains (build.o.o, api.o.o) for the reference
   server and maybe even version the API (something like /api/v1/about)
3. Who knows what? The sky is the limit.

You can find the progress of these sprints online in
[issue 450](https://github.com/openSUSE/open-build-service/issues/450).