<template>
  <div class="card text-white bg-success p-1 mb-3" :id="itemData.id" :ref="itemData.id">
    <div class="card-header">
      <card-header
        :index="index"
        :itemData="itemData"
        :editedItem="editedItem" :editedItemRef="editedItemHandle"
        :qId="qId"
        ref="cardHeader"
      />
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
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { QUORA, USER, MODE } from '../../../../../stores/constants';
import { UserData } from '../../../../../stores/user/user.types';
import { AnswerItem } from '../../../../../stores/quora/quora.types';
import { AppMode, Reference } from '@/stores/mode/mode.types';
import {
  MODE_EDIT, MODE_INITIAL, MODE_READ, MODE_INCOMPLETE,
} from '@/stores/mode/constants';
import CardHeader from '../../../../common/cardHeader/CardHeader.vue';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);
const ModeStore = namespace(MODE);

@Component({
  components: {
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
    qId: {
      required: true,
      type: String,
    },
  },
})
export default class AnswerCmp extends Vue {
  itemData!: AnswerItem;

  qId!: string;

  editedItem = { id: '', text: '' };

  @UserStore.Getter userData!: UserData;

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

  saveItem() {
    (this.$refs.cardHeader as any).saveItem();
  }
}
</script>

<style lang="scss" scoped>
.qa-author {
  float: left;
  padding-top: 5px;
}
.qa-text {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  font-size: 18px;
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
