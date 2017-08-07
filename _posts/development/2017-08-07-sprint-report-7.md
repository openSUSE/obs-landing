---
layout: post
title: Highlights of the OBS frontend development – Sprint 21
category: development
---

<p>
  Here are the results the OBS frontend team has achieved in the last two weeks (2017-07-24 to 2017-08-04).
</p>

<h3>Features</h3>
<h4>Kiwi Editor</h4>

<p>
  In this sprint, we did a lot of work related to KIWI Editor. We added more functionality to the Kiwi image editor.
  Now the package list can be edited together with the repositories. We also improved the KIWI editor interface,
  mimicking SUSE Studio, so now it's easier to add, edit and delete repositories and packages.
</p>
<p>
  Here is how it currently looks like:
  <img src="/images/posts/sprint_21_kiwi_show.png" alt= 'KIWI show view'>
  <img src="/images/posts/sprint_21_kiwi_repository_actions_button.png" alt= 'KIWI repository actions button'>
  <img src="/images/posts/sprint_21_kiwi_repository_form.png" alt= 'KIWI repository form'>
</p>

<h3>Testing</h3>
<h4>PacKInfo</h4>

<p>
  We are still working on our coverage, having a sane coverage is having a healthy application :).
  Have a look into this PR: <a href="https://github.com/openSUSE/open-build-service/pull/3469">#3469</a>
</p>

<h3>Bugs</h3>
<h4>Killing Deadlocks</h4>

<p>
  We also dealt with deadlocks :(. It turns out that touching Project on all changes of Package produce a SQL deadlocks because we have very long running transactions for `Project`.
  See how we solve it in PR <a href="https://github.com/openSUSE/open-build-service/pull/3471">#3471</a>.
</p>

