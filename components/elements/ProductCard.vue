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
}

.productPictureWrapper {
  @apply flex justify-center items-center;
  @apply w-full;
}

.descriptionWrapper {
  @apply max-w-xs flex-wrap;
  @apply m-small;
}

h3 {
  @apply mb-micro;
}

.productPicture {
  object-fit: cover;
  overflow: hidden;
}
</style>
