import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件
import './hooks/vant'

const app = createApp(App)

app.use(router).use(store).mount('#app')
