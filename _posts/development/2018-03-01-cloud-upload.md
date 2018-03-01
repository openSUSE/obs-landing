---
layout: post
title: Cloud Upload
category: development
author: "OBS frontend team"
---

We just released the new EC2 cloud upload upload that allows you to upload your EC2 images to [Amazon Web Services (AWS)](https://aws.amazon.com) from OBS. :tada:

## How does it work?

In the package view of an image (your own or any other you find in OBS), you can check if it was successfully built:
 
<img src="/images/posts/cloud_upload_package_view.png" alt="Cloud Upload Package View" style="max-width: 800px;">

Once it is built, you can click the `image` link in the package view,
which will take you to the binaries page:

<img src="/images/posts/cloud_upload_binary_page.png" alt="Binary page" style="max-width: 800px;">

On the binaries page you find all binaries and files that got created during a build for a certain repository and architecture.
If one of these files is an EC2 image, there is a `Cloud Upload` link, which takes you to the EC2 Uploader page.

<img src="/images/posts/cloud_upload_uploader.png" alt="Cloud uploader" style="max-width: 800px;">

If you haven't configured your account yet, you can use the link in the EC2 Uploader for the `Amazon EC2 configuration`.
Check the [Configuring Amazon EC2 credentials section](#configuring-amazon-ec2-credentials) for more details.

If your account is already configured, you can choose the AMI Name, the region you want to upload to and optionally the VPC Subnet ID.

<img src="/images/posts/cloud_upload_uploader.png" alt="Cloud uploader" style="max-width: 800px;">

By clicking `Upload`, the image upload process will start and you will get redirected to the `All cloud uploads` page:

<img src="/images/posts/cloud_upload_overview.png" alt="Cloud uploader" style="max-width: 800px;">

When it finishes, you will see the AMI of your uploaded image in the details column.
You will also be able to see it in your Amazon account:

<img src="/images/posts/cloud_upload_aws.png" alt="AWS" style="max-width: 800px;">


### Configuring Amazon EC2 credentials

In order to be able to upload EC2 images from OBS to AWS you need to give OBS permissions,
by creating an [Amazon Resource Name (ARN)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) and adding the OBS account to it.
You can do this on the `Amazon EC2 configuration` page, where it is explained step by step. You can find more information about how to use an external ID when granting access to your AWS resources in [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html).

Since this might incur costs, we recommend you to read [Amazon's price list](https://aws.amazon.com/de/partners/suse).

<img src="/images/posts/cloud_upload_configuration.png" alt="Cloud upload configuration" style="max-width: 800px;">


Try it out and enjoy running your images in the :cloud:! :wink:
