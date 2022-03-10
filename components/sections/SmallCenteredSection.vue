<template>
  <section>
    <article>
      <slot></slot>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>

section {
  @apply flex flex-col justify-center items-center w-full mb-medium;
}

article {
  @apply flex flex-col items-center justify-center;
  @apply max-w-2xl text-center;
}
</style>