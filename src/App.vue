<template>
  <Alert/>
  <GoTop/>
  <div class="app">
    <RouterView />
    <Footer class="mt-auto"/>
  </div>
</template>

<script>
import Alert from '@/components/AlertMessage.vue'
import GoTop from '@/components/GoTop.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'APP',
  components: {
    Alert,
    GoTop,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/scss/all.scss';
</style>
