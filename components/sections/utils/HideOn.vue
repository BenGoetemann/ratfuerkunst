<template>
  <div :class="getDevice()">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["device"],
  methods: {
    getDevice() {
      if (this.device === "mobile") return "hideOnMobile";
      if (this.device === "desktop") return "hideOnDesktop";
    },
  },
};
</script>

<style lang="postcss" scoped>
.hideOnMobile {
  @apply hidden xl:flex;
}

.hideOnDesktop {
  @apply flex xl:hidden;
}
</style>