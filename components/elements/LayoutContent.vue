<template>
  <div class="layoutContentWrapper" :style="layoutContainer">
    <div class="slot" :style="slotA">
      <slot name="a"></slot>
    </div>
    <div :style="gap"></div>
    <div class="slot" :style="slotB">
      <slot name="b"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dir", "ratio"],
  data() {
    return {
      layoutContainer: {
        flexDirection: null,
      },
      slotA: {
        width: null,
        display: "flex",
        flexDirection: "column",
      },
      gap: {
        height: null,
        width: null,
      },
      slotB: {
        width: null,
        display: "flex",
        lexDirection: "column",
      },
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      let threshold = 768;
      console.log("hier");
      let width = window.innerWidth;
      if (width >= threshold) {
        this.layoutContainer.flexDirection =
          this.dir === "reversed" ? "row-reverse" : "row";
        this.slotA.width = this.ratio[0] + "%";
        this.slotB.width = this.ratio[0] + "%";
        this.gap.width = this.setGap() + "%";
        this.gap.height = "0%";
      }
      if (width < threshold) {
        this.layoutContainer.flexDirection = "column";
        this.slotA.width = "100%";
        this.slotB.width = "100%";
        this.gap.width = "0%";
        this.gap.height = "20px";
      }
    },
    setGap() {
      let gap = 100 - (this.ratio[0] + this.ratio[1]);
      return gap;
    },
  },
};
</script>

<style lang="postcss" scoped>
.layoutContentWrapper {
  @apply flex;
  @apply w-full h-auto md:h-96;
  @apply my-medium;
}

.slot {
  @apply flex flex-col justify-center items-start rounded-default overflow-hidden;
}
</style>