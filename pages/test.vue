<template>
  <FetchButton :built="built" />
</template>

<script>
export default {
  async asyncData({ $http }) {
    const built = await $http.$get("https://swapi.dev/api/people/1/");

    return { built };
  },
}
</script>

<style>

</style>