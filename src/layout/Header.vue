<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-white">
    <div class="container-lg">
      <!-- Brand -->
      <router-link class="navbar-brand d-lg-block px-lg-6" to="/">
      <!-- <a class="navbar-brand d-lg-block px-lg-6" href="./"> -->
        <img
          :src="'logo/corporate.png' | img"
          width="35"
          height="35"
          class="d-inline-block"
          alt=""
        />
        Butter CMS - Demo
      </router-link>
      <!-- Brand -->
      <!-- Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
// import { AuthService } from '../services/auth.service'
// import UiHeaderDropdownMenu from '@/components/UiHeaderDropdownMenu.vue'
// import UiToastList from '@/components/UiToastList'
import { CORPORATE_LOGIN_URL } from '../.env'

export default {
  name: 'Header',
  components: {
    // UiToastList,
    // UiHeaderDropdownMenu
  },
  data: () => {
    return {
      coporateURL: CORPORATE_LOGIN_URL
    }
  },
  methods: {
    // async logout () {
    //   await AuthService.makeLogout()
    // }
    scrollTo: function (event) {

    }
  },
  filters: {
    img: function (value) {
      return require('@/assets/img/' + value)
    }
  }
}
</script>

<style lang="scss" scoped>
.l-70 {
  left: - 170% !important;
}

.l-60 {
  left: - 130% !important;
}

.l-50 {
  left: - 90% !important;
}

@media only screen and (max-width: 600px) {
  .l-60 {
    left: 0% !important;
  }
  .l-50 {
    left: 0% !important;
  }

  .l-70 {
    left: 0% !important;
  }
}
</style>
