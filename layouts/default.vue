<template>
  <div class="app">
    <app-header />
    <nuxt />
    <app-footer />
    <cookie-notice />
  </div>
</template>

<script>
/* eslint-disable */
import Cookies from 'js-cookie'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import CookieNotice from '@/components/CookieNotice'

export default {
  components: {
    AppHeader,
    AppFooter,
    CookieNotice
  },
  mounted () {
    const cookies = Cookies.get('cookie_notice_dismiss')
    this.$store.commit('SET_COOKIE_NOTICE_STATUS', !cookies)
  },
  watch:{
    '$route' (to, from){
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 300)
      })
    }
  }
}
</script>
