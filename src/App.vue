<template>
  <div class="app">
    <div class="app-inner" :class="{ loading: store.loading }">
      <AppHeader />
      <div class="app-inner">
        <router-view />
      </div>
      <AppFooter />

      <CookieNotice v-if="showCookieNotice" />
    </div>

    <LoadingOverlay v-if="loading" />
  </div>
</template>

<script setup>
import LoadingOverlay from '@/components/LoadingOverlay.vue'
import CookieNotice from '@/components/CookieNotice.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import Cookies from 'js-cookie'
import { useRoute } from 'vue-router'
import { nextTick, computed, watch, ref } from 'vue'
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()

const loading = computed(() => {
  return store.loading
})

store.loading = true

const showCookieNotice = computed(() => {
  return store.showCookieNotice
})

const cookieWasDismissed = Cookies.get('cookie_notice_dismissed')
store.showCookieNotice = !cookieWasDismissed

const route = useRoute();
const path = computed(() => route.path)
watch(path, () => {
  store.loading = true
  store.mobileMenuOpen = false
})
</script>
