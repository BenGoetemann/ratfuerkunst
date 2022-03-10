<template>
  <section class="borderContainer">
    <slot></slot>
  </section>
</template>

<style lang="postcss" scoped>
.borderContainer {
  @apply w-10/12 lg:w-9/12 2xl:w-3/5;
}
</style>