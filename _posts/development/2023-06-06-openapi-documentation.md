---
layout: post
title: OpenAPI 3.0.0 Specification for the Open Build Service HTTP API
category: releases
---

Starting today, the OpenAPI Specification presented through Swagger UI becomes the official API documentation for Open Build Service 🎉

Find it at [https://api.opensuse.org/apidocs/](https://api.opensuse.org/apidocs/)

With OpenAPI we now provide an industry standard way to maintain the specification and with Swagger UI a tool that makes
consuming the documentation easier for people who want to make use of the OBS API in their code.

Now our journey to remake the API documentation has come to an end, but the most exciting journey is about to begin.
Your journey to use and contribute to the OBS API documentation! 👏

### Using Swagger UI

Swagger UI contains a long list of API endpoints. Un-collapse an endpoint to learn about its purpose, the parameters it uses, the possible responses, and more. At any time, you can authorize and perform a request to the API to try out the behavior of endpoints.

A picture is worth a thousand words.

<figure>
  <img src="/images/posts/sprint_142_new_api_docu.gif" alt="Gif showing the usage of the new API documentation" />
  <figcaption>Usage of the new API documentation</figcaption>
</figure>

**NOTE:** The discontinued documentation will be available at [https://build.opensuse.org/apidocs-old/](https://build.opensuse.org/apidocs-old/index) for a while.

### Contribute to the OpenAPI Specification

First of all, you need to understand what is Swagger UI and learn the OpenAPI 3.0.0 Specification. [This OpenAPI Guide](https://swagger.io/docs/specification/about/) is a good starting point.

Once you are familiar with the OpenAPI specification structure, you can start contributing to OBS documentation, which you can find under [src/api/public/apidocs](https://github.com/openSUSE/open-build-service/tree/master/src/api/public/apidocs) in our GitHub repository.

The main steps are:

- Declare the new endpoint in [OBS-v2.10.50.yaml](https://github.com/openSUSE/open-build-service/blob/master/src/api/public/apidocs/OBS-v2.10.50.yaml). Please keep the alphabetical order.
- Define the endpoint in YAML format under the [paths/](https://github.com/openSUSE/open-build-service/tree/master/src/api/public/apidocs/paths) directory.
- Make use of the already-defined [components](https://github.com/openSUSE/open-build-service/tree/master/src/api/public/apidocs/components) (parameters, responses, schemas) when possible.

You can also have a look to [closed pull requests](https://github.com/openSUSE/open-build-service/pulls?q=is%3Apr+label%3A%22Documentation+%3Abook%3A%22+is%3Aclosed) to take what others did before as an example.

Enjoy the new docu 📖 and keep the feedback and contributions coming, please. It will help the whole OBS community.

{% include partials/_how-to-give-us-feedback.md %}

A wholehearted thank you to everyone that created the now discontinued API documentation, and also to those who have contributed and given us feedback during the development of this new documentation.

{% include partials/_series-of-posts-about-api-docs.md %}
