import Vue from 'vue'

import AppLayout from './layout/index.vue'
import router from './router'
import store from './store'

import './mixins'
import './plugins'
import './thirdParty'

import './scss/style.scss'
// import './assets/css/theme.min.css'
import './assets/css/feather.css'

// import 'jquery'
import $ from 'jquery'
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

new Vue({
  name: 'Root',
  router,
  store,
  methods: {
    dropDownMenu () {
      $(document).ready(function () {
        if (screen.width > 991) {
          const $dropdown = $('.dropdown')
          const $dropdownToggle = $('.dropdown-toggle')
          const $dropdownMenu = $('.dropdown-menu')
          const showClass = 'show'
          $dropdown.hover(
            function () {
              const $this = $(this)
              $this.addClass(showClass)
              $this.find($dropdownToggle).attr('aria-expanded', 'true')
              $this.find($dropdownMenu).addClass(showClass)
            },
            function () {
              const $this = $(this)
              $this.removeClass(showClass)
              $this.find($dropdownToggle).attr('aria-expanded', 'false')
              $this.find($dropdownMenu).removeClass(showClass)
            }
          )
        }
      })
    }
  },
  mounted () {
    this.dropDownMenu()
  },
  watch: {
    $route () {
      this.dropDownMenu()
    }
  },

  beforeDestroy () {
    window.removeEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
  },
  render: h => h(AppLayout)
}).$mount('#app')
