---
layout: post
title: Release of Azure Cloud Upload feature
category: development
author: "OBS frontend team"
---

We are proud to announce that the new Azure cloud upload feature has just been released.

You may be familiar with the previous [EC2 Cloud Upload](https://openbuildservice.org/2018/03/01/cloud-upload/) feature.
This time, it is the turn of Azure images.
The new feature we are presenting allows you to upload Azure images created in OBS to [Microsoft Azure](https://azure.microsoft.com/).

## Uploading an Azure Image

In the package overview of an image (your own or another you find in OBS), you can check if your image was successfully built:

<img src="/images/posts/cloud_upload_azure_package_view.png" alt="Azure Cloud Upload Package View" style="max-width: 800px;">

You can click the `images` link in the package view, which will take you to the `binaries` page:

<img src="/images/posts/cloud_upload_azure_binary_page.png" alt="Binaries page" style="max-width: 800px;">

On the `binaries` page, you find all binaries and files that were created during a build for a certain repository and architecture.
If one of these files is an Azure image, there is a `Cloud Upload` link, which takes you to the `Choose your Cloud` page.

![Cloud provider selection](/images/posts/sprint_38_cloud_selection.png)

Select `Microsoft Azure`. You will be shown an `Upload to Microsoft Azure` page.

![Upload to Microsoft Azure](/images/posts/sprint_38_cloud_azure.png)

If this is your first upload to Microsoft Azure, you need to configure the access to your account via an App Registration.
Check the [Configuring Microsoft Azure Credentials section](#configuring-microsoft-azure-credentials) for more details.

After that you can trigger the upload clicking the `Upload Image` button.
You will see all cloud images you submitted to the cloud and their upload status.

![Cloud Upload Overview Receiving](/images/posts/cloud_upload_azure_overview_receiving.png)

Follow the progress of the upload clicking on the `Log` link.
After some time, depending on the size of the image, you will see that your image was successfully uploaded.

### Configuring Microsoft Azure Credentials

Go to the [Microsoft Azure Configuration](https://build.opensuse.org/cloud/azure/configuration) page.

![Microsoft Azure Configuration](/images/posts/cloud_upload_azure_configuration.png)

Follow the steps, fill the `Application ID` and `Application Key` fields and click on the `Submit` button.

![Microsoft Azure Configuration After](/images/posts/cloud_upload_azure_configuration_after.png)

Now you are able to upload an Azure image.

Like Amazon EC2 images, in case you don't want to build an Azure image from scratch you might want to check out our [image templates page](https://build.opensuse.org/image_templates).
There you can find base templates, including Azure images.

Try it out and enjoy running your images in the cloud!
