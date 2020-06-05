---
layout: post
title: Making Project and Package Pages User-Friendlier and Improving Announcements.
category: development
---
One of the goals we pursue currently is to make you more productive on the go, while away from the computer. So we have spent some time to make it easier for you to change projects and packages in all screen sizes in the OBS user interface. 

Additionally, we identified that we often need to communicate with only some of you inside the OBS. For instance, when we want to announce changes to those of you who participate in our beta program. To be able to do this better in the future, we have worked on the Announcements feature.

# Making Project and Package Pages User-Friendlier

There were a lot of modals on the project and package pages in the UI. Modals are not very user-friendly on smaller screen sizes, especially when they contain a large form. So we moved almost all modals to their own pages.

<figure>
  <img src="/images/posts/sprint_77_submit_package.png" width="600px"/>
  <figcaption>Forms like this in a modal? Not anymore.</figcaption>
</figure>

Another source of poor user experience was that actions you can do to projects and packages, like branching or editing, where scattered all over the page. To make this easier we grouped them all together in the `Actions` menu. 

<img src="/images/posts/sprint_77_actions_menu.png" width="600px"/>

Additionally the package details are now editable in-place, making it easier to use on all screen sizes.

<img src="/images/posts/sprint_77_edit_package.gif"/>

# Improving Announcements and News

When admins had to share some news with OBS users, they had the possibility to add a message in the News section of the main page. When the message was very important, they also had the possibility to add Announcements on the top of the pages and required acknowledgement from the user.

Both ways to display messages have been merged and improved.

From now on, announcements can be created as regular news (status messages) but with a certain severity that makes them be visible at the top, all over the application. They also require acknowledgement from the user.

However, the most important improvement is related to the communication scope. Sometimes, admins want to announce something only to a specific group of users. For example, they want to announce a new beta feature only to users of the beta program.
Now this is possible for both announcements and the regular news section.

<figure>
  <img src="/images/posts/sprint_77_announcements.gif" width="600px" />
  <figcaption>The Announcements feature is one of the severities to choose from when creating a Status message.</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
