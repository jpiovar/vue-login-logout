<template>
  <div>
    <span v-if="!isEditIncomplete" class="qa-text mb-3">
      {{itemData.text}}
    </span>
    <span v-if="isEditIncomplete" class="qa-text mb-3">
      <textarea
        v-model="editedItemBody.text"
        @keydown.enter.prevent="()=>saveItem()"
        class="form-control"
        aria-label="textarea" rows="1">
      </textarea>
      <textarea
        v-model="edBody"
        class="form-control"
        aria-label="textarea" rows="1">
      </textarea>
      <span>{{ edBodyG }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { MODE } from '@/stores/constants';
import { AppMode, Reference } from '@/stores/mode/mode.types';
import { QuoraItem, AnswerItem } from '@/stores/quora/quora.types';
import {
  MODE_EDIT, MODE_INCOMPLETE,
} from '@/stores/mode/constants';

const ModeStore = namespace(MODE);

@Component({
  components: {},
  props: {
    itemData: {
      required: true,
      type: Object,
    },
    editedItemBody: {
      required: true,
      type: Object,
    },
    edBody: {
      required: false,
      type: String,
    },
    edRef: {
      required: false,
      type: Function,
    },
    saveItemRef: {
      required: true,
      type: Function,
    },
  },
})
export default class CardBodyText extends Vue {
  itemData!: QuoraItem|AnswerItem;

  saveItemRef!: any;

  editedItemBody!: { id: string, text: string };

  edBody!: string;

  edRef!: any;

  @ModeStore.Getter modeStatus!: AppMode;

  @ModeStore.Getter modeReference!: Reference;

  get isEditIncomplete(): boolean {
    return (this.modeStatus === MODE_EDIT || this.modeStatus === MODE_INCOMPLETE)
      && this.modeReference.id === this.itemData.id;
  }

  get edBodyG(): string {
    this.edRef(this.edBody);
    return this.edBody;
  }

  saveItem() {
    this.saveItemRef();
  }
}
</script>

<style lang="scss" scoped>
.qa-text {
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  font-size: 20px;
}
textarea:focus {
  border-color: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  outline: -webkit-focus-ring-color auto 5px;
}
</style>
