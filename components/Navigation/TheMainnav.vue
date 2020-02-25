<template>
  <div class="main-nav-container">
    <nav class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts">ブログ</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/posts">概要</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/posts">管理</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheMainnav",

  components: {

  },
}
</script>

<style scoped>
.main-nav-container {
  width: 100%;
  background: #fff;
}

/* .main-nav-container ::selection {
  background: cyan;
} */

.navigation-items {
  display: flex;
  text-align: center;
  width: 500px;
  margin: 0;
  padding: 0;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  /* display: list-item; */
}

.nav-item {
  border: 1px solid gray;
  padding: 30px;
}

.nav-item a {
  text-decoration: none;
  color: black;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}

.nav-list ::selection {
  background: red;
}
</style>