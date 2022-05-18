<template>
  <section class="borderContainer">
    <slot></slot>
  </section>
</template>

<style lang="postcss" scoped>
.borderContainer {
  @apply w-10/12 lg:max-w-4xl;
}
</style>