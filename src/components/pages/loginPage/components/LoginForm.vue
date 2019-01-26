<template>
<div class="login-form">
  <form>
    <div class="form-group">
      <label for="userName">User name</label>
      <input type="text" v-model="userNameVal" class="form-control" id="userName" aria-describedby="userNameHelp" placeholder="Enter user name">
      <!-- <small id="userNameHelp" class="form-text text-muted">Please use valid user name.</small> -->
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" v-model="passwordVal" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="loginForm">Login</button>
  </form>
  <div class="alert alert-warning alert-dismissible fade show" role="alert" v-if='showAlert'>
    Please use valid credentials.
    <button type="button" class="close" aria-label="Close" @click="hideAlertBanner">
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
