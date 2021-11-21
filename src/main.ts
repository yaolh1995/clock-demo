import { createApp } from 'vue'
import App from './App.vue'
import dayjs from 'dayjs'
let app = createApp(App);
app.mount('#app')
app.use(dayjs)