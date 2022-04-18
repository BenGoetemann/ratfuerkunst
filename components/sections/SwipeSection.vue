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
      <button
        v-if="scrollPosition > 0"
        class="left"
        type="button"
        @click="left()"
      >
        <p>&larr;</p>
      </button>
      <button v-if="showButton" class="right" type="button" @click="right()">
        <p>&rarr;</p>
      </button>
      <section class="swipeWrapper" ref="swipeWrapper" @scroll="handleScroll()">
        <slot></slot>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  props: ["styles", "title", "text"],
    data () {
    return {
      distance: 450,
      scrollPosition: 0,
      showButton: true
    }
  },
  methods: {
    handleScroll () {
      const element = this.$refs.swipeWrapper
      this.scrollPosition = element.scrollLeft
    },
    left () {
      const element = this.$refs.swipeWrapper
      element.scrollLeft -= this.distance
      this.scrollPosition -= this.distance
    },
    right () {
      const element = this.$refs.swipeWrapper
      element.scrollLeft += this.distance
      this.scrollPosition += this.distance
    }
  }
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
  @apply hidden h-14 w-14 rounded-full bg-black opacity-50 md:inline;
  z-index: 20;

  > p {
    @apply text-yellow-500;
  }
}

.left {
  @apply absolute left-10;
}

.right {
  @apply absolute right-10;
}

.left:hover,
.right:hover {
  @apply opacity-100;
}
</style>