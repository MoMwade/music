<template>
    <div>
         <div>
            <div class="h-[15vw]"></div>
            <div class="w-[100vw] h-[15vw] border-t-[0.1vw] flex items-center bg-white dark:bg-[#2C2C2C] dark:text-[#ccc] fixed" :style="{bottom:0}">
                <div class="w-[90%] h-[15vw] m-auto flex justify-between items-center">
                    <router-link to="/phonograph" tag="div">
                        <div class="flex items-center">
                            <dir class="w-[10vw] h-[10vw] bg-black rounded-[50%] relative outer" :style="{ transform: `rotateZ(${mixin_player.recordeg}deg)`}">
                                <div class="w-[7vw] h-[7vw] absolute bg-white rounded-[50%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                                    <img :src="mixin_player.CurrentTrackDetails?.al?.picUrl">
                                </div>
                            </dir>
                            <div class="ml-[3vw] text-[3.5vw] line-clamp-1 w-[55vw]">
                                <p>{{mixin_player.CurrentTrackDetails?.name}} <span class="text-[#939292]">&nbsp;-&nbsp;{{mixin_player.CurrentTrackDetails?.ar?.map(({name}) => name).join("/")}}</span></p>
                            </div>
                        </div>
                    </router-link>
                    <div class="flex justify-between items-center w-[15vw]">
                        <div class="h-[7vw] w-[7vw] relative">
                            <div @click="mixin_player.toggle()">
                                <Icon :icon="mixin_player.playing?'lets-icons:stop-fill':'ic:round-play-arrow'" class="text-[5vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
                                <van-circle :value="mixin_player.progress * 100" layer-color="#ebedf0" color='#333' size="7vw" :speed="100" stroke-width="80" />
                            </div>
                        </div>
                        <div @click="showplaybar">
                            <Icon icon="ant-design:menu-fold-outlined" class="text-[6vw]" />
                        </div>
                    </div>
                </div>
            </div>
            <van-popup v-model="playshow" position="bottom" round :style="{ height: '80vh' }">
                <div class="w-[100%] h-[100%] dark:bg-[#413838]">
                    <van-tabs v-model="playactive" animated background="rgba(0, 0, 0, 0)">
                        <van-tab v-for="(item,index) in hlayactive" :title="item" :key="index">
                            <div class="w-[90%] m-auto pt-[5vw]">
                                <div class="flex justify-between text-[3vw] ">
                                    <div class="flex justify-between w-[30vw] p-[1.5vw] bg-[#f5f5f5] rounded-[3vw]">
                                        <div class="flex justify-around items-center w-[50%]">
                                            <Icon icon="el:random" />
                                            <p class="leading-[3.5vw]">随机</p>
                                        </div>
                                        <div class="flex justify-around items-center w-[50%]">
                                            <p class="leading-[3.5vw]">偏好</p>
                                            <Icon icon="bxs:up-arrow" :rotate="2" />
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center text-[#444] text-[6vw] w-[30%]">
                                        <Icon icon="line-md:downloading-loop" />
                                        <Icon icon="bi:collection" />
                                        <Icon icon="openmoji:delete" />
                                    </div>
                                </div>
                                <div class="text-[3vw] text-[#ccc] pt-[3vw] pb-[3vw]">
                                    <van-checkbox v-model="checked" checked-color="#ee0a24" icon-size="3vw">歌单原始顺序</van-checkbox>
                                </div>
                                <div>
                                    <Scroll :config="{scrollY: true, click: true, bindToWrapper: true}" style="height:60vh">
                                        <div>
                                            <dir class="flex justify-between items-center p-[0] text-[3.5vw]" v-for="(item,index) in mixin_player?.currentplaylist" :key="item.id" @click="start(item.id)">
                                                <div :class="{acitve:index == mixin_player.index}" class="w-[80%] flex justify-between items-center whitespace-nowrap">
                                                    <p :class="{acitve:index == mixin_player.index}" class="line-clamp-1 flex justify-between items-center whitespace-nowrap">{{item.name}} <span class="text-[#ccc] flex justify-between items-center">&nbsp;&nbsp;<Icon icon="ic:round-lens" class="text-[0.8vw]" />&nbsp;&nbsp;{{item.ar[0].name}}</span></p>
                                                </div>
                                                <div class="text-[4vw] text-[#ccc]">
                                                    <Icon icon="ic:sharp-close" />
                                                </div>
                                            </dir>
                                        </div>
                                    </Scroll>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
            </van-popup>
        </div>
    </div>
</template>

<script>

export default {
    name:'AudioPlayer',
    data(){
        return {
            num:0,
            playshow: false,
            playactive:1,
            hlayactive: ['历史播放','当前播放'],
            checked: false,
            recordeg:0,
            timr:null
        } 
    },
    methods:{
        showplaybar() {
            this.playshow = true;
        },
        start(index){
             this.mixin_player.replaceTracks(this.mixin_player.currentplaylist.map(({id}) => id),index)
        },
    },
}
</script>

<style scoped>
    .acitve > * {
        color: rgb(255, 0, 0) !important;
    }
</style>