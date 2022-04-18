<template>
  <div class="optionWrapper">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
.optionWrapper {
  @apply flex flex-col w-full justify-center items-center flex-wrap md:flex-row md:w-full;
}
</style>
