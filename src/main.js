import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/ru'
import 'dayjs/locale/ru'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(ElementPlus, {locale})
app.use(store).use(router).mount('#app')

