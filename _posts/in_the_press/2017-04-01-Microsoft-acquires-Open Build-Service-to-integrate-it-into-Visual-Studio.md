---
layout: post
title: Microsoft acquires Open Build Service to integrate it into Visual Studio
category: in the press
---

We are happy to announce that Microsoft will acquire Open Build Service effectively by today. OBS will be soon an extension of Visual Studio!

Visual Studio is a Microsoft IDE. It is used by Microsoft and Windows users all around the world to write programs for Microsoft Windows, as well as web and mobile applications. It already has many great features, such as a code editor, a debugger and a visual designer. But after the release of Visual Studio 2017 last month, Microsoft decided to take Visual Studio to the next step! We will use OBS to make possible to compile packages for multiple distributions inside the IDE. Wouldn’t it be great to be able to compile your program for different versions of Windows on the fly?

It is planned that the OBS plugin is ready before the first Preview of the next Visual Studio version, which will be most likely released on February 2018. It could seem that it is quite a lot of time, but there is also a lot of work to do. First, the almost 45000 lines of code in OBS, which are mainly written in Ruby and Perl, will be rewritten using Visual Basic. While rewriting it, the code will also be refactored and adapted to make the current old OBS fancier and more up to date than ever. Writing new documentation will also be needed.

Despite all this huge amount of work, the current OBS will be sadly no longer maintained. You can still find the code in Github, but the Open Build Service Team will not take care of issues and PRs anymore. Also, the current openSUSE instance of OBS, which you can currently find at [build.opensuse.org](https://build.opensuse.org/), won’t be available from 1st November 2017 on. But we have good news too, the new OBS plugin will be open source and it will be released under a GPL license, as could not be otherwise. 

Integrating OBS in Visual Studio will soon be possible!