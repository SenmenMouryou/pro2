import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";
import header_ from './components/common/Header'

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.prototype.$axios = axios;
Vue.prototype.HEADER = header_;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

