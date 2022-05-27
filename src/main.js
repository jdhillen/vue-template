// ==|== Imports ===================================================================================
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';

// ==|== Create App ================================================================================
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
