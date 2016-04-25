---
layout: post
title:  "pi / arduino / pD audio effects processor"
date:   2015-12-23 02:34:25 -0400
categories: jekyll update
body-class: post-welcome
---
<iframe src="https://player.vimeo.com/video/149586351" width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<br>

<p>This project uses Raspberry Pi, Arduino, and PureData to create a digital multi-fx "pedal" to process sound in real time. The tutorial covers setup with the pi to both PureData and Arduino.</p>

The end goal is to use PureData (a visual programming language developed for creating multimedia works) to manipulate audio in real time with the help of a usb audio interface. PureData can be easily installed on a Pi and through some setup, an Arduino can be used to control parameters in the PureData patch.

The main focus of this tutorial is to share my path in integrating PD to run “headlessly” on the Raspberry Pi. Despite a more extensive setup with the pi, the lack of computer peripherals and components opens up many opportunities in creating interactive systems.

In this post I will jump right into using a USB audio interface with the pi and move into configuring it with pureData. If you still need to setup your pi, you can check out my extensive posts below.

<h2>pDuino</h2>
pDuino is an object created by Hans Christoph Steiner. It handles communication between Arduino microcontrollers and the PureData software. This is important to us because it allows us to integrate electronic components like knobs and switches that can change parameters in our Pd patch. This is what allows us to construct a physical device that can control our patch dynamically.

The first thing to do is to visit:
http://at.or.at/hans/pd/objects.html

1. Download the pDuino object and Firmata firmware.
Firmata is what will be loaded onto the Arduino and allows PureData complete control in terms of turning on digital and analog inputs on the Arduino board.

2. Extract the pDuino archive to a known location on your computer.

3. Create a path in PureData to the archive location so that PureData can reference it and create arduino objects.
This is done by going to preferences – path – new. You should browse to the folder and apply the changes.

More documentation here: http://en.flossmanuals.net/pure-data/ch060_installing-pduino/

<h2>Using a USB Audio Interface with Rasberry Pi and PureData</h2>

Setting up a USB Audio Interface with the pi and using alsamixer to record/play audio from command line.

Some USB interfaces are compatible with the pi. In my case I am using an Audiobox USB.

Using alsamixer will allow you to select your sound card instead of the default hdmi.
to record a file called “rectest” into the current directory…​arecord -D plughw:0 –duration=10 -f cd -vv ~/rectest.wav​

to play it back (using the soundcards output)…
aplay -D plughw:0 ~/rectest.wav

​The 0 after plughw: refers to my interface. It was listed as 0 as you can see here…

alsa

Installing and Configuring PureData with the pi.

Whether sharing internet from ethernet or just plugging right in to your router, install PureData. Note: This will only install PD-Vanilla. To use the Arduino controller we will have to install other packages. This will be discussed later…

sudo apt-get install puredata

vnc

You can see in the image above that I am VNCed into my pi and accessing PureData through the gui. Once PD is done installing it will be listed under the sound and video menu on the pi.

Navigate to preferences in PD and make sure your usb interface is selected as audio input/output.

pd_audio_settings

2. Running PD “headless” on the pi

In order to get patches running on the pi with no need for monitor/keyboard/mouse there are two things that must be accomplished. The first thing is that you need to create a script that tells the pi to open the Pd patch on start up and the second is handled in the Pd patch itself.

Cron jobs are perfect for having Pd patches run at startup.

Once that is complete, you need to add the following string into PD.

This will delay the patch from loading immediately which is required in order for it to run properly on startup.

One other tip…

this is what the post that helped me looked like…

[loadbang]
|
[delay 100]
|
[; pd dsp 1(
