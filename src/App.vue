<template>
  <Alert/>
  <div class="app">
    <router-view/>
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
@import './assets/all.scss';
</style>
