<template>
  <div class="header-container">
      <header class="the-header">
          <!-- 子コンポーネントから親に'sidenavToggle'イベントを渡す -->
          <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
          <div class="logo">
              <nuxt-link to="/">ブログ</nuxt-link>
          </div>
          <div class="spacer"></div>
          <div class="navigation-items">
              <ul class="nav-list">
                  <li class="nav-item"><nuxt-link to="/posts">ブログ</nuxt-link></li>
                  <li class="nav-item"><nuxt-link to="/about">概要</nuxt-link></li>
                  <li class="nav-item"><nuxt-link to="/admin">管理</nuxt-link></li>
                  <div class="isLogin_wrap">
                    <div v-if="!isLogin" @click="googleLogin">
                      <div>ログイン</div>
                    </div>
                    <div v-else @click="logOut">
                      <div>ログアウト</div>
                    </div>
                  </div>
              </ul>
          </div>
      </header>
  </div>
</template>

<script>
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle'
import firebase from "@/plugins/firebase";
import TheMainnav from '@/components/Navigation/TheMainnav'

export default {
  name: "TheHeader",
  
  components: {
    TheSideNavToggle,
    TheMainnav
  },

  data() {
    return {
      isLogin: false,
      user: []
    }
  },

  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true;
        this.user = user;
        console.log(user)
      } else {
        this.isLogin = false;
        this.user = [];
      }
    })
  },

  methods: {
    googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          window.alert(error);
        })
    },
    logOut() {
      firebase.auth().signOut();
    }
  }
}
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

.isLogin_wrap {
  color: white;
  /* border: 1px solid white; */
  padding: 3px;
  margin-left: 15px;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>