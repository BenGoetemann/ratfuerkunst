<template>
  <div>
    <WideHeader img="bg-hero" />
    <ContentSection>
      <TextSection>
        <h1 @click="fetchObjects()">Hello {{ objects }}</h1>
        <h1>Hello {{ res }}</h1>
        <!-- <div v-for="text in texts" :key="text">
          <p>
            {{ text }}
          </p>
        </div> -->

        <YouTubePlayer id="Xh11iUpJs4Y" />
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
    <ContentSection styles="bg-subliminal">
      <SmallCenteredSection>
        <h1>Unser Team</h1>
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
    </ContentSection>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Beautiful Landscapes brought to you by the Universe! 🚀",
      objects: [],
    };
  },
  async asyncData({ $axios }) {
    const res = await $axios.$get('/.netlify/functions/apitest')
    console.log(res)
    return { res };
  },
  methods: {
    async fetchObjects() {
      this.objects = await this.$axios.$get("/.netlify/functions/apitest");
    },
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
