---
layout: post
title: Introducing Flatpak Builds
category: development
---

Flatpak is a software for building, installing and running Linux apps.
The runtime offers a sandbox with restricted permissions.
Each app comes as a bundle, and while two different apps can depend
on different versions of the same dependency, they can run isolated from
each other in parallel.

OBS now supports building flatpak bundles, so you can build your own!

## Quick Start

Even if you have never built a flatpak app, you can quickly make your first
step by branching the Template package. This will provide you with an already
preconfigured project and package.

1. Go to [ImageTemplates](https://build.opensuse.org/image_templates)
1. Select "Template for Flatpak"
1. Enter a name and click "Create"

or

1. Go to [FlatpakTemplate](https://build.opensuse.org/package/show/OBS:Flatpak:Templates/FlatpakTemplate)
1. Click on "Actions -> Branch package"
1. Click on the "Branch" button

After creating the package, OBS will start building. This can take a while.

When OBS finished publishing, you will find a `.flatpak` file in your folder
under
`https://download.opensuse.org/repositories/home:/your-user:/branches:/OBS:/FlatpakTemplates/`

Download the file and install it:

~~~
flatpak install --user org.gnome.Mahjongg-3.36.2.flatpak
~~~

You built and installed your first flatpak app!

## Details

This will be documented soon at our [OBS package formats
page](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.package_formats.html).

For a successful Flatpak build you need four things:

* The project configuration. [Example](https://build.opensuse.org/projects/OBS:Flatpak:Templates/prjconf)
* The project meta configuration. [Example](https://build.opensuse.org/projects/OBS:Flatpak:Templates/meta)
* A flatpak manifest file `flatpak.yaml`.
  [Example](https://build.opensuse.org/package/view_file/OBS:Flatpak:Templates/FlatpakTemplate/flatpak.yaml?expand=1)
* The sources mentioned in the manifest in form of tar archives

### Configuration

For the configuration you can simply copy from or branch the [Template
package](https://build.opensuse.org/package/show/OBS:Flatpak:Templates/FlatpakTemplate).

### Manifest

The manifest file should be called `flatpak.yaml`. You can find a detailed
reference at the [official
documentation](https://docs.flatpak.org/en/latest/manifests.html).

Because Flatpak manifests don't have a version field, and our downloadable
files should have a version number, you can add a special `#!BuildVersion`
field, ideally at the top of the YAML file. It is not required, but if you
leave it out, you will always get version `0`.

~~~
#!BuildVersion: 3.14.15
---
app-id: org.gnome.Mahjongg
runtime: org.gnome.Platform
sdk: org.gnome.Sdk
runtime-version: '3.36'
# etc.
~~~

## How does the build work?

OBS is not a replacement for Flathub, so we had to find a solution for
providing the basic dependencies.

To make this work, we are installing the several platform images and SDKs
in a container, tar the files together and create RPM packages from that.

This way they can be fetched as dependencies like in other builds.
The correct platform/SDK and version is parsed from the manifest file.
Parsing is done by the [Build::Flatpak
module](https://github.com/openSUSE/obs-build/blob/master/Build/Flatpak.pm).

## Screenshots

Here are some screenshots of the project creation via
[ImageTemplates](https://build.opensuse.org/image_templates):

<figure>
  <img src="/images/posts/flatpak-image-templates.png" alt="Image Templates" />
  <figcaption>Image Templates</figcaption>
</figure>
<figure>
  <img src="/images/posts/flatpak-create.png" alt="Create new project from Image Templates" />
  <figcaption>Created new project from Image Templates</figcaption>
</figure>
<figure>
  <img src="/images/posts/flatpak-build-results.png" alt="Build results" />
  <figcaption>Build results</figcaption>
</figure>
<figure>
  <img src="/images/posts/flatpak-download.png" alt="Downloads" />
  <figcaption>Downloads</figcaption>
</figure>


{% include partials/_how-to-give-us-feedback.md %}
