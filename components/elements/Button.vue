<template>
  <div>
    <a v-if="link" :href="link">
      <div class="button">
        <p>{{ btnText }}</p>
      </div>
    </a>
    <NuxtLink v-if="slug" :to="{ path: makeNameToLink(btnText) }">
      <div class="button">
        <p>{{ btnText }}</p>
      </div>
    </NuxtLink>
      <div v-if="!slug && !link" class="button">
        <p>{{ btnText }}</p>
      </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["btnText", "slug", "link"],

  methods: {
    makeNameToLink(btnText) {
      return btnText.toLowerCase().split(" ").join("-");
    },
  },
});
</script>

<style lang="postcss" scoped>
.button {
  @apply flex justify-center items-center;
  @apply w-44 h-10 border-2 border-black rounded-default font-bold;
  @apply mt-4 xl:mt-0;

  & p {
    @apply m-0;
  }
}

.button:hover {
  @apply border-primary-hover;
}
</style>
