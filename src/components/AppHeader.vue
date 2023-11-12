<template>
  <div>
    <header class="banner">
      <div class="container container--header">
        <a class="header__branding" href="/">
          <img
            class="header__branding__logo"
            src="@/assets/img/logo_desktop.svg"
          >
          <div class="logo_square" />
        </a>

        <social-links />
      </div>
    </header>

    <main-menu />
  </div>
</template>

<script setup>
import SocialLinks from '@/components/SocialLinks.vue'
import MainMenu from '@/components/MainMenu.vue'
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  background: url(@/assets/img/header.jpg) 50% 0 repeat-x;
  @include media_600 {
    display: none;
  }
}

.container.container--nav_primary {
  overflow: visible;
}

.container.container--header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include media_1225 {
    box-sizing: border-box;
  }
}

.banner,
.container.container--header {
  height: 152px;
  @include media_800 {
    height: 120px;
  }
}

.header_hidden {
  transform: translateY(-100%);
  -webkit-transform: translateY(-100%);
}
</style>
