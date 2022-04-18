<template>
<div>
  <div class="argumentSectionWrapper">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.argumentSectionWrapper {
  @apply grid grid-cols-3 gap-4 w-full flex justify-center items-center;
}
</style>