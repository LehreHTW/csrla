---
layout: country
title: Argentinien
group: navigation-07
header-img: BILD_ARGENTINIEN-4.jpg
bodyclass: argentinien
order: 8
surface: 2'780'400
population: 43'847'430
gdp: 12'449
altitude: 25
lang: de
ref: argentinien
---
{% assign argentinien = site.argentinien | where: 'lang', page.lang | sort: "order" %}
{% for ch in argentinien %}
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
