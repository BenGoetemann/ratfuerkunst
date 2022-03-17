# This is LEAF

Leaf (Literally Easy As Fuck) ist eine Art "Framework", mit der sich Jamstack Websites so einfach und schnell wie möglich bauen lassen. Es ist sozusagen ein weißes Blatt - und ja ich weiß "Leaf" ist nicht DAS Blatt hehe - auf dem fast alles, außer Login, umgesetzt werden kann.

# Table of Contents
- [This is LEAF](#this-is-leaf)
- [Table of Contents](#table-of-contents)
- [Getting Started 🚀](#getting-started-)
  - [Projekt installieren](#projekt-installieren)
  - [Technologien entfernen](#technologien-entfernen)
  - [Style-Personalisierung](#style-personalisierung)
- [Key Concepts](#key-concepts)
  - [Components verstehen](#components-verstehen)
  - [Slots verstehen](#slots-verstehen)
  - [Props verstehen](#props-verstehen)
  - [Netlify Functions verstehen](#netlify-functions-verstehen)
- [Components](#components)
  - [Container](#container)
    - [FluidContainer](#fluidcontainer)
    - [BorderContainer](#bordercontainer)
  - [Sections](#sections)
    - [ContentSection](#contentsection)
    - [SwipeSection](#swipesection)
    - [SmallCenteredSection](#smallcenteredsection)
    - [LegalSection](#legalsection)
    - [TextSection](#textsection)
    - [HideOnMobile](#hideonmobile)
    - [WrapSection](#wrapsection)
  - [Elements](#elements)
    - [NavBar](#navbar)
    - [Footer](#footer)
    - [YouTubePlayer](#youtubeplayer)
    - [WideHeader](#wideheader)
    - [ProfileCard](#profilecard)
    - [ProductCard](#productcard)
    - [Divider](#divider)
    - [Button](#button)
  - [Selections](#selections)
    - [LinkSelection](#linkselection)
    - [SocialMediaSelection](#socialmediaselection)
    - [PrivacyTextSelection](#privacytextselection)
  - [Figures](#figures)
- [Extras](#extras)
  - [AXIOS](#axios)
  - [GSAP](#gsap)
  - [Heyflow](#heyflow)
  - [Facebook Pixel](#facebook-pixel)
  - [Meta Tags in Nuxt](#meta-tags-in-nuxt)
  - [Cookie Control](#cookie-control)
  - [Dark/Light Mode](#darklight-mode)
- [Netlify Functions](#netlify-functions)
  - [Neue Function erstellen](#neue-function-erstellen)
  - [Die Hello World Function mit Comments](#die-hello-world-function-mit-comments)
  - [Eine Netlify Function fetchen](#eine-netlify-function-fetchen)
  - [Netlify Functions für Production konfigurieren](#netlify-functions-für-production-konfigurieren)

<br>
<br>

# Getting Started 🚀

Dieses Template wurde erstellt um Jamstack Anwendungen umzusetzen. Es basiert auf folgenden Technologien:

- [Nuxt 2 (Front End Framework based on Vue)](https://nuxtjs.org/)
- [Netlify (Hosting / Serverless Functions / CI/CD w Github)](https://www.netlify.com/)
- [Axios (HTTP-Client)](https://axios.nuxtjs.org/)
- [Tailwind (CSS Library)](https://tailwindcss.com/)
- [Contentful (Headless CMS)](https://www.contentful.com/)

<br>

## Projekt installieren

Um das Projekt zum Laufen zu bringen muss folgendes gemacht werden:

1. Dependencies installieren mit ```yarn```.
2. Ein neues Repo auf Github anlegen und mit dem Projekt verbinden.
3. CI/CD einrichten, indem man auf Netlify das Repo verbindet.

<br>

## Technologien entfernen

Sollte man diverse Komponenten nicht benötigen, sollte man diese in diesen Schritten entfernen:

1. Dependencies löschen mit ```yarn remove [package_name]```
2. ```~node_modules/``` löschen
3. Die jeweiligen Ordner löschen und ggf. die Verweise in der ```~nuxt.config```.
4. ```yarn```ausführen.

<br>

## Style-Personalisierung

Um das Corporate Design eines Auftraggebers in das Template zu überführen müssen folgende Schritte erledigt werden:

- Logo in  ```~/assets/images/ci``` ablegen.
- Logo in der Logo.vue Komponente unter ```~/components/figures``` austauschen.
- Font in den Stylings unter ```~/layouts/default.vue``` importieren und in ```html``` als Font-Family setzen.
- Farben und Spacings in der ```tailwind.config``` anpassen.
 
<br>
<br>

# Key Concepts

Nachfolgend werden wichtige Konzepte dieses Templates beschrieben, die zu einem tieferen Verständnis führen sollen, um schnell Anpassungen durchführen zu können.

<br>

## Components verstehen

Dieses Template bietet vorgefertigte Komponenten, die genutzt werden können, um eine Website wue Lego zusammenzubauen. Diese können mithilfe von Props und Slots personalisiert werden. Komponenten bestehen aus:

- Elements - Vorgefertige Website-Elemente wie Buttons, eine NavBar etc.
- Figures - Image-Komponenten, die sich ggf. an mehreren Stellen befinden, wie bspw. Logo
- Navigation Items - Hilfskomponenten, die speziell in Navigations-Komponenten verwendet werden.
- Sections - Bereichs-Komponenten, die Responsivness, Positioning und Spacings zentralisieren.
- Selections - Komponenten, die eine kontrollierte Ansammlung von anderen Komponenten bilden.

<br>

## Slots verstehen

Vue implementiert eine API zur Verteilung von Inhalten, die sich am Entwurf der Web Components Spezifikation orientiert und das ```<slot>```-Element als Verteiler für Inhalte verwendet. Mehr dazu [hier](https://www.thisdot.co/blog/content-distribution-in-vue-js).

In diesem Template werden Slots an verschiedenen Komponenten, wie Elementen, Sections, Selections oder Containern verwendet. Slots ermöglichen einfach gesagt, einen einfachen Weg Content in die gewünschte Form zu portieren, indem die Logik und Styles der portierten Komponenten in der Slot-Komponente beschrieben wird.

Damit die Struktur besser verstanden wird, hier ein kleines Schaubild:

```html
<Footer>
  <Component /> <- Slot wird gefüllt
</Footer>
```

<br>

## Props verstehen

In Vue kann man neben Slots auch Props verwenden, um Informationen/Daten von einer übergeordneten Komponente an untergeordnete Komponenten weiterzugeben. Anders als bei Slots ist werden die Daten an festgelegte Stellen verteilt und nicht in beliebiger Reihenfolge. Mehr dazu [hier](https://www.freecodecamp.org/news/how-to-use-props-in-vuejs/).

Damit die Struktur besser verstanden wird, hier ein kleines Schaubild:

```html
<Footer key="value" /> <- Property wird gefüllt
```

<br>

## Netlify Functions verstehen

Netlify Functions geben die Möglichkeit Backend Code auszuführen, ohne einen Server nutzen zu müssen. Dies ist vor allem extrem Hilfreich, wenn man API Keys verstecken muss.

Mehr Werbung zu Netlify Functions [hier](https://www.netlify.com/products/functions/).<br>
Mehr Dokumentation zu Netlify Functions [hier](https://docs.netlify.com/functions/overview/).<br>
Mehr Info zum Verstecken von API Keys [hier](https://youtu.be/m2Dr4L_Ab14).

<br>
<br>

# Components

**Components sind vorgefertigte Website Elemente, werden durch Slots und Properties gefüllt. Sie bestehen wie vorher beschrieben aus verschiedenen Typen wie beispielsweise Elements oder Selections. Diese sind unter dem Ordner ```~/components/``` auffindbar.** 

<br>

## Container

**Container sind die tiefsten Komponenten. Container sind DIVs die spezielle Eigenschaften in Bezug auf die Positionierung auf Seiten haben. Ein Container kann beispielsweise dafür Sorgen, dass der gesamte Page Inhalt nicht den äußeren Window Rand berührt. Sie bilden oft die Root-Komponenten von [Sections](#sections).**

<br>

### FluidContainer

Der FluidContainer ist ein Container, der sich über 100% der Window Width erstreckt, alles mittig und in einer Column verläuft.

<br>

### BorderContainer

Der BorderContainer kümmert sich darum, dass Page Inhalt nicht breiter als ein gewisser Wert wird und handlet dabei diverse Bildschirmgrößen.

<br>
<br>

## Sections

**Sections sind nach den Containern die nächsthöheren Komponenten. Sections halten via Slots [Elements](#elements) und handlen die Abstände und Placements, also die Darstellung, dieser Children-Elements sinngemäß nach dem [Gesetz der Kontinuität im Webdesign](https://www.html-seminar.de/webdesign-gesetz-der-kontinuitaet.htm).**


<br>

### ContentSection

ContentSections sind dafür gedacht den Seiteninhalt/Content sinngemäß voneinander zu trennen. So sollte zum Beispiel in einer ContentSection das Team vorgestellt werden und in einer anderen die Vorgehensweise des Unternehmens. 

Konkret bestimmt die ContentSection ein festgelegtes Styling in Bezug auf Margins und Positionierung der Items. Mit der Property ```styles``` kann der Section eine Hintergrund-Farbe gegeben werden. Sie kümmert sich also um die räumliche Trennung von Inhalten nach dem Prinzip des [Gesetzes der Nähe](https://www.mario-vogelsteller.de/blog/gesetz-der-naehe-gestaltgesetze/2010/06/). 

```html
<ContentSection styles="bg-subliminal">
  {{ slots }}
</ContentSection>
```

<br>

### SwipeSection

Die SwipeSection nimmt durch Slots Komponenten auf. Diese können kann horizontal geswiped werden. Diese Section eignet sich hervorragend für die dynamische Erzeugung von Komponenten via API-Abfragen mit einer For-Schleife.

Da eine solche Section erfahrungsgemäß eine Set an Themen-bezogenen Daten zeigt, kann man der SwipeSection durch Props ```title``` und ```text``` Überschrift und Unterüberschrift mitgeben. Da es sich hier um eine andere Form einer ContentSection handelt, sind die Margins gleich der [ContentSection](#contentsection) und die Hintergrundfarbe kann ebenfalls über die ```styles``` Property angepasst werden. Die Margins des ersten und letzen Child innerhalb der SwipeSection anhand des Stylings des [BorderContainer](#bordercontainer) berechnet.

```html
<SwipeSection
      styles="bg-subliminal"
      title="Nike Schuhe"
      text="Sichere dir deine Lieblingsschuhe!"
    >
      <div v-for="object in objects" :key="object.id">
        <ProductCard
          :img="require('~/assets/images/heroes/' + object.img + '.jpg')"
          :title="object.title"
          description="object.description"
          slug="object.slug"
        />
      </div>
</SwipeSection>
```

<br>

### SmallCenteredSection

Eine SmallCenteredSection positioniert sich mit einer engen maximalbreite in der Mitte des Bildschirms. Dieser Effekt ist nur auf dem Desktop sichtbar, auf dem Handy passt sie sich der Bildschirmbreite an.

<br>

### LegalSection

Die LegalSection ist dazu da, um Fließtexte wie Datenschutzerklärungen und Impressum abzubilden. Die Breakpoints sind so gesetzt, dass sie sich von der absolut positionierten NavBar absetzen.

<br>

### TextSection

Die TextSection zeigt die Items und Text linksbündig an.

<br>

### HideOnMobile

Die HideOnMobile Section versteckt den Inhalt ab dem Moment, an dem die NavBar den Drawer zugänglich nacht.

<br>



### WrapSection

Die WrapSection ist eine Section für Items, die bei maximal erreichter Breite in eine neue "Zeile" umbrechen sollen. Dies eignet sich beispielsweise für Team Profil Bilder, da hier einfach das gesamte Team reingeworfen werden kann.

<br>

## Elements

Elements sind vorgefertigte UI-Elemente und bilden mit [Selections](#selections) die höchste Ebene von Komponenten. Elements sind Website Elemente die im User Interface zu sehen sind.

<br>

### NavBar

Die Navbar ist eine responsive Navigationsleiste, die einen Drawer erzeugt, wenn man auf Bildschirmen in Handygröße auf die Seite zugreift. Sie beinhaltet NavBarItems und Icons, die zu Social Media Plattformen führen.

```html
<NavBar
  absolute="true" //optional
  :pages="['Home', 'About', 'Blog']"
  callToAction="Login"
  facebook="apple"
  instagram="apple"
  soundcloud="apple"
  tiktok="apple"
  youtube="apple"
/>
```

<br>

**Automatisches Erstellen von Seiten**

Die Navigationsleiste kann dynamisch mit Seiten gefüllt werden, indem man die ```:pages="[...]"``` Property mit Strings füllt. Im Hintergrund werden automatisch Routes zu den jeweiligen Seiten erstellt. Diese Seiten müssen dann nur noch unter dem ```~/pages/``` angelegt werden. Aus ```:pages="['Home', 'Jetzt registrieren']"``` werden die Routes ```domain.com/home``` und ```domain.com/jetzt-registrieren``` erstellt.

<br>

**Automatisches Erstellen von Social Media Icons**

Die Navigationsleiste kann Social Media Icons gefüllt werden, wobei die Social Media Icons nur im Drawer in der Mobile Ansicht zu sehen sind. Dieses Template unterstützt dabei Facebook, Instagram, TikTok, YouTube, Reddit, Twitter, LinkedIn, SoundCloud und Snapchat - diese können aktiviert werden, indem man die jeweilge Property erzeugt. Die Props der Social Media Icons erwarten keinen vollständigen Link sondern lediglich der Path. Der richtige Link wird in der [SocialIconSelection](#socialiconselection)-Komponente erzeugt.

<br>

**Automatisches Erstellen eines Primary Button**

Darüber hinaus kann durch die Property ```callToAction``` ein Button erzeugt werden. Dieser generiert ebenfalls automatisch eine Route zur jeweiligen Page. 

<br>

**Absolute Mode**

Zuguterletzt kann über die Prop ```absolute``` entschieden werden, ob die Navigationsleiste im Desktop State über dem Header "floaten" soll, oder einen eigenen abgetrennten Bereich bekommt, indem man ```absolute``` auf ```true``` setzt. 

><br>
>[!]
><br>
><br>
>Wenn die NavBar nicht absolut ist, muss in der [LegalSection](#legalsection) das CSS angepasst werden, da die Margins nicht mehr passen.
><br>
><br>

<br>

### Footer

Der Footer kann wie die Navigationsleiste mit Seiten und Social Media Icons gefüllt werden, wobei die Social Media Icons nur auf dem Desktop angezeigt werden. 

Pages werden über Slots mithilfe von [LinkSelections](#linkselections) eingefügt, die wiederum eine Prop ```:pages="['page']"``` beinhaltet, die genau wie bei der NavBar einfache Strings in Paths verwandelt.

Der Copyright String wird mithilfe der Property ```company``` gefüllt und aktualisiert das Jahr automatisch.

```html
<Footer
  company="Leaf GmbH"
  facebook="leaf"
  instagram="leaf"
  tiktok="leaf"
  linkedin="leaf"
  youtube="leaf"
>
  <LinkSelection
    title="Legal"
    :pages="['Impressum', 'Datenschutz', 'AGB']"
  />
  <LinkSelection
    title="About"
    :pages="['Vision', 'Team', 'Roadmap']"
  />
</Footer>
```

<br>

### YouTubePlayer

Der YouTube Player ist immer im Aspect Ration von 16:9 und füllt die gesamte Breite einer Section. Um ein Video zu targetieren muss in der Propterty ```id``` die Video ID mitgegeben werden.

```html
<YouTubePlayer id="Xh11iUpJs4Y" />
```

<br>

### WideHeader

Ein WideHeader ist ein Hero Image, das sich über die gesamte Bildschirmbreite zieht. Die Komponente erwartet eine Property names ```img```, der eine bg Tailwind-Klasse übergeben werden muss. Diese wird dann als Background Image eingesetzt.

```html
<WideHeader img="bg-hero"/>
```

<br>

### ProfileCard

Eine ProfileCard beinhaltet ein Bild, einen Namen, eine Position und ein Link bzw. Slug, mit dem der Pagebesucher auf ein weiterführendes Profil oder eine LinkedIn Seite geführt werden kann.

```html
<ProfileCard
  :img="require('~/assets/images/heroes/benny.jpg')"
  name="Benedikt Götemann"
  position="Mensch-Mensch"
  slug="/benny"
/>
```
```html
<ProfileCard
  :img="require('~/assets/images/heroes/benny.jpg')"
  name="Benedikt Götemann"
  position="Mensch-Mensch"
  link="https://www.linkedin.com/benediktgoetemann"
/>
```

<br>

### ProductCard

Eine ProductCard beinhaltet in der Grundversion ein Bild, einen Titel, eine Beschreibung und Slug, mit dem der Pagebesucher auf eine weiterführendes Page geführt werden kann. Diese Komponente muss immer an den Kontext angepasst werden.


```html
<ProductCard
  :img="require('~/assets/images/heroes/hero.jpg')"
  title="object.title.value"
  description="Lorem ipsum dolor sit amet."
  slug="yolo"
/>
```

<br>

### Divider

Ein Divider ist ein Element, das eine Trennlinie über 100% der Parent Komponente erzeugt.

<br>

### Button

Der Button kann eine Route oder einen externen Link erzeugen. Dies legt man fest, indem man entweder die Properties ```link``` oder ```slug``` nutzt: 

```html
<Button slug="/registrieren" btnText="Jetzt registrieren" />
```

```html
<Button link="https://www.apple.com" btnText="Apple Website" />
```

<br>
<br>

## Selections

**Selections sind die höchste Ebene von Komponenten. Sie bilden Ansammlungen von Komponenten, die durch Props mit Daten gefüllt werden und festgelegte Dimensionen und Behaviors haben, da sie sich an jedem Ort gleich verhalten sollen**

<br>

### LinkSelection

Eine LinkSelection erzeugt eine Ansammlung von Links mit einer Überschrift und werden unter anderem in einem Footer eingesetzt.

```html
<LinkSelection
  title="Legal"
  :pages="['Impressum', 'Datenschutz', 'AGB']"
/>
```

### SocialMediaSelection

Eine Social Media Selection beinhaltet alle möglichen Social Media Plattformen. Wenn die Prop einer Plattform ausgefüllt wird, erzeugt sie das jeweilige Icon dazu.

```html
<SocialIconSelection
  :facebook="facebook"
  :instagram="instagram"
  :tiktok="tiktok"
  :twitter="twitter"
  :reddit="reddit"
  :snapchat="snapchat"
  :linkedin="linkedin"
  :youtube="youtube"
/>
```

<br>

### PrivacyTextSelection

Die PrivacyTextSelection beinhaltet alle Paragraphen, die für eine Datenschutzerklärung notwendig sind. Durch Props können die Gesetzestexte für Referenzierungspflichtige Technologien aktiviert werden und Unternehmensdaten eingesetzt werden. Hierbei setzt sich die Numerierung der Abschnitte automatisch. In dieser Auflistung sind alle möglichen Properties zu sehen: 

```
Coming soon...
```

<br>
<br>

## Figures

**Figures sind Komponenten die ein Bild repräsentieren, wie beispielsweise das Logo und ein Icon**

<br>
<br>

# Extras

**Extras sind externe Tools, die nicht über API eingebunden werden. Bspw. Module, Script Tags mit diversen Funktionen**

<br>

## AXIOS

AXIOS macht es ein wenig leichter APIs anzusteuern. Dies kann man entweder innerhalb von Komponenten via Method oder Hooks machen oder (nur auf Seitenebene machbar) mit der AsyncData-Function. Bindet man einen Request in einer AsyncData Methode ein, so wird der Request während Build Time ausgeführt. Das heißt, dass der Request nicht bei jedem Laden der Seite durch Pagebesucher neu gemacht wird, sondern bei Build Time in die statische Seite "gebrannt" wird.

```html
<template>
  <FetchButton :built="built" />
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const built = await $axios.$get("https://swapi.dev/api/people/1/");

    return { built };
  },
}
</script>
```

Auf Komponentenebene ist die AsyncData Methode nicht erreichbar. Stattdessen nutzt man ```async``` Methods, die getriggert werden müssen oder fetcht während den Hooks. Dies ermöglicht dynamisches Laden von Content:

```html
<template>
  <div>
    <!-- Request wird mit Klick durch Methode getriggert -->
    <div @click="fetchSomething()">Clicked: {{clicked.name}}</div>
    <!-- Request wird in einer Hook-Methode getriggert -->
    <div>Mounted: {{ mounted.mass }}</div>
    <!-- Request wird beim Laden der Parent Page getriggert und via Prop in die Komponente gebracht -->
    <div>Build Time: {{ built.eye_color }}</div>
  </div>
</template>

<script>
export default {
  props: ["built"],
  data() {
    return {
      clicked: [],
      mounted: [],
    };
  },
  methods: {
    async fetchSomething() {
      this.clicked = await this.$axios.$get("https://swapi.dev/api/people/1/");
    },
  },
  async mounted() {
    this.mounted = await this.$axios.$get("https://swapi.dev/api/people/1/");
  },
};
</script>

```
><br>
>[!]
><br>
><br>
>Wenn man die AXIOS-Method innerhalb außerhalb einer AsyncData, in jener man einen  Parameter mitgibt (```async asyncData({ $axios })```), also innerhalb einer Methode oder Hook, verwenden möchte, muss man sie mit ```this``` referenzieren.
>```js
>let res = await this.$axios.$get("https://swapi.dev/api/people/1/");
>```
><br>
><br>

<br>

In diesem Template wird Axios auch in den Netlify-Functions genutzt. Hier bindet man den Request folgendermaßen ein:

```js
const axios = require('axios')

const handler = async (event) => {
  const url = 'https://api.propstack.de/v1/units?with_meta=1&expand=1&api_key=' + process.env.API_SECRET
  try {
    const { data } = await axios.get(url)

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    const {
      status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}

module.exports = { handler }

```
><br>
>[!]
><br>
><br>
>Man kann Nuxt/Axios in der nuxt.config eine BaseURL hinzufügen. In diesem Fall ist Axios darauf ausgelegt keinen ganzen Link, sondern lediglich die relevanten Pfade anzunehmen. Dann sollte die URL nicht ```https://swapi.dev/api/people/1/``` sondern ```/api/people/1/``` lauten.
><br>
><br>

Für weitere Infos zur Benutzung in Nuxt muss man [hier nachlesen](https://axios.nuxtjs.org/).
Für weitere Infos zur Benutzung innerhalb von Netlify Functions muss man [hier nachlesen](https://axios-http.com/docs/intro).


<br>

## GSAP

Für die Benutzung innerhalb von Nuxt muss man [hier nachlesen](https://github.com/ivodolenc/nuxt-gsap-module) und für Dokumentation der generellen Funktionalität [hier nachlesen](https://greensock.com/docs/v3/GSAP). 

<br>

## Heyflow

Um Heyflow einzubinden bedarf es zwei Schritten. Zuerst erstellt man im Template Tag ein DIV und gibt ihr eine ID mit einem beliebigen Namen. Zuguterletzt ruft man die Heyflow-Methode in der Mounted-Methode im Script-Tag auf. Die Heyflow-Methode erwartet zwei Parameter: ```flowId``` und ```divId```. 

```html
<template>
  [...]
    <div id="heyflow"></div>
  [...]
</template>
```

```html
<script>

  export default Vue.extend({
    [...]
      mounted() {
        heyflow('djefj23f', 'heyflow')
      },
    [...]
  })

</script>
```

<br>

## Facebook Pixel

Für die Konfiguration des Facebook Pixels bitte [hier](https://www.npmjs.com/package/nuxt-facebook-pixel-module) nachlesen. 

<br>

## Meta Tags in Nuxt

In Nuxt ist es möglich Meta Tags zur SEO zu verwenden. Die Mechanik von Nuxt Meta Tags basiert auf dem [Vue Meta Package](https://vue-meta.nuxtjs.org/). Die Dokumentation kann als Referenz genutzt werden, wobei es dabei ein paar Unterschiede im Naming gibt. Mehr dazu in Videoform [hier](https://youtu.be/bu3HSA9zmz8).

<br>

## Cookie Control

Diesem Template ist Nuxt-Cookie-Control eingebunden. Für die Konfiguration dieses Packages bitte [hier](https://www.npmjs.com/package/nuxt-cookie-control/v/latest) nachlesen.

<br>

## Dark/Light Mode

Für die Konfiguration des Dark/Light Modes bitte [hier](https://tailwindcss.com/docs/dark-mode) nachlesen und/oder [dieses Beispiel](https://tailwindcss.nuxtjs.org/examples/dark-mode/) anschauen.

<br>
<br>

# Netlify Functions

**Die Netlify Functions werden genutzt um Anwendungen zu schreiben, bei denen API Key versteckt werden sollen. Innerhalb einer Function kann ein Teil einer API abstrahiert werden, um den Client nur die Information zur Verfügung zu stellen, die der Client braucht**

**Wenn mit Netlify Functions entwickelt wird, muss ```yarn netlify dev``` anstelle von ```yarn dev``` verwendet werden - andererseits funktionieren die Functions nicht.**

<br>

## Neue Function erstellen

Man erstellt eine neue Function mit diesem Command: 

```bash
yarn netlify function:create --name example
```
<br>
<br>

## Die Hello World Function mit Comments

```js
const handler = async (event) => {
  try {
    // event.queryStringParameters greift auf die Parameter im Query String zu
    const subject = event.queryStringParameters.name || 'World' // Defaultet auf 'World'
    return {
      statusCode: 200,

      // RESPONSE BODY, der aus dem Request generiert und dem Client gegeben werden kann
      body: JSON.stringify({ message: `Hello ${subject}` }), 
      
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

```

Weitere Infos dazu [hier](https://www.netlify.com/docs/functions/#the-handler-method).

<br>
<br>

## Eine Netlify Function fetchen

Netlify Functions erstellen einen Endpunkt auf der Domain der Page:

```
https://www.leaf.com/.netlify/functions/myFunction.js
```

So können dann die Functions aufgerufen werden:

```js
[...] = await this.$http.$get('/.netlify/functions/myFunction?parameter="value"');
```
><br>
>[!]
><br>
><br>
>Damit die Function aufgerufen werden kann, muss in der ```nuxt.config``` unter den Axios Options die Base URL vergeben werden. Diese Requests sind in Verbindung mit Netlify NICHT dafür gedacht, Daten aus anderen Quellen zu fetchen. Mithilfe der Axios Proxys sind jedoch weitere Konfigurationen möglich. Dazu bitte [hier nachlesen](https://axios.nuxtjs.org/options).
><br>

<br>
<br>

## Netlify Functions für Production konfigurieren

Damit Netlify Functions sowohl lokal, als auch in Production funktionieren, muss zuallererst in der ```nuxt.config``` ganz oben eine Zeile hinzugefügt werden, die im Node Environment überprüft, ob die gebuildete Seite sich in der Development- oder Production-Umgebung befindet:

```js
let development = process.env.NODE_ENV !== 'production'
```

Als nächstes muss der baseURL mithilfe der ```development``` Variable beibringen, je nach Umgebung eine andere BaseURL zu nutzen.

```js
axios: {
  baseURL: development ? 'http://localhost:8888' : 'https://bg-template.netlify.app', 
},
```
><br>
>[!]
><br>
><br>
>Wenn man neu hinzugefügte Netlify Functions innerhalb von AsyncData Methods verwendet, gibt es beim Deployment Fehler, da die Function zur Build Time noch nicht von der Production URL erreicht werden kann. Beim nächsten Deployment funktioniert alles ohne Probleme.
><br>
><br>