<template>
  <div :class="styles">
    <FluidContainer>
      <BorderContainer>
        <section>
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
section {
  @apply flex flex-col;
  @apply py-medium;
}
</style>