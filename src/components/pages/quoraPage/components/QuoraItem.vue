<template>
  <div class="card text-white bg-primary p-1 mb-4">
    <div class="card-header">
        <span class="qa-author">{{ `${itemData.author.name} / ${itemData.author.email}` }}</span>
        <button type="button" class="btn btn-danger btn-sm btn-item">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-light btn-sm btn-item">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
    </div>
    <div class="card-body bg-light text-dark">
      <p class="card-text text-left">
        <span class="qa-text mb-3">{{itemData.text}}</span>
        <answer-item v-for="(item, index) in itemData.answers"
          :key="item.id"
          :index="index"
          :itemData="item"
        />
      </p>
    </div>
    <div class="card-footer bg-light text-dark">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">New answer</span>
        </div>
        <textarea class="form-control" aria-label="textarea" rows="1"></textarea>
        <div class="input-group-append">
          <button type="button" class="btn btn-success btn-item round">
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
import AnswerItem from './components/AnswerItem.vue';

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
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class QuoraItem extends Vue {
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
