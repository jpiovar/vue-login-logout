<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-9">
        <h2>Simple Quora</h2>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">New question</span>
          </div>
          <textarea v-model="newQuestionVal" @keydown.enter.prevent="addNewQuestion"
            class="form-control"
            aria-label="textarea" rows="1">
          </textarea>
          <div class="input-group-append">
            <button type="button" class="btn btn-primary btn-item" @click="addNewQuestion">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9">
        <quora-item v-for="(item, index) in quoraItems"
          :key="item.id"
          :index="index"
          :itemData="item"
        />
      </div>
      <div class="col-md-3">
        <user-info
          :logoutHandler="logout"
          :userName="userProfile.name"
          :userEmail="userProfile.email"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { USER, QUORA } from '../../../stores/constants';
import QuoraItem from './components/QuoraItem.vue';
import UserInfo from './components/UserInfo.vue';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);

@Component({
  components: {
    QuoraItem,
    UserInfo,
  },
  props: {
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class QuoraPage extends Vue {
  msg!: string;

  newQuestionVal: string = '';

  @UserStore.Action logoutUser: any;

  @UserStore.Getter userData: any;

  @QuoraStore.Getter quoraItems: any;

  @QuoraStore.Action storeQuoraData: any;

  logout() {
    console.log('logout clicked');
    this.logoutUser();
  }

  addNewQuestion() {
    const items = this.quoraItems;
    const item = {
      id: Date.now(),
      text: this.newQuestionVal,
      author: this.userData,
      answers: [],
    };
    items.push(item);
    this.newQuestionVal = '';
    this.storeQuoraData(items);
  }

  get userProfile() {
    const { name, email } = this.userData;
    return { name, email };
  }
}
</script>

<style lang="scss" scoped>
.btn-item {
    float: right;
    i {
        font-size: 18px;
    }
}
</style>
