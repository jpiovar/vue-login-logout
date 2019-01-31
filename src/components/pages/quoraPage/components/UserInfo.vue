<template>
  <div class="card shadow p-3 mb-5 bg-white rounded">
    <div class="card-body">
      <h5 class="card-title">User Info</h5>
      <p class="card-text text-left">
        Name: {{ userName }}
        <br/>Email: {{ userEmail }}
      </p>
      <a href="#" class="btn btn-primary" @click="userLogout">Logout</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

@Component({
  components: {},
  props: {
    logoutHandler: {
      type: Function,
      required: true,
    },
    userName: {
      required: true,
      type: String,
    },
    userEmail: {
      required: true,
      type: String,
    },
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class UserInfo extends Vue {
  logoutHandler!: any;

  msg!: string;

  userName!: string;

  userEmail!: string;

  userLogout() {
    this.logoutHandler();
  }
}
</script>

<style lang="scss" scoped>
</style>
