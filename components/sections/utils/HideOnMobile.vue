<template>
  <div class="hideOnMobile">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.hideOnMobile {
  @apply hidden xl:flex;
}
</style>