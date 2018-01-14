---
layout: page
title: Documentation
exclude: true
order: 99
---
# Beim 1. Mal durchführen

## jekyll Installation
Installation gemäss [Dokumentationspage](https://jekyllrb.com/docs/installation/), [jekyll auf Windows](https://jekyllrb.com/docs/windows/).
Zusätzlich müssen ausserdem folgende commands ausgeführt werden:

``` bash
sudo gem install kramdown rouge
sudo gem install jekyll-autoprefixer
sudo gem install liquefy
```

# Git Repo herunterladen
_wenn du noch nicht Teil des Repos bist, bitte myriam@halfapx.com eine Mail schreiben und anfragen (oder einen Fork erstellen)_

Mit dem Terminal geht das am schnellsten. mit `cd [PFAD]` in den Überordner navigieren in den gecloned werden soll und dann clonen mit der URL (Falls kein SSH Key hinterlegt ist [Anleitung](https://help.github.com/articles/connecting-to-github-with-ssh/)), alternativ HTTPS URL verwenden.

``` bash
git clone git@github.com:mynimi/csr-lateinamerika.git
```

Der Ordner wird heruntergeladen und jekyll kann nun gestartet werden.

#  Jedes Mal durchführen

##  Bevor Änderungen durchgeführt werden
Um Conflicts zu vermeiden, immer erst pullen und möglichst mit den anderen Teammitgliedern absprechen, dass nicht das gleiche bearbeitet wird. Beim Pull werden alle Änderungen der anderen heruntergeladen.

```bash
git pull
```

## Localhost starten
Danach kann der localhost gestartet werden. Dazu einfach mit dem Terminal in den Ordner csr-lateinamerika navigieren `cd [PFAD]` und dann die jekyll commands ausführen.

``` bash
jekyll serve
```

Dann kannst du die Seite unter [localhost:4000](http://localhost:4000/) aufrufen.


## Änderungen hochladen
Wenn du mit deinen Änderungen zufrieden bist, kannst du sie committen.

```bash
git add -A
git commit -m "Deine Commit Message"
git push
```
Die Änderungen auf den Server hochladen geht über FTP, einloggen und dann den Inhalt des `_site` Ordners hochladen.


# Änderungen
## CSS
Einen Grossteil der Styling Anapssungen kannst du im `_settings.scss` ausführen.
Wenn du ein neues Sass-File erstellst, vergiss nicht, es in `css/styles.scss` zu importieren.

## JS
Javascript Änderungen führst du in `main.js` durch.

## Templates
Templates befinden sich im `_layouts` Ordner, sie greifen auf die Variablen auf den Länderseiten zu.
Um mehr zu erfahren, [jekyll Doku](https://jekyllrb.com/docs/templates/) beachten.

## Länderseiten
Für jede Layerseite gibt es eine [Collection](https://jekyllrb.com/docs/collections/) in der die einzelnen Kapitel hinterlegt sind.
Falls eine neue Länderseite hinzugefügt wird, muss die neue Seite im `_config.yml` file registriert werden.

```yml
collections:
    argentinien:
        output: false
    brasilien:
        output: false
    kolumbien:
        output: false
    mexiko:
        output: false
    peru:
        output: false
    forschungstagebuch:
        output: false
```

in diesen Ordnern befinden sich die Texte. Länderseiten enthalten [Front Matter](https://jekyllrb.com/docs/frontmatter/) und einen Loop im Content.


``` yml
---
layout: country # Das verwendete Layout ist immer Country
title: Mexiko # Name des Landes, wird im Menu verwendet
group: navigation-03 # soll die Seie in der Navigation vorkommen benötigt sie diesen group-Wert die Zahl entspricht der Reihenfolge
header-img: BILD_MEXIKO-7.jpg # Headerbild, welches sich in media/img befindet
bodyclass: mexiko # klasse die dem body zugeordnet wird, wenn eine Farbe zugeordnet wird, muss dies in sass/toolbox/_colors.scss getan werden
order: 3 # reihenfolge für den Navigator in der Navigationsleiste
surface: 1'964'375 # Fläche
altitude: 2'250 # Höhe
gdp: 8'172 # Bruttoinlandprodukt
population: 128'000'000 # Bevölkerung
---
```

Der Loop iteriert durch alle Kapitel im Länderordner, erstellt das Separierbild, bindet Meta-Daten und Inhalte ein.
```html{% raw %}
{% assign mexiko = site.mexiko | sort: "order" %}
{% for ch in mexiko %}
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
{% endfor %}{% endraw %}
```

## Kapitel
Die Kapitelseiten enthalten ebenfalls Front Matter.

```yml
---
country: Mexiko # zugehöriges Land
subject: Einführung # Thema
title: Einführung in Land und Leute mit Fokus auf Wirtschaft # titel
order: 1 # Reihenfolge
gallery: # Gallerie
  - images:
    - filename: BILD_MEXIKO-1.jpg
      alttext: MX 1
    - filename: BILD_MEXIKO-2.jpg
      alttext: MX 1
    - filename: BILD_MEXIKO-4.jpg
      alttext: MX 1
    - filename: BILD_MEXIKO-8.jpg
      alttext: MX 1
    - filename: BILD_MEXIKO-11.jpg
      alttext: MX 1
    - filename: BILD_MEXIKO-12.jpg
      alttext: MX 1
---
```

Das erste Kapitel, die Karte sowie die Fazitaufsager enthalten kein Kapitelbild, die anderen Kapitel enthalten weiter den Front matter

```yml
chapter_image: BILD_MEXIKO-10.jpg # Kapitelbild, ebenfalls in media/img/ ordner
```

Wenn eine Gallerie verwendet wird, muss diese im Inhalt eingebunden werden.

``` html
{% raw %}<div class="media-wrapper">
{% include gallery.html %}
</div>{% endraw %}
```

### Inhalte
Inhaltsblöcke denen keine Sidestories zugehören, werden in einen einfachen Div-Container eingebunden. markdown="1" stellt sicher, dass markdown Code auch innterhalb davon umgewandelt wird. [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

```html
<div class="content" markdown="1">
    MARKDOWN CODE HIER DRIN
</div>
```

Innerhalb der Content-Container werden keine anderen Inhalte als Text eingebunden.


### Sidestories
Enthält ein Abschnitt eine Sidestory, wird der Inhalt von einem Div-Container umschlossen. Je nach dem auf welcher Seite die Story eingebunden werden soll, passt sich die Klasse an.
Der Sidestory Toggle wird entsprechend vor oder nach dem Content eingebunden und das Overlay mit dem Sidestory Inhalt nach dem Toggle.

```html
<!-- Text mit Sidestory links und rechts  -->
<div class="has-sidestories grid" markdown="1">

<div class="sidestory sidestory-left" markdown="1">
 ![bla]({{"/media/img/jo-jo-183491.jpg" | prepend: site.baseurl }})
### Sidestory Title
<p class="sidestory-toggle"><span>+</span></p>
</div>

<div class="overlay sidestory-left-content content">
<div class="ss-content">
<p>Sidestory Content</p>
</div>
</div>

<div class="content" markdown="1">
## content
Inhalt Hier
</div>

<div class="sidestory sidestory-right" markdown="1">
### sidestory-right
<p class="sidestory-toggle"><span>+</span></p>
</div>

<div class="overlay sidestory-right-content content">
<div class="ss-content">
<p>Sidestory Content</p>
</div>
</div>

</div>
```

```html
<!-- Text mit Sidestory links -->
<div class="has-sidestories-left grid" markdown="1">

<div class="sidestory sidestory-left" markdown="1">
 ![bla]({{"/media/img/jo-jo-183491.jpg" | prepend: site.baseurl }})
### Sidestory Title
<p class="sidestory-toggle"><span>+</span></p>
</div>

<div class="overlay sidestory-left-content content">
<div class="ss-content">
<p>Sidestory Content</p>
</div>
</div>

<div class="content" markdown="1">
## content
Inhalt Hier
</div>

</div>
```

```html
<!-- Text mit Sidestory rechts -->
<div class="has-sidestories-right grid" markdown="1">

<div class="content" markdown="1">
## content
Inhalt Hier
</div>

<div class="sidestory sidestory-right" markdown="1">
### sidestory-right
<p class="sidestory-toggle"><span>+</span></p>
</div>

<div class="overlay sidestory-right-content content">
<div class="ss-content">
<p>Sidestory Content</p>
</div>
</div>

</div>
```

### Videos, Karten, Audio
Diese Inhalte werden ausserhalb der `content` Blöcke verwendet.

```html
<!-- Karte -->
<div class="map-wrap gray">
    <div class="map">
        <iframe src="https://www.google.com/maps/d/embed?mid=1tWfodkTfLYDZMbf0HUhtL0t_3YB1WPIV"></iframe>
    </div>
</div>
```

```html
<!-- Video -->
<div class="media-wrapper">
    <div class="video">
        <iframe src="https://www.youtube.com/embed/gFeCBQW8sDY?ecver=1"  allowfullscreen></iframe>
    </div>
</div>
```

```html
<!-- Audio -->
<div class="media-wrapper">
    <audio controls>
        <source src="../media/audio/Strassengeräusche_Tankstelle_MexicoStadt_20170719.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</div>
```

```html
<!-- Bild in Bildschirmbreite -->
<div class="image grid" style="background-image: url(../media/img/martin-reisch-265219.jpg);">
</div>
```

```html
<!-- Bild -->
<div class="media-wrapper">
    <img src="../media/img/martin-reisch-265219.jpg">
</div>
```
