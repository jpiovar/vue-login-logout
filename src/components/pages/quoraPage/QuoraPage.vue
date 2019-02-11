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
        <quora-cmp v-for="(item, index) in orderNewTop"
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
import { UserData } from '../../../stores/user/user.types';
import { QuoraItem } from '../../../stores/quora/quora.types';
import QuoraCmp from './components/QuoraCmp.vue';
import UserInfo from './components/UserInfo.vue';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);

@Component({
  components: {
    QuoraCmp,
    UserInfo,
  },
  props: {},
})
export default class QuoraPage extends Vue {
  newQuestionVal: string = '';

  @UserStore.Action logoutUser!: () => void;

  @UserStore.Getter userData!: UserData;

  @QuoraStore.Getter quoraItems!: QuoraItem[];

  @QuoraStore.Action addNewQuestionStore!: ({ item }: { item: QuoraItem }) => void;

  @QuoraStore.Action destroyQuoraData!: () => void;

  logout() {
    console.log('logout clicked');
    this.logoutUser();
    // this.destroyQuoraData();
  }

  addNewQuestion() {
    if (this.newQuestionVal.trim()) {
      const item = {
        id: `${Date.now()}`,
        text: this.newQuestionVal.trim(),
        author: this.userData,
        answers: [],
      };
      this.newQuestionVal = '';
      this.addNewQuestionStore({ item });
    }
  }

  // get ordered(): (items: QuoraItem[], way: string) => QuoraItem[] {
  //   // return (items: QuoraItem[], way: string) => items.sort((a, b) => a.id > b.id ? -1 : 1);
  //   return (items: QuoraItem[], way: string) => items;
  // }

  get orderNewTop(): QuoraItem[] {
    return this.quoraItems.sort((a, b) => (a.id < b.id ? 1 : -1));
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
