export const state = () => ({
  baseUrl: 'https://fabricepallaud.com/wp',
  showCookieNotice: false,
  showCaseStudies: false,
  mobileMenuOpen: false,
  loading: false
})

export const mutations = {
  SET_COOKIE_NOTICE_STATUS (state, value) {
    state.showCookieNotice = value
  },
  SET_CASE_STUDIES_STATUS (state, value) {
    state.showCaseStudies = value
  },
  SET_MOBILE_MENU (state, data) {
    state.mobileMenuOpen = data
  },
  SET_LOADING (state, data) {
    state.loading = data
  }
}
