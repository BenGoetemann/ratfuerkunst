<template>
  <FluidContainer>
    <BorderContainer>
      <article class="legalSection">
        <slot></slot>
      </article>
    </BorderContainer>
  </FluidContainer>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.legalSection {
  /* @apply mt-small xl:mt-huge; */ /* Wenn NavBar absolut ist */
  @apply mt-medium; /* Wenn NavBar NICHT absolut ist */
  @apply mb-big xl:mb-big;
}
</style>