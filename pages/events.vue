<template>
  <ContentSection>
    <div v-for="event in events" :key="event.fields.slug">
      <div>{{ event.fields.slug }}</div>
      <NuxtLink :to="'event/' + event.fields.slug">
        <div class="postPreview">
          <div class="previewTextWrapper">
            <h2 class="title">
              {{ event.fields.title }}
            </h2>
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
      events: [],
    };
  },
  async fetch() {
    try {
      if (!contentfulClient) return;
      const response = await contentfulClient.getEntries({
        content_type: "event",
        include: 10,
        'metadata.tags.sys.id[in]': 'techno'
      });
      if (response.items.length > 0) {
        this.events = response.items;
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    }
  },
  fetchOnServer: false,
  mounted() {
    console.log(this.$route.name)
  }
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
.previewTextWrapper {
  @apply m-micro;
}

.previewImgWrapper {
  @apply m-micro h-44;
  aspect-ratio: 1/1;
}

.previewImg {
  @apply h-full w-full;
  object-fit: cover;
}
</style>