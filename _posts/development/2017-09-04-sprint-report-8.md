---
layout: post
title: Highlights of the OBS frontend development – Sprint 23
category: development
---
<p>
  Here are the results the OBS frontend team has achieved in the last two weeks (2017-08-21 to 2017-09-01).
</p>

<h2>OBS 2.8.3 Release</h2>

<p>We have pushed out version 2.8.3. Check out the <a href='https://lists.opensuse.org/opensuse-buildservice/2017-08/msg00087.html'>announcement</a> about all the cool new things we rolled into our stable release and <a href='http://openbuildservice.org/download/'>download</a> it.</p>

<h2> Features </h2>

<h3>Drop editing LDAP user accounts</h3>

<p>
  If the administrator activated the LDAP mode, it should no longer be possible to edit the user's realname, email address, and password. Have a look into the next PR's:
  <ul>
    <li><a href='https://github.com/openSUSE/open-build-service/pull/3653'>PR#3653</a></li>
    <li><a href='https://github.com/openSUSE/open-build-service/pull/3661'>PR#3661</a></li>
    <li><a href='https://github.com/openSUSE/open-build-service/pull/3671'>PR#3671</a></li>
  </ul>
</p>

<h3>Kiwi image editor</h3>

<p>
  We are still improving the Kiwi Editor feature. Now we have added a cancel button in package/repository dialog to discard the last changes and a revert button for the whole Kiwi Image.
</p>
<p>
  Have a look at the following PR's:
  <ul>
    <li><a href='https://github.com/openSUSE/open-build-service/pull/3646'>#3646 - [webui] Add architecture and revert button</a></li>
    <li><a href='https://github.com/openSUSE/open-build-service/pull/3651'>#3651 - [webui] Add cancel button in dialog</a></li>
  </ul>
</p>

<p>
  <h4>Add architecture and revert button</h4>
  <img src="/images/posts/sprint_23_revert_button.png" alt="Kiwi Editor revert button">

  <h4>Add cancel button in dialog</h4>
  <img src="/images/posts/sprint_23_cancel_button.png" alt="Kiwi Editor dialog cancel button">
</p>


<h2>Bugfixes</h2>

<h3>Webui creates maintenance request without revision</h3>

<p>
  Adrian created an <a href="https://github.com/openSUSE/open-build-service/issues/3546">issue</a>, with the steps, reported by Andreas Stieger, to break the review proccess using the webui.
  This got fixed and tested in this <a href="https://github.com/openSUSE/open-build-service/pull/3660">pull request</a>.
</p>


<h3>Project deletion creates a "zombie" project in the backend</h3>

<p>
  Adrian reported an <a href="https://github.com/openSUSE/open-build-service/issues/3631">issue</a>, about a problem when undeleting projects, the undelete command was disabled in a monkey patch to our production instance.
  Moisés superseded it with issue <a href="https://github.com/openSUSE/open-build-service/issues/3665">#3665</a> because the root cause was at deleting time of the project not at restoring time. This got fixed and tested in this <a href="https://github.com/openSUSE/open-build-service/pull/3667">pull request</a>.
</p>

<h2>CI improvements</h2>

<h3>Make linter run first and do not run the rspec/functional tests if it fails</h3>

<p>
  Now the linters are running before the whole test suite as a stage and if this fails the rest is not running. This prevent to run heavy/expensive tests to save some concurrent jobs on TravisCI.
</p>

<h3>Test suite migration</h3>

<p>
  We continued migrating tests to <a href='http://rspec.info/'>Rspec</a>:

  <ul>
    <li>Added a spec for ProjectController#status (<a href='https://github.com/openSUSE/open-build-service/pull/3652'>PR#3652</a>)</li>
  </ul>
</p>


<h2> Refactoring</h2>

<h3>Backend::Connection to Backend::Api</h3>

<p>We are moving the all Backend::Connection class to a module to create a layer of abstration. Now the urls calculations are now happening in the Backend::Api and not in the application code. See the following PR's:
  <ul>
    <li>Backend API class (<a href='https://github.com/openSUSE/open-build-service/pull/3640'>PR#3640</a>)</li>
    <li>Refactor Backend::Connection (move start test backend and logger, etc) (<a href='https://github.com/openSUSE/open-build-service/pull/3662'>PR#3662</a>)</li>
    <li>Refactor Backend::Connection calls - part 2 (<a href='https://github.com/openSUSE/open-build-service/pull/3657'>PR#3657</a>)</li>
    <li>Refactor Backend::Connection calls - part 3 (<a href='https://github.com/openSUSE/open-build-service/pull/3676'>PR#3676</a>)</li>
    <li>Refactor Backend::Connection calls - part 4 (<a href='https://github.com/openSUSE/open-build-service/pull/3678'>PR#3678</a>)</li>
    <li>Refactor Backend::Connection calls - part 5 (<a href='https://github.com/openSUSE/open-build-service/pull/3688'>PR#3688</a>)</li>
  </ul>
</p>
