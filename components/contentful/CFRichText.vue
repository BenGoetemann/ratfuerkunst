<template>
  <article>
    <div v-for="(item, index) in body" :key="index">
      <!-- Text -->
      <h2 v-if="item.nodeType == 'heading-2'">{{ item.content[0].value }}</h2>
      <h3 v-if="item.nodeType == 'heading-3'">{{ item.content[0].value }}</h3>
      <h4 v-if="item.nodeType == 'heading-4'">{{ item.content[0].value }}</h4>
      <h5 v-if="item.nodeType == 'heading-5'">{{ item.content[0].value }}</h5>
      <div v-if="item.nodeType == 'paragraph'">
        <TextSection v-if="item.content.length == 1">
          <p>{{ item.content[0].value }}</p>
        </TextSection>
        <TextSection v-if="item.content.length == 3">
          <p>
            {{ item.content[0].value }}
            <a
              :href="item.content[1].data.uri"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{{ item.content[1].content[0].value }}</span></a
            >
            {{ item.content[2].value }}
          </p>
        </TextSection>
      </div>
      <!-- Assets -->
      <FullSizeImg
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
  </article>
</template>

<script>
export default {
  props: ["body"],
};
</script>

<style lang="postcss" scoped>

span {
    @apply text-primary
}

span:hover {
    @apply text-primary-hover
}

</style>