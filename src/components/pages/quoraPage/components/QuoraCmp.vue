<template>
  <div class="card text-white bg-primary p-1 mb-4" :id="itemData.id" :ref="itemData.id">
    <div class="card-header">
        <span class="qa-header">
          <b>{{ `Q ${index + 1}. &nbsp;` }}</b>
          {{ `${itemData.author.name} / ${itemData.author.email} &nbsp; ${timeStamp}` }}
        </span>
        <button type="button" class="btn btn-danger btn-sm border-dark btn-item"
          @click="()=>removeItem(itemData.id)"
          v-if="userData.id===itemData.author.id">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-light btn-sm border-dark btn-item"
          @click="()=>editItem(itemData)"
          v-if="userData.id===itemData.author.id && !isEditIncomplete">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-light btn-sm border-dark btn-item"
          @click="cancelItem"
          v-if="userData.id===itemData.author.id && isEditIncomplete">
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-light btn-sm border-dark btn-item"
          @click="saveItem"
          v-if="userData.id===itemData.author.id && isEditIncomplete">
            <i class="fa fa-check" aria-hidden="true"></i>
        </button>
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
        <answer-item v-for="(item, index) in itemData.answers"
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
import AnswerItem from './components/AnswerItem.vue';
import { QuoraItem, Answer } from '../../../../stores/quora/quora.types';
import { AppMode, Reference } from '@/stores/mode/mode.types';
import {
  MODE_EDIT, MODE_INITIAL, MODE_READ, MODE_INCOMPLETE,
} from '../../../../stores/mode/constants';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);
const ModeStore = namespace(MODE);

@Component({
  components: {
    AnswerItem,
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
    ({ qId, item }: { qId: string, item: Answer }) => void;

  @QuoraStore.Action updateQuestionStore!: ({ qId, text }: { qId: string, text: string }) => void;

  @ModeStore.Action setMode!:
    ({ reference, status }: { reference: Reference, status: AppMode }) => void;

  @ModeStore.Getter modeStatus!: AppMode;

  @ModeStore.Getter modeReference!: Reference;

  get isEditIncomplete(): boolean {
    return (this.modeStatus === MODE_EDIT || this.modeStatus === MODE_INCOMPLETE)
      && this.modeReference.id === this.itemData.id;
  }

  get timeStamp(): string {
    debugger;
    const date = new Date(Number(this.itemData.id));
    const dVal = {
      year: date.getFullYear(),
      month: `0${(Number(date.getMonth()) + 1)}`.slice(-2),
      day: `0${date.getDate()}`.slice(-2),
      hour: `0${date.getHours()}`.slice(-2),
      minute: `0${date.getMinutes()}`.slice(-2),
      second: `0${date.getSeconds()}`.slice(-2),
    };
    return `${dVal.year}-${dVal.month}-${dVal.day} ${dVal.hour}:${dVal.minute}:${dVal.second}`;
  }

  removeItem(itemId: string) {
    const status = MODE_READ;
    const reference = { id: '', text: '' };
    this.removeQuestionStore({ itemId });
    this.setMode({ reference, status });
  }

  editItem(item: QuoraItem) {
    debugger;
    let status = MODE_EDIT;
    let reference = { id: item.id, text: item.text };
    if (this.modeStatus === MODE_INITIAL || this.modeStatus === MODE_READ) {
      this.editedItem = { id: item.id, text: item.text };
    } else if (this.modeStatus === MODE_EDIT) {
      status = MODE_INCOMPLETE;
      reference = { id: this.modeReference.id, text: this.modeReference.text };
    } else if (this.modeStatus === MODE_INCOMPLETE) {
      return;
    }
    this.setMode({ reference, status });
  }

  saveItem() {
    debugger;
    const status = MODE_READ;
    const reference = { id: '', text: '' };
    this.setMode({ reference, status });
    const { id, text } = this.editedItem;
    this.updateQuestionStore({ qId: id, text });
  }

  cancelItem() {
    debugger;
    const status = MODE_READ;
    const reference = { id: '', text: '' };
    this.setMode({ reference, status });
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
</style>
