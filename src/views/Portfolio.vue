<template>
  <div class="wrap wrap--portfolio">
    <div class="container">
      <h1 class="page_title">
        Projects
      </h1>

      <p class="page_summary page_summary--about">
        All portfolio entries are listed here
      </p>

      <portfolio
        :projects="projects"
        class="open"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()
import Portfolio from '@/components/Portfolio.vue'
import axios from 'axios'

const projects = ref([])
axios
  .get('/projects/v1/posts')
  .then(response => {
    projects.value = response.data
  })
  .catch(error => console.log(error))
  .finally(() => {
    store.loading = false
  })

/*
export default {
  components: {
    Portfolio
  },
  data () {
    return {
      projects: []
    }
  },
  computed: {
    ...mapState({
      baseUrl: state => state.baseUrl
    })
  },
  mounted () {
    this.$axios.$get('/projects/v1/posts')
      .then((res) => {
        this.projects = res
      })
      .catch((err) => {
        this.$toast.error(err.response)
      })
      .finally(() => {
        this.$store.commit('SET_LOADING', false)
      })
  }
}
*/
</script>

<style lang="scss">
.wrap--portfolio {
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
}
</style>
