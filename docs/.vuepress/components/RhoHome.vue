<template>
  <div>
  <div class="home" style="width: 100%;">
    <div style="max-width: 1240px; margin: auto;">
      <div class="hero">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          alt="hero"
        >

        <p class="description">
          {{ data.tagline || $description }}
        </p>

        <p
          class="action"
          v-if="data.actionText && data.actionLink"
        >
          <NavLink
            class="action-button"
            :item="actionLink"
          />
        </p>
      </div>

      <div
        class="features"
        v-if="data.features && data.features.length"
      >
        <div
          class="feature"
          v-for="(feature, index) in data.features"
          :key="index"
        >
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>

      <Content class="custom"/>

      <div
        class="footer"
        v-if="data.footer"
      >
        {{ data.footer }}
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.action-button
  display inline-block
  font-size 1.2rem
  color #fff
  background-color $accentColor
  padding 0.8rem 1.6rem
  border-radius 4px
  transition background-color .1s ease
  box-sizing border-box
</style>

<style>
.vidyaWrapper {
  text-align: center;
}

.description {
  color: #fff;
  font-size: 2.4rem;
}

.hero p {
  color: #fff;
}

@media (max-width: 1200px) {
    .vidyaWrapper video {
        height: 100%;
        width: 100%;
    }
}

.home {
  max-width: inherit;
  width: 95%;
  background: url(/hero-background.jpg);
  background-repeat: no-repeat;
  background-size: contain;
}



.navbar .site-name {
  display: none;
}

</style>
