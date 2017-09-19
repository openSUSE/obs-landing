---
layout: post
title: Highlights of the OBS frontend development – Sprint 24
category: development
---

<p>
  Here are the results the OBS frontend team has achieved in the last two weeks (2017-09-04 to 2017-09-18).
</p>

<h2>Features</h2>
 
<h3>Implement group request page</h3>
<p>
 We have several different ways to view submit and review requests in the web interface, e.g. on the user or project pages.
 However, some users are members of several different groups, which makes their user page quite crowded.
</p>
<p>
 Therefore it was requested by the openSUSE review team to have a dedicated page for the group requests and reviews which we implemented in this sprint.
</p>
<p>
 <img src="https://paste.opensuse.org/view/raw/32791641" alt="Group requests show page"/>
</p>
 
<h3>Make it easy to add OBS repositories in the kiwi editor</h3>
<p>
 Now when adding a repository to a Kiwi image using the Kiwi editor you will land in an "easy" mode that autocompletes what you type searching for OBS repositories in the instance you are. If you still want to have the full control you only need to go to the 'Expert mode' and tweak things there.
</p>
<p>
 The new dialog for adding repositories looks like this:
 <img src="https://user-images.githubusercontent.com/11314634/30122132-d115c130-932d-11e7-9615-15fa0f02e5ae.png" alt=""/>
</p>
<p>
 in comparison to the expert mode:
</p>
<p>
<img src="https://user-images.githubusercontent.com/11314634/30122150-e2c83638-932d-11e7-9766-2e4c588a64c5.png" alt=""/>
</p>
 
<h3>Kiwi Editor - use project repositories</h3>
<p>
In the Kiwi editor we added a checkbox to use the repositories from the current project. This option will remove the other repositories of the Kiwi image and also from the Kiwi file.
</p>
<p>
  To know more about this feature I invite you to have look into the PR<a href="https://github.com/openSUSE/open-build-service/pull/3769">#3769</a>
</p>
<p>
<img src="https://user-images.githubusercontent.com/1212806/30112892-29d973d6-9313-11e7-8ce4-3b58a4765593.png" alt="Kiwi Editor - user project repositories" />
</p>

<h3>Show dirty state flag in project/show build results</h3>
<p>
When the repository state is in a dirty state, a yellow triangle with an exclamation mark is shown in the icon.
While this is already implemented on the project monitor page, Coolo  <a href="https://github.com/openSUSE/open-build-service/issues/3386">reported</a> that this is not the case on the project page.

<img src="https://user-images.githubusercontent.com/9274/30112371-0bd78206-9309-11e7-88f5-51349858bc8b.png" alt="Repository dirty state" />
</p>

<h3>Build job history source change link</h3>
<p>
When viewing the build job history, if the job was a source change then you can click a link to view the source diff.
</p>
<p>
<img src="https://user-images.githubusercontent.com/3799140/30476967-f6f236f6-9a0b-11e7-8cb0-560e46e68374.png" alt="Repository dirty state" />
</p>

<h2>Refactoring</h2>

<h3>Introducing query objects for requests</h3>
<p>
Query requests can be difficult, because of many different possible conditions.
For instance, if you want to fetch all requests for a user you have to consider all projects and packages the user is a maintainer and the groups the user is member of.
Putting the different types and states of requests and reviews into the mix makes queries just really complicated.
</p>
<p>
So far, we had a class method in the request model which ate all the different query parameters and created the necessary SQL string from it.
However, this had several disadvantages.
First of all, these several hundred lines of code messed up the request model and made it really hard to test in isolation.
Furthermore it violated badly the Single Responsibilty Principle and made use of inefficient raw SQL queries.
</p>
<p>
Therefore we decided to refactor it in several steps. 
The first step which we finished in this sprint was to move all this code from the request model to dedicated <a href="https://medium.flatstack.com/query-object-in-ruby-on-rails-56ea434365f0">query classes</a>.
For now we introduced four different classes: BsRequest::FindFor::User, BsRequest::FindFor::Group, BsRequest::FindFor::Project and finally BsRequest::FindFor.
Additionally we introduced also tests for the user and group classes to continue with refactoring the actual query code in a future sprint.
Have a look at <a href="https://github.com/openSUSE/open-build-service/pull/3751">PR#3751</a> and <a href="https://github.com/openSUSE/open-build-service/pull/3762">PR#3762</a> if you want to learn more about query objects.
</p>

<h2>Bugfixes</h2>

<h3>Sticking with int datatype for id column</h3>
<p>
The new Ruby on Rails version 5.1 uses now the bigint datatype instead of int for the id column of new database tables.
We invested some time and investigated how this change would impact OBS and decided to stick with int for now.
However, recently we introduced a few new tables which we needed to migrate back because joining of tables which use the new type with tables with the old would not be possible.
Furthermore we introduced a test in our CI to make sure that we don't introduce tables with bigint ids by accident in the future. 
</p>
<p>
To quote <a href="http://ridingtheclutch.com/post/160099545985/rails-51-new-default-bigint-primary-key-sort-of">Rob Cameron</a>: 
 If future me is reading this after getting our 4 billionth user: it seemed like a reasonable tradeoff at the time!
</p>


<h2>Test suite migration</h2>

<p>
   We continued migrating tests to <a href="http://rspec.info/">Rspec</a> and fixing flickering tests:
</p>

<ul>
  <li>Added a spec for BuildLogSupport mixins (<a href="https://github.com/openSUSE/open-build-service/pull/3813">PR#3813</a>)</li>
  <li> Set user on project tests (<a href="https://github.com/openSUSE/open-build-service/pull/3821">PR#3821</a>)</li>
</ul>
