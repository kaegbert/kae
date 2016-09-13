---
layout: post
permalink: /sptc/
---
**Special Projects in Tiny Computing**

Basic Raspberry Pi Setup

<img class="alignnone size-medium wp-image-46" src="http://c.visitsteve.com/sptc16/wp-content/uploads/sites/18/2016/09/pi_setup-300x300.jpg" alt="pi_setup" width="300" height="300" />


Using the [Learning Raspberry Pi Adafruit tutorials](https://learn.adafruit.com/series/learn-raspberry-pi) we can get an awesome boiler plate setup going for our pi's. A quick note... I use a Mac computer so most of my insight will be about using the Pi with a mac. That being said, just about everything is the same. There are definitely some exceptions, but most of this well documented online.

First things first, we need an operating system...

### 1. Download Raspbian /Installing an image of Raspbian.

As Steve mentioned in class, we are going to use Raspbian. [Raspbian](https://en.wikipedia.org/wiki/Raspbian) is a play on [Debian](https://en.wikipedia.org/wiki/Debian), a popular form of [Linux](https://en.wikipedia.org/wiki/Linux).

[The latest image of Raspbian is available here](https://www.raspberrypi.org/downloads/raspbian/).

You can write this image to your SD card through the Terminal/command line or using a 3rd party software that uses a Graphical User Interface. There are many different examples of how to do this whether you are on Mac, Windows, or Linux.

If you have not formatted an SD card for the pi in the past, I recommend looking up some video tutorials.

***If you are nervous about overwriting your main computer's hard drive you may want to use the graphical approach...***

I like to use a software called [**ApplePi Baker!**](http://www.tweaking4all.com/software/macosx-software/macosx-apple-pi-baker/).

*The download is at the bottom of the page...*


![new](http://kevinegbert.com/applepibaker.png)

Using ApplePi Baker or any similar software, you can use the SD card adapter to insert your microSD card into your main machine. Select the card in the Pi-Crust window and select your newly download version of Raspbian in the Pi-Ingredients : IMG Recipe section using the ... symbol.

I recommend you save the downloaded version of Raspbian somewhere on your computer or an external hard drive. This could save you time later if you need to do a clean install. Downloading even a few gigabytes will take some time.

After you select a recipe, your IMG will be written to the SD card. This can take some time so do something else or patiently look at the red progress bar...

### 2. Booting up the badboy for the first time.


So, now that you have an operating system written to your SD card you can boot up the mini computer.

To boot up your Pi you will need a few things...

1. 5v Micro USB charger. (Almost any phone micro USB charger will work)
2. HDMI monitor/tv/display and an HDMI cable.
3. USB keyboard
4. USB mouse (optional... kind of...)
5. Ethernet cable (also optional... we will get to this later...)


Find a tv or monitor with an HDMI port and connect the hdmi cable between the display and the pi. Connect your USB keyboard and mouse, then plug the pi into the 5v charger to a power strip.

You should see a rainbow load screen...

You will then be prompted for a user name, which on a new installation of Raspbian, will be **pi**.

The password will be **raspberry**.

### 3. First time configuration.

This section will refer the [Adafruit First Time Configuration tutorial.](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-2-first-time-configuration)

Once you logged in to your pi, you can get familiar with easy commands like **ls** and **cd**.

One of the first things you need to do before doing anything more advanced is to use the command:

 ```sudo raspi-config```

 The command will you bring to a screen that looks like the *bios* screen on another computer.

**Follow the adafruit tutorial above.** This is really important and the tutorial is really easy to follow. Without it, you won't be able to SSH, to use the full size of your SD card, you won't be able to use a camera, and you may have some trouble with keys on your keyboard!

This is also a good time to change your password.


### 4. SSH using console cable.

<iframe src="https://player.vimeo.com/video/181697787" width="640" height="410" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/181697787">pi_login</a> from <a href="https://vimeo.com/kevinegbert">kevin egbert</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

SSH'ing using the USB console cable is **by far my favorite way to work on the pi.** It looks really lame, but looks can be deceiving. Forget having a 5 volt charger, USB keyboard, an HDMI monitor... You can work on your pi right on a laptop just by connecting a USB cable.

[This adafruit tutorial outlines it quite well.](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable)

The first thing you are going to have to do is download the correct drivers for the USB console cable.

For Mac users:

The adafruit tutorial webpage has a big green box that leads to a download of the driver for the console cable. **It did not work for me.** I am on OS X El Capitan 10.11.6 and I downloaded the appropriate driver [here](http://www.prolific.com.tw/US/ShowProduct.aspx?p_id=229&pcid=41).

I used to be on Lion though and even though the drivers are different, the concept is the same. You will have to restart your computer after the download.

After the restart you should open up your **Terminal application.**

*A little note on the Terminal...*

The terminal / command prompt / command line are all different names for the text based way of operating your computer. Before operating systems like Apple and Windows, there were not GUIs. We can still use our computer without a GUI by opening up the Terminal.

If you would like to see... once you open your Terminal application... Type the command
```ls```.
The command will **list** what is in your home directory. Whether your on your Pi or Mac, ```ls``` is a command that works the same way.

I want to make this clear for two reasons...

1. When you enter the command to SSH in your pi what you are actually doing is using the command associated with what driver we just downloaded.
2. Once the command is issued you are SSH'ed in to your pi. That specific terminal window is now in control of your Pi, and not your mac.

Anyways...

The next thing you have to do is connect the 4 leads on the opposite end of the USB console cable to the GPIO pins of the Raspberry Pi.

After you have downloaded the drivers, restarted your computer, and then connected the lead of the usb cable to the pins on the Pi...

1. open your Terminal application
2.  **plug in the USB console cable**
3.  Then issue the command:
```screen /dev/cu.usbserial 115200```

Make sure you plug in the cable and then immediately issue the command. If you issue the command before the USB is plugged in it will not recognize and you will have to unplug, close the terminal, and try again.

The command ```screen``` is the command associated with the driver we downloaded. /dev/cu.usbserial is the path to our USB ports.
115200 is the baudrate, which allows us to see the serial connection in language that we can understand.

##### A note on ```screen /dev/cu.usbserial 115200```...
As outlined in the Adafruit tutorial, the command ```screen /dev/cu.PL2303-00001004 115200
``` is used to connect to the specific USB port on your computer. If you are using this command you should type up to the PL and then press ```TAB``` to auto complete your USB port. Then you will add ```115200``` to the end of the command.


**For some reason, (note sure if this is a change associated with El Capitan or not) accessing the specific port is unavailable on my installation. I am going to look into this...**

You may have to try both the ```screen /dev/cu.usbserial 115200``` command and the ```screen /dev/cu.PL``` (Press tab) ```115200```
