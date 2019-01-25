<template>
<div class="container">
    <div class="row align-items-center justify-content-center">
        <div class="col-md-6">
        </div>
        <a href='#' @click="logout">logout</a>
        <p>{{ userProfile.name }}</p>
        <p>{{ userProfile.email }}</p>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { USER } from '../../../stores/constants';

const UserStore = namespace(USER);

@Component({
  components: {},
  props: {
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class QuoraPage extends Vue {
  msg!: string;

  userEmail: string = '';

  @UserStore.Action logoutUser: any;

  @UserStore.Getter userNameEmail: any;

  created() {
    const { name, email } = this.userNameEmail;
  }

  logout() {
    console.log('logout clicked');
    this.logoutUser();
  }

  get userProfile() {
    const { name, email } = this.userNameEmail;
    return { name, email };
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
