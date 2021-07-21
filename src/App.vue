<template>
  <Alert />
  <div class="app">
    <RouterView />
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage.vue'

export default {
  name: 'APP',
  components: {
    Alert
  }
}
</script>

<style lang="scss">
@import './assets/scss/all.scss';
</style>
