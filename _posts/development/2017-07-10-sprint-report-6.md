---
layout: post
title: Highlights of the OBS frontend development – Sprint 20
category: development
---

<p>
  Here are the results the OBS frontend team has achieved in the last two weeks (2017-07-10 to 2017-07-21).
</p>

<h3>openQA</h3>

<p>
Some of you already know <a href="http://open.qa/">openQA</a>, the automated test tool for operating systems and the engine at the heart of openSUSE's automated testing initiative.
As we also release a full appliance of the Open Build Service, we started to use openQA to test these images last year.
Using openQA was a great addition to our quality assurance process as we're now able to test the OBS Appliances we build with OBS.
This made it for instance possible to test the whole combination of OBS packages with the
software stack of (Rails, MySQL, Apache, etc.) the distribution we build against.
</p>

<p>
However, in mid of June the tests started failing and getting unreliable.
As it turned out, the main reason was that the we started the appliances with only 2GB of memory in openQA.
As soon as the machine reached a peak (e.g. some background job starts), it killed the OBS worker or scheduler which caused the package build test to fail.
We raised the memory now to 4GB and will keep an eye on this issue.
</p>

<p>
If you're interested in our openQA tests, have a look at the <a href="https://openqa.opensuse.org/group_overview/17">OBS Group</a> or the tests <a href="https://github.com/os-autoinst/os-autoinst-distri-obs">here</a> and <a href="https://github.com/openSUSE/open-build-service/tree/master/dist/t/spec">here</a>
</p>

<h3>Updated SUSE sponsor logo</h3>

<p>
  <a href='https://www.suse.com/' >SUSE</a> is one of the sponsors of <a href='https://build.opensuse.org/'>our reference server</a>. They recently changed their logo and we have updated it now.
</p>

<h3>Database import script</h3>

<p>
<a href="https://twitter.com/nateberkopec">Nate Berkopec</a>, a famous Ruby on Rails performance consultant, just recently tweeted:
<img src="https://paste.opensuse.org/63753309" alt="Nate Berkopec tweet">
</p>

<p>
Why is that so important?
 Imagine that a database query works perfectly fine when your database is small in development.
 However, in production when your database is usually several gigabytes, this query can take several seconds and slow down your whole application.
 Not a very nice user experience.
 A few weeks ago we also released a <a href="http://openbuildservice.org/2017/07/04/post-mortem-1/">post mortem report</a> about a downtime caused by a wrong data migration.
 As we stated out in the post mortem, one reason this happened was that we didn't test this migration with production like data before.
 Therefore we invested some time in this sprint to <a href="https://github.com/openSUSE/open-build-service/pull/3401">develop a script</a> to import database dumps as easy as possible in development environment.
</p>

<h3>Analyze LDAP test cases</h3>

<p>
 If you're hosting your own Open Build Service instance there are several methods to setup authentication like a local user database or a LDAP server.
 However, using LDAP as authentication method is currently not official supported.
 As more and more of people start now to use LDAP as authentication method of choice, we decided to investigate about the current state in OBS and the quality of the tests to officially support LDAP in the near future.
 You can read about the result in <a href"https://trello.com/c/63kHnPkW/436-5-p5-analyze-test-cases-for-ldap-support">this trell card</a>.
</p>
