---
layout: post
title: Notifications round two!
category: development
---

Previously we started to introduce a new notification area in the Open Build Service webui.
The goal of this is to enable the users, to stay on one medium in order to get the work done.
No need to continuously switch between the browser and their email-clients in order to see
where an action is needed. This is about an full-fledged notification system in the UI that
not just shows raw requests in a table.
To reach our aim, we worked out new feature to bring all of this to the next level...

## Paginate long lists of notifications

You can't make an omelette without breaking eggs. Users that are involved in a lot of
projects will receive a lot of notifications. Therefore we started to paginate
the list of notifications. This prevents slow page loads and leads to a neatly arranged
list.

<img src="/images/posts/notifications_round_two/notifications_pagination_01.png" alt="Notifications pagination navigation" width="500"/>
<img src="/images/posts/notifications_round_two/notifications_pagination_02.png" alt="Notifications pagination page details" width="500"/>






