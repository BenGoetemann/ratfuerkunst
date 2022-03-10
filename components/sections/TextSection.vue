<template>
  <article>
    <slot></slot>
  </article>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
article {
  @apply w-full;
  @apply text-left;
}
</style>