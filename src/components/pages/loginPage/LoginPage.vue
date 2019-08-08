<template>
<div class="container" :id="idComponent">
  <div class="row align-items-center justify-content-center">
    <div class="col-md-5">
      <LoginForm :loginRef="loginHandle" ref="loginForm"/>
      <button type="button" class="btn btn-primary"
        @click="callNode">Call node
      </button>
      <span id="footer">{{author}} @ {{year}}</span>
      <button id="ok" @click="okcall">ok</button>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
// import axios, { AxiosResponse } from 'axios';
import { HttpService } from '../../../services/http.service';
import { USER, QUORA } from '../../../stores/constants';
import LoginForm from './components/loginForm/LoginForm.vue';
import { userProfiles, quoraContent } from '../../../assets/data';
import { UserData } from '@/stores/user/user.types';
import { QuoraItem } from '@/stores/quora/quora.types';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);

const httpService = new HttpService();

@Component({
  components: {
    LoginForm,
  },
  props: {
    msg: {
      required: false,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
  },
})
export default class LoginPage extends Vue {
  idComponent: string = 'loginPage';

  msg!: string;

  ok: string = '';

  year: string = '2019';

  @UserStore.Action loginUser!: ({ name, password }: { name: string, password: string }) => Promise<boolean>;

  @QuoraStore.Action storeQuoraData!: () => void;

  okcall() {
    console.log('ok');
    this.ok = 'ok';
  }

  loginHandle(userAuth: {name: string, password: string}) {
    console.log('login clicked');
    this.loginUser({ name: userAuth.name, password: userAuth.password })
      .then((response) => {
        if (response) {
          this.storeQuoraData();
        } else {
          (this.$refs.loginForm as HTMLFormElement).showAlertBannerAndReset();
        }
      }).catch((error) => {
        console.log('loginHandle error ', error);
      });
  }

  callNode() {
    /* eslint-disable */
    debugger;
    // const protocol = 'http';
    // const hostname = 'localhost';
    // const port = '3030';
    const endpoint = 'orders';
    httpService.get('orders', {}).then(response => {
      console.log('error ', response);
    }, error => {
      console.log('error ', error);
    });
    // const formedURL = `${protocol}://${hostname}:${port}/${endpoint}`;
    // Vue.axios.get(formedURL).then(response => {
    //   console.log('response', response);
    // }, error => {
    //   console.log('error ', error);
    // });
    // this.axios({
    //     url: formedURL,
    //     headers: {}
    // }).then(response => {
    //     console.log('response', response);
    // }, error => {
    //     console.log('error ', error);
    // });
  }
}

</script>

<style lang="scss" scoped>
</style>
