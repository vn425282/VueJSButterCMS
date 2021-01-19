<template>
  <div id="app">
    <AppHeader />
    <Announcements />
    <transition name="slither">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './Header.vue'
import AppFooter from './Footer.vue'
import Announcements from './../layout/common/Announcements'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
    Announcements
  }
}
</script>

<style>
.slither-enter-active, .slither-leave-active {
  transition: transform 1s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}

.drain-enter-active, .drain-leave-active {
  transition: transform 1s;
}

.drain-enter, .drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to, .drain-leave {
  transform: translateY(0);
}
</style>
