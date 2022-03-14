<template>
  <section>
    <div class="wrapper">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

section {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}

section div {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div:hover {
  background-color: #777;
}
</style>