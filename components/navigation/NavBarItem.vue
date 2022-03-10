<template>
  <NuxtLink
    :to="{
      path: makeNameToLink(name),
    }"
  >
    <p @click="$emit('close')" class="item">
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
  @apply font-semibold text-center;
  @apply m-0 mt-4 xl:mr-4 xl:mt-0;
  @apply hover:text-primary;
}
</style>