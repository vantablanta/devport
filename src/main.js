import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false
import * as  VueParticlesBg  from 'particles-bg-vue'
Vue.use(VueParticlesBg);

new Vue({
  render: h => h(App),
}).$mount('#app')
