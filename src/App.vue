<template>
  <Alert />
  <GoTop/>
  <RouterView />
</template>

<script>
import Alert from '@/components/AlertMessage.vue'
import GoTop from '@/components/GoTop.vue'

export default {
  name: 'APP',
  components: {
    Alert,
    GoTop
  }
}
</script>

<style lang="scss">
@import './assets/scss/all.scss';
</style>
