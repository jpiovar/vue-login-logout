<template>
<div class="container">
    <div class="row align-items-center justify-content-center">
        <div class="col-md-4">
          <LoginForm :loginRef="loginHandle"/>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import axios, { AxiosResponse } from 'axios';
import { USER } from '../../../stores/constants';
import LoginForm from './components/LoginForm.vue';
import { userProfiles } from '../../../assets/data';

const UserStore = namespace(USER);

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

  loginHandle(userAuth: {name: string, password: string}) {
    debugger;
    console.log('login clicked');
    const up = userProfiles.filter(item => item.name === userAuth.name && item.password === userAuth.password);
    if (up && up.length > 0) {
      this.loginUser(up[0]);
    }
    // axios
    //   .get('/src/assets/userData.json')
    //   .then(response => this.loginUser());
  }
}

</script>

<style lang="scss" scoped>
.row {
    height: 500px;
    .col-md-6 {
        height: 500px;
    }
}
</style>
