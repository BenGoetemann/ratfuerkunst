# Einleitung

Dieses Template umfasst xyz.

<br>
<br>
<br>

# Corporate Identity

- Logo austauschen in Component
- Font anpassen in Root

<br>
<br>
<br>

# Tailwind Config

- Farben anpassen in Tailwind Config
- Default Spacing anpassen (Small, Medium, Big, Huge etc.) in Tailwind Config.

<br>
<br>
<br>

# Components

**Components sind vorgefertigte Website Elemente, werden durch Slots und Properties gefüllt und werden in Sections eingesetzt.**

<br>
<br>

## elements/NavigationBar

Die Navigationsleiste kann dynamisch mit Seiten und Social Media Icons gefüllt werden, wobei die Social Media Icons nur im Drawer in der Mobile Funktion angezeigt werden. Pages und Icons können mithilfe von Props gefüllt werden. Die NavBar Komponente regelt im Hintergrund das Routing und ob ein Icon erscheint oder nicht. 

Die Props der Social Media Icons erwarten keinen vollständigen Link sondern lediglich der Path. Der richtige Link wird in der NavBar Komponente erzeugt.

Darüber hinaus kann durch die Prop ```callToAction``` ein Button erzeugt werden. Dieser generiert ebenfalls automatisch eine Route zur jeweiligen Page. 

Zuguterletzt kann über die Prop ```absolute``` entschieden werden, ob die Navigationsleiste im Desktop State über dem Header "floaten" soll, oder einen eigenen abgetrennten Bereich bekommt, indem man ```absolute``` auf ```true``` setzt. **ACHTUNG: Wenn die NavBar nicht absolut ist, muss in der LegalSection das CSS angepasst werden!**


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
<br>

## elements/Footer

Die Navigationsleiste kann dynamisch mit Seiten und Social Media Icons gefüllt werden, wobei die Social Media Icons nur auf dem Desktop angezeigt werden. 

Pages werden über Slots mithilfe von LinkSelections eingefügt, die wiederum eine Prop ```:pages="['page']"``` beinhaltet, die genau wie bei der NavBar einfache Strings in Paths verwandelt.

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

Damit die Struktur dieser Komponente besser verstanden wird, hier ein kleines Schaubild:

```html
<Footer {{PROPS}} >
  {{ SLOTS }}
</Footer>
```

<br>
<br>

## elements/YouTubePlayer

Der YouTube Player ist immer im Aspect Ration von 16:9 und füllt die gesamte Breite einer Section. Um ein Video zu targetieren muss in der Propterty ```id``` die Video ID mitgegeben werden.

```html
<YouTubePlayer id="Xh11iUpJs4Y" />
```

<br>
<br>

## elements/WideHeader

Ein WideHeader ist ein Hero Image, das sich über die gesamte Bildschirmbreite zieht. Die Komponente erwartet eine Property names ```img```, der eine bg Tailwind-Klasse übergeben werden muss. Diese wird dann als Background Image eingesetzt.

```html
<WideHeader img="bg-hero"/>
```

<br>
<br>

## elements/ProfileCard

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
<br>

## elements/Divider

Ein Divider ist ein Element, das eine Trennlinie über 100% der Parent Komponente erzeugt.

<br>
<br>

## elements/Button

Der Button kann eine Route oder einen externen Link erzeugen. Dies legt man fest, indem man entweder die Properties ```link``` oder ```slug``` nutzt: 

```html
<Button slug="/registrieren" btnText="Jetzt registrieren" />
```

```html
<Button link="https://www.apple.com" btnText="Apple Website" />
```



<br>
<br>
<br>


# Sections

**Alle Sections umgeben einen Slot, der Komponenten und HTML-Tags aufnehmen kann. Sections handlen die Abstände und Placements ihrer Children sinngemäß.**

<br>
<br>

## sections/ContentSection

ContentSections trennen den Seiteninhalt voneinander. Sie bestimmt ein festgelegtes Styling in Bezug auf Paddings und Positionierung der Items. Mit der Property ```styles``` kann der Section eine Hintergrund-Farbe gegeben werden.

```html
<ContentSection styles="bg-subliminal">
  {{ slots }}
</ContentSection>
```

<br>
<br>

## sections/SmallCenteredSection

Eine SmallCenteredSection positioniert sich mit einer engen maximalbreite in der Mitte des Bildschirms. Dieser Effekt ist nur auf dem Desktop sichtbar, auf dem Handy passt sie sich der Bildschirmbreite an.

```html
<SmallCenteredSection>
  <h1>Unser Team</h1>
  <h3>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
    voluptatem ex quae blanditiis!
  </h3>
  <Button btnText="Kontakt" slug="/kontakt" />
</SmallCenteredSection>
```

<br>
<br>

## sections/LegalSection

Die LegalSection ist dazu da, um Fließtexte wie Datenschutzerklärungen und Impressum abzubilden. Die Breakpoints sind so gesetzt, dass sie sich von der absolut positionierten NavBar absetzen.

<br>
<br>

## sections/TextSection

Die TextSection zeigt die Items und Text linksbündig an.

<br>
<br>

## sections/utils/HideOnMobile

Die HideOnMobile Section versteckt den Inhalt ab dem Moment, an dem die NavBar den Drawer zugänglich nacht.

<br>
<br>

## sections/utils/WrapSection

Die WrapSection ist eine Section für Items, die bei maximal erreichter Breite in eine neue "Zeile" umbrechen sollen. Dies eignet sich beispielsweise für Team Profil Bilder, da hier einfach das gesamte Team reingeworfen werden kann.

<br>
<br>
<br>

# Container

**Container sind DIVs die spezielle Eigenschaften in Bezug auf die Positionierung auf Seiten haben. Ein Container kann beispielsweise dafür Sorgen, dass der gesamte Page Inhalt nicht den äußeren Window Rand berührt.**

<br>

## container/FluidContainer

Der FluidContainer ist ein Container, der sich über 100% der Window Width erstreckt, alles mittig und in einer Col verläuft.

<br>

## container/BorderContainer

Der BorderContainer kümmert sich darum, dass Page Inhalt nicht breiter als ein gewisser Wert wird und handlet dabei diverse Bildschirmgrößen.

<br>
<br>
<br>

# Selections

**Selections sind Ansammlungen von Komponenten, die durch Props mit Daten gefüllt werden und festgelegte Styles haben, da sie sich an jedem Ort gleich verhalten sollen**

<br>

## selections/LinkSelection

Eine LinkSelection erzeugt eine Ansammlung von Links mit einer Überschrift und werden unter anderem in einem Footer eingesetzt.

```html
<LinkSelection
  title="Legal"
  :pages="['Impressum', 'Datenschutz', 'AGB']"
/>
```

## selections/SocialMediaSelection

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
<br>
<br>

# Figures

**Figures sind Komponenten die ein Bild repräsentieren, wie beispielsweise das Logo und ein Icon**

<br>
<br>
<br>

# Extras

**Extras sind externe Tools, die nicht über API eingebunden werden. Bspw. Module, Script Tags mit diversen Funktionen**

<br>

## HTTP

Das HTTP/Nuxt Module macht es ein wenig leichter APIs anzusteuern. Dies kann man entweder innerhalb von Komponenten via Method oder Hooks machen oder auf Seitenebene mit der AsyncData-Function:

Komponente

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
      this.clicked = await this.$http.$get("https://swapi.dev/api/people/1/");
    },
  },
  async mounted() {
    this.mounted = await this.$http.$get("https://swapi.dev/api/people/1/");
  },
};
</script>

```

Page

```html
<template>
  <FetchButton :built="built" />
</template>

<script>
export default {
  async asyncData({ $http }) {
    const built = await $http.$get("https://swapi.dev/api/people/1/");

    return { built };
  },
}
</script>

<style>

</style>
```

***Wichtig:*** Wenn man die HTTP-Method innerhalb außerhalb einer AsyncData, also in einer Methode oder Hook, verwenden möchte, muss man sie mit ```this``` referenzieren.

```js
let res = await this.$http.$get("https://swapi.dev/api/people/1/");
```

Für weitere Infos zur Benutzung muss man [hier nachlesen](https://http.nuxtjs.org/getting-started/usage).

<br>
<br>

## GSAP

Für die Benutzung innerhalb von Nuxt muss man [hier nachlesen](https://github.com/ivodolenc/nuxt-gsap-module) und für Dokumentation der generellen Funktionalität [hier nachlesen](https://greensock.com/docs/v3/GSAP)

<br>
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

<br>
<br>