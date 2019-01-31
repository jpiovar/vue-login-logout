<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <LoginPage v-if='userStatus == userStatusOut'/>
    <QuoraPage v-if='userStatus == userStatusIn'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import LoginPage from './components/pages/loginPage/LoginPage.vue';
import QuoraPage from './components/pages/quoraPage/QuoraPage.vue';
import { USER } from './stores/constants';
import { USER_STATUS_OUT, USER_STATUS_IN } from './stores/user/constants';
import HelloWorld from './components/HelloWorld.vue';

const UserStore = namespace(USER);

@Component({
  components: {
    HelloWorld,
    LoginPage,
    QuoraPage,
  },
})
export default class App extends Vue {
  @UserStore.Getter userStatus: any;

  userStatusIn = USER_STATUS_IN;

  userStatusOut = USER_STATUS_OUT;
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
