import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router.js'
import store from './store/store.js'
import InputDialog from './components/UI/InputDialog.vue'
import BaseDialog from './components/UI/BaseDialog.vue'
import i18n from './plugins/i18n.js'

Vue.config.productionTip = false
Vue.component('input-dialog',InputDialog)
Vue.component('base-dialog',BaseDialog)
new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

