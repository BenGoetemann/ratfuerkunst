<template>
  <div>
    <!-- External Link -->

    <a
      v-if="link"
      class="icon"
      target="_blank"
      rel="noopener noreferrer"
      :href="link"
      ><img :src="img" :alt="alt" />
    </a>

    <!-- Internal Route -->

    <NuxtLink
      v-if="slug"
      :to="{
        path: slug,
      }"
    >
      <img :src="img" :alt="alt" />
    </NuxtLink>

    <!-- Without Link or Route -->

    <img v-if="!slug && !link" :src="img" :alt="alt" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["img", "link", "slug", "alt"],
});
</script>

<style lang="postcss" scoped>
.icon {
  @apply w-7 h-7 m-3 flex flex-row items-center justify-center xl:m-0 xl:mr-3;
}
</style>