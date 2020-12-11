<template>
  <div v-if="loading" class="loading-page">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  font-size: 3rem;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn ease 1.25s;
  -webkit-animation: fadeIn ease 1.25s;
  -moz-animation: fadeIn ease 1.25s;
  -o-animation: fadeIn ease 1.25s;
  -ms-animation: fadeIn ease 1.25s;
}

.loading {
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  border: 5px solid $red;
  border-radius: 50%;
  border-top-color: $brown;
  // opacity: 0.15;
  // opacity: 0.75;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
