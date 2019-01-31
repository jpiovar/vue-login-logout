<template>
<div class="container">
  <div class="row align-items-center justify-content-center">
    <div class="col-md-5">
      <LoginForm :loginRef="loginHandle" ref="loginForm"/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import axios, { AxiosResponse } from 'axios';
import { USER, QUORA } from '../../../stores/constants';
import LoginForm from './components/LoginForm.vue';
import { userProfiles, quoraContent } from '../../../assets/data';
import store from '@/store';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);

@Component({
  components: {
    LoginForm,
  },
  props: {
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class LoginPage extends Vue {
  msg!: string;

  @UserStore.Action loginUser: any;

  @QuoraStore.Action storeQuoraData: any;

  loginHandle(userAuth: {name: string, password: string}) {
    console.log('login clicked');
    const up = userProfiles.filter(item => item.name === userAuth.name
      && item.password === userAuth.password);
    if (up && up.length > 0) {
      this.loginUser({ id: up[0].id, name: up[0].name, email: up[0].email });
      this.storeQuoraData(quoraContent);
    } else {
      (this.$refs.loginForm as HTMLFormElement).showAlertBannerAndReset();
    }
    // axios
    //   .get('/src/assets/userData.json')
    //   .then(response => this.loginUser());
  }
}

</script>

<style lang="scss" scoped>
</style>
