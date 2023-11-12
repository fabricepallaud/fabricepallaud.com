<template>
  <transition name="portfolio">
    <div v-if="projects" class="portfolio">
      <section
        v-for="project in projects"
        :key="project.ID"
        class="portfolio_entry square_border"
      >
        <header class="portfolio_entry__header">
          <router-link :to="{ name: 'project', params: { id: project.ID }}">
            <h2
              v-html="project.acf.front_page_title"
              class="portfolio_entry_title"
            />
          </router-link>

          <router-link :to="{ name: 'project', params: { id: project.ID }}" class="portfolio_entry_link">
            see
          </router-link>
        </header>

        <router-link :to="{ name: 'project', params: { id: project.ID }}">
          <p
            v-html="project.acf.summary"
            class="portfolio_entry__maincontent"
          />
        </router-link>

        <router-link :to="{ name: 'project', params: { id: project.ID }}">
          <footer class="portfolio_entry__footer">
            <div
              v-html="project.acf.skills"
              class="skills"
            />

            <div
              v-if="project.acf.reading_time"
              v-html="project.acf.reading_time"
              class="time_to_read"
            />
          </footer>
        </router-link>
      </section>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
.button--showPortfolio {
  max-width: none;
  padding-left: 25px;
  padding-right: 25px;
}

.portfolio_entry {
  border: 1px solid $gray6;
  padding: 25px;
  position: relative;
  margin-bottom: 80px;
  background-color: $gray7;

  @include media_600 {
    padding: 12px;
    margin-bottom: 60px;
  }
}

.portfolio_entry:last-child {
  margin-bottom: 0;
}

.portfolio_entry__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.portfolio_entry__maincontent {
  margin: 1em 0 1.5em;
  max-width: calc(100% - 100px);

  @include media_600 {
    max-width: none;
  }
}

.portfolio_entry__footer {
  display: flex;
  justify-content: space-between;

  @include media_768 {
    display: block;
  }
}

.portfolio_entry_title {
  margin: 0;

  @include media_768 {
    color: $red;
  }
}

.portfolio_entry_link {
  @include big_link;

  @include media_768 {
    display: none;
  }
}

.skills {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      position: relative;
      font-size: 0.85em;
      color: $red;

      & + li {
        margin-left: 1em;
        padding-left: 1.25em;

        &::before {
          content: '•';
          opacity: 0.35;
          font-size: 1.35em;
          position: absolute;
          left: 0;
          top: -4px;
        }

        @include media_600 {
          margin: 0;
          padding: 0;

          &::before {
            display: none;
          }
        }
      }

      &:not(:last-child) {
        @include media_600 {
          margin: 0 0.75em 0 0;
          padding: 0;

          &::before {
            display: block;
            color: $red;
            content: ',';
            font-size: 1rem;
            opacity: 1;
            position: absolute;
            top: -1px;
            left: auto;
            right: -0.35em;
          }
        }
      }
    }
  }
}

.time_to_read {
  font-weight: bold;

  @include media_768 {
    display: none;
  }
}

.portfolio-enter-active,
.portfolio-leave-active {
   transition: all 200ms ease-in 0s
}

.portfolio-enter-to,
.portfolio-leave {
   max-height: 1500px;
}

.portfolio-enter,
.portfolio-leave-to {
   max-height: 0;
}
</style>
