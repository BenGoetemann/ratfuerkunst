
<template>
  <div>
    <p>{{ post.title }}</p>
    <div v-html="richText"></div>
  </div>
</template>

<script>
import { createClient } from "../../plugins/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { getRichTextEntityLinks } from '@contentful/rich-text-links';
const contentfulClient = createClient();

export default {
  data() {
    return {
      post: [],
      richText: [],
      entries: []
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
        this.post = response.items[0].fields; // Fields
        this.richText = documentToHtmlString(response.items[0].fields.text); // Simple HTML Rich Text
        this.entries = getRichTextEntityLinks(response.items[0].fields.text); // Entries? Not working yet.
        console.log(this.entries)
      }
    } catch (err) {
      console.error(err);
    }
  },
  fetchOnServer: false
};
</script>