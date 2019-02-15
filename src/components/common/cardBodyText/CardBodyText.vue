<template>
  <div>
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
    editedItem: {
      required: true,
      type: Object,
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

  editedItem!: { id: string, text: string };

  @ModeStore.Getter modeStatus!: AppMode;

  @ModeStore.Getter modeReference!: Reference;

  get isEditIncomplete(): boolean {
    return (this.modeStatus === MODE_EDIT || this.modeStatus === MODE_INCOMPLETE)
      && this.modeReference.id === this.itemData.id;
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
