<template>
  <div class="card text-white bg-success p-1 mb-3" :id="itemData.id" :ref="itemData.id">
    <div class="card-header">
      <card-header
        :index="index"
        :itemData="itemData"
        :editedItemHeader="editedItem" :editedItemRef="editedItemHandle"
        :qId="qId"
        ref="cardHeader"
      />
    </div>
    <div class="card-body bg-light text-dark">
      <p class="card-text text-left">
        <card-body-text
          :itemData="itemData"
          :editedItemBody="editedItem"
          :saveItemRef="saveItemHandle"
        />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AnswerItem } from '../../../../../stores/quora/quora.types';
import CardHeader from '../../../../common/cardHeader/CardHeader.vue';
import CardBodyText from '../../../../common/cardBodyText/CardBodyText.vue';

@Component({
  components: {
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

  editedItemHandle({ id, text }: { id: string, text: string }) {
    debugger;
    this.editedItem = { id, text };
  }

  saveItemHandle() {
    (this.$refs.cardHeader as any).saveItem();
  }
}
</script>

<style lang="scss" scoped>
</style>
