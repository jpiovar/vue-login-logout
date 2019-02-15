<template>
  <div>
    <span class="qa-header">
      <b>{{ `Q ${index + 1}. &nbsp;` }}</b>
      {{ `${itemData.author.name} / ${itemData.author.email} &nbsp; ${timeStamp}` }}
    </span>
    <button
      type="button"
      class="btn btn-danger btn-sm border-dark btn-item"
      @click="()=>removeItem(itemData.id, qId)"
      v-if="userData.id===itemData.author.id">
      <i class="fa fa-trash-o" aria-hidden="true"></i>
    </button>
    <button
      type="button"
      class="btn btn-light btn-sm border-dark btn-item"
      @click="()=>editItem(itemData)"
      v-if="userData.id===itemData.author.id && !isEditIncomplete">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
    </button>
    <button
      type="button"
      class="btn btn-light btn-sm border-dark btn-item"
      @click="cancelItem"
      v-if="userData.id===itemData.author.id && isEditIncomplete">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
    <button
      type="button"
      class="btn btn-light btn-sm border-dark btn-item"
      @click="saveItem"
      v-if="userData.id===itemData.author.id && isEditIncomplete">
      <i class="fa fa-check" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { USER, QUORA, MODE } from '@/stores/constants';
import { AppMode, Reference } from '@/stores/mode/mode.types';
import {
  MODE_EDIT, MODE_INITIAL, MODE_READ, MODE_INCOMPLETE,
} from '@/stores/mode/constants';
import { QuoraItem, AnswerItem } from '@/stores/quora/quora.types';
import { UserData } from '@/stores/user/user.types';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);
const ModeStore = namespace(MODE);

@Component({
  components: {},
  props: {
    index: {
      required: true,
      type: Number,
    },
    itemData: {
      required: true,
      type: Object,
    },
    editedItem: {
      required: true,
      type: Object,
    },
    editedItemRef: {
      required: true,
      type: Function,
    },
    qId: {
      required: false,
      type: String,
    },
  },
})
export default class CardHeader extends Vue {
  itemData!: QuoraItem;

  qId!: string;

  editedItem!: { id: string, text: string };

  editedItemRef!: any;

  @UserStore.Getter userData!: UserData;

  @QuoraStore.Action removeQuestionStore!:
    ({ itemId }: { itemId: string }) => void;

  @QuoraStore.Action removeAnswerStore!:
    ({ itemId, qId }: { itemId: string, qId: string }) => void;

  @QuoraStore.Action updateQuestionStore!: ({ qId, text }: { qId: string, text: string }) => void;

  @QuoraStore.Action updateAnswerStore!:
    ({ aId, text, qId }: { aId: string, text: string, qId: string }) => void;

  @ModeStore.Action setMode!:
    ({ reference, status }: { reference: Reference, status: AppMode }) => void;

  @ModeStore.Getter modeStatus!: AppMode;

  @ModeStore.Getter modeReference!: Reference;

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

  get isEditIncomplete(): boolean {
    return (this.modeStatus === MODE_EDIT || this.modeStatus === MODE_INCOMPLETE)
      && this.modeReference.id === this.itemData.id;
  }

  removeItem(itemId: string, qId: string) {
    debugger;
    if (qId) {
      this.removeAnswerStore({ itemId, qId });
    } else {
      this.removeQuestionStore({ itemId });
    }
    if (itemId === this.modeReference.id) {
      const status = MODE_READ;
      const reference = { id: '', text: '' };
      this.setMode({ reference, status });
    }
  }

  editItem(item: QuoraItem|AnswerItem) {
    debugger;
    let status = MODE_EDIT;
    let reference = { id: item.id, text: item.text };
    if (this.modeStatus === MODE_INITIAL || this.modeStatus === MODE_READ) {
      this.editedItemRef({ id: item.id, text: item.text });
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
    const { qId } = this;
    if (qId) {
      this.updateAnswerStore({ aId: id, text, qId });
    } else {
      this.updateQuestionStore({ qId: id, text });
    }
  }

  cancelItem() {
    debugger;
    const status = MODE_READ;
    const reference = { id: '', text: '' };
    this.setMode({ reference, status });
  }
}
</script>

<style lang="scss" scoped>
.qa-header {
  float: left;
  padding-top: 5px;
}
.btn-item {
    float: right;
    margin-right: 5px;
    i {
        font-size: 18px;
    }
}
</style>
