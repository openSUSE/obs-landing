---
layout: post
title: Highlights of the OBS frontend development sprint - Sprint 25
category: development
---
<p>
  Here are the results the OBS frontend team has achieved in the last three weeks (2017-09-19 to 2017-10-06).
</p>

 <h2> Features </h2>
 
 <h3>Kiwi Editor - Repository Type, support autocompletion for binary packages and more</h3>
<p>
We only allow <strong>apt-deb</strong> and <strong>rpm-md</strong> as repo_type because these repository types are the only ones allowed in the open build service context.
When you will importing your kiwi file to the Kiwi Editor, this will replace any invalid repo_type value by <strong>rpm-md</strong>.
Take a look into PR<a href="https://github.com/openSUSE/open-build-service/pull/3826">#3826</a>.
</p>

<p>We also made some changes in the view. Before, only a package group with a specific type and pattern type was shown. Now we show the first package group with type 'image'.</p>

<p>In the Kiwi Editor, we also implemented a new feature that autocompletes the name of the packages getting the information the repositories setup in the image.
Take a look into PR<a href="https://github.com/openSUSE/open-build-service/pull/3884">#3884</a>.
</p>

<p>The Kiwi Editor documentation was updated with all the new features until now and how to use it. <a href="http://openbuildservice.org/help/manuals/obs-best-practices/cha.obs.best-practices.webuiusage.html#kiwi_editor_how_to">See the documentation</a>.</p>

<h3>RabbitMQ</h3>

<p>
It all started with Coolo <a href="https://github.com/openSUSE/open-build-service/pull/2592">requesting</a> a predecessor for the previously used hermes.
OBS was using <a href="https://github.com/openSUSE/hermes">Hermes</a> to send out notifications. You might have read about it in our very first
<a href="http://openbuildservice.org/2017/05/05/frontend-sprint-report-1/">Sprint Report</a>.
</p>

<p>
After hammering out all the details and requirements, we decided to use <a href="https://www.rabbitmq.com/">RabbitMQ</a>, like Coolo initially suggested. RabbitMQ is an open source message broker, which is widely used to broadcast messages between independent server applications.
</p>

<p>
Before we started implementing this, we laid the ground by refactoring parts of the event models. This happened step by step in our previous sprints.
</p>

<p>
This Sprint we started to implement the RabbitMQ message bus and it turned out that adding this to OBS is straigth forward.
Every event model now implements a 'message_bus_queue' which defines the queue names.
</p>

<img src="/images/posts/sprint_25_rabbitmq.png" style="margin: 30px 0 30px 0;" width="500px" />

<p>
For example, every comment in a package get's send as 'opensuse.obs.package.comment'.
While comments made in a requests can be identified as 'opensuse.obs.request.comment'.
</p>

<p>
If you have your own OBS instance and want to distinguish between events sent from build.opensuse.org and your own instance, you can configure
prefix of the queue name in the options.yml. Setting the 'amqp_namespace' to 'my.obs_instance' would result in messages sent as 'my.obs_instance.package.comment' and 'my.obs_instance.request.comment'.
</p>

<p>
There are many other options you can configure. All this is documented in our <a href="http://openbuildservice.org/help/manuals/obs-admin-guide/obs.cha.administration.html#_message_bus">admin guide</a>.
</p>

<h3>Introduced bcrypt as password hash</h3>
<p>
We're now using <a href="https://en.wikipedia.org/wiki/Bcrypt">bcrypt</a> for hashing user passwords.
Luckily, Ruby on Rails already comes with a <a href="http://api.rubyonrails.org/v5.1/classes/ActiveModel/SecurePassword/ClassMethods.html">has_secure_password</a> function.
This is great as it was possible to get rid of some legacy code.
Furthermore, for security important functions it is always better to rely on the framework functionality instead of self implemented code.
The challenge with this pull request was mostly to provide an upgrade path for passwords stored before this change was introduced.
This happens now automatically when the user logs in again or changes their password.
</p>

<h3>Show request comments in superseded requests</h3>
<p>
This feature was requested by the openSUSE review team, thanks to Ludwig and Ismail.
When using github, when creating a pull request and updating the pull request, you usually force push in the original PR.
The reviewer has still the possibility to see outdated comments (comments on code which got overwritten for instance).
</p>
<p>
However, in OBS it is not possible to change a request after it got created.
It is necessary to create a new request and supersede the old one.
With this workflow, as reviewer it was necessary to go back to the old request, look at which changes where requested and then going back to the new request to review again.
To improve this workflow a little bit we now show also the comments of the superseded request in the new request.
<img src="https://user-images.githubusercontent.com/3799140/30970526-aca2417c-a465-11e7-8fcf-ef6e2376ccb8.png" />
</p>

 <h2> Bugfixes </h2>
 
 <p>
 It was not possible to delete groups with users. This is now fixed. Thanks <a href='https://github.com/lchiquitto'>Ichiquitto</a> for report this bug.
 </p>

<p>We fixed a little bug in the Kiwi Editor, now we preserve the data in the form when something unexpected happens. This was because we redirecting instead of rendering the view, 
but after fixing it we found another bug. This time was because we were filtering the package groups, so when something was wrong we rendered the form but with the old packages.
See how it was solved in the PR's <a href='https://github.com/openSUSE/open-build-service/pull/3888'>#3888</a> and <a href='https://github.com/openSUSE/open-build-service/pull/3953'>#3953</a> 
</p>

 <h2>Releases</h2>

<p>
  We <a href="https://lists.opensuse.org/opensuse-buildservice/2017-10/msg00010.html">released</a> a new update for OBS 2.8. This version (2.8.4) fixes a bug in the LDAP support we released with 2.8.3. Checkout the release notes for more information.
</p>

<h2>Conferences</h2>
<p>
Beside working on several feature requests and bug fixes, the OBS team also attended two conferences this sprint. <a href="https://github.com/adrianschroeter">Adrian</a>, <a href="https://github.com/mlschroe">Michael</a> and <a href="https://github.com/ChrisBr">Christian</a> attended <a href="https://www.susecon.com">SUSEcon</a> in Prague while <a href="https://github.com/Ana06">Ana</a>, <a href="https://github.com/eduardoj">Eduardo</a> and <a href="https://github.com/DavidKang">David</a> attended <a href='https://euruko2017.org/'>EuRuKo2017</a> in Budapest.
</p>

<h3>SUSEcon</h3>

<p>
The annual SUSEcon takes place every year in fall at different locations in Europe and North America. 
This year it took place in the capitol of Czech, Prague.
Beside presenting a <a href="https://susecon17.smarteventscloud.com/connect/sessionDetail.ww?SESSION_ID=127282">talk</a>, <a href="https://github.com/mlschroe">Michael</a> and <a href="https://github.com/adrianschroeter">Adrian</a> also organized a <a href="https://susecon17.smarteventscloud.com/connect/sessionDetail.ww?SESSION_ID=127284">container building workshop</a>.
</p>
<p>
However, the main focus for us was to run the Build Solutions booth in the developer lounge.
<a href="https://www.youtube.com/watch?v=hhb8kWCgnMQ">In this video</a>, Hannes Kühnemund interviews several people including our product manager <a href="https://github.com/adrianschroeter">Adrian</a> in the developer lounge.
</p>
<p>
One of the highlights was <a href="https://www.youtube.com/watch?v=jCEAGqNCS1Q&t=45m05s">the last keynote</a>, the famous 'Demopalooza', where they even showed a cover version of 'Killing in the name of' starring OBS.
</p>

<img src="https://pbs.twimg.com/media/DLFEx17WsAAOa8I.jpg" />

<h3>EuRuKo2017</h3>

<p>
EuRuKo is a Ruby conference that takes place once a year in a European city. This year the EuRuKo Conference was in Budapest, Hungary, and it was the most crowed of all the EuRuKo Conferences, with 690 attendees. As most of you may know, a big part of OBS is written in Ruby, so the team travelled there to hear new things about Ruby and meet people with the same interests.
</p>

<p>
 All the talks were great, we specially recommend you to watch the <a href="https://github.com/matz">Yukihiro Matsumoto</a> and <a href='https://github.com/headius'>Charles Nutter</a> keynotes and Ruby 4.0: To Infinity and Beyond talk by <a href='https://github.com/bbatsov'>Bozhidar Batsov</a>. All of them were technical talks about Ruby and we found them really interesting.
</p>
<p>
However, not all of the talks where that technical, but we also enjoyed them. For example, we had a lot of fun with Sebastian Sogamoso post-morten: The overnight failure. The videos are not yet available, but you will be able to watch them soon!
</p>

<img src="https://pbs.twimg.com/media/DK_VaBlXUAA46Gj.jpg:large" />

<p>
But the OBS team did not only travel there to listen, there was also a lightning talk hold by <a href="https://github.com/Ana06">Ana</a> where she spoke about Property tests, which are being used in OBS to make our test suite unbreakable!
</p>

<img src="https://pbs.twimg.com/media/DK-1-TrWkAIo-CM.jpg:large" />

<p>
Next year EuRuKo will take place in Viena. We hope that the OBS team can also be there and really encourage everybody interested in Ruby to also attend!
</p>

<h2>Test suite migration</h2>

<p>
   We continued migrating tests to <a href="http://rspec.info/">Rspec</a> and fixing flickering tests:
</p>

<ul>
       <li>Write rspec tests for app/mixins/webui/load_buildresults.rb, <a href="https://github.com/openSUSE/open-build-service/pull/3914">PR#3914</a></li>
       <li>Write rspec tests for app/mixins/statistics_calculations.rb, <a href="https://github.com/openSUSE/open-build-service/pull/3913">PR#3913</a></li>
       <li>Write test for app/controllers/webui/project_controller.rb#save_meta, <a href="https://github.com/openSUSE/open-build-service/pull/3933">PR#3933</a></li>
       <li>Write rspec for app/mixins/parse_package_diff.rb, <a href="https://github.com/openSUSE/open-build-service/pull/3942">PR#3942</a></li>
       <li>Write rspec for app/models/backend_info.rb, <a href="https://github.com/openSUSE/open-build-service/pull/3876">PR#3876</a></li>
</ul>
