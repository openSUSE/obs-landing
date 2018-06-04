---
layout: post
title: Introduction of the new OBS Container Registry
category: documentation
---

Did you know that OBS can not only build RPM packages and appliances but also container formats like docker?
This is a new feature we introduced last year!
But how can you make use of containers you build with OBS?

We recently introduced our [https://registry.opensuse.org](https://registry.opensuse.org)!  
Read on if you want to know more :+1:


# How can you build containers with OBS?

The easiest way to create your own container is branching
one of the [official openSUSE/SUSE Container Templates](https://build.opensuse.org/image_templates) and modify it to your needs.

In general you can choose between two bulding flavours:

* Build with native docker tools (Dockerfile)
* Build with [kiwi](https://suse.github.io/kiwi/building/build_docker_container.html) (expert level or for those who are already familiar with kiwi)

To start with an existing image

* Go to the [OBS start page](https://build.opensuse.org/)
* Click on the link ["New Image"](https://build.opensuse.org/image_templates)

![New Image](/images/posts/new_image.png)

* Choose one of the image templates named "Container built using ..."
* Enter the name of you new appliance in the text field below "Name your appliance"
* Click on the "Create appliance" button

![Container overview](/images/posts/container_overview.png)

* As last step you need to enable the publish flag for the image & container repositories,
otherwise your newly created containers won't show up on the registry.

![Enable Publishing](/images/posts/enable_publishing.png)


## Limitations

If you branch the same container multiple times, you need to change the name/tag
information in the config.kiwi/Dockerfile to avoid overwriting your containers
because of name/tag collisions.

Due to docker's restrictions all project/repository/package names will be
converted to lower case names in the registry.

Example:

* `home:Me:myImages` -> `home/me/myimages`
* `home:Me:Myimages` -> `home/me/myimages`

Both project names will result in the same repository path in the registry and
may overwrite each other's results.


# Search/Browse/Use available containers

In our overview page at [https://registry.opensuse.org](https://registry.opensuse.org),
you have the ability to search a listing
of all available container built by OBS. If you click on the blue box for a
certain image, another box will open up with further information about this
image, including a grey box containing the "docker pull" command for this image.

![Container details](/images/posts/registry.opensuse.org-container-details.png)

Additionally a file named `<binary-package>.registry.txt` will be created
in your repository in `http://download.opensuse.org/repositories/<project>/<repository>`,
which contains information how to pull your image from https://registry.opensuse.org.

If you want to enable container signature verification simply set the following
environment variable in your shell:

```
export DOCKER_CONTENT_TRUST=1
```

If multiple architectures are enabled for your image repository,
OBS publishes a so-called ['fat' manifest](https://docs.docker.com/registry/spec/manifest-v2-2/#example-manifest-list),
so that docker automatically chooses the matching architecture 
when the container is fetched from the registry.
