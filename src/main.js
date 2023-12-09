import router from '@/router/index'
import store from '@/store'
import Vue from 'vue'
import App from './App.vue'
import '@/assets/main.css'
import 'vant/lib/index.css';
import Vant from 'vant';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import AudioPlayer from '@/components/AudioPlayer'
import HeadSearch from '@/components/HeadSearch'
import FootJump from '@/components/FootJump'
import { Icon } from '@iconify/vue2';
import Scroll  from "@/components/Scroll.vue";
import card from '@/components/card.vue'
import Cells from '@/components/Cells.vue'

Vue.use(Vant);
Vue.component('HeadSearch', HeadSearch)
Vue.component('FootJump', FootJump)
Vue.component('Icon', Icon)
Vue.component('Scroll', Scroll)
Vue.component('card', card)
Vue.component('Cells', Cells)
Vue.component('VueSlider', VueSlider)

//Vue.use(module) module的要求是什么
//1.module本身是函数
//1.module不是函数但是具备一个Install方法
// Vue.$use = function (module) {
//   if (typeof module === 'function') {
//     module(this) //this --> Vue
//   } else if (typeof module.install === 'object') {
//     module.install(this) //this --> Vue
//   }
// };

Vue.use(AudioPlayer)
// Vue.use(player)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
