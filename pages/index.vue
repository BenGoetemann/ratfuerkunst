<template>
  <div>
    <WideHeader img="bg-hero" />
    <ContentSection>
      <TextSection>
        <h1 @click="fetchObjects()">Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          corrupti culpa tempora quia placeat dignissimos modi, aliquam quaerat,
          ullam cupiditate voluptatem blanditiis. Commodi perspiciatis ea veniam
          ratione necessitatibus ex expedita! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellat, eos fuga nisi aperiam aliquid
          cumque dicta cupiditate, voluptates incidunt voluptatum eaque error
          inventore assumenda magnam aspernatur consequatur porro iste quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque
          tempore enim dolorem nihil illo nobis doloribus cupiditate sunt quas
          iusto voluptatibus veritatis repellat natus, incidunt provident, rem
          aliquam obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat odit pariatur sed reprehenderit optio architecto
          nesciunt aliquid enim totam amet in molestias nulla iusto tenetur
          quisquam voluptatem, obcaecati porro delectus.
        </p>
        <!-- <YouTubePlayer id="Xh11iUpJs4Y" /> -->
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          corrupti culpa tempora quia placeat dignissimos modi, aliquam quaerat,
          ullam cupiditate voluptatem blanditiis. Commodi perspiciatis ea veniam
          ratione necessitatibus ex expedita! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellat, eos fuga nisi aperiam aliquid
          cumque dicta cupiditate, voluptates incidunt voluptatum eaque error
          inventore assumenda magnam aspernatur consequatur porro iste quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque
          tempore enim dolorem nihil illo nobis doloribus cupiditate sunt quas
          iusto voluptatibus veritatis repellat natus, incidunt provident, rem
          aliquam obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Repellat odit pariatur sed reprehenderit optio architecto
          nesciunt aliquid enim totam amet in molestias nulla iusto tenetur
          quisquam voluptatem, obcaecati porro delectus.
        </p>
        <Button btnText="Impressum" slug="/impressum" />
      </TextSection>
    </ContentSection>
    <SwipeSection
      styles="bg-subliminal"
      title="Test"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rem inventore reiciendis ad maiores iusto culpa. "
    >
      <div
        class="swipeSectionElement"
        v-for="object in objects"
        :key="object.id"
      >
        <ProductCard
          ref="test"
          :img="object.images[0].big_url"
          title="Test"
          description="Lorem ipsum dolor sit amet."
          slug="yolo"
        />
      </div>
      <!-- :title="object.title.value" -->
    </SwipeSection>
    <!-- <ContentSection>
      <SmallCenteredSection>
        <h2>Unser Team</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
          voluptatem ex quae blanditiis!
        </h3>
        <Button btnText="impressum" slug="/impressum" />
      </SmallCenteredSection>
      <WrapSection>
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="impressum"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          link="https://www.google.de"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="impressum"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="impressum"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="impressum"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="impressum"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="impressum"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="impressum"
        />
      </WrapSection>
    </ContentSection> -->
    <ContentSection>
      <LayoutContent dir="reversed" :ratio="[46, 46]">
        <template v-slot:a>
          <FullSizeImg
            src="https://www.sueddeutsche.de/image/sz.1.5509306/1408x792?v=1642500419&format=webp"
          />
        </template>
        <template v-slot:b>
          <h2>This is a Test</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            error repudiandae hic aut, mollitia sit qui at a!
          </p>
          <StringButton btnText="test" />
          <StringButton btnText="test" />
          <StringButton btnText="test" />
        </template>
      </LayoutContent>
      <LayoutContent :ratio="[46, 46]">
        <template v-slot:a>
          <FullSizeImg
            src="https://www.sueddeutsche.de/image/sz.1.5509306/1408x792?v=1642500419&format=webp"
          />
        </template>
        <template v-slot:b>
          <h2>This is a Test</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            error repudiandae hic aut, mollitia sit qui at a!
          </p>
          <StringButton btnText="test" />
          <StringButton btnText="test" />
          <StringButton btnText="test" />
        </template>
      </LayoutContent>
    </ContentSection>
  </div>
</template>

<script>
import Arguments from '~/components/sections/ArgumentSection.vue';
import ProductCard from "~/components/elements/ProductCard.vue";
import contact from "~/static/flows/contact.json";

export default {
  components: { ProductCard, Arguments },
  data() {
    return {
      title: "Beautiful Landscapes brought to you by the Universe! 🚀",
      objects: [],
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get("/.netlify/functions/apitest");
    return { res, contact };
  },
  methods: {
    async fetchObjects() {
      this.objects = await this.$axios.$get("/.netlify/functions/apitest");
    },
  },
  async fetch() {
    this.objects = await this.$axios.$get("/.netlify/functions/apitest");
    console.log(this.objects);
    console.log(contact);
  },
  fetchOnServer: false,
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
