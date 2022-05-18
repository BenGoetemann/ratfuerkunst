<template>
  <LegalSection>
    <h1>Datenschutz</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      eveniet neque omnis veritatis similique, enim, provident ut eligendi
      itaque quod facere explicabo quae laudantium et soluta dolores rem quo
      beatae!
    </p>
  </LegalSection>
</template>

<script>
export default {
  data() {
    return {
      title: "Beautiful Landscapes brought to you by the Universe! 🚀",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Why metaverse when the universe has so much to offer that you haven't seen yet! We bring you to the craziest places in the galaxy!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "Travel, Flight, Adventure",
        },
        {
          hid: "author",
          name: "author",
          content: "Benedikt Götemann",
        },
      ],
    };
  },
};
</script>

<style>
</style>