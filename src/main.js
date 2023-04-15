import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//按需引入

//饿了么plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
