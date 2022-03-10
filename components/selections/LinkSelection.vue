<template>
  <div class="linkSection">
    <h4>{{ title }}</h4>
    <div v-for="page in pages" :key="page">
      <FooterItem :name="page" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["title", "pages"],
});
</script>

<style lang="postcss" scoped>
.linkSection {
  @apply flex flex-col mb-9 lg:items-start lg:mb-0 lg:mr-4;
  & h4 {
    @apply text-center pb-1 lg:text-left;
  }
}
</style>
