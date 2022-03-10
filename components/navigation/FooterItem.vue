<template>
  <NuxtLink
    :to="{
      path: makeNameToLink(name),
    }"
  >
    <p class="item">
      {{ name }}
    </p>
  </NuxtLink>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["name"],
  methods: {
    makeNameToLink(name) {
      return name.toLowerCase().split(" ").join("-");
    },
  },
});
</script>

<style lang="postcss" scoped>
.item {
  @apply text-center;
  @apply hover:text-primary;
  @apply mb-micro
}
</style>