<template>
  <div>
  <div class="home" style="width: 100%;">
    <div style="max-width: 1240px; margin: 200px auto;">
      <div class="hero">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          alt="hero"
        >

        <p class="description" style="color: #fff; font-size: 5rem; margin-bottom: 100px;">
          {{ data.tagline || $description }}
        </p>

        <p
          class="action"
          v-if="data.actionText && data.actionLink"
          style="margin-bottom: 100px;"
        >
          <NavLink
            class="action-button"
            :item="actionLink"
            style="background-color: #FFC15A; color: #95002f;"
          />
        </p>
      </div>

      <div class="vidyaWrapper">
        <video width="900" height="500"
          poster="https://www.rchain.coop/assets/homepage/rchain-vidthumb-editted.png" controls="" muted="">
          <source src="https://www.rchain.coop/assets/homepage/RChainHero_V5.mp4" type="video/mp4">
        </video>
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
          <h2 style="color: #333; font-size: 1.6rem;">{{ feature.title }}</h2>
          <p style="color: #333;">{{ feature.details }}</p>
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
  margin-bottom: 80px;
}

.description {
  color: #fff;
  font-size: 2.4rem;
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

.content.custom {
  max-width: 900px;
  margin: 0 auto; 
}

.navbar .site-name {
  display: none;
}

</style>
