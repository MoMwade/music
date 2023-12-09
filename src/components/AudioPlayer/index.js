import Main from './main.vue'
import Player from './Player'
const player = new Player()

export default {
    install(Vue) {
        Vue.component(Main.name,Main);
        Vue.mixin({ //全局混入响应的Player实例
            computed:{
                mixin_player(){
                    return Vue.observable(player);
                }
            }
        })
    }
} 