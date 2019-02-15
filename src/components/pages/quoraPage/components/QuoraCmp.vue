<template>
  <div class="card text-white bg-primary p-1 mb-4" :id="itemData.id" :ref="itemData.id">
    <div class="card-header">
      <card-header
        :index="index"
        :itemData="itemData"
        :editedItem="editedItem" :editedItemRef="editedItemHandle"
        ref="cardHeader"
      />
    </div>
    <div class="card-body bg-light text-dark">
      <p class="card-text text-left">
        <card-body-text
          :itemData="itemData"
          :editedItem="editedItem"
          :saveItemRef="saveItemHandle"
        />
        <answer-cmp v-for="(item, index) in itemData.answers"
          :key="item.id"
          :index="index"
          :itemData="item"
          :qId="itemData.id"
        />
      </p>
    </div>
    <div class="card-footer bg-light text-dark">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">New answer</span>
        </div>
        <textarea
          v-model="newAnswerVal"
          @keydown.enter.prevent="()=>addNewAnswer(itemData.id)"
          class="form-control"
          aria-label="textarea" rows="1">
        </textarea>
        <div class="input-group-append">
          <button type="button" class="btn btn-success btn-item round"
            @click="()=>addNewAnswer(itemData.id)">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { QUORA, USER } from '../../../../stores/constants';
import { UserData } from '../../../../stores/user/user.types';
import AnswerCmp from './components/AnswerCmp.vue';
import { QuoraItem, AnswerItem } from '../../../../stores/quora/quora.types';
import CardHeader from '../../../common/cardHeader/CardHeader.vue';
import CardBodyText from '../../../common/cardBodyText/CardBodyText.vue';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);

@Component({
  components: {
    AnswerCmp,
    CardHeader,
    CardBodyText,
  },
  props: {
    index: {
      required: true,
      type: Number,
    },
    itemData: {
      required: true,
      type: Object,
    },
  },
})
export default class QuoraCmp extends Vue {
  itemData!: QuoraItem;

  newAnswerVal: string = '';

  editedItem = { id: '', text: '' };

  @UserStore.Getter userData!: UserData;

  @QuoraStore.Action addNewAnswerStore!:
    ({ qId, item }: { qId: string, item: AnswerItem }) => void;

  editedItemHandle({ id, text }: { id: string, text: string }) {
    debugger;
    this.editedItem = { id, text };
  }

  addNewAnswer(qId: string) {
    debugger;
    if (this.newAnswerVal.trim()) {
      const item = {
        id: `${Date.now()}`,
        text: this.newAnswerVal.trim(),
        author: this.userData,
      };
      this.newAnswerVal = '';
      this.addNewAnswerStore({ qId, item });
    }
  }

  saveItemHandle() {
    (this.$refs.cardHeader as any).saveItem();
  }
}
</script>

<style lang="scss" scoped>
</style>
