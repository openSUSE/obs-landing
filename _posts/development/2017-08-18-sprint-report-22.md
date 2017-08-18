---
layout: post
title: Highlights of the OBS frontend development sprint - Sprint 22
category: development
---
<p>
   Here are the results the OBS frontend team has achieved in the last two weeks (2017-08-07 to 2017-08-18).
</p>
<h2>Features</h2>
<h3>LDAP support for our 2.8 release</h3>
<p>
   LDAP authentication support has been backported to OBS 2.8. This includes more test coverage and some improvements to the authentication logic in order to be able to officially support LDAP.
</p>
<h3>Kiwi image editor</h3>
<p>
   We have extended the functionality of the Kiwi image editor. In the repository section, we also support <strong>obsrepositories:/</strong> as source path now. At the same time, we fixed several styling issues including for instance flickering elements.
</p>
<p>
   Have a look at the following PR's:
<ul>
   <li><a href='https://github.com/openSUSE/open-build-service/pull/3568'>#3568 - [webui] Fix flickering elements in Kiwi section</a></li>
   <li><a href='https://github.com/openSUSE/open-build-service/pull/3585'>#3585 - [webui] Extend KIWI repository source_path </a></li>
</ul>
</p>
<h4>Kiwi Editor screenshots</h4>
<p>
   <img src="/images/posts/sprint_22_kiwi_repository.png" alt="Kiwi Editor repository selected">
   <img src="/images/posts/sprint_22_kiwi_package.png" alt="Kiwi Editor package selected">
</p>
<h3>Make feature switch based on the user</h3>
<p>
   As you might already noticed, we use continuous integration and continuous delivery to keep build.opensuse.org up to date.
   However, sometimes we want to deploy but some features are not yet ready for production.
   Instead of keeping them in a seperate branch we introduced a <a href="https://martinfowler.com/bliki/FeatureToggle.html">feature toggle</a> to hide these features in production a few months ago.
   So far, the features were always hidden in production. 
</p>
<p>
   This was not good, as also admins or developers were not able to test the feature in a production environment.
   Therefore we changed the implementation to be based not only on the environment but also on the logged in user.
   You can see the changes in <a href="https://github.com/openSUSE/open-build-service/pull/3477">this pull request</a>.
</p>
<h3>Remove excluded repositories from rpmlint dropdown</h3>
<p>
   Do you need to review a lot of submit requests?
   Are you annoyed to go over all repository architecture combinations for the rpmlint result to check that no errors will get introduced?
</p>
<p>
   We did several changes to make this workflow easier for maintainers.
   First of all we dropped now excluded and the images repositories (e.g. when you build a debian package against openSUSE) from this list as these don't have rpmlint results.
   Furthermore we changed the ordering of the architectures to reverse to favor the x86_64 architecture.
   You can read about it in <a href="https://github.com/openSUSE/open-build-service/issues/3183">#3183</a>, <a href="https://github.com/openSUSE/open-build-service/issues/3608">#3608</a> and <a href="https://github.com/openSUSE/open-build-service/issues/3622">#3622</a>.
</p>
<h3>Add vertical scrolling to large diff files</h3>
<p>
   When reviewing submit requests with large diff files, it was necessary to scroll to the end to the file for horizontal scrolling.
   Therefore the openSUSE review team requested to add vertical scrolling to limit the overall size.
   Have a look at <a href="https://github.com/openSUSE/open-build-service/pull/3565">this pull request</a> if you want to know how we implemented it.
</p>
<p>
   <img style="width: 80%; height: 80%" src="/images/posts/sprint_22_request_vertical_scrolling.png" alt="Vertical scrolling large diff file">
</p>
<h3>Provide comment API for retrieving comments by author</h3>
<p>
   The openSUSE team makes heavily use of bots to review and comment on requests.
   Therefore they requested to have an API route to get all comments of a user so that bots can also cleanup and delete old comments.
   We implemented this API endpoint in this sprint and refactored the comments controller at the same time.
   Have a look at <a href="https://github.com/openSUSE/open-build-service/pull/3625">this pull request</a> or try it our on <a href="https://build.opensuse.org/comments/user?format=xml">build.opensuse.org/comments/user</a>
</p>
<h3>Submit package via webui does not fill the changelog diff</h3>
<p>
   When submitting a package via OSC, the diff between the changes file get automatically added as the description.
   Unfortunately this was not the case when submitting a package via the webui.
   <a href="https://github.com/lnussel">Ludwik Nussel</a> requested this feature a while ago, which we happily implemented during this sprint.
   When you now create a submit request, the description in the popup gets automatically prefilled.
   <img src="/images/posts/sprint_22_submit_request_dialog.png" alt="Submit request dialog">
</p>
<h3>Drop editing of user accounts for LDAP mode</h3>
<p>
   It will no longer be possible for users nor for admins to edit their user account details (real name and email address) when running in LDAP mode. Those information will be set by the LDAP configuration.
</p>
<h2>Bugfixes</h2>
<h3>Review datatables improvements</h3>
<p>
   A few months ago, we changed the request datatables to be server side processed by AJAX.
   While this improved the loading time for these pages tremendously, it wasn't possible to sort or search by all columns anymore (e.g. source or target).
   <a href="https://github.com/toabctl">Thomas Bechtold</a> reported the <a href="https://github.com/openSUSE/open-build-service/issues/3582">sort issue</a> and pointed out that the python maintainers group the reviews via sorting them.
</p>
<p>
   Thanks to following the single responsibilty and open/close principles, it was easy to adapt our implementation to make searching and sorting possible again.
   You can check out the implementation <a href="https://github.com/openSUSE/open-build-service/pull/3591">here</a> and <a href="https://github.com/openSUSE/open-build-service/pull/3512">here</a>.
</p>
<h3>Fix ordering of user requests table</h3>
<p>
   <a href="https://github.com/jberry-suse">Jimmy Berry</a> reported a very odd bug: The ordering of his request list was correct but the created time did not match the ordering.
</p>
<p>
   <img src="/images/posts/sprint_22_request_datatable_bug.png" alt="Bug request table Jimmy">
</p>
<p>
   Thanks to Jimmy's excellent bug report including even the html source code, we found out that it was a caching issue. 
   Lesson learned: Never ever cache relative timestamps!
   For now we just <a href=" https://github.com/openSUSE/open-build-service/pull/3623">dropped caching the time</a>, however, in the future we should implement a client side handling of relative timestamps. 
</p>
<h3>ActiveJob is used to interface with the Delayed Job queueing system</h3>
<p>
   We are now uses Rails' new <a href="http://edgeguides.rubyonrails.org/active_job_basics.html">ActiveJob</a> interface to call delayed job. 
   This means that all the jobs are in one place (app/jobs/) and we can easily swap Delayed Job for a different async system like Resque or Sidekiq if we wanted to.
</p>
<h3>Dialogs</h3>
<p>
   We always wanted to unify the style for the buttons in the dialogs and finally, we did something with those buttons.
   Take a look at the PR <a href="https://github.com/openSUSE/open-build-service/pull/3615">#3615</a>.
</p>
<p>
   <img src="/images/posts/sprint_22_new_dialog_buttons.png" alt="Dialog with new buttons">
</p>
<h3>Test suite migration</h3>
<p>
   We continued migrating tests to <a href='http://rspec.info/'>Rspec</a>:
</p>
<ul>
   <li>Attrib model is now covered by 100% (<a href='https://github.com/openSUSE/open-build-service/pull/3456'>PR#3456</a>)</li>
   <li>UpdatePackageMeta  job is now covered by 100% (<a href='https://github.com/openSUSE/open-build-service/pull/3564'>PR#3564</a>)</li>
   <li>Event mailer is now covered by 100% (<a href='https://github.com/openSUSE/open-build-service/pull/3554'>PR#3554</a>)</li>
</ul>
<p>
   Beside migrating tests to the new test suite, we also fixed several flickering tests (tests which sometimes report a false negative). 
   Have a look at <a href="https://github.com/openSUSE/open-build-service/pull/3628">#3628</a> and <a href="https://github.com/openSUSE/open-build-service/pull/3626">#3626</a>.
</p>
<h2>Deployments</h2>
<h3>Ensure public/assets dir of our packages is in clean state</h3>
<p>
   Some weeks ago we did one of our continuous deployments and ran into a problem. 
   An additional <a href='http://guides.rubyonrails.org/asset_pipeline.html#manifest-files-and-directives'>asset manifest file</a> broke our assets and we ended up with OBS pages without CSS. 
   You might have seen us <a href='http://openbuildservice.org/2017/07/19/post-mortem-2/'>blogging</a> about it.
</p>
<p>
   What we also did was to create a <a href='https://trello.com/c/2HRVCSTJ/481-2-p8-ensure-public-assets-dir-of-our-packages-is-in-clean-state'>story</a> for one of our next sprints. 
   This sprint we have been working on this and met in a group to discuss what options we have to solve this.
</p>
<p>
   Solutions we came up with were:
<ul>
   <li>
      Compile the assets during the package installation (not package build;-)) in the <a href='https://fedoraproject.org/wiki/Packaging:Scriptlets'>post section</a> of our rpms
   </li>
   <li>
      Manually precompile the assets after package installation
   </li>
   <li>
      Keep asset precompilation in our package build like it is right now and document in our deployment wiki that we have to ensure there are no additional files in the /public/assets directory
   </li>
</ul>
</p>
<p>
   In the end we decided for option 3 and <a href='https://github.com/openSUSE/open-build-service/wiki/Deployment-of-build.opensuse.org/34c35d60e10a368511b2bf9ed2dc718b38395f2d'>documented</a> what deployers should do to avoid this from breaking things in our wiki.
</p>
<p>
   The reason we didn't decide for one of the other solutions was that this would have made our package installation more complex and would have affected other people that want to host their own OBS too much.
</p>
<h3>Continuous Deployment</h3>
<p>
   Within the last sprint we deployed more than 8 times our reference installation at build.opensuse.org without having a scheduled downtime.
</p>
