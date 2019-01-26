<template>
<div class="login-form">
  <form>
    <div class="form-group">
      <label for="userName">User name</label>
      <input type="text" v-model="userNameVal" @keydown.enter="loginForm" ref="userName" class="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Enter user name">
      <!-- <small id="userNameHelp" class="form-text text-muted">Please use valid user name.</small> -->
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" v-model="passwordVal" @keydown.enter="loginForm" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="loginForm" @keydown.tab.prevent="setFocus">Login</button>
  </form>
  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if='showAlert'>
    Please use valid credentials.
    <button type="button" class="close" ref="alertBtn" aria-label="Close" @click.prevent="hideAlertBanner" @keydown.tab.prevent="setFocusInput">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    loginRef: {
      required: true,
      type: Function
    }
  }
})
export default class LoginForm extends Vue {
  loginRef!: any;
  userNameVal: string = '';
  passwordVal: string = '';
  showAlert: boolean = false;

  loginForm() {
    this.loginRef({'name': this.userNameVal, 'password': this.passwordVal});
  }

  showAlertBannerAndReset() {
    this.showAlert = true;
    this.userNameVal = '';
    this.passwordVal = '';
  }
  hideAlertBanner() {
    this.showAlert = false;
    (this.$refs.userName as HTMLFormElement).focus();
  }
  setFocus() {
    if(!this.showAlert) {
      (this.$refs.userName as HTMLFormElement).focus();
    }
    (this.$refs.alertBtn as HTMLFormElement).focus();
  }
  setFocusInput() {
    (this.$refs.userName as HTMLFormElement).focus();
  }
}
</script>

<style lang="scss" scoped>
.login-form {
    height: 400px;
    text-align: left;
    form {
      margin: 20px 0;
    }
}
</style>
