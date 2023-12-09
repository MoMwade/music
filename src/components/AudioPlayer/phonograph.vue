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
            <!--  :tooltip="'none'" -->
            {{mixin_player.currentplaytim}}
            {{mixin_player.howl.duration()}}
            <vue-slider @change="fn(mixin_player.currentplaytime)" :lazy="true" v-model="mixin_player.currentplaytime" :min=0 :max="mixin_player.howl.duration()" :interval='0.01'  :disabled="false" :dragOnClick="true"></vue-slider>
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