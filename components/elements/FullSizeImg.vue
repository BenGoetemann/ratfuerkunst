<template>
  <figure class="imgWrapper">
    <img :src="src" :alt="alt" />
  </figure>
</template>

<script>
export default {
    props: ['src', 'alt']
};
</script>

<style lang="postcss" scoped>
.imgWrapper {
  @apply w-full h-full;
  /* aspect-ratio: 16/9; */
}

img {
  @apply h-full w-full;
  object-fit: cover;
}
</style>