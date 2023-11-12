<template>
  <div class="wrap wrap--single">
    <div class="content container container--single">
      <header class="header_with_subtitle">
        <h1 v-html="title" />
      </header>

      <!-- <template v-if="getVideoUrl">
        <p>Let's start with a short clip showing the app in action:</p>

        <figure class="video-figure">
          <div class="video-wrap">
            <video controls autoplay muted loop>
              <source :src="getVideoUrl"></source>
            </video>
          </div>
        </figure>
      </template> -->

      <div v-html="content" />
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'
const toast = useToast()
import axios from 'axios'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()
const route = useRoute()

const title = ref('')
const content = ref('')
const videoFileName = ref('')
const getVideoUrl = computed(() => {
  return videoFileName ? require(`@/assets/vids/${videoFileName}`) : ''
})

// axios.get(`/wp/v2/project?slug=${route.params.slug}`)
axios.get(`/project/v1/post/${route.params.id}`)
  .then((response) => {
    title.value = response.data.title.rendered
    content.value = response.data.content.rendered
    videoFileName.value = response.data.meta.video
  })
  .catch((error) => {
    console.log('error', error)
    toast(error.response.data.message)
  })
  .finally(() => {
    store.loading = false
  })
</script>

<style lang="scss">
.wrap--single {
  .skills--single {
    @include small_text;
  }

  li {
    img {
      margin-bottom: 1em;
    }
  }

  p, div {
    a {
      color: $red;
      border-color: $red;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }
}

.wrap--single .container {
  max-width: $content_width_small;
  @include media_600 {
    max-width: none;
  }
}

.picture {
  display: flex;
  justify-content: center;
  background: $gray1;
  border: 1px solid $gray5;
  border-width: 1px 0 1px 0;
  padding: 40px 0 30px;
  margin: 2em 0 4em;

  @include media_1400 {
    padding-left: $content_margin_mobile;
    padding-right: $content_margin_mobile;
    flex-wrap: wrap;
  }

  @include media_600 {
    justify-content: space-between;
    margin-bottom: 2.5em;
    padding-bottom: 0;
  }
}

.container + .picture {
  margin-top: -0.25em;
}

.picture li {
  padding: 0 25px;

  @include legend;

  @include media_1300 {
    margin-bottom: 30px;
  }

  @include media_768 {
    max-width: 161px;
  }

  @include media_600 {
    padding: 0;
    width: 50%;
  }
}

.picture li:before {
  display: none;
}

.wrap--single img {
  display: block;
  height: auto;
  margin: 0 auto 3em;

  @include media_600 {
    margin-bottom: 1.5em;
  }
}

.enlighter-default.enlighter-v-standard {
  padding: 1em 0 1.25em;
  border-left: solid 8px $red;

  &.enlighter-t-godzilla {
    background: $gray1;
  }

  .enlighter {
    div {
      line-height: 1.1;
    }

    .enlighter-m0,
    .enlighter-m1,
    .enlighter-m2,
    .enlighter-m3 {
      color: $red;
    }

    span {
      font-size: 0.9rem;
      font-family: 'consolas', sans-serif;
    }
  }
}

.overflow {
  overflow: hidden;
  margin-top: 1.5em;
}

iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
}
</style>
