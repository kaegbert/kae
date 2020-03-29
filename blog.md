---
layout: default
title: blog
permalink: /blog/
---


<div class="home">


<link href="/css/styles.css" rel="stylesheet" />

 <!-- <div class="masonry"> -->


  <!-- <h1 class="page-heading">Posts</h1> -->

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}
          <!-- ENABLE IMAGES -->
        <!-- <img src="{{ post.image | prepend: site.baseurl }}" alt="{{ post.title }}" title="{{ post.title }}"></a> -->
      <!-- </li> -->
    {% endfor %}
  <!-- </ul> -->

  <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> -->

<!-- </div> -->

<!-- <blockquote>
  <p>A sample blockquote.</p>

  <blockquote>
      <p>Nested blockquotes are
  also possible.</p>
    </blockquote> -->


<!-- <span style="color: orange"> party time </span> -->


  <body>
<!-- alright -->
<!-- <img align="right" src="img/blue.png"> -->


  </body>
