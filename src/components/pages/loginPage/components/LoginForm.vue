<template>
<div class="login-form">
    login form
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class LoginForm extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
.login-form {
    height: 400px;
    width: 300px
}
</style>
