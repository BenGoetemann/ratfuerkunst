<template>
  <figure class="productCardWrapper">
    <div class="productPictureWrapper">
      <img class="productPicture" :src="img" :alt="title" />
    </div>
    <div class="descriptionWrapper">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <Button btnText="test" :slug="slug" />
    </div>
  </figure>
</template>

<script>
export default {
  props: ["img", "title", "description", "slug", "styles"],
};
</script>

<style lang="postcss" scoped>
.productCardWrapper {
  @apply flex flex-col items-start justify-start rounded-default;
  @apply my-small w-80 md:w-84;
  @apply bg-white;
  aspect-ratio: 1/1.3
}

.productPictureWrapper {
  @apply flex justify-center items-center;
  @apply w-full h-3/5;
}

.descriptionWrapper {
  @apply max-w-xs flex-wrap;
  @apply p-small w-full h-2/5;
}

h3 {
  @apply mb-micro;
}

.productPicture {
  @apply h-full w-full;
  object-fit: cover;
  overflow: hidden;
}
</style>
