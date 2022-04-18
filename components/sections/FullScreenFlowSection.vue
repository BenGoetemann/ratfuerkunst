<template>
  <div :class="styles">
    <FluidContainer>
      <BorderContainer>
        <section class="contentWrapper">
          <slot></slot>
        </section>
      </BorderContainer>
    </FluidContainer>
  </div>
</template>

<script>
export default {
  props: ["styles"],
};
</script>

<style lang="postcss" scoped>
.contentWrapper {
  @apply flex flex-col;
  @apply justify-start items-center md:justify-center;
  @apply min-h-screen;
  @apply my-big;
}

@media (min-width: 768px) {
  .contentWrapper {
    min-height: calc(100vh - 200px);
  }
}
</style>