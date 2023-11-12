import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mainStore',
  state: () => {
    return {
      showCookieNotice: false,
      showCaseStudies: false,
      mobileMenuOpen: false,
      loading: false
    }
  },
})
