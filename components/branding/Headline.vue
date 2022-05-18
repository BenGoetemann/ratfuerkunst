<template>
  <div class="headlineWrapper">
    <div class="behind">{{ value }}</div>
    <div class="before">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.headlineWrapper {
  @apply relative h-20;
}

.behind,
.before  {
  @apply absolute py-micro px-micro bg-white inline border-2 border-black font-bold text-3xl;
}

.before  {
  @apply bottom-2 left-2;
}

.behind {
  @apply bottom-0 left-0;
}
</style>