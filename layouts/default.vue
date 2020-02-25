<template>
  <div>
    <!-- 'sidenavToggle'イベントを受け取り'displaySidenav'メソッドを呼び出す -->
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <!-- <TheMainnav /> -->
    <!-- 'close'イベントを受け取り'displaySidenav'メソッドを呼び出す -->
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheMainnav from '@/components/Navigation/TheMainnav'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheMainnav,
  },
  data() {
    return {
      displaySidenav: false
    }
  },
}
</script>

<style>
html {
  font-family: 'Noto Serif JP', serif;
}

body {
  margin: 0;
}
</style>
