<template>
  <div class="card p-2 mb-3 bg-white rounded">
    <div class="card-header">
        <span class="qa-author">{{ `${itemData.author.name} / ${itemData.author.email}` }}</span>
        <button type="button" class="btn btn-danger btn-sm btn-item">
            <i class="fa fa-times" aria-hidden="true"></i>
            Remove answer
        </button>
    </div>
    <div class="card-body">
      <p class="card-text text-left">
        <span class="qa-text">{{itemData.text}}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

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
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class AnswerItem extends Vue {
  msg!: string;

  itemData!: object;
}
</script>

<style lang="scss" scoped>
.qa-author {
  float: left;
  padding-top: 5px;
}
.qa-text {
  display: inline-block;
  margin: 10px 0;
}
.btn-item {
  float: right;
  i {
    font-size: 18px;
  }
}
</style>
