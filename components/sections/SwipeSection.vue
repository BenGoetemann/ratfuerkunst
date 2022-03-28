<template>
  <main :class="styles">
    <FluidContainer>
      <BorderContainer>
        <TextSection>
          <h1>{{ title }}</h1>
          <p>{{ text }}</p>
        </TextSection>
      </BorderContainer>
    </FluidContainer>
    <section class="slideContainer">
      <button class="right" @click="right()" type="button">Next</button>
      <section class="swipeWrapper" ref="swipeWrapper">
        <slot></slot>
      </section>
      <button class="left" @click="left()" type="button">Prev</button>
    </section>
  </main>
</template>

<script>
export default {
  props: ["styles", "title", "text"],
  data() {
    return {
      distance: 450,
    };
  },
  methods: {
    left() {
      let element = this.$refs["swipeWrapper"];
      element.scrollLeft -= this.distance;
    },
    right() {
      let element = this.$refs["swipeWrapper"];
      element.scrollLeft += this.distance;
    },
  },
};
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  display: none;
}

main {
  @apply py-big;
}

.swipeWrapper {
  @apply overflow-auto whitespace-nowrap;
  scroll-behavior: smooth;
}

.swipeWrapper div {
  @apply inline-block;
}

div {
  @apply inline-block ml-small;
}

div:first-child {
  margin-left: calc((100vw - 83.3333%) / 2);
}

div:last-child {
  margin-right: calc((100vw - 83.3333%) / 2);
}

@media (min-width: 1024px) {
  div:first-child {
    margin-left: calc((100vw - 75%) / 2);
  }

  div:last-child {
    margin-right: calc((100vw - 75%) / 2);
  }
}

@media (min-width: 1536px) {
  div:first-child {
    margin-left: calc((100vw - 80rem) / 2);
  }

  div:last-child {
    margin-right: calc((100vw - 80rem) / 2);
  }
}

.slideContainer {
  @apply relative m-0 flex items-center;
}

.left,
.right {
  @apply hidden h-64 w-10 bg-gray-200 opacity-50 md:inline;
}

.left {
  @apply absolute left-0;
}

.right {
  @apply absolute right-0;
}

.left:hover,
.right:hover {
  @apply opacity-100;
}
</style>