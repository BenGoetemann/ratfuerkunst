<template>
  <div resize class="player">
    <youtube
      :video-id="id"
      ref="youtube"
      @playing="playing"
      resize
      fitParent
    ></youtube>
  </div>
</template>

<script>
export default {
    props: ["id"],
  data() {
    return {
      videoId: this.id,
    };
  },
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    },
  },
};
</script>

<style>
iframe {
  width: 100%;
    aspect-ratio: 16/9;
}

.player {
  width: 100%;
  aspect-ratio: 16/9;
  margin: 30px 0;
}
</style>