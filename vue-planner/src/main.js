import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GoogleAuth from '@/config/google_oAuth.js'
const gauthOption = {
  clientId: '1031252778292-qcnv14idkoqoefn54n6cltpjagjsvu02.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption);
Vue.config.productionTip = false;
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
