<template>
  <transition name="portfolio">
    <div v-if="projects" class="portfolio">
      <router-link
        v-for="project in projects"
        :key="project.ID"
        :to="{ name: 'project', params: { id: project.post_name }}"
        class="portfolio_entry__wrapper"
      >
      <section class="portfolio_entry square_border">
        <div class="portfolio_entry__content">
          <div class="portfolio_entry__image_wrapper">
            <div class="portfolio_entry__image">
              <img :src="project.acf.thumbnail" />
            </div>

            <div class="portfolio_entry__skills">
              <div
                v-html="project.acf.skills"
                class="skills"
              />
            </div>
          </div>

          <div class="portfolio_entry__text">
            <header class="portfolio_entry__header">
              <h2
                v-html="project.acf.front_page_title"
                class="portfolio_entry_title"
              />
            </header>

            <div
              v-html="project.acf.summary"
              class="portfolio_entry__maincontent"
            />
          </div>
        </div>
      </section>
      </router-link>
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

.portfolio_entry__wrapper {
  display: block;
  margin-bottom: 95px;

  @include media_600 {
    margin-bottom: 90px;
  }

  &:last-child {
    margin-bottom: 40px;
  }

  .portfolio_entry {
    padding: 0 100px;
    position: relative;
    background-color: $gray0;

    @include media_1200 {
      padding: 20px;
      margin-bottom: 60px;
    }

    @include media_600 {
      padding: 0 0 40px;
      margin-bottom: 130px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    .portfolio_entry__content {
      display: flex;
      gap: 30px;

      @include media_768 {
        flex-direction: column;
        gap: 20px;
      }

      @include media_600 {
        flex-direction: column;
        gap: 25px;
      }

      .portfolio_entry__image_wrapper {
        @include media_768 {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @include media_600 {
          background-color: $gray97;
          padding-left: 20px;
          padding-right: 20px;
          align-items: flex-start;
        }

        .portfolio_entry__image {
          img {
            display: block;

            @include media_768 {
              width: 115px;
            }
          }
        }

        .portfolio_entry__skills {
          text-align: right;
          display: none;

          @include media_768 {
            max-width: 50%;
            @include media_768 {
              display: block;
            }
          }

          @include media_600 {
            max-width: 60%;
            margin-top: 12px;
          }

          ul {
            justify-content: flex-end;
            flex-direction: column;

            li {
              margin: 0;

              &::before {
                content: '';
              }
            }
          }
        }
      }

      .portfolio_entry__text {
        padding-top: 20px;

        @include media_1024 {
          padding-top: 0;
        }

        @include media_600 {
          padding: 0 20px;
        }

        .portfolio_entry__maincontent {
          margin: 0.75em 0;

          @include media_1024 {
            max-width: none;
          }

          p {
            margin-bottom: 0;

            @include media_768 {
              color: $black3;
            }
          }
        }
      }
    }
  }
}


.portfolio_entry__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.portfolio_entry_title {
  margin: 0;

  @include media_768 {
    font-family: $source_pro;
    font-weight: 900;
  }

  @include media_600 {
    font-family: $source_pro;
    font-weight: 900;
    font-size: 26px;
  }
}

.portfolio_entry_link {
  @include big_link;

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
