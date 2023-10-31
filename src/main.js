import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Vueform from '@vueform/vueform/plugin'
import vueformConfig from './../vueform.config'
import PrimeVue from 'primevue/config';
import Tailwind from 'primevue/passthrough/tailwind';


import Panel from 'primevue/panel';

const app = createApp(App)

app.use(Vueform, vueformConfig)
app.use(PrimeVue, { unstyled: true, pt: Tailwind });

app.component('PrimePanel', Panel);

app.use(createPinia())
app.use(router)

app.mount('#app')
