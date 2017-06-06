---
layout: post
title: SUSE Studio Integration
category: documentation
author: Christian Bruckmayer
---

You all know the amazing [SUSE Studio](https://susestudio.com) and love how it abstracts the complicated process of appliance building.
However, it lacks several essential features like an integration into your continuous integration workflow or automatic rebuilds on updates.
If you have followed our [recent](http://openbuildservice.org/2017/05/11/new-image-templates-page/) [blog posts](http://openbuildservice.org/2017/05/15/creating-your-own-image-template/) then you may have noticed that we currently work on a better integration of appliance building in the Open Build Service.
This blog post will show you how you can export your appliance from SUSE Studio and import it into the Open Build Service to benefit from these features.

## SUSE Studio

SUSE Studio is the award-winning online application to create custom linux appliances.
It helps you configure packages, users, database and much more.
A little known feature is that it allows you to export [appliance configuration files](https://susestudio.com/help/create/exporting.html).

<img src="/images/posts/studio-export.png" style="margin:20px;" title="Studio Export, Step 1">

To do this got to the Build tab, click ``Export your appliance's Kiwi configuration`` and then click ``Download appliance source``.

<img src="/images/posts/studio-export-download.png" style="margin:20px;" title="Studio Export, Step 2">

The export contains the Kiwi description of your appliance.
Kiwi is the OS image appliance builder which powers SUSE Studio and Open Build Service in the background.
If you want to know more about it, have a look at the [excellent documentation](https://doc.opensuse.org/projects/kiwi/doc/).
After extracting the archive, you can investigate the files.

<img src="/images/posts/kiwi-export.png" style="margin:20px;" title="Examining Studio Export, Step 1">

The most interesting file is the ``source.kiwi.txz`` archive as it can be directly imported into your Open Build Service project.

## Open Build Service

First go to your home project and add the ``Kiwi image builds`` repository.

<img src="/images/posts/kiwi-repository.png" style="margin:20px;" title="Add Image Repository">

After that, create a new package inside your home project.

<img src="/images/posts/new-package.png" style="margin:20px;" title="Create new Package">

After clicking on create you will end up with a package without source files.
Click on ``Add file`` and select ``source.kiwi.txz`` from your download directory to import your SUSE Studio configuration into OBS.

<img src="/images/posts/add-file.png" style="margin:20px;" title="Import Kiwi configuration">

The import feature will extract the archive and does several adaptions like renaming files and ordering repositories.
If everything worked like expected, the appliance should start building after a few minutes.

<img src="/images/posts/kiwi-package.png" style="margin:20px;" title="Import Kiwi configuration">

## Advantages & Limitations

Some of you might ask why should you use the Open Build Service instead of SUSE Studio?
As already mentioned in the beginning, OBS can be easily integrated in your continuous integration workflow.
You can setup a [source service](https://en.opensuse.org/openSUSE:Build_Service_Concept_SourceService#Example_2:_GIT_integration) which automatically fetches your latest code from GitHub, builds an RPM package and eventually your custom Linux application.
The dependency resolution of OBS also makes sure that you get a new appliance as soon as one of the dependencies changed.
To complete the continuous integration workflow, it is possible to test the appliance with [Open QA](http://open.qa/).

But OBS offers more! 
SUSE Studio uses only a small subset of Kiwi, with the help of OBS you can make use of the full feature set.
Similiar to GitHub and SUSE Gallery, OBS gives you the ability to [collaborate](https://en.opensuse.org/openSUSE:Build_Service_Collaboration) with other appliance maintainers.
Ever wanted to build appliances for your Raspberry Pie?
While SUSE Studio only offered building 64-bit appliances, with OBS you can now build many other architectures including ARM or s390.

We tried to make the import as smooth as possible for you, however, there are of course limitations. 
If you have, for instance, custom repositories in your appliance, OBS will fail to resolve these and you will end up with a broken package.

<img src="/images/posts/broken-package.png" style="margin:20px;" title="Can not resolve repository error">

You can resolve this issue by editing the 'config.kiwi' file and adding the correct OBS repository with the schema ``obs://$PROJECT/$REPOSITORY``

<img src="/images/posts/kiwi-file.png" style="margin:20px;" title="Edit kiwi config">

As OBS parses the configuration file before it starts the build, you can get ``have choice`` or similiar issues which you need to resolve manually.
This is for instance the case for imports of KDE configuratation files.

<img src="/images/posts/kiwi-have-choice.png" style="margin:20px;" title="Have choice error">

You need to decide on case to case which package is the correct one.
We can fix the KDE configuration by removing the package ``kdebase4-session`` from the config.kiwi file.

If you have questions or suggestions, send an email to our [mailinglist](https://lists.opensuse.org/opensuse-buildservice/), join us in IRC on #opensuse-buildservice @ freenode or open an [issue](https://github.com/openSUSE/obs-service-kiwi_import/issues).
