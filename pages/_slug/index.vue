
<template>
  <ContentSection>
    <h1>{{ fields.title }}</h1>
    <h3>{{ fields.previewText }}</h3>
    <div v-for="(item, index) in body" :key="index">
      <TextSection v-if="item.nodeType == 'paragraph'">
        {{ item.content[0].value }}
      </TextSection>
      <img
        v-if="item.nodeType == 'embedded-asset-block'"
        :src="item.data.target.fields.file.url"
        :alt="item.data.target.fields.title"
      />
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
        "fields.slug": this.$route.params.slug, // the magic happens here
      });
      if (response.items.length > 0) {
        this.fields = response.items[0].fields;
        this.body = response.items[0].fields.body.content;
        console.log(this.post);
      }
    } catch (err) {
      console.error(err);
    }
  },
};
</script>