<template>
  <div class="card shadow p-3 mb-5 bg-white rounded">
    <div class="card-body">
      <h5 class="card-title">User Info</h5>
      <p class="card-text text-left">
        Name: {{ userName }}
        <br/>Email: {{ userEmail }}
      </p>
      <a href="#" class="btn btn-primary" @click="userLogout">Logout</a>
      <hr class="mt-5 mb-3">
      <p class="mt-5 mb-0 text-center">
        <sup>*</sup>You are allowed to<br/>
        <button type="button" class="btn btn-light btn-sm border-dark btn-item">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button> edit or
        <button type="button" class="btn btn-danger btn-sm border-dark btn-item">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button> remove only your Quora items.
      </p>
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
