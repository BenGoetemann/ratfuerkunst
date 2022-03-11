<template>
  <div>
    <WideHeader img="bg-hero" />
    <ContentSection>
      <TextSection>
        <h1>This is an Article</h1>
        <div v-for="text in texts" :key="text">
          <p>
            {{ text }}
          </p>
        </div>

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
        <Button btnText="Learn More" slug="/" />
      </TextSection>
    </ContentSection>
    <ContentSection styles="bg-subliminal">
      <SmallCenteredSection>
        <h1>Unser Team</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
          voluptatem ex quae blanditiis!
        </h3>
        <Button btnText="Contact Us" slug="/contact" />
      </SmallCenteredSection>
      <WrapSection>
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="test"
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
          slug="test"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="test"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="test"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="test"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="test"
        />
        <ProfileCard
          :img="require('~/assets/images/heroes/hero.jpg')"
          name="Jonas Siebner"
          position="Finanz-Mensch"
          slug="test"
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
    };
  },
  async asyncData({ $http }) {
    const texts = await $http.$get(
      "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=10"
    );
    // const text = await res.text();

    return { texts };
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
