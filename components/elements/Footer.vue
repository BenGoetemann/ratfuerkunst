<template>
  <FluidContainer>
    <Divider />
    <BorderContainer>
      <div class="footerWrapper">
        <div class="logoSection">
          <Logo />
          <p>© {{ new Date().getFullYear() }} Pingr UG (haftungsbeschränkt)</p>
          <HideOnMobile>
            <SocialIconSelection
              :facebook="facebook"
              :instagram="instagram"
              :tiktok="tiktok"
              :soundcloud="soundcloud"
              :youtube="youtube"
            />
          </HideOnMobile>
        </div>
        <div class="linkSelectionWrapper">
          <slot></slot>
        </div>
      </div>
    </BorderContainer>
  </FluidContainer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["facebook", "soundcloud", "instagram", "youtube", "tiktok"],
});
</script>

<style lang="postcss" scoped>
.footerWrapper {
  @apply flex flex-col-reverse items-center lg:items-start lg:flex-row;
  @apply py-9 lg:py-16;
}

.logoSection {
  @apply flex flex-col items-center lg:items-start;
  @apply mb-9 w-auto lg:w-2/6 lg:mb-0 lg:mr-9;
  & p {
    @apply text-sm my-mini lg:text-left;
  }
}

.linkSelectionWrapper {
  @apply flex flex-col items-center justify-between lg:items-start lg:flex-row;
  @apply w-auto h-auto lg:w-4/6;
}
</style>
