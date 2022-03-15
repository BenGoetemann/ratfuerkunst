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
  props: ['styles'],
};
</script>

<style lang="postcss" scoped>
.contentWrapper {
  @apply flex flex-col;
  @apply py-big;
}
</style>