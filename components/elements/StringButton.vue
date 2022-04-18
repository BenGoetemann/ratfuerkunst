<template>
  <NuxtLink
    :to="{
      path: slug,
    }"
  >
    <div class="stringButtonWrapper">
      <img
        v-if="reversed"
        class="reversed"
        src="~assets/icons/navigation/arrow.svg"
        :alt="btnText"
      />
      <p>{{ btnText }}</p>
      <img
        v-if="!reversed"
        src="~assets/icons/navigation/arrow.svg"
        :alt="btnText"
      />
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["btnText", "slug", "reversed"],
});
</script>

<style lang="postcss" scoped>
.stringButtonWrapper {
  @apply flex flex-row items-center w-auto;

  & img {
    @apply ml-10 h-10;
  }

  & .reversed {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    @apply mr-4 ml-0;
  }
}

p {
  @apply text-yellow-500 text-center font-bold text-xl m-0;
  font-family: "Poppins", sans-serif;
}

p:hover {
  @apply text-yellow-600;
}
</style>
