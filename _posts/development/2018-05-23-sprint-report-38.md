---
layout: post
title: Highlights of the OBS frontend development - Sprint 38
category: development
---

Summer arrived in Germany and the [openSUSE Conference](https://events.opensuse.org/conference/oSC18/schedule) is knocking on the door, but we are still busy hacking and improving OBS. Keep on reading if you want to know more what we did the last two weeks (2018-05-07 to 2018-05-18).

## Features
### :cloud: Microsoft Azure is our new addition :cloud:

After supporting Amazon EC2 uploads since a while we are happy to announce that we now also added Microsoft Azure to our list :cloud:.
This feature makes it tremendously easy to build your [Kiwi Appliances](https://suse.github.io/kiwi/) in OBS and run it in one of these cloud providers.
The Public Cloud team already maintains [several appliances](https://build.opensuse.org/project/show/Cloud:Images:Leap_42.3) which you can use as a starting point.

As before, you will find an ``Cloud Upload`` link on the appliance repository page:

![Repository view](/images/posts/sprint_38_cloud_repository.png)

Now you need to select to which cloud provider you want to upload your appliance:

![Cloud provider selection](/images/posts/sprint_38_cloud_selection.png)

If this is your first upload to Microsoft Azure, you need to configure the access to your account via an App Registration. Finally you can trigger the upload:

![Cloud provider selection](/images/posts/sprint_38_cloud_azure.png)

_Please note that the Microsoft Azure uploads are currently disabled on build.opensuse.org. We will let you know as soon as we enable them for general use_

### bundle_gems source service
Source Services are tools to validate, generate or modify sources in a trustable way :robot:. We already announced in our [last sprint report](https://openbuildservice.org/2018/05/04/sprint-report-37/) that we were working on a bundle_gems source service.
The bundle_gems service makes it a breeze to package Ruby application and removes the necessity to package all dependent rubygems.

The missing part before we were able to install it into production was a caching mechanism so we don't download all gems again with every service run. We decided to make use of the fantastic [geminabox](https://github.com/geminabox/geminabox) as a rubygems.org proxy. Therefore we built a [geminabox container](https://build.opensuse.org/package/show/home:cbruckmayer:branches:openSUSE:Templates:Images:42.3/geminabox-docker) (which already makes use of the bundle_gems service) and finally we were able to deploy this service into production on build.opensuse.org.

If you want to know more and how you can make use of this new service, have a look [here](https://github.com/openSUSE/obs-service-bundle_gems).
  
### New log format for production environment

While the standard log format of a Rails application is awesome for development it is noisy, unparsable and unreadable in a production environment. You can find an example of the default log output in the next lines:

```
Started POST "/" for 127.0.0.1 at 2012-03-10 14:28:14 +0100
Processing by HomeController#index as HTML
  Rendered text template within layouts/application (0.0ms)
  Rendered layouts/_assets.html.erb (2.0ms)
  Rendered layouts/_top.html.erb (2.6ms)
  Rendered layouts/_about.html.erb (0.3ms)
  Rendered layouts/_google_analytics.html.erb (0.4ms)
Completed 200 OK in 79ms (Views: 78.8ms | ActiveRecord: 0.0ms)
```

Therefore we researched this sprint how we can make the logs more useful and found the awesome [lograge gem](https://github.com/roidrage/lograge). We now use this gem to generate production logs which will log at least (in one line per request):

* Timestamp
* Request: Method + Controller + Action + Path + Params
* Response status
* Duration: Overall / View / DB
* Remote IP
* User login

You can see an example of the output here:

```
method=POST 
path=/comments 
format=js controller=Webui::CommentsController action=create status=200 duration=1436.57 view=77.25 db=13.92 
params={"utf8"=>"✓", "commentable_type"=>"Project", "commentable_id"=>"1", "comment"=>{"body"=>"hola que tal"}, "commit"=>"Add comment"} 
host=127.0.0.1 
time=2018-05-14 15:59:03 +0000 
user=Admin
```

## Research
### New CSS framework
One of our short term goals is to replace the OBS frontend framework as we still use jquery-ui which is meanwhile a little bit mouldy :smile:. In our last onsite meeting, we decided that we want to try out different frontend frameworks to compare and decide which one we want to use in the near future. The first candidate was [Bulma](https://bulma.io/), an upcoming framework based on Flexbox. The result already looks quite promising :+1:.

![Cloud provider selection](/images/posts/sprint_38_bulma_frontpage.png)

![Cloud provider selection](/images/posts/sprint_38_bulma_package.png)

## Bug fixes
### JavaScript for multi requests was completely broken
    
We had a regression on code mirror with multiples submits, which caused the code mirror to be empty when switching tabs made it impossible to do a proper review in the webui. We now update the dimension of the codemirror when switching tabs which fixed this regresssion.
