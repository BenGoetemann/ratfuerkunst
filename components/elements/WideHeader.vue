<template>
  <FluidContainer>
    <figure :class="img"></figure>
  </FluidContainer>
</template>

<script>
export default {
  props: ["img"],
};
</script>

<style lang="postcss" scoped>
figure {
  @apply bg-cover bg-top;
  @apply w-full h-72 lg:h-96 xl:h-128 2xl:h-160;
  background-position: center center;
}
</style>