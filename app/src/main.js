import Vue from 'vue';
import App from './App.vue';
import './assets/styles/global.less';
import './assets/styles/theme.less';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
