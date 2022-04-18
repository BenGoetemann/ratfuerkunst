<template>
  <FluidContainer>
    <nav :class="absolute ? 'lg:top-0 xl:absolute' : ''">
      <BorderContainer>
        <!-- Desktop Navbar -->
        <section class="navWrapper">
          <Logo />
          <main class="navItemWrapper">
            <div v-for="page in pages" :key="page">
              <NavBarItem :name="page" />
            </div>
            <Button :btnText="callToAction" :slug="callToAction" />
          </main>
          <!-- Mobile Navbar Drawer Icon -->
          <div
            v-show="!isOpen"
            class="drawerIconWrapper"
            @click="triggerMobileNav()"
          >
            <img
              class="drawerIcon"
              src="~assets/icons/navigation/mobileNavIcon.svg"
              alt=""
            />
          </div>
        </section>
      </BorderContainer>

      <!-- Mobile Navbar -->
      <section
        class="drawer transform ease-in-out transition-all duration-300"
        :class="isOpen ? 'translate-y-0' : '-translate-y-full'"
      >
        <FluidContainer>
          <BorderContainer>
            <div class="drawerHeader">
              <Logo />
              <figure class="drawerIconWrapper" @click="triggerMobileNav()">
                <img
                  class="drawerIcon"
                  src="~assets/icons/navigation/closeNavBarIcon.svg"
                  alt=""
                />
              </figure>
            </div>
            <main class="drawerItemWrapper">
              <div v-for="page in pages" :key="page">
                <NavBarItem @close="triggerMobileNav()" :name="page" />
              </div>
              <Button :btnText="callToAction" :slug="callToAction" />
            </main>
            <SocialIconSelection
              :facebook="facebook"
              :instagram="instagram"
              :tiktok="tiktok"
              :twitter="twitter"
              :reddit="reddit"
              :snapchat="snapchat"
              :linkedin="linkedin"
              :youtube="youtube"
            />
          </BorderContainer>
          <Divider />
        </FluidContainer>
      </section>
    </nav>
  </FluidContainer>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: [
    "absolute",
    "pages",
    "callToAction",
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
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    triggerMobileNav() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center;
  @apply w-full;
}

.navWrapper {
  @apply flex items-center justify-between;
  @apply xs:mb-small sm:pb-0 mt-small;
  @apply bg-transparent;
}

.navItemWrapper {
  @apply flex flex-row items-center hidden xl:flex;
}

.drawer {
  @apply w-full h-auto;
  @apply border-transparent bg-subliminal;
  @apply overflow-auto z-30 fixed top-0 left-0;
}

.drawerItemWrapper {
  @apply flex flex-col items-center;
  @apply pt-small;
}

.drawerIconWrapper {
  @apply flex flex-row items-center;
  @apply xl:hidden;
}

.drawerIcon {
  @apply h-small;
}

.drawerHeader {
  @apply flex flex-row justify-between;
  @apply mt-small;
}

.socialMediaWrapper {
  @apply flex flex-row items-center justify-center;
  @apply w-full pt-small pb-small;
}
</style>
