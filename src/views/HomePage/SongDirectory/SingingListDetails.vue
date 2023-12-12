<template>
    <div class="bg-gradient-to-r from-sky-500 to-indigo-500 overflow-hidden">
        <div ref="top" class="relative">
            <div class="bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-around items-center h-[15vw] text-[5vw] fixed top-0 w-[100%] overflow-hidden z-50">
                <Icon icon="lets-icons:arrow-top" color="white" :rotate="3" />
                <div class="w-[50vw] h-[6vw] overflow-hidden">
                    <div class="text-[4.8vw] text-white text-left absolute bottom-[-8vw]" :class="{absBot:!flag}">歌单</div>
                    <div class="w-[50vw] h-[6vw] box-border flex items-center justify-between text-white absolute top-[-6.5vw]" :class="{absTob:flag}">
                        <div class="w-[70%] overflow-hidden whitespace-nowrap">
                            <p class="text-[4.5vw] font-light StaRDynamic">{{playlist.name}}</p>
                        </div>
                        
                        <div class="flex justify-center items-center checkBg">
                            <Icon icon="mdi:star-check" color="white" class="text-[4.5vw]" />
                            <p class="text-[3vw]">收藏</p>
                        </div>
                    </div>
                </div>
                <Icon icon="zondicons:search" color="white" />
                <Icon icon="mingcute:more-2-line" color="white" />
            </div>
            <div class="h-[15vw]"></div>
            <div>
                <div class="flex justify-between pl-[5vw] pr-[5vw]" v-show="!similarSong">
                    <div class="w-[24vw] h-[24vw] rounded-[2vw] overflow-hidden">
                        <img :src="playlist.coverImgUrl">
                    </div>
                    <div class="flex flex-col items-start w-[60vw] text-white text-[3vw]">
                        <p class="w-[80%] text-[4vw] font-extrabold mb-[1vw]">{{playlist.name}}</p>
                        <div class=" flex justify-between items-center text-gray-100">
                            <div class="w-[6vw] h-[6vw] rounded-[50%] overflow-hidden">
                                <img :src="creator.avatarUrl">
                            </div>
                            <p class="m-[2vw]">{{creator.nickname}}</p>
                            <div class="flex justify-center items-center checkBg">
                                <Icon icon="emojione-monotone:growing-heart" color="white" class="text-[4.5vw]" />
                                <p class="text-[3vw]">关注</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="similarSong" class="w-[90vw] m-auto overflow-hidden text-[3vw] text-white">
                    <p class="mb-[5vw] opacity-60">喜欢这个歌单的用户也听了</p>
                    <Scroll>
                        <div class="flex flex-nowrap justify-between" :style="{ width: `${playlists.length * 30}vw` }">
                                <div v-for="item in playlists" :key="item.id">
                                        <div class="w-[28vw]" @click="loading(item.id)">
                                            <div class="w-[28vw] h-[28vw] rounded-[2vw] overflow-hidden">
                                                <img :src="item.coverImgUrl">
                                            </div>
                                            <p class="line-clamp-2">{{item.name}}</p>
                                        </div>
                                </div>
                        </div>
                    </Scroll>
                </div>
            </div>
                <div class=" absolute right-[5vw] top-[14vw]" :class="{angle:similarSong}" @click="similar">
                    <Icon icon="ei:arrow-down" color="white" class="text-[8vw]"  />
                </div>
            <div class="flex justify-between items-center p-[5vw] whitespace-nowrap text-[3vw]">
                <p class="w-[90%] overflow-hidden text-slate-200 opacity-90">{{playlist.description}}</p>
                <Icon icon="material-symbols:expand-more-rounded" color="white" :rotate="3" class="text-[5vw]" />
            </div>
            <div class="w-[90vw] pb-[4vw] m-auto  flex justify-between font-extrabold text-[4vw] text-white">
                <div class="w-[30%] h-[10vw] flex justify-center items-center multipleBg">
                    <Icon class="text-[5vw]" icon="solar:multiple-forward-right-bold" color="white" />
                    <p class="ml-[2vw]">{{playlist.shareCount}}</p>
                </div>
                <div class="w-[30%]  flex justify-center items-center multipleBg">
                    <Icon class="text-[5vw]" icon="ant-design:comment-outlined" color="white" />
                    <p class="ml-[2vw]">{{playlist.commentCount}}</p>
                </div>
                <div class="w-[30%]  flex justify-center items-center starBg">
                    <Icon class="text-[5vw]" icon="fluent:star-add-28-filled" color="white" />
                    <p class="ml-[2vw]">{{playlist.subscribedCount}}</p>
                </div>
            </div>
        </div>
        <div  class="bg-white rounded-t-[5vw] overflow-hidden">
            <van-sticky :offset-top="50">
                <!-- <van-button type="info">吸顶距离</van-button> -->
                <div ref="lis" class="h-[10vw] w-[100%] flex justify-between items-center pl-[5vw] pr-[5vw] bg-white sticky top-[13.5vw]">
                <Icon icon="carbon:play-filled" color="red" />
                <p class="w-[50vw]">播放全部 <span class=" text-gray-300">({{songs.length}})</span></p>
                <Icon icon="line-md:download-loop" />
                <Icon icon="line-md:menu-fold-right" />
            </div>
            </van-sticky>

            <!-- <div class="h-[4vw]" v-show="Classflexs"></div> -->
            <div class="bg-white">
                <div class="w-[90vw] m-auto pt-[4vw]">
                    <div v-for="(item,index) in songs" :key="index+1" @click="putOn(item.id)">
                        <div :class="{acitve:index == mixin_player.index}" class="flex justify-between items-center mb-[3vw] text-[#ccc]">
                            <p class="w-[5vw]">{{index+1}}</p>
                            <div class="w-[60%] text-[3.5vw]" :class="{acitve:index == mixin_player.index}">
                                <p class="text-black">{{item.name}}</p>
                                <p class="text-[3vw]">{{item.ar[0].name}}</p>
                            </div>
                            <Icon icon="bi:play-btn" color="#ccc" />
                            <Icon icon="mingcute:more-2-fill" color="#ccc" />
                        </div>
                    </div>
                </div>
            </div>
            <AudioPlayer class="panel"></AudioPlayer>
        </div>
        
    </div>
</template>

<script>
import { getPlaylistDetail,getRelatedPlaylist,getPlaylistTrackAll } from '@/service'
export default {
    data(){
        return {
            playlist:{},
            songs:[], //歌单数据
            creator:{},
            flag:false,
            playlists:[],
            similarSong:false,
            playfomr:true,
        }
    },
    methods:{
        similar(){
            this.similarSong = !this.similarSong
        },
        handleScroll(){
            if(window.scrollY > 20) this.flag = true
            else this.flag = false 
        },
        loading(id){
            this.$router.push({path:`/SingingListDetails/`,query:{id}})
            location.reload()
        },
        putOn(index){
            this.mixin_player.currentplaylist = this.songs
            this.mixin_player.replaceTracks(this.songs.map(({id}) => id),index)
            this.playfomr = false
        }
    },
    async created(){
        const [DetailErr,Detail] = await getPlaylistDetail({id:this.$route.query.id});
        if(DetailErr) return DetailErr;
        let {data:{playlist}} = Detail
        console.log('歌单头部数据',playlist);
        this.playlist = playlist
        this.creator =  playlist.creator

        const [PlaylistErr,Playlist] = await getRelatedPlaylist({id:this.$route.query.id});
        if(PlaylistErr) return PlaylistErr;
        let {data:{playlists}} = Playlist
        console.log('相关歌曲推荐',playlists);
        this.playlists = playlists
        // getPlaylistTrackAll

        const [TrackAllErr,TrackAll] = await getPlaylistTrackAll({id:this.$route.query.id});
        if(TrackAllErr) return TrackAllErr;
        let {data:{songs}} = TrackAll
        console.log('全部歌单',songs);
        this.songs = songs
        this.$store.commit('UpdataSongsDate',songs)
    },
    mounted(){
        window.addEventListener("scroll", this.handleScroll);
    }
}
</script>

<style scoped>
    .flexs{
        position:fixed !important;
        top:14.5vw !important;
        border-radius: 0 !important;
    }
    .checkBg {
        background-color: rgba(255, 255, 255, .5);
        border-radius: 3.8vw;
        padding: 1vw 1.5vw;
    }

    .StaRDynamic {
        animation: RunningLantern linear 5s infinite;
    }

    .multipleBg {
        background-color: rgba(255, 255, 255, .5);
        border-radius: 5vw;
        padding: 1vw 1.5vw;
    }

    .acitve > * {
        color: rgb(255, 0, 0) !important;
    }

    .starBg {
       background-color: rgba(240, 105, 105, 0.8);
        border-radius: 5vw;
        padding: 1vw 1.5vw;
    }

    .panel {
        transition: all 3s;
    }

    .angle {
        transform: rotate(180deg);
    }

    @keyframes RunningLantern {
         0%{
            transform: translateX(50vw);
        }
        50%{
            transform: translateX(-20vw);
        }
        100%{
            transform:translateX(-40vw);
        }
    }
    
    .absTob {
        top:4vw !important;
        transition: all .3s ease-in-out;
    }

    .absBot {
        bottom: 4vw !important;
        transition: all .3s ease-in-out;
    }
</style>