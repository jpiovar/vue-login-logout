<template>
  <div class="card shadow p-3 mb-5 bg-white rounded">
    <div class="card-body">
      <p class="card-text text-left">
        Bla bla bla aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaa a bbbbbbbbbbbb bbbbbbbbbbbb bbbbbbbbbbbbbbbbb nnnnnnnnnnnnnn
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { USER, QUORA } from '../../../../stores/constants';

const UserStore = namespace(USER);
const QuoraStore = namespace(QUORA);

@Component({
  components: {},
  props: {
    index: {
      required: true,
      type: Number,
    },
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class QuoraItem extends Vue {
  msg!: string;

  @UserStore.Action logoutUser: any;

  @UserStore.Getter userData: any;

  @QuoraStore.Getter quoraItems: any;
}
</script>

<style lang="scss" scoped>
.row {
    height: 500px;
    .col-md-6 {
        height: 500px;
    }
}
</style>
