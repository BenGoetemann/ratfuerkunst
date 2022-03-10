<template>
  <div>
    <!-- External Link -->

    <a
      v-if="link"
      class="icon"
      target="_blank"
      rel="noopener noreferrer"
      :href="link"
      ><img :src="img" alt="Icon" />
    </a>

    <!-- Internal Route -->

    <NuxtLink
      v-if="slug"
      :to="{
        path: slug,
      }"
    >
      <img :src="img" alt="Icon" />
    </NuxtLink>

    <!-- Without Link or Route -->

    <img v-if="!slug && !link" :src="img" alt="Icon" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["img", "link", "slug"],
});
</script>

<style lang="postcss" scoped>
.icon {
  @apply w-5 h-5 m-3 flex flex-row items-center justify-center xl:m-0 xl:mr-3;
}
</style>