<template>
  <div>
    <ContentSection> <Logo /></ContentSection>
    <ContentSection class="mt-medium">
      <Headline value="Über uns" />
      <TextSection>
        <p>
          Der 2020 gegründete RAT für Kunst und Kultur Mannheim setzt sich unter
          anderem zum Ziel, die Interessen der Kunst- und Kulturschaffenden
          Mannheims zu bündeln. Er strebt an, als Vernetzungs-, Informations-,
          und Mobilisierungsorgan zu fungieren. Zusammenfassend zielt der RAT
          auf die Verbesserung struktureller Rahmenbedingungen für die Szene
          Mannheims, so wie den Ausbau der städtischen Kulturlandschaft ab.
        </p>
        <p>
          Neue Mitglieder der aktuell 7 Sektionen sind mehr als willkommen.
          Meldet euch gerne bei uns:
          <a href="mailto:info@ratfuerkunst-ma.de">info@ratfuerkunst-ma.de</a>
        </p>
        <p>Wir freuen uns auf euch!</p>
      </TextSection>
    </ContentSection>
    <ContentSection>
      <Headline value="Die 7 Sektionen" />
      <TextSection>
        <li>
          Musik<br />
          <a class="ml-mini" href="mailto:musik@ratfuerkunst-ma.de"
            >musik@ratfuerkunst-ma.de</a
          >
        </li>
        <li>
          Darstellende Kunst, Tanz<br />
          <a class="ml-mini" href="mailto:darstellendekunst@ratfuerkunst-ma.de"
            >darstellendekunst@ratfuerkunst-ma.de</a
          >
        </li>
        <li>
          Bildende Kunst<br />
          <a class="ml-mini" href="mailto:bildendekunst@ratfuerkunst-ma.de"
            >bildendekunst@ratfuerkunst-ma.de</a
          >
        </li>
        <li>
          Literatur, Film, Medienkunst<br />
          <a class="ml-mini" href="mailto:literatur.film@ratfuerkunst-ma.de"
            >literatur.film@ratfuerkunst-ma.de</a
          >
        </li>
        <li>
          Kreativwirtschaft, Veranstalter und Veranstaltungsorte, Clubkultur<br />
          <a class="ml-mini" href="mailto:kreativwirtschaft@ratfuerkunst-ma.de"
            >kreativwirtschaft@ratfuerkunst-ma.de</a
          >
        </li>
        <li>
          Kulturelle Bildung, Soziokultur<br />
          <a class="ml-mini" href="mailto:kulturellebildung@ratfuerkunst-ma.de"
            >kulturellebildung@ratfuerkunst-ma.de</a
          >
        </li>
        <li>
          Design, Mode, Architektur, Baukunst<br />
          <a class="ml-mini" href="mailto:design.architektur@ratfuerkunst-ma.de"
            >design.architektur@ratfuerkunst-ma.de</a
          >
        </li>
      </TextSection>
    </ContentSection>
  </div>
</template>

<script>
import Arguments from "~/components/sections/ArgumentSection.vue";
import ProductCard from "~/components/elements/ProductCard.vue";

export default {
  components: { ProductCard, Arguments },
  data() {
    return {
      title: "Beautiful Landscapes brought to you by the Universe! 🚀",
      objects: [],
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Why metaverse when the universe has so much to offer that you haven't seen yet! We bring you to the craziest places in the galaxy!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Travel, Flight, Adventure",
        },
        {
          hid: "author",
          name: "author",
          content: "Benedikt Götemann",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
