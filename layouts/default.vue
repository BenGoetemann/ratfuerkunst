<template>
  <div>
    <!-- <NavBar
      :pages="['Impressum', 'Blog', 'Events', 'Contact']"
      callToAction="Impressum"
      facebook="leaf"
      instagram="leaf"
      tiktok="leaf"
      linkedin="leaf"
      youtube="leaf"
    /> -->
    <!-- <Divider /> -->
    <Nuxt />
    <!-- <Footer
      company="Benedikt Götemann"
      facebook="leaf"
      instagram="leaf"
      tiktok="leaf"
      linkedin="leaf"
      youtube="leaf"
    >
      <LinkSelection title="Legal" :pages="['Impressum']" />
    </Footer> -->
  </div>
</template>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@500;600;700;800;900&display=swap");

:root {
  font-size: 95%;
}

html {
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
  @apply bg-primary
}

h1 {
  @apply text-3xl font-bold;
  @apply mb-small;
}

h2 {
  @apply text-2xl;
  @apply mb-small;
}

h3 {
  @apply text-xl;
  @apply mb-small;
}

h4 {
  @apply text-lg;
  @apply mb-mini;
}

p,
li {
  @apply text-base font-medium leading-7;
  @apply mb-small;
}

li {
  @apply list-decimal
}

a {
  @apply font-bold
}
</style>