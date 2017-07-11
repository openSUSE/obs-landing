---
layout: post
title: Highlights of the OBS frontend development – Sprint 19
category: development
---
<p>
  Here are the results the OBS frontend team has achieved in the last two weeks (2017-06-26 to 2017-07-07).
</p>

<h3>Releases</h3>

<h4>Release of OBS 2.8.2</h4>
<p>
  We released another version of our OBS stable release, which fixes
  <a href='https://github.com/openSUSE/open-build-service/issues/3066'>a bug</a> that could cause
  trigger rebuild, wipe binaries and abort build commands to operate on linked projects.
</p>

<h3>Features</h3>

<h4>KIWI repositories editor</h4>
  <p>
    We have been working on this feature for a while and now finished the first step. The KIWI repository
    editor provides an easy way to edit repositories of a KIWI file. It provides you a form to edit them,
    taking care of the validations that must be followed (mandatory fields, possible values of a field, syntax 
    checking, etc.).
  </p>

  <p>
    This features is not released yet and will also continue to extend it over time, allowing you to configure
    most of KIWIs configuration options.
  </p>

  <p>
    Here is how it current looks like:
    <img src="/images/posts/sprint_19_edit_kiwi_show.png" style="margin: 30px 0 30px 0;" title='Kiwi editor – show page' >

    <img src="/images/posts/sprint_19_edit_kiwi_edit.png" style="margin: 30px 0 30px 0;" title='Kiwi editor – edit page' >

    And we also started to provide documentation for this feature in our Best Practice Guide, 
    <a href="http://openbuildservice.org/help/manuals/obs-best-practices/cha.obs.best-practices.webuiusage.html#kiwi_editor_how_to">here</a>.
</p>

<h4>Your OBS notifications as RSS feed</h4>
<p>
  Additionally to emails you can now also receive all your OBS notifications about failed builds,
  requests you are supposed to review or comments made on your project page as RSS feed.
  Want to try it out? Just visit your <a href="https://build.opensuse.org/user/notifications">notification settings</a>
on the refference server and generate your RSS feed.
</p>

<img src="/images/posts/sprint_19_rss_feed_notifications.png" style="margin: 30px 0 30px 0;" >

<h3>Bugs</h3>

<h4>Crash on Build Reason Page</h4>
<p>
  Bugfix: The build reason page crashed if there was only one package that got changed.
</p>

<h4>Save a repository with an illegal name error</h4>
<p>
  When saving a meta with a repository with an illegal name, no error was shown although
  nothing was saved as it was invalid information. That was quite confusing for users as it 
  was not clear why it was not saved. Now a detailed error message appears.
  See <a href="https://github.com/openSUSE/open-build-service/issues/3140">issue #3140</a> and
  <a href="https://github.com/openSUSE/open-build-service/pull/3259">pull request #3259</a> for
  details.
</p>

<h4>Delayed Job Mud-Fights</h4>
<p>
  Some unexpected downtime of our reference server in the first week of the sprint, lead to around 2 million
  notifications that were not processed by our reoccuring jobs. When our delayed job system tried to process them 
  it exposed several problems in how the jobs are implemented. Basically it was one big
  <a href="http://api.rubyonrails.org/classes/ActiveRecord/Locking/Pessimistic.html">pessimistic locking</a>
  mud fight. Several jobs, that ran in several queues, fought to lock thousands of records for updating in our database.
  Some of us took the rest of the sprint to analyze why this has happened, why the locking was implemented this way and
  what we could do about this. In the end we fixed it by a combination of more determistic queing of jobs and less locking.
  See all the gory details in pull request <a href="https://github.com/openSUSE/open-build-service/pull/3350">#3350</a>.
</p>

<h3>Refactoring</h3>

<h4>Chasing BsRequest.collection</h4>
<p>
Like in previous sprints, we want to get rid of BsRequest.collection, so this time it was the turn
of Project#open_requests and User#nr_of_requests_that_need_work, take a look at the pull requests
<a href='https://github.com/openSUSE/open-build-service/pull/3343'>#3343</a>,
<a href='https://github.com/openSUSE/open-build-service/pull/3363'>#3363</a>,
<a href='https://github.com/openSUSE/open-build-service/pull/3354'>#3354</a> and
<a href='https://github.com/openSUSE/open-build-service/pull/3347'>#3347</a>.
</p>

<p>
  The User#nr_of_requests_that_need_work function, as the name already implies, calculates the number of requests which need some input from you 
  e.g. requests for projects you're the maintainer or requests which you need to review. The result gets displayed in the top right corner next to your username when you're logged in, 
  which means the function gets called on every page load! To improve the performance we cached it so far for two minutes and recalculated it, however, this caused for instance
  not necessary recalculations or that the number "jumps" unexpectetly (e.g. you close a request and the number stays the same for the next two minutes). 
  With the latest refactorings, it was now possible to calculate proper cache keys and improve the performance tremendously (for some users it is now 80 times faster).
  Positive sideeffects are also that the code now reuses already existing functions and is more readable. 
</p>

<h4>Migrating tests to RSpec</h4>
<p>
  We continued moving tests to our new RSpec based test suite. This sprint we've
  migrated:
</p>
<ul>
  <li>
    UpdateBackendInfos job spec coverage increased to 100
    <a href="https://github.com/openSUSE/open-build-service/pull/3234">PR#3234</a>
  </li>
</ul>


<h3>Maintenance</h3>
<h4>Update rails version OBS uses to 5.1.1</h4>
  We've updated our codebase to run with the recently released
  <a href='http://weblog.rubyonrails.org/2017/5/12/Rails-5-0-3-and-5-1-1-have-been-released/'>Rails 5.1.1</a>.
<p>

<h4>Deployment Post Mortem</h4>
<p>
  One of our deploys has gone horribly wrong and we held our fist post mortem meeting, but you probably
  already read this <a href="/2017/07/04/post-mortem-1/">on this blog</a>...
</p>

<h4>Defined our definition of review</h4>
<p>
  We've met and synced up on how we want to review pull-requests to our repository. 
  Here is what we agreed on:
</p>
<ul>    
  <li>
    We make use of the <a href="https://help.github.com/articles/about-pull-request-reviews/">pull-request review feature</a> of github.
  </li>
  <li>
    We mark nitpicks comments with the <g-emoji alias="thought_balloon" fallback-src="/images/posts/sprint_19_thought_icon.png" ios-version="6.0">💭</g-emoji> emoji or with a <em>nitpick</em> in the text somehow
  </li>
  <li>
    If your review only contains nitpicks you submit your review as <em>Approve</em>
  </li>
  <li>
    If your review contains one non-nitpick you submit the review as <em>Request changes</em>
  </li>
  <li>
    If you can not review all of the code and just want to leave a nitpick you submit the review as <em>Comment</em>
  </li>
</ul>
<p>
  Nitpicks are things you as reviewer don't care about if they end up in the code-base with the merge.
  Things like:
</p>
<ul>
  <li>Style changes we have not agreed on in rubocop rules yet</li>
  <li>Bigger refactorings that are out of scope for the pull-request</li>
  <li>Things new to you that you don't understand and would like to have an explanation for</li>
</ul>

<p>Our hope is that when everybody is using the same process it's easier to identify when it's okay to merge and
what the submitter really has to address.</p>
