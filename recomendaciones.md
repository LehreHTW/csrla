---
layout: country
title: Recomendaciones
subtitle: «El entorno económico de América Latina no es para principiantes, sino solo para profesionales»
group: navigation-09
order: 10
header-img: 20170717_142211.jpg
lang: es
ref: empfehlungen
---
{% assign empfehlungen = site.empfehlungen | where: 'lang', page.lang | sort: "order" %}
{% for ch in empfehlungen %}
<section class="box chapter-{{ ch.subject }}" id="{{ ch.subject }}">
    {% if ch.chapter_image %}
        <div class="image grid" style="background-image: url(../media/img/{{ ch.chapter_image }});">
        </div>
    {% endif %}
    <div class="content">
        <span class="chapter-subject">{{ ch.subject }}</span>
        <h1 class="chapter-title">{{ ch.title }}</h1>
    </div>
    {{ ch.content }}
</section>
{% endfor %}
