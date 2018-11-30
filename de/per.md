---
layout: country
title: Perú
group: navigation-04
header-img: BILD_PERU-17.jpg
bodyclass: peru
order: 5
surface: 1'285'216
population: 31'773'839
gdp: 6'046
altitude: 161
lang: de
ref: peru
---
{% assign peru = site.peru | where: 'lang', page.lang | sort: "order" %}
{% for ch in peru %}
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
