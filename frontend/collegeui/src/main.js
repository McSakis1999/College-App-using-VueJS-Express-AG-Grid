import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { AgGridVue } from 'ag-grid-vue3'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)

app.use(router)
app.use(bootstrap)
app.use(AgGridVue)
app.mount('#app')
