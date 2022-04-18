<template>
  <div>
    <a v-if="link" :href="link">
      <div class="option">
        <img class="icon" :src="img" alt="icon" />
        <p>{{ text }}</p>
      </div>
    </a>
    <NuxtLink
      v-if="slug"
      :to="{
        path: slug,
      }"
    >
      <div class="option">
        <img class="icon" :src="img" alt="icon" />
        <p>{{ text }}</p>
      </div>
    </NuxtLink>
    <div v-if="!slug && !link" class="option">
      <img class="icon" :src="img" alt="icon" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["text", "img", "slug", "link", "icon"],
});
</script>

<style lang="postcss" scoped>
.option {
  @apply flex justify-center items-center flex-col;
  @apply w-full h-60 mb-4 md:m-4 md:w-60 md:h-60;
  @apply border rounded-md border-black;

  > p {
    @apply my-micro;
  }
}

.option:hover {
  @apply border-primary cursor-pointer;
}

.icon {
  @apply h-14 mb-4;
}

.emoji {
  @apply text-6xl mb-4;
}
</style>
