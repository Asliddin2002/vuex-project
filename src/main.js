import {createApp} from 'vue'
import App from './App.vue'
import router from "@/components/Router";
import store from './components/Store/index'

createApp(App).use(store).use(router).mount('#app')
