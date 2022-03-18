<template>
  <div>
    <div v-for="post in posts" :key="post.fields.slug">
      <h2 class="title">
        <NuxtLink :to="post.fields.slug">{{ post.fields.title }}</NuxtLink>
      </h2>
    </div>
  </div>
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
        include: 10
      });
      if (response.items.length > 0) {
        this.posts = response.items;
        console.log(response);
      }
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<style>
</style>