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


//设置cookie,放在main.js

Vue.prototype.setCookie = function(c_name,value,expiredays) {
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
};


//获取cookie

Vue.prototype.getCookie=function(c_name) {
    if (document.cookie.length>0)
    {
        var  c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1
            var c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
};

