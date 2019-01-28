<template>
<div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="card shadow p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <p class="card-text text-left">
              Bla bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
               aaaaaaaaaaaaaaaaaaaaa a bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbbbbbbb nnnnnnnnnnnnnn
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card shadow p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title">User Info</h5>
            <p class="card-text text-left">
              Name: {{ userProfile.name }}
              <br/>Email: {{ userProfile.email }}
            </p>
            <a href="#" class="btn btn-primary" @click="logout">Logout</a>
          </div>
        </div>
      </div>
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
