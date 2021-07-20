import { createApp } from 'vue'
// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 讀取效果
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// 表單驗證
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// Bootstrap
import 'bootstrap'

import App from './App.vue'
// 路由
import router from './router'

// mitt
import emitter from './methods/bus'

// currency
import { currency, date } from './methods/filters.js'

// 表單規則
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.use(VueAxios, axios)
// 全域下註冊 emitter、filters
app.config.globalProperties.emitter = emitter
app.config.globalProperties.$filters = {
  currency,
  date
}
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.use(router)
app.mount('#app')

// 驗證登入
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)Token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        emitter.emit('message:push', { message: '請登入帳號', status: 'danger' })
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
