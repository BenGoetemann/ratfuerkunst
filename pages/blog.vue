<template>
  <ContentSection>
    <div v-for="post in posts" :key="post.fields.slug">
      <NuxtLink :to="post.fields.slug">
        <div class="postPreview">
          <div class="previewImgWrapper">
            <img
              class="previewImg"
              :src="post.fields.previewImage.fields.file.url"
              :alt="post.fields.previewImage.fields.title"
            />
          </div>
          <div class="previewTextWrapper">
            <h2 class="title">
              {{ post.fields.title }}
            </h2>
            <p>{{ post.fields.previewText }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </ContentSection>
</template>

<script>
import { createClient } from "../plugins/contentful";
const contentfulClient = createClient();

export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    try {
      if (!contentfulClient) return;
      const response = await contentfulClient.getEntries({
        content_type: "blogPost",
        include: 10,
      });
      if (response.items.length > 0) {
        this.posts = response.items;
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    }
  },
  fetchOnServer: false,
};
</script>

<style lang="postcss" scoped>
.postPreview {
  @apply flex justify-start items-start;
  @apply rounded-default p-small my-mini bg-subliminal;

  & p {
    @apply m-0;
  }
}

  .previewImgWrapper {
    @apply m-micro h-44;
    aspect-ratio: 1/1
  }

  .previewTextWrapper {
     @apply m-micro
  }

  .previewImg {
    @apply h-full w-full;
    object-fit: cover;
  }
</style>