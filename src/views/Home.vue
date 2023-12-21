<template>
  <div class="wrap wrap--front">
    <div class="container container--home">
      <h1 class="home_intro__title">
        Hi I'm <span>Fabrice</span>, Front-end Developer.
      </h1>

      <p class="home_intro__summary">
        <span>
          Experienced in <strong>Vue.js</strong>
        </span>

        <span>
          <b>•</b> <strong>JavaScript</strong>
        </span>

        <span>
          <b>•</b> <strong>PHP</strong>
        </span>

        <span>
          <b>•</b> <strong>WordPress</strong>
        </span>
      </p>

      <div class="home_intro__cta">
        <a
          @click="handleClick"
          v-ripple
          class="button button--showPortfolio"
        >
          <pulse-loader v-if="!projectsLoaded" color="#ff4b68" size="10px"></pulse-loader>

          <template v-else>
            {{ ctaCaption }}
          </template>
        </a>
      </div>

      <transition name="slide">
        <portfolio
          v-show="isOpen"
          :projects="projects"
          class="home-portfolio"
        />
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()
import Cookies from 'js-cookie'
import Portfolio from '@/components/Portfolio.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import axios from 'axios'
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()
const projectsLoaded = ref(false)

setTimeout(() => { store.loading = false}, 200)

// load portfolio entries
const homePortfolioLoaded = ref(false)
const projects = ref([])
axios
  .get('/projects/v1/posts')
  .then(response => {
    projects.value = response.data
  })
  .catch(error => {
    console.log(error)
    toast(error.response.data.message)
  })
  .finally(() => {
    homePortfolioLoaded.value = true
    projectsLoaded.value = true
  })

const isOpen = ref(false)
const ctaCaption = ref('')
const ctaCaptionOptions = ref([
  'see projects',
  'hide projects'
])

// remember state of portfolio visibility
const cookieCaseStudiesVisible = Cookies.get('cookie_case_studies_visible')
const showCaseStudies = computed(() => useMainStore.showCaseStudies)
if (showCaseStudies.value || cookieCaseStudiesVisible === 'true') {
  isOpen.value = true
  ctaCaption.value = ctaCaptionOptions.value[1]
} else {
  ctaCaption.value = ctaCaptionOptions.value[0]
}

// handle click of 'see projects' button 
const handleClick = () => {
  const expiresIn = 1/8
  const portfolioElement = document.querySelector('.portfolio')
  if (!isOpen.value) {
    Cookies.set('cookie_case_studies_visible', true, { expires: expiresIn })
    store.showCaseStudies = false
    isOpen.value = true
    ctaCaption.value = ctaCaptionOptions.value[1]
  } else {
    Cookies.set('cookie_case_studies_visible', false, { expires: expiresIn })
    store.showCaseStudies = false
    isOpen.value = false
    ctaCaption.value = ctaCaptionOptions.value[0]
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss" scoped>
.wrap.wrap--front {
  @include media_600_up {
    padding: 120px 0;
  }
}

.container.container--home {
  margin-top: 0;
  margin-bottom: 0;
  overflow: visible;
  padding-top: 5px;
  padding-bottom: 5px;
}

.home_intro__title {
  margin: 0;
  text-align: center;
  margin-bottom: 30px;
  @include media_600 {
    margin-bottom: 50px;
  }
}

.home_intro__title,
.home_intro__title span {
  @include home_heading;
}

.home_intro__summary {
  margin-bottom: 40px;
  text-align: center;
  @include media_600 {
    margin-bottom: 60px;
  }
}

.home_intro__summary,
.home_intro__summary b {
  font-weight: normal;
}

.home_intro__summary b {
  margin: 0 0.15em 0 0.15em;
  color: $gray2;
  @include media_600 {
    display: none;
  }
}

.home_intro__summary strong {
  color: $gray2;
  @include media_600 {
    color: $black4;
  }
}

.home_intro__summary span {
  @include home_summary;
  color: $gray4;
  @include media_600 {
    display: block;
  }
}

.home_intro__title span {
  color: $red;
}

.home_intro__cta {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 75px;

  @include media_600 {
    display: none;
  }

  .button {
    width: 210px;
  }
}

.home-portfolio {
  @include media_600 {
    display: block !important;
  }
}

.v-spinner {
  line-height: 53px;

  &:deep(.v-pulse) { 
    margin-left: 6px !important;
    margin-right: 6px !important;
  }
}

.slide-enter-active {
  transition-duration: 0.3s;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-leave-from,
.slide-enter-to {
  max-height: 800px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
}
</style>
