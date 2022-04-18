<template>
  <div class="socialIconSelection">
    <Icon
      v-if="youtube"
      :img="require('~/assets/icons/platforms/youtube.svg')"
      :link="'https://www.youtube.de/' + youtube"
    />
    <Icon
      v-if="instagram"
      :img="require('~/assets/icons/platforms/instagram.svg')"
      :link="'https://www.instagram.com/' + instagram"
    />
    <Icon
      v-if="tiktok"
      :img="require('~/assets/icons/platforms/tiktok.svg')"
      :link="'https://www.tiktok.com/@' + tiktok"
    />
    <Icon
      v-if="facebook"
      :img="require('~/assets/icons/platforms/facebook.svg')"
      :link="'https://www.facebook.com/' + facebook"
    />

    <Icon
      v-if="soundcloud"
      :img="require('~/assets/icons/platforms/soundcloud.svg')"
      :link="'https://www.soundcloud.com/' + soundcloud"
    />
    <Icon
      v-if="reddit"
      :img="require('~/assets/icons/platforms/reddit.svg')"
      :link="'https://www.reddit.com/' + reddit"
    />
    <Icon
      v-if="twitter"
      :img="require('~/assets/icons/platforms/twitter.svg')"
      :link="'https://www.twitter.com/' + twitter"
    />
    <Icon
      v-if="linkedin"
      :img="require('~/assets/icons/platforms/linkedin.svg')"
      :link="'https://www.linkedin.com/' + linkedin"
    />
    <Icon
      v-if="snapchat"
      :img="require('~/assets/icons/platforms/snapchat.svg')"
      :link="'https://www.snapchat.com/' + snapchat"
    />
  </div>
</template>

<script>
export default {
  props: [
    "facebook",
    "soundcloud",
    "instagram",
    "youtube",
    "tiktok",
    "twitter",
    "reddit",
    "snapchat",
    "linkedin",
  ],
};
</script>

<style lang="postcss" scoped>
.socialIconSelection {
  @apply flex flex-row items-start justify-center;
  @apply w-full py-small xl:w-auto xl:py-micro;
}
</style>