
<template>
  <ContentSection>
    <h1>{{ fields.title }}</h1>
    <h3>{{ fields.previewText }}</h3>
    <div v-for="(item, index) in body" :key="index">
      <!-- Text -->
      <h2 v-if="item.nodeType == 'heading-2'">{{ item.content[0].value }}</h2>
      <h3 v-if="item.nodeType == 'heading-3'">{{ item.content[0].value }}</h3>
      <h4 v-if="item.nodeType == 'heading-4'">{{ item.content[0].value }}</h4>
      <h5 v-if="item.nodeType == 'heading-5'">{{ item.content[0].value }}</h5>
      <TextSection v-if="item.nodeType == 'paragraph'">
        {{ item.content[0].value }}
      </TextSection>

      <!-- Assets -->
      <img
        v-if="item.nodeType == 'embedded-asset-block'"
        :src="item.data.target.fields.file.url"
        :alt="item.data.target.fields.title"
      />

      <!-- Entries -->
      <div v-if="item.nodeType == 'embedded-entry-block'">
        <YouTubePlayer
          v-if="item.data.target.sys.contentType.sys.id == 'youTubeEmbed'"
          :id="item.data.target.fields.youTubeId"
        />
      </div>
    </div>
  </ContentSection>
</template>

<script>
import { createClient } from "../../plugins/contentful";
const contentfulClient = createClient();

export default {
  data() {
    return {
      fields: [],
      body: [],
    };
  },
  async fetch() {
    try {
      if (!contentfulClient) return;
      let response = await contentfulClient.getEntries({
        content_type: "blogPost",
        include: 10,
        "fields.slug[in]": this.$route.params.slug, // <-
      });
      if (response.items.length > 0) {
        this.fields = response.items[0].fields;
        this.body = response.items[0].fields.body.content;
        console.log(this.body);
      }
    } catch (err) {
      console.error(err);
    }
  },
  //fetchOnServer: false,
};
</script>