
<template>
  <ContentSection>
    <h1>{{ fields.title }}</h1>
    <h3>{{ fields.previewText }}</h3>
    <CFRichText :body="body" />
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
        "fields.slug": this.$route.params.slug, // <- this.$route.params.slug
      });
      if (response.items.length > 0) {
        console.log(this.$route)
        this.fields = response.items[0].fields;
        this.body = response.items[0].fields.body.content;
        console.log(this.body);
      }
    } catch (err) {
      console.error(err);
    }
  },
  fetchOnServer: false,
};
</script>