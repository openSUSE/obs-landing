---
layout: post
title: Highlights of the OBS frontend development - Sprint 39
category: development
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-05-21 to 2018-06-01).

# Bugfixes:

## Patchinfo editor removes data

As it was reported in [#4895](https://github.com/openSUSE/open-build-service/issues/4895), after editing a patchinfo with an optional `message` element, the element was removed.
This was fixed in [#5010](https://github.com/openSUSE/open-build-service/pull/5010).

<img src="/images/posts/sprint_39_updated_patchinfo_page.png" alt="Patchinfo with new message field">

Working on this issue lead us to [add the missing optional version field](https://github.com/openSUSE/open-build-service/pull/5015) and fix [another issue](https://github.com/openSUSE/open-build-service/pull/5017) related with the selection of binaries.
That's the thing fixing issues in OBS: you don't stop when fixing a bug. You dig into the code and make it as good as you can. :sweat_smile:
 
## Build result page took long time to load:

In the binaries page we were asking to the backend per file if it knows the url for downloading.
If the backend answers with an url, that url will be checked on the fly to know if the file is available, if it is not there then we provide an API url.
That meant that up to 2 http request are performed to only know if we need to show the link.
If we have a package with 20 files per subpackage and 5 subpackages... we will perform up to 200 requests just to show links.
With [PR#5014](https://github.com/openSUSE/open-build-service/pull/5014) we have moved this calculation to an internal action in the frontend to only perform the request to external sources if the user really wants to download a file :tada:.

# Code Maintenance

## Fix MySQL Collate issues for SLE15

As you might know OBS is using structure.sql for dumping the database schema of our app. :neckbeard:
This is slightly different from the schema.rb dumps that Rails applications use by default.
In a nutshell the difference between those two variants is that the structure.sql dumps include database specific settings like triggers, sequences and alike.
If you want to know more about schema dumps in Rails, we recommend the awesome [Rails guide](http://guides.rubyonrails.org/active_record_migrations.html#schema-dumping-and-you).

In addition to that, we have a fancy migration test that ensures that the structure.sql file we store in our git repository matches with the one created from scratch (based on an OBS 2.5 dump). :sweat:
This test runs within our [RPM package builds](https://build.opensuse.org/package/show/OBS:Server:Unstable/obs-server) for any target we build for.

Now with the upcoming SUSE Linux Enterprise 15 release we started to build packages for this platform and noticed that these tests fail because of a mismatching sql dump. :bomb:
The reason for that was that newer MySQL / MariaDB versions, like the one we ship with SLE15, introduced a few changes:

* "Numbers are no longer quoted in the DEFAULT clause in SHOW CREATE statement", see [PR#4999](https://github.com/openSUSE/open-build-service/pull/4999)
* "If no specific default is provided, SHOW CREATE TABLE will append a DEFAULT NULL to nullable TEXT or BLOB fields", see [PR](https://github.com/openSUSE/open-build-service/pull/5001)
* The default MySQL character set and collation changed from utf8 to utf8mb4, see [PR#5020](https://github.com/openSUSE/open-build-service/pull/5020) and [MySQL](https://dev.mysql.com/doc/refman/8.0/en/charset-applications.html) documentation

As you can see in the pull requests we've added normalization code to our migration code to address the first 2 changes.
The encoding differences were only affecting some of our tables and in some cases not even the whole table but only some of the columns.
To solve this we had to add some database migrations that explicitly set the encoding for these collumns.

Once we adopted to these changes our SLE 15 packages were [building](https://build.opensuse.org/package/binaries/OBS:Server:Unstable/obs-server/SLE_15) again :smiley:

## Update to Rails 5.2

Few weeks ago Rails released an update for Rails 5: [Rails 5.2](https://weblog.rubyonrails.org/2018/4/15/this-week-in-rails-rails-5-2-0-performance-optimizations-space-saving-compression-and-more/).
So it was time to give OBS an update as well :wink:

Once we've reviewed the changes the Rails folks been doing we've updated https://build.opensuse.org.
Everything works like a charm and we are now running on Rails 5.2 :heart:
    
# Features:

## OBS in Semantic-UI

After trying out [Bulma](https://bulma.io) [last sprint](https://openbuildservice.org/2018/05/23/sprint-report-38), we gave [Semantic-UI](https://semantic-ui.com) a shot.
Like last time we rewrote the OBS main page and package show page to get a glimpse of what it would feel like to rewrite OBS with Semantic-UI.

This is how it looks like :tada: :

<img src="/images/posts/sprint_39_main_page_in_semantic_ui.png" alt="OBS main page styled with Semantic-UI">

The code for this can be found in [PR#5034](https://github.com/openSUSE/open-build-service/pull/5034).

## OBS in Bootstrap

From the three frameworks we wanted to have a look at only one was left.
Thankfully @hellcp volunteered to rewrite the two mentioned OBS pages in [Bootstrap](https://getbootstrap.com) :smile:.
His work can be found in [PR#5026](https://github.com/openSUSE/open-build-service/pull/5026) :green_heart:.

And a screenshot is added right here :wink: :

<img src="/images/posts/sprint_39_main_page_in_bootstrap.png" alt="OBS main page styled with Bootstrap">


Now that we had a peek into all 3 contenders (Bootstrap, Bulma, Semantic-UI) we should be ready to decide in the next few days which one it will be. :grinning:


And that's all! :confetti_ball: See you next sprint! :kissing_heart:
