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
          <img class="about_illustration__img" src="@/assets/img/about.jpg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'

export default {
  data () {
    return {
      content: '',
      url: 'https://twitter.com'
    }
  },
  computed: {
    ...mapState({
      baseUrl: state => state.baseUrl
    })
  },
  created () {
    this.$axios
      .get(`https://www.fabricepallaud.com/wp/wp-content/themes/fabricepallaud/iframe-check.php?url=${this.url}`)
      .then(function(response) {
        // console.log(response.data)
      })
  },
  mounted () {
    this.$axios.$get('/wp/v2/pages/?slug=about')
      .then((response) => {
        this.content = response[0].content.rendered
      })
      .catch((error) => {
        this.$toast.error(error)
      })
      .finally(() => {
        this.$store.commit('SET_LOADING', false)
      })
  }
}
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

.about_skills strong {
  background: $yellow;
  padding: 0 5px;
  margin: 0 3px;
}

.about_skills li {
  margin-bottom: 1em;
}

.oatmeal {
  position: relative;
  top: 2px;
  display: none;
}
</style>
