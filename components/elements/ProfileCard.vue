<template>
  <div>
    <NuxtLink
      v-if="slug"
      :to="{
        path: slug,
      }"
    >
      <div class="profileCardWrapper">
        <div class="profilePictureWrapper">
          <img class="profilePicture" :src="img" :alt="name" />
        </div>
        <h3>{{ name }}</h3>
        <p>{{ position }}</p>
      </div>
    </NuxtLink>
    <a v-if="link" :href="link">
      <div class="profileCardWrapper">
        <div class="profilePictureWrapper">
          <img class="profilePicture" :src="img" :alt="name" />
        </div>
        <h3>{{ name }}</h3>
        <p>{{ position }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["img", "name", "position", "slug", "link"],
};
</script>

<style lang="postcss" scoped>
h3 {
  @apply mb-micro mt-small;
}

.profileCardWrapper {
  @apply flex flex-col items-center justify-center;
  @apply mx-small my-small;
}

.profilePictureWrapper {
  @apply flex justify-center items-center;
  @apply w-11/12 md:w-72;
  @apply rounded-full bg-primary;
  aspect-ratio: 1/1;
}

.profilePicture {
  @apply rounded-full;
  width: 95%;
  aspect-ratio: 1/1;
  object-fit: cover;
  overflow: hidden;
}

.profilePicture:hover {
  @apply animate-none;
}
</style>
