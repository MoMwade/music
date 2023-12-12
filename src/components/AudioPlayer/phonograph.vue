<template>
    <div class="h-[100vh] bg-zinc-700 text-white w-[100%] overflow-auto">
        <div class="p-[5vw] flex justify-between items-center text-[4vw]">
            <Icon icon="ep:arrow-up" :rotate="2" class="text-[6vw]" />
            <p class="w-[80%] line-clamp-1 text-center">{{mixin_player.CurrentTrackDetails?.name}}</p>
            <Icon icon="material-symbols-light:share-outline" class="text-[6vw]" />
        </div>
        <div class="relative flex justify-center top-[20%]">
            <div class="w-[25vw] absolute z-20 left-[52%] top-[-15vw] tran" :class="{stylu:!this.mixin_player.playing}">
                <img src="../../../public/images/stylus.png" >
            </div>
            <div class="w-[70vw] absolute z-20">
                <img src="../../../public/images/halo.png">
            </div>
            <div class="absolute w-[70vw] z-10 rounded-[50%] overflow-hidden" :style="{ transform: `rotateZ(${mixin_player.recordeg}deg)`}">
                <img src="../../../public/images/vinyl.png" class="w-[100%]">     
            </div>
            <div class="w-[50vw] absolute top-[10vw] rounded-[50%] overflow-hidden z-0 picUrl" :style="{ transform: `rotateZ(${mixin_player.recordeg}deg)`}">
                <img :src="mixin_player.CurrentTrackDetails?.al?.picUrl">
            </div>
        </div>
        <div class="fixed bottom-0 w-[100%] p-[5vw]">
            <div class="flex justify-between text-[5vw]">
                <Icon icon="icon-park-outline:like" />
                <Icon icon="streamline:download-circle" />
                <Icon icon="fa-solid:user-friends" />
                <Icon icon="uil:comment-message" />
                <Icon icon="ri:more-2-fill" />
            </div>
            <div class="pt-[3vw] pb-[3vw]">
                <vue-slider @change="fn(mixin_player.currentplaytime)" :tooltip="'none'" :drag-on-click="true" :lazy="true" v-model="mixin_player.currentplaytime" :silent='true' :min=0 :max="mixin_player.howl.duration()" :interval='0.01'  :disabled="false" :dragOnClick="true"></vue-slider>
            </div>
            <div class="text-[7vw] flex justify-between items-center">
                <Icon icon="solar:repeat-one-line-duotone" />
                <Icon icon="ph:skip-forward-fill" :rotate="2" />
                <div @click="mixin_player.toggle()" class="relative w-[12vw] h-[12vw] bg-white rounded-[50%]">
                    <Icon :icon="mixin_player.playing?'lets-icons:stop-fill':'ic:round-play-arrow'" class="text-[5vw] text-[#000] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                </div>
                <Icon icon="ph:skip-forward-fill" />
                <Icon icon="icon-park-solid:menu-fold-one" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            stylu:true
        }
    },
    methods:{
        fn(value){
            this.mixin_player.howl.seek(value)
        }
    },
    mounted(){
       
    }
}
</script>

<style scoped>
    .stylu {
        transform-origin: 18% 20%;
        transform: rotate(-45deg);
    }

    .tran {
        transition: all 0.5s;
    }

</style>