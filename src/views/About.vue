<template>
  <div class="wrap">
    <div class="container content">
      <div class="page_header page_header--about">
        <h1 class="page_title">
          Who's this?
        </h1>

        <p class="page_summary page_summary--about">
          Some general stuff about myself, my background and what I can do for you
        </p>
      </div>

      <div class="content content--about">
        <div
          v-html="content"
          class="about_info"
        />

        <div class="about_illustration">
          <Transition name="fade">
            <img v-show="featuredImage" class="about_illustration__img" :src="featuredImage">
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast()
import axios from 'axios'
import { useMainStore } from '@/stores/mainstore'
const store = useMainStore()
import { ref } from 'vue'
const content = ref('')
const featuredImage = ref('')

axios
  .get('/wp/v2/pages/?slug=about')
  .then(response => {
    content.value = response.data[0].content.rendered
    featuredImage.value = response.data[0].featured_image_url
  })
  .catch(error => {
    console.log(error)
    toast(error.response.data.message)
  })
  .finally(() => {
    store.loading = false
  })
</script>

<style lang="scss">
.content.content--about {
  overflow: visible;
}

.page_header--about {
  @include media_600 {
    margin-bottom: 40px;
  }
}

.content--about {
  display: flex;
  justify-content: space-between;
  @include media_768 {
    flex-direction: column-reverse;
  }
}

.page_summary--about {
  width: 50%;
}

.about_info {
  width: 55%;
  @include media_768 {
    width: auto;
  }
}

.about_illustration {
  text-align: right;
  width: 40%;
  @include media_768 {
    width: auto;
  }
}

.about_illustration__img {
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-top: -185px;
  @include media_768 {
    margin: 0 0 30px;
  }
}

.about_skills {
  margin-top: 1em;
  margin-top: 0;
}

.about_skills li {
  margin-bottom: 1em;
}

.oatmeal {
  position: relative;
  top: 2px;
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.75s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
