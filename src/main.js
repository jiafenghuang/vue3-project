import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// 全局
// import MyUI from '../module3/my-ui';
// app.use(MyUI);

// 按需引入
import { MySelect } from '../module3/my-ui';
app.use(MySelect);
app.mount('#app');
