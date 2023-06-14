---
layout: post
title: API Documentation Remake
category: documentation
---

The OBS API has grown for more than fifteen years, and updating and improving the documentation provided to OBS API users has
become a recurrent request.

Adapting and creating clear OBS documentation is an important task.
Moved by the success experienced in other teams at [SUSE](https://www.suse.com/), we studied the option of both, creating an
OpenAPI definition, and presenting it through Swagger UI.
After giving it a try with a minimal subset of our API endpoints, we decided it was worth it to arrange an OpenAPI definition.

In the last days we documented, using OpenAPI, a list of endpoints, which will grow in the next iterations. So here you have:

<figure>
  <img src="/images/posts/sprint_91_swagger_ui.png" alt="OBS API New Documentation Page" />
  <figcaption>OBS API New Documentation Page</figcaption>
</figure>

This documentation page is now available [here](https://api.opensuse.org/apidocs/).

Something to notice, is that the new documentation is not defining schemas to be used for XML validations, both for requests and responses.
It will refer to the existing XML validation schemas, also found in the still usable [API documentation](https://build.opensuse.org/apidocs-old/).

[OpenAPI specification](https://www.openapis.org/) is "a specification for machine-readable interface files for describing,
producing, consuming, and visualizing RESTful web services" (according to [Wikipedia](https://en.wikipedia.org/wiki/OpenAPI_Specification)).
Once a definition based on the OpenAPI specification is created, a complete ecosystem of tools can be used.
One of these tools is Swagger UI, which provides a web interface for the documentation included in the OpenAPI definition.

[Swagger UI](https://swagger.io/tools/swagger-ui/) not only provides an ordered list of the API endpoints, grouped, color-coded by
action, examples of parameters and responses, ...
It also allows you to test your API directly from your browser: asks for authentication when required, asks for the parameters needed,
and shows the results of the performed request.

As always, we kindly ask you to navigate through the new API documentation, try it, and let us know about your experience.

{% include partials/_how-to-give-us-feedback.md %}
