import { createApp } from 'vue';
import clickOutsideDirective from 'click-outside-vue3';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(clickOutsideDirective)
  .use(store)
  .use(router)
  .mount('#app');
