import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 添加Element Plus组件
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 引入icons
import { registerGlobalSvgIconComponent } from  "./assets/icons"; // icon

const app = createApp(App);

// 注册SvgIcon全局组件
registerGlobalSvgIconComponent(app);

app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
