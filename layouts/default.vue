<template>
  <div>
    <CookieControl locale="de" />
    <NavBar
      :pages="['Impressum', 'Blog', 'Events', 'Contact']"
      callToAction="Impressum"
      facebook="leaf"
      instagram="leaf"
      tiktok="leaf"
      linkedin="leaf"
      youtube="leaf"
    />
    <Divider />
    <Nuxt />
    <Footer
      company="Benedikt Götemann"
      facebook="leaf"
      instagram="leaf"
      tiktok="leaf"
      linkedin="leaf"
      youtube="leaf"
    >
      <LinkSelection title="Legal" :pages="['Impressum']" />
    </Footer>
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
}

.background {
  @apply flex flex-col justify-center	items-center;
}

.borderContainer {
  @apply w-10/12 lg:w-9/12 2xl:w-3/5;
}

.fluidContainer {
  @apply w-screen flex justify-center items-center flex-col;
}

h1 {
  @apply text-3xl;
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
  @apply text-base;
  @apply mb-small;
}
</style>