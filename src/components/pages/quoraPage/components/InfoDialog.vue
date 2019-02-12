<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { MODE } from '../../../../stores/constants';
import { AppMode, Reference } from '@/stores/mode/mode.types';

const ModeStore = namespace(MODE);

@Component({
  components: {},
  props: {
    msg: {
      required: false,
      type: String,
    },
  },
})
export default class InfoDialog extends Vue {
  msg!: string;

  @ModeStore.Getter modeStatus!: AppMode;

  @ModeStore.Getter modeReference!: Reference;
}
</script>

<style lang="scss" scoped>
</style>
