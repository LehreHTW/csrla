---
layout: page
title: Capítulos
group: navigation-10
displaytitle: false
order: 2
lang: es
ref: kapitel
---
{% assign mexiko = site.mexiko | where: 'lang', page.lang | sort: "order" %}
{% assign kolumbien = site.kolumbien | where: 'lang', page.lang | sort: "order" %}
{% assign peru = site.peru | where: 'lang', page.lang | sort: "order" %}
{% assign brasilien = site.brasilien | where: 'lang', page.lang | sort: "order" %}
{% assign argentinien = site.argentinien | where: 'lang', page.lang | sort: "order" %}



<div class="filter">

<form data-filter-group>
    <h6>Temas</h6>
    <div>
        <input type="checkbox" name="subject" value=".menschenrechte" id="filter-menschenrechte"/>
        <label for="filter-menschenrechte">
            Derechos humanos
        </label>

        <input type="checkbox" name="subject" value=".korruption" id="filter-korruption"/>
        <label for="filter-korruption">
            Corrupción
        </label>

        <input type="checkbox" name="subject" value=".umwelt" id="filter-umwelt"/>
        <label for="filter-umwelt">
            Medio ambiente
        </label>

        <button type="reset">Reset</button>
    </div>
</form>

<form data-filter-group>
    <h6>Países</h6>
    <div>
        <input type="checkbox" name="subject" value=".mexiko" id="filter-mexiko"/>
        <label for="filter-mexiko">
            México
        </label>

        <input type="checkbox" name="subject" value=".peru" id="filter-peru"/>
        <label for="filter-peru">
            Perú
        </label>

        <input type="checkbox" name="subject" value=".kolumbien" id="filter-kolumbien"/>
        <label for="filter-kolumbien">
            Colombia
        </label>

        <input type="checkbox" name="subject" value=".brasilien" id="filter-brasilien"/>
        <label for="filter-brasilien">
            Brasil
        </label>

        <input type="checkbox" name="subject" value=".argentinien" id="filter-argentinien"/>
        <label for="filter-argentinien">
            Argentina
        </label>

        <button type="reset">Reset</button>
    </div>
</form>


</div>

<div class="mixer">
    {% for c in mexiko %}
        {% if c.chapter_image %}
        <div class="chapter mix {{c.country | downcase }} {{ c.subject_ref | downcase }}">
            <img src="{{ site.baseurl }}{{c.chapter_image | prepend: '/media/img/chapter/' }}" alt="{{c.chapter_image}}">
            <div class="meta">
                <span class="country">{{c.countryname }}</span>
                <span class="subject">{{ c.subject }}</span>
            </div>
            <h6 class="title">{{c.title}}</h6>
            <p class="excerpt">{{c.content | strip_html | truncate: 140, '[...]'}} <br><a href="{{ site.baseurl }}/{{ c.lang }}/{{ c.countryshort }}/#{{ c.subject }}" class="more">{{ site.t[page.lang].weiterlesen }} &raquo;</a></p>
        </div>
        {% endif %}
    {% endfor %}
    {% for c in kolumbien %}
        {% if c.chapter_image %}
        <div class="chapter mix {{c.country | downcase }} {{ c.subject_ref | downcase }}">
            <img src="{{ site.baseurl }}{{c.chapter_image | prepend: '/media/img/chapter/' }}" alt="{{c.chapter_image}}">
            <div class="meta">
                <span class="country">{{c.countryname }}</span>
                <span class="subject">{{ c.subject }}</span>
            </div>
            <h6 class="title">{{c.title}}</h6>
            <p class="excerpt">{{c.content | strip_html | truncate: 140, '[...]'}} <br><a href="{{ site.baseurl }}/{{ c.lang }}/{{ c.countryshort }}/#{{ c.subject }}" class="more">{{ site.t[page.lang].weiterlesen }} &raquo;</a></p>
        </div>
        {% endif %}
    {% endfor %}
    {% for c in peru %}
        {% if c.chapter_image %}
        <div class="chapter mix {{ c.country | downcase }} {{ c.subject_ref | downcase }}">
            <img src="{{ site.baseurl }}{{c.chapter_image | prepend: '/media/img/chapter/' }}" alt="{{c.chapter_image}}">
            <div class="meta">
                <span class="country">{{c.countryname }}</span>
                <span class="subject">{{ c.subject }}</span>
            </div>
            <h6 class="title">{{c.title}}</h6>
            <p class="excerpt">{{c.content | strip_html | truncate: 140, '[...]'}} <br><a href="{{ site.baseurl }}/{{ c.lang }}/{{ c.countryshort }}/#{{ c.subject }}" class="more">{{ site.t[page.lang].weiterlesen }} &raquo;</a></p>
        </div>
        {% endif %}
    {% endfor %}
    {% for c in brasilien %}
        {% if c.chapter_image %}
        <div class="chapter mix {{ c.country | downcase }} {{ c.subject_ref | downcase }}">
            <img src="{{ site.baseurl }}{{c.chapter_image | prepend: '/media/img/chapter/' }}" alt="{{c.chapter_image}}">
            <div class="meta">
                <span class="country">{{c.countryname }}</span>
                <span class="subject">{{ c.subject }}</span>
            </div>
            <h6 class="title">{{c.title}}</h6>
            <p class="excerpt">{{c.content | strip_html | truncate: 140, '[...]'}} <br><a href="{{ site.baseurl }}/{{ c.lang }}/{{ c.countryshort }}/#{{ c.subject }}" class="more">{{ site.t[page.lang].weiterlesen }} &raquo;</a></p>
        </div>
        {% endif %}
    {% endfor %}
    {% for c in argentinien %}
        {% if c.chapter_image %}
        <div class="chapter mix {{c.country | downcase }} {{ c.subject_ref | downcase }}">
            <img src="{{ site.baseurl }}{{c.chapter_image | prepend: '/media/img/chapter/' }}" alt="{{c.chapter_image}}">
            <div class="meta">
                <span class="country">{{c.countryname }}</span>
                <span class="subject">{{ c.subject }}</span>
            </div>
            <h6 class="title">{{c.title}}</h6>
            <p class="excerpt">{{c.content | strip_html | truncate: 140, '[...]'}} <br><a href="{{ site.baseurl }}/{{ c.lang }}/{{ c.countryshort }}/#{{ c.subject }}" class="more">{{ site.t[page.lang].weiterlesen }} &raquo;</a></p>
        </div>
        {% endif %}
    {% endfor %}
</div>
