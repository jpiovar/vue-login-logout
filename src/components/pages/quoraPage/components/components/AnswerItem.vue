<template>
  <div class="card text-white bg-success p-1 mb-3" :ref="itemData.id">
    <div class="card-header">
        <span class="qa-author">
          <b>{{ `A ${index + 1}. &nbsp;` }}</b>
          {{ `${itemData.author.name} / ${itemData.author.email} &nbsp; ${timeStamp}` }}
        </span>
        <button type="button" class="btn btn-danger btn-sm btn-item"
          @click="()=>removeAnswer(itemData.id, qId)"
          v-if="userData.id===itemData.author.id">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-light btn-sm btn-item"
          @click="()=>editAnswer(itemData.id)"
          v-if="userData.id===itemData.author.id">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
    </div>
    <div class="card-body bg-light text-dark">
      <p class="card-text text-left">
        <span class="qa-text">{{itemData.text}}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { QUORA, USER, MODE } from '../../../../../stores/constants';
import { UserData } from '../../../../../stores/user/user.types';
import { Answer } from '../../../../../stores/quora/quora.types';
import { AppMode, Reference } from '@/stores/mode/mode.types';
import { MODE_EDIT } from '@/stores/mode/constants';

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
    qId: {
      required: true,
      type: String,
    },
  },
})
export default class AnswerItem extends Vue {
  itemData!: Answer;

  @UserStore.Getter userData!: UserData;

  @QuoraStore.Action removeAnswerStore!:
    ({ itemId, qId }: { itemId: string, qId: string }) => void;

  @ModeStore.Action setMode!:
    ({ reference, status }: { reference: Reference, status: AppMode }) => void;

  get timeStamp(): string {
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

  removeAnswer(itemId: string, qId: string) {
    debugger;
    this.removeAnswerStore({ itemId, qId });
  }

  editAnswer(itemId: string) {
    debugger;
    const reference = { id: itemId };
    const status = MODE_EDIT;
    this.setMode({ reference, status });
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
  margin: 10px 0;
}
.btn-item {
  float: right;
  margin-right: 5px;
  i {
    font-size: 18px;
  }
}
</style>
