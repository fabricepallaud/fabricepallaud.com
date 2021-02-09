<template>
  <div class="app">
    <div class="app-inner">
      <app-header />
      <div class="app-inner">
        <nuxt />
      </div>
      <app-footer />
      <cookie-notice />
    </div>

    <loading-overlay v-if="loading" />
  </div>
</template>

<script>
/* eslint-disable */
import Cookies from 'js-cookie'
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import CookieNotice from '@/components/CookieNotice'
import LoadingOverlay from '@/components/LoadingOverlay'
import { mapState } from "vuex";

export default {
  components: {
    AppHeader,
    AppFooter,
    CookieNotice,
    LoadingOverlay
  },
  computed: {
    ...mapState({
      loading: state => state.loading
    })
  },
  mounted () {
    const cookies = Cookies.get('cookie_notice_dismiss')
    this.$store.commit('SET_COOKIE_NOTICE_STATUS', !cookies)
  },
  watch:{
    '$route' (to, from){
      this.$nextTick(() => {
        this.$store.commit('SET_LOADING', true)
      })
    },
    loading () {
      this.$nextTick(() => {
        if (this.loading) {
          document.querySelector('.app-inner').classList.add('loading')
        } else {
          document.querySelector('.app-inner').classList.remove('loading')
        }
      })
    }
  }
}
</script>
