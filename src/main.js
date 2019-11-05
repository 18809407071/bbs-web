// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css';
//引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS

import './assets/lib/niceScroll/niceScroll.min.js'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    render: h => h(App)
})