<template>
  <div class="alert-message">
    <div
      class="alert alert-strong alert-dismissible rounded-0 border-0"
      :class="`text-${item.status}`"
      v-for="(item, i) in messages"
      :key="i"
    >
      <i class="fas fa-check-circle me-1" v-if="item.status === 'success'"></i>
      <i
        class="fas fa-exclamation-triangle me-1"
        v-if="item.status === 'danger'"
      ></i>
      {{ item.message }}
      <button
        type="button"
        class="btn-sm btn-close"
        @click="removeMessage(i)"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertMessage',
  data () {
    return {
      messages: []
    }
  },
  methods: {
    updateMessage (message, status) {
      const timestamp = Math.floor(new Date() / 1000)
      this.messages.push({
        message,
        status,
        timestamp
      })
      this.removeMessageWithTiming(timestamp)
    },
    removeMessage (num) {
      this.messages.splice(num, 1)
    },
    removeMessageWithTiming (timestamp) {
      const vm = this
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1)
          }
        })
      }, 3000)
    }
  },
  created () {
    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    this.emitter.on('message:push', messages => {
      const { message, status = 'warning' } = messages
      this.updateMessage(message, status)
    })
    // this.emitter.emit('message:push')
  }
}
</script>

<style scope>
.alert-message {
  position: fixed;
  max-width: 50%;
  top: 90px;
  right: 30px;
  z-index: 1100;
}
</style>
