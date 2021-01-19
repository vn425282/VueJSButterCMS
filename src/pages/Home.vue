<template>
  <div>
    <!-- <AppHeader />
    <Announcements /> -->
    <Welcome />
    <!-- <Features />
    <Testimonials />
    <Pricing />
    <ContactForDemo /> -->
  </div>
</template>

<script>
// import AppHeader from './../layout/Header.vue'
// import Announcements from './../layout/common/Announcements'
import Welcome from './../components/home/Welcome.vue'
// import Features from './../components/home/Features.vue'
// import ContactForDemo from './../components/home/ContactForDemo.vue'
// import Testimonials from './../components/home/Testimonials.vue'
// import Pricing from './../components/home/Pricing.vue'
// import Solution from './../components/home/Solution.vue'
// import SuccessStories from './../components/home/SuccessStories.vue'

export default {
  name: 'IndexPage',

  components: {
    Welcome
    // Features,
    // ContactForDemo,
    // Testimonials,
    // Pricing
    // Solution,
    // SuccessStories
  },

  data () {
    return {
      post: {}
    }
  },

  methods: {
    showToast () {
      this.$store.commit('toast/NEW', { type: 'success', message: 'hello' })
    },
    submitModalHandler () {
      // some logic
      this.isShownModal = false
    },
    onBlur () {
      console.log('onBlur!!!')
    },
    onEnter () {
      console.log('onEnter!!!')
    },
    onEsc () {
      console.log('onEsc!!!')
    },
    onClickIcon () {
      console.log('onClickIcon!!!!')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
