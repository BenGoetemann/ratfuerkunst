<template>
  <main :class="styles">
    <FluidContainer>
      <BorderContainer>
        <TextSection>
          <h1> {{title}} </h1>
          <p> {{text}} </p>
        </TextSection>
      </BorderContainer>
    </FluidContainer>
    <section>
      <slot></slot>
    </section>
  </main>
</template>

<script>
export default {
  props: ["styles", "title", "text"],
};
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  display: none;
}

main {
  @apply py-big;
}

section {
  @apply overflow-auto whitespace-nowrap;
}

section div {
  @apply inline-block;
}

div {
  @apply inline-block ml-small;
}

div:first-child {
  margin-left: calc((100vw - 83.3333%) / 2);
}

div:last-child {
  padding-right: calc((100vw - 83.3333%) / 2);
}

@media (min-width: 1024px) {
  div:first-child {
    margin-left: calc((100vw - 75%) / 2);
  }

  div:last-child {
    padding-right: calc((100vw - 75%) / 2);
  }
}

@media (min-width: 1536px) {
  div:first-child {
    margin-left: calc((100vw - 80rem) / 2);
  }

  div:last-child {
    padding-right: calc((100vw - 80rem) / 2);
  }
}
</style>