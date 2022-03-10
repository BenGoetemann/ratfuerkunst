<template>
  <div>
    <NavBar
      :pages="['Home', 'About', 'Test']"
      callToAction="Login"
      facebook="test"
      instagram="test"
      soundcloud="test"
      tiktok="apple"
      youtube="test"
    />
    <Divider />
    <Nuxt />
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
        title="Legal"
        :pages="['Impressum', 'Datenschutz', 'AGB']"
      />
      <LinkSelection
        title="Legal"
        :pages="['Impressum', 'Datenschutz', 'AGB']"
      />
      <LinkSelection
        title="Legal"
        :pages="['Impressum', 'Datenschutz', 'AGB']"
      />
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