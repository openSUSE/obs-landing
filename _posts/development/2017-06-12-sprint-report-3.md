---
layout: post
title: Highlights of the OBS frontend development sprint 17
category: development
---

<h4>We are back!</h4>
<p>
  Since we were preparing for <a href="https://events.opensuse.org/conference/oSC17">OSC17</a> we had a little break and suspended our SCRUM sprint for one week. Now we are back!
  And this is what we have accomplished in sprint 17 (2017-05-29 to 2017-06-09).
</p>

<h3>Deployments</h3>

<p>
  It's been a month now, since we started to deploy the rails frontend more frequently. On some days we now deploy multiple times a day. Since this is quite different from what we did before (1 - 2 deployment every two weeks), we have a lot to learn and keep updating <a href="https://github.com/openSUSE/open-build-service/wiki/Deployment-of-build.opensuse.org">our deployment process</a>.
</p>
<p>
  Though this doesn't mean that OBS will be unavailable whenever we deploy. Most of the times we can keep OBS running while deploying the newest codebase. In the rare cases we have to set OBS into maintenance mode, we will drop you a note in <a href="irc://irc.freenode.net/openSUSE-buildservice">IRC</a>.
</p>

<h3>Features</h3>

<h4>Blog about the STUDIO import/export feature</h4>
<p>
  In case you have not heard about it. It's possible to import <a href="https://doc.opensuse.org/projects/kiwi/doc/">KIWI</a> configurations from <a href="https://susestudio.com/">SUSE Studio</a> to OBS. This sprint we
<a href="http://openbuildservice.org/2017/05/31/studio-import/">released</a> a blog article that explains this feature in detail.
</p>

<h4>Build Schedule Reason on WebUI</h4>
<p>
  Sometimes you want to know why a build got scheduled. For this you can now watch the build reason of a built package. Just go to a package's binary page, via the repository link in the build results, and click the "Build reason" link.
</p>

<p>
  <img src="/images/posts/sprint_17_build_reason_binary_page.png" alt="OBS binary page" style="margin: 30px 0 30px 0;">
</p>

<p>
  <img src="/images/posts/sprint_17_build_reason.png" alt="OBS build reason" style="margin: 30px 0 30px 0;">
</p>

<h3>Maintenance</h3>

<h4>Migrating tests to RSpec</h4>
<p>
  We continued moving tests to our new RSpec based test suite. This sprint we've
  migrated:
</p>
<ul>
  <li>
    patchinfo helper tests -
    <a href="https://github.com/openSUSE/open-build-service/pull/3160">PR#3160</a>
  </li>
  <li>
    search helper tests -
    <a href="https://github.com/openSUSE/open-build-service/pull/3164">PR#3164</a>
  </li>
   <li>
    create_job tests -
    <a href="https://github.com/openSUSE/open-build-service/pull/3197">PR#3197</a>
  </li>
</ul>

<h3>Bugs</h3>

<h4>Fix storing last login time of users</h4>
<p>
The data in the <strong>last_logged_in_at</strong> field for users was not set in the case of using proxy mode for athentication. We fixed this now. To make sure this won't happen again we added tests for all authentication modes OBS supports.
</p>

<h3>Refactoring</h3>

<h4>Get rid of BsRequest.collection</h4>
<p>
We have refactored the methods that use BsRequest.collection to use the new relationships and scopes. Now the code is more readable and less complex to understand.  Have a look on the follows PR's:
<ul>
<li>Involved Reviews - <a href='https://github.com/openSUSE/open-build-service/pull/3105'>PR#3105</a></li>
<li>Outgoing Requests - <a href='https://github.com/openSUSE/open-build-service/pull/3158'>PR#3158</a></li>
<li>Incoming Requests - <a href='https://github.com/openSUSE/open-build-service/pull/3212'>PR#3212</a></li>
</ul>
</p>

