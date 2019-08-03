<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="temp.id"/> -->
    <LoginPage v-if="applyLoginPage" author ="Juraj Piovar"/>
    <QuoraPage v-if="applyQuoraPage"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import LoginPage from './components/pages/loginPage/LoginPage.vue';
import QuoraPage from './components/pages/quoraPage/QuoraPage.vue';
import { USER } from './stores/constants';
import { USER_STATUS_OUT, USER_STATUS_IN, USER_STATUS_INITIAL } from './stores/user/constants';
import HelloWorld from './components/HelloWorld.vue';

const UserStore = namespace(USER);

@Component({
  components: {
    // HelloWorld,
    LoginPage,
    QuoraPage,
  },
})
export default class App extends Vue {
  @UserStore.Getter userStatus: any;

  userStatusInitial = USER_STATUS_INITIAL;

  userStatusIn = USER_STATUS_IN;

  userStatusOut = USER_STATUS_OUT;

  // temp: Object = { id: "oooooo" };

  get applyLoginPage(): Boolean {
    return this.userStatus === this.userStatusInitial || this.userStatus === this.userStatusOut;
  }

  get applyQuoraPage(): Boolean {
    return this.userStatus === this.userStatusIn;
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
