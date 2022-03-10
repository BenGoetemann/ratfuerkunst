<template>
  <section class="fluidContainer">
    <slot></slot>
  </section>
</template>

<style lang="postcss" scoped>
.fluidContainer {
  @apply w-screen flex justify-center items-center flex-col;
}
</style>