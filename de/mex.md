---
layout: country
title: Mexiko
group: navigation-03
header-img: BILD_MEXIKO-7.jpg
bodyclass: mexiko
order: 4
surface: 1'964'375
altitude: 2'250
gdp: 8'201
population: 127'540'423
lang: de
ref: mexiko
---
{% assign mexiko = site.mexiko | where: 'lang', page.lang | sort: "order" %}
{% for ch in mexiko %}
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
