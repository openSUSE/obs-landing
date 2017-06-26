---
layout: post
title: Highlights of the OBS frontend development sprint
category: development
---
<p>
  Here are the results the OBS frontend team has achieved in the last two weeks (2017-05-12 to 2017-06-23).
</p>


<h4>Migrating tests to RSpec</h4>
<p>
  We continued moving tests to our new RSpec based test suite. This sprint we've
  migrated:
</p>
<ul>
  <li>
    UpdateBackendInfos job spec
    <a href="https://github.com/openSUSE/open-build-service/pull/3234">PR#3234</a> 
  </li>
</ul>

<h3>Bugs</h3>

<h4>Crash on Build Reason Page</h4>
<p>
    Bugfix: The build reason page crashed if there was only one package that got changed.
</p>


<h3>Improvements</h3>

<h4>Save a repository with an illegal name error</h4>
<p>
When saving a meta with a repository with an illegal name, no error was shown although nothing was saved as it was invalid information. That was quite confusing for users as it was not clear why it was not saved. Now a detailed error message appears.
<p>
</p>
Issue: <a href="https://github.com/openSUSE/open-build-service/issues/3140">#3140</a>
PR: <a href="https://github.com/openSUSE/open-build-service/pull/3259">PR#3259</a>
</p>

<p>
  <img src="/images/posts/sprint_18_save_repository_ilegal_name.png" alt="Error on save repository with ilegal name" style="margin: 30px 0 30px 0;">
</p>


<h3>Refactoring</h3>

<h4>More about BsRequest.collection</h4>

<p>We still removing BsRequest.collection from OBS, this time in User#requests, you can see it in the following PR <a href='https://github.com/openSUSE/open-build-service/pull/3265'>#3265</a>
</p>

<hr>
<h5>And we were also working in some new features that will be soon finished!</h5>