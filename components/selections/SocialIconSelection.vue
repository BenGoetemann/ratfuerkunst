<template>
  <div class="socialIconSelection">
    <Icon
      v-if="youtube"
      :img="require('~/assets/icons/platforms/yt.svg')"
      :link="'https://www.youtube.com/' + youtube"
    />
    <Icon
      v-if="instagram"
      :img="require('~/assets/icons/platforms/ig.svg')"
      :link="'https://www.instagram.com/' + instagram"
    />
    <Icon
      v-if="tiktok"
      :img="require('~/assets/icons/platforms/tt.svg')"
      :link="'https://www.tiktok.com/@' + tiktok"
    />
    <Icon
      v-if="facebook"
      :img="require('~/assets/icons/platforms/fb.svg')"
      :link="'https://www.facebook.com/' + facebook"
    />

    <Icon
      v-if="soundcloud"
      :img="require('~/assets/icons/platforms/sc.svg')"
      :link="'https://www.soundcloud.com/' + soundcloud"
    />
  </div>
</template>

<script>
export default {
  props: ["facebook", "soundcloud", "instagram", "youtube", "tiktok"],
};
</script>

<style>
.socialIconSelection {
  @apply flex flex-row items-start justify-center lg:justify-start;
  @apply w-full py-small xl:w-auto xl:py-micro;
}
</style>