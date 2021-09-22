// ==|== Imports ===================================================================================
import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';

// ==|== Create App ================================================================================
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
