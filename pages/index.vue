<template>
  <div>
    <WideHeader img="bg-hero" />
    <ContentSection styles="bg-subliminal">
      <SmallCenteredSection>
        <h1>Unser Team</h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
          voluptatem ex quae blanditiis!
        </h3>
        <Button btnText="test" slug="test" />
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
  name: "IndexPage",
};
</script>

<style scoped>
</style>
