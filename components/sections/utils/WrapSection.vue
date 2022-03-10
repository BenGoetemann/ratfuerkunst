<template>
        <section>
            <slot></slot>
        </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
section {
  @apply flex flex-wrap flex-col justify-center items-center lg:flex-row;
  @apply w-full h-auto 
}
</style>