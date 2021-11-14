import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import Card from 'primevue/card';
import ProgressSpinner from 'primevue/progressspinner';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import '/node_modules/primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(store);
app.use(router);
app.use(ToastService);

app.component('Button', Button);
app.component('Card', Card);
app.component('Toast', Toast);
app.component('ProgressSpinner', ProgressSpinner);

app.mount('#app')