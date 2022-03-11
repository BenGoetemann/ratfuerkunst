<template>
  <div>
    <!-- Loaded after click via async-method defined in methods -->
    <div @click="fetchSomething()">Clicked: {{clicked.name}}</div>
    <!-- Loaded via hook when component is mounted -->
    <div>Mounted: {{ mounted.mass }}</div>
    <!-- Loaded in build time -->
    <div>Build Time: {{ built.eye_color }}</div>
  </div>
</template>

<script>
export default {
  props: ["built"],
  data() {
    return {
      clicked: [],
      mounted: [],
    };
  },
  methods: {
    async fetchSomething() {
      this.clicked = await this.$http.$get("https://swapi.dev/api/people/1/");
    },
  },
  async mounted() {
    this.mounted = await this.$http.$get("https://swapi.dev/api/people/1/");
  },
};
</script>

<style>
</style>