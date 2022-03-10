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

Darüber hinaus kann durch die callToAction Prop ein Button erzeugt werden. Dieser generiert ebenfalls automatisch eine Route zur jeweiligen Page. 

Zuguterletzt kann über die absolute-Prop entcschieden werden, ob die Navigationsleiste im Desktop State über dem Header "floaten" soll, oder einen eigenen abgetrennten Bereich bekommt, indem man die absolute-Prop auf "true" setzt. **ACHTUNG: Wenn die NavBar nicht absolut ist, muss in der LegalSection das CSS angepasst werden!**


```js
<NavBar
  // absolute="true"
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

Die Navigationsleiste kann dynamisch mit Seiten und Social Media Icons gefüllt werden, wobei die Social Media Icons nur auf dem Desktop angezeigt werden. Pages werden über Slots mithilfe von LinkSelections eingefügt, die wiederum eine :pages-Prop beinhaltet, die genau wie bei der NavBar einfache Strings in Paths verwandelt. Icons können mithilfe von Props gefüllt werden:

```js
<Footer
  facebook="test"
  instagram="test"
  soundcloud="test"
  tiktok="apple"
  youtube="test"
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

```
<Footer {{PROPS}} >
  {{ SLOTS }}
</Footer>
```

<br>
<br>

## elements/WideHeader

Ein WideHeader ist ein Hero Image, das sich über die gesamte Bildschirmbreite zieht. Die Komponente erwartet eine img-Prop, der eine bg Tailwind-Klasse übergeben werden muss. Diese wird dann als Background Image eingesetzt.

```js
<WideHeader img="bg-hero"/>
```

<br>
<br>

## elements/Divider

Ein Divider ist ein Element, das eine Trennlinie über 100% der Parent Komponente erzeugt.

<br>
<br>

## elements/Button

Der Button kann eine Route oder einen externen Link erzeugen. Dies legt man fest, indem man entweder die link oder slug Prop beutzt:

```js
<Button slug="/registrieren" btnText="Jetzt registrieren" />
```

```js
<Button link="https://www.apple.com" btnText="Apple Website" />
```



<br>
<br>
<br>


# Sections

**Alle Sections umgeben einen Slot, der Komponenten und HTML-Tags aufnehmen kann. Sections handlen die Abstände und Placements ihrer Children sinngemäß.**

<br>
<br>

## sections/LegalSection

Die LegalSection ist dazu da, um Fließtexte wie Datenschutzerklärungen und Impressum abzubilden. Die Breakpoints sind so gesetzt, dass sie sich von der absolut positionierten NavBar absetzen.

<br>
<br>

## sections/utils/HideOnMobile

Die HideOnMobile Section versteckt den Inhalt ab dem Moment, an dem die NavBar den Drawer zugänglich nacht.

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

```js
<LinkSelection
  title="Legal"
  :pages="['Impressum', 'Datenschutz', 'AGB']"
/>
```

## selections/SocialMediaSelection

Eine Social Media Selection beinhaltet alle möglichen Social Media Plattformen. Wenn die Prop einer Plattform ausgefüllt wird, erzeugt sie das jeweilige Icon dazu.

```js
<SocialIconSelection
    :facebook="facebook"
    :instagram="instagram"
    :tiktok="tiktok"
    :soundcloud="soundcloud"
    :youtube="youtube"
/>
```

<br>
<br>
<br>

# Figures

**Figures sind Komponenten die ein Bild repräsentieren, wie beispielsweise das Logo und ein Icon**