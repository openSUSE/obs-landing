---
layout: post
title: Identify constraint problems
category: releases
excerpt_separator: ""
---

### Blame the constraints!

<h5>The problem</h5>

Until now it was not possible to easily identify if the constraints are the reaseon for your job
to hang in state <i>scheduled</i> and not switching to <i>building</i>. That caused a lot of confusion
for it was not clear what the problem is and if the state would change. 

<h5>The solution</h5>

Now it is possible to identify such problems. How? 
If no suitable idle worker was found, the dispatcher periodically checks all workers in the
states <i>building, away</i> and <i>down</i>. There can be two results:

<b><u>1. There is no suitable worker at all</u></b><br>
In that case a detailed string is generated which looks like this: 

{% highlight bash %}
"scheduled: no compliant workers (constraints mismatch hint: hardware sandbox)"
{% endhighlight %}

The message indicates that there are no workers at all that can build the job. Therefore the job will <b>never</b> be built. The message also points you in the direction which parts of the constraints are causing this. In the case above something in hardware and sandbox is to blame.

In this case most likely your constraints are wrong and need to be changed.

<b><u>2. There is a suitable worker that is busy / down at the moment</u></b><br>
This job can be built. But not at the moment. The returned detail string is: 

{% highlight bash %}
"waiting for 4 compliant workers"
{% endhighlight %}

This message means that 4 workers can build the job, but all are in a state that prevents building. If one of the workers switches to state <i>idle</i> the job will start building. If there are workers in state <i>down</i> this will also be displayed.

<h5>How to access this information?</h5>
To view these detailed scheduled information you can either use the osc client or the WebUI. 

{% highlight bash %}
# osc r -v Application:Geo sfcgal -r openSUSE_Factory_ARM
openSUSE_Factory_ARM aarch64    scheduled: waiting for 4 compliant workers (1 of them down)
openSUSE_Factory_ARM armv7l     scheduled

# osc r -v home:mstrigl cowsay -r openSUSE_Leap_42.1
openSUSE_Leap_42.1   x86_64     scheduled: no compliant workers (constraints mismatch hint: hardware sandbox)
{% endhighlight %}



<img src="/images/posts/detailed_string.png" style="margin:20px;" title="detailed string information">

What do you think? Let us know on the mailing list, on IRC or in the comments!

Have fun :) 
