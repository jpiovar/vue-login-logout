<template>
  <div class="card text-white bg-primary p-1 mb-4" :id="itemData.id" :ref="itemData.id">
    <div class="card-header">
      <card-header :index="index" :itemData="itemData" :editedItem="editedItem" :editedItemRef="editedItemHandle"/>
    </div>
    <div class="card-body bg-light text-dark">
      <p class="card-text text-left">
        <span v-if="!isEditIncomplete" class="qa-text mb-3">
          {{itemData.text}}
        </span>
        <span v-if="isEditIncomplete" class="qa-text mb-3">
          <textarea
            v-model="editedItem.text"
            @keydown.enter.prevent="()=>saveItem()"
            class="form-control"
            aria-label="textarea" rows="1">
          </textarea>
        </span>
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
import { QUORA, USER, MODE } from '../../../../stores/constants';
import { UserData } from '../../../../stores/user/user.types';
import AnswerCmp from './components/AnswerCmp.vue';
import { QuoraItem, AnswerItem } from '../../../../stores/quora/quora.types';
import { AppMode, Reference } from '@/stores/mode/mode.types';
import {
  MODE_EDIT, MODE_INITIAL, MODE_READ, MODE_INCOMPLETE,
} from '../../../../stores/mode/constants';
import CardHeader from '../../../common/cardHeader/CardHeader.vue';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);
const ModeStore = namespace(MODE);

@Component({
  components: {
    AnswerCmp,
    CardHeader,
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

  @QuoraStore.Action removeQuestionStore!:
    ({ itemId }: { itemId: string }) => void;

  @QuoraStore.Action addNewAnswerStore!:
    ({ qId, item }: { qId: string, item: AnswerItem }) => void;

  @QuoraStore.Action updateQuestionStore!: ({ qId, text }: { qId: string, text: string }) => void;

  @ModeStore.Action setMode!:
    ({ reference, status }: { reference: Reference, status: AppMode }) => void;

  @ModeStore.Getter modeStatus!: AppMode;

  @ModeStore.Getter modeReference!: Reference;

  editedItemHandle({ id, text }: { id: string, text: string }) {
    debugger;
    this.editedItem = { id, text };
  }

  get isEditIncomplete(): boolean {
    return (this.modeStatus === MODE_EDIT || this.modeStatus === MODE_INCOMPLETE)
      && this.modeReference.id === this.itemData.id;
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
}
</script>

<style lang="scss" scoped>
.qa-header {
  float: left;
  padding-top: 5px;
}
.qa-text {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  font-size: 20px;
}
.btn-item {
    float: right;
    margin-right: 5px;
    i {
        font-size: 18px;
    }
}
textarea:focus {
  border-color: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  outline: -webkit-focus-ring-color auto 5px;
}
</style>
