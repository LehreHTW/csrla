---
layout: country
title: Kolumbien
group: navigation-05
header-img: BILD_KOLUMBIEN-18.jpg
bodyclass: kolumbien
order: 6
surface: 1'138'910
population: 48'653'419
gdp: 5'806
altitude: 2640
lang: de
ref: kolumbien
---
{% assign kolumbien = site.kolumbien | where: 'lang', page.lang | sort: "order" %}
{% for ch in kolumbien %}
<section class="box chapter-{{ ch.subject }}" id="{{ ch.subject }}">
    {% if ch.chapter_image %}
        <div class="image grid" style="background-image: url({{ ch.chapter_image | prepend: '/media/img/chapter/' | prepend: site.baseurl }});">
        </div>
    {% endif %}
    <div class="content">
        <span class="chapter-subject">{{ ch.subject }}</span>
        <h1 class="chapter-title">{{ ch.title }}</h1>
    </div>
    {{ ch.content }}
</section>
{% endfor %}
