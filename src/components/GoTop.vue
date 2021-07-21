<template>
  <div class="gotop d-none">
    <a href="#" @click.prevent="top"><i class="far fa-caret-square-up"></i></a>
  </div>
</template>

<script>
export default {
  name: 'GoTop',
  methods: {
    top () {
      document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    window.onscroll = function (event) {
      if (event.target.scrollingElement.scrollTop > 250) {
        const el = document.querySelector('.gotop')
        if (el !== null) {
          el.className = 'gotop d-block'
        }
      } else {
        const el = document.querySelector('.gotop')
        if (el !== null) {
          el.className = 'gotop d-none'
        }
      }
    }
  }
}
</script>

<style scoped>
.gotop{
  position: fixed;
  right: 20px;
  bottom: 10px;
  z-index: 99;
}
.gotop a {
  color: #5e6e6e;
  font-size: 40px;
}
@media (max-width: 768px) {
  .gotop{
    right: 10px;
    bottom: 5px;
  }
  .gotop a{
    font-size: 35px;
  }
}
</style>
