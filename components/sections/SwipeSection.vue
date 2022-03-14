<template>
  <section>
    <div>
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
      /><ProfileCard
        :img="require('~/assets/images/heroes/hero.jpg')"
        name="Jonas Siebner"
        position="Finanz-Mensch"
        slug="impressum"
      /><ProfileCard
        :img="require('~/assets/images/heroes/hero.jpg')"
        name="Jonas Siebner"
        position="Finanz-Mensch"
        slug="impressum"
      /><ProfileCard
        :img="require('~/assets/images/heroes/hero.jpg')"
        name="Jonas Siebner"
        position="Finanz-Mensch"
        slug="impressum"
      /><ProfileCard
        :img="require('~/assets/images/heroes/hero.jpg')"
        name="Jonas Siebner"
        position="Finanz-Mensch"
        slug="impressum"
      />
      <!-- <slot class="swipeItem"></slot> -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

section {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}

/* section .swipeItem {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
} */

section div {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div:hover {
  background-color: #777;
}
</style>