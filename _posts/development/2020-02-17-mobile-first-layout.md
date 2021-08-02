---
layout: post
title: More Responsive Than Ever Before!  
category: development
---

Do you like checking the status of your OBS account on the way to work? While sitting on the sofa? On a flight?

You are not alone :raised_hands:. Many of the OBS users like that, but the OBS web interface is often a pain in the neck, especially on
small screen sizes.

We want to change this. And with the new UI technology we introduced last year, we have the chance to do so! :clap:
So in the last couple of weeks, we have focused on improving the user experience following a mobile-first approach
(start the design of the page on a small screen, which has more restrictions, then expand the page features to create a tablet or desktop version).

<p>
  <img src="/images/posts/mobile-first.png" class="ui centered huge image">
  <small>
    Figure: Mobile First Design - Author: <a href="https://www.seobility.net/en/wiki/Progressive_Enhancement">Seobility</a> - License: CC BY-SA 4.0
  </small>
</p>

And this time we have pushed the first changes regarding improved responsiveness into our [beta program](https://openbuildservice.org/2018/10/04/the-beta-program/).
OBS now looks so much better on mobiles or tablets. Read on to know more details.


## What's New?

In general we have concentrated on...
- ... making it easier to access to the most used options with one hand (more thumb friendly),
- ... establishing a hierarchy in order to show the most important elements first,
- ... minimizing the number of items shown on small devices,
- ... making the most of the screen wide to not to waste space.

We adapted the specific areas like follows. 

### Navigation

We started with the navigation that is included in the layout. For small viewports, a bottom navigation bar is displayed
and contains the most important actions: _Watchlist_, _Tasks_ and _Personal Navigation_.

<img src="/images/posts/mobile-first-layout/bottom_navigation.png" alt="Bottom navigation bar on small devices." width="300" />

Once the Personal Navigation is open, you can see links like _Log in_, _Log out_, _Home Project_ or _Profile_ inside.

<img src="/images/posts/mobile-first-layout/offcanvas.png" alt="Open Personal Navigation" width="300"/>
 
For larger screens, the navigation is displayed on the top bar a bit different now.

<img src="/images/posts/mobile-first-layout/top_navigation.png" alt="Navigation bar on the top for larger screens" />

Another thing to highlight is that the search box is always visible on the top bar from now on. As you can see in the images above.

### Breadcrumbs

In order to save some space, we simplified the breadcrumbs structure.
We got rid of the house icon that pointed to the main page, after all, it is possible to go to that page by clicking on the OBS logo on the top-left corner.
We also left out the link to all projects which hardly ever was used in the breadcrumbs.

<img src="/images/posts/mobile-first-layout/breadcrumbs.png" alt="New breadcrumbs structure" />

### Footer

As the screen becomes narrower, the number of columns shown in the footer decreases.

<img src="/images/posts/mobile-first-layout/footer.png" alt="Footer with only two columns on dmall screens" width="300" />

## What's Next?

With the issues in the layout addressed, we'll focus on the content inside the individual pages in the future! :rocket:


## Try It out and Give Us Some Feedback

As always, we need your feedback to make this even better. Don’t forget to join [the beta program.](https://openbuildservice.org/2018/10/04/the-beta-program/) first.
Try the new features and tell us what you think about it.

There are two ways to reach us:

- On GitHub, by opening an issue and / or commenting on an already opened issue.
- On IRC, by talking directly to us. We are in the channel #opensuse-buildservice on Libera.Chat.

Please note that we favor GitHub to gather feedback as it allows us to easily keep track of the discussions.
