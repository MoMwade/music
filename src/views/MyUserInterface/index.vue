<template>
    <div class="bg-gray-100 dark:bg-black dark:text-[#ccc]">
        <div class="w-[100%] h-[15vw] flex justify-between items-center pl-[3vw] pr-[3vw] text-[4vw] fixed top-0" :class="{BG:HeadShow}">
            <Icon icon="material-symbols:menu" class="text-[6vw]" />
            <div class="w-[50vw] pl-[2vw] pr-[2vw]" v-show="HeadShow">
                <div class="flex justify-around items-center ">
                    <div class="w-[8vw] rounded-[50%] overflow-hidden">
                        <img :src="profile.avatarUrl">
                    </div>
                    <p>{{profile.nickname}}</p>
                </div>
            </div>
            <Icon icon="ri:search-line" class="text-[6vw]" />
        </div>
        <div class="h-[20vw]"></div>
        <!-- 用户信息 -->
        <div :style="{opacity:opacity}" class="w-[90vw] h-[20vw] flex flex-col items-center m-auto bg-white dark:bg-[#2C2C2C] rounded-[2vw] relative">
            <div class="w-[15vw] absolute top-[-8vw]">
                <img :src="profile.avatarUrl" class="rounded-[50%]">
            </div>
            <div class="w-[16vw] p-[1vw] flex items-center justify-center rounded-[3vw] bg-white absolute top-[-15vw]">
                <Icon icon="lets-icons:add-light" class="text-[3vw]" />
                <p class="text-[2.4vw]">添加状态</p>
            </div>
            <h2 class="pt-[8vw] text-[4vw] font-[600]">{{profile.nickname}}</h2>
            <ul class="mt-[1vw] w-[60%] follows flex justify-around text-gray-400 text-[3vw]">
                <li>{{profile.follows}} 关注</li>
                <li>{{profile.followeds}} 粉丝</li>
                <li>Lv.{{UserData.level}}</li>
            </ul>
        </div>
        <!-- 音乐应用 -->
        <div class="w-[90vw] m-auto mt-[8vw] bg-white dark:bg-[#2C2C2C] rounded-[2vw]">
            <div class="flex justify-around flex-wrap p-[2vw]">
                <div class="flex flex-col items-center w-[22%]">
                    <Icon icon="carbon:play-filled" color="red" class="text-[7.2vw]"/>
                    <p class="text-[2.6vw]">最近播放</p>
                </div>
                <div class="flex flex-col items-center w-[22%] relative">
                    <div class="absolute left-[2vw] bottom-[1.2vw]">
                        <Icon icon="emojione-monotone:new-moon" color="red" class="text-[1vw]" />
                    </div>
                    <Icon icon="arcticons:music-downloader" color="red" class="text-[7vw]"/>
                    <p class="text-[2.6vw]">本地下载</p>
                </div>
                <div class="flex flex-col items-center w-[22%]">
                    <Icon icon="fluent:cloud-16-filled" color="red" class="text-[8vw]"/>
                    <p class="text-[2.6vw]">云盘</p>
                </div>
                <div class="flex flex-col items-center w-[22%]">
                    <Icon icon="mdi:shopping" color="red" class="text-[7vw]"/>
                    <p class="text-[2.6vw]">已购</p>
                </div>
                <div class="flex flex-col items-center w-[22%]">
                    <Icon icon="fa-solid:user-friends" color="red" class="text-[6vw]"/>
                    <p class="text-[2.6vw]">我的好友</p>
                </div>
                <div class="flex flex-col items-center w-[22%]">
                    <Icon icon="ph:star-fill" color="red" class="text-[6vw]"/>
                    <p class="text-[2.6vw]">收藏和赞</p>
                </div>
                <div class="flex flex-col items-center w-[22%]">
                    <Icon icon="icomoon-free:podcast" color="red" class="text-[6vw]"/>
                    <p class="text-[2.6vw]">我的播客</p>
                </div>
                <div class="flex flex-col items-center w-[22%]">
                    <Icon icon="bi:heart-half" color="red" class="text-[6vw]"/>
                    <p class="text-[2.6vw]">乐迷团</p>
                </div>
            </div>
            <div class="flex justify-center items-center p-[1vw] border-t-[1px] dark:bg-[#2C2C2C] border-gray-50 dark:border-[#111]">
                <Icon icon="lets-icons:add-light" class="text-[3vw]" />
                <p class="text-[3vw] text-slate-300">音乐应用</p>
            </div>
        </div>
        <!-- 我喜欢的音乐 -->
        <div class="w-[90vw] m-auto mt-[8vw] bg-white dark:bg-[#2C2C2C] rounded-[2vw] flex justify-between items-center p-[3vw]">
            <div class="flex justify-around items-center w-[50%]">
                <div class="w-[15vw] rounded-[2vw] overflow-hidden">
                    <img :src="MyFavorite.coverImgUrl">
                </div>
                <div class="text-[3.5vw]">
                    <p>我喜欢的音乐</p>
                    <p class="text-gray-300">{{MyFavorite.trackCount}}首</p>
                </div>
            </div>
            <div class="w-[20vw] p-[3px] border-[1px] rounded-[3vw] flex justify-around items-center border-gray-300">
                <Icon icon="solar:heart-pulse-linear" :horizontalFlip="true" />
                <p class="text-[3vw]">心动模式</p>
            </div>
        </div>
        <!-- 歌单 -->
        <ul class="w-[80vw] ge flex justify-between items-center text-gray-400 text-[3.8vw] m-auto p-[4vw]">
            <li v-for="item in Playlists" :key="item.id">
                <a :href="'#'+item.anchor">{{item.point}}</a>
            </li>
        </ul>
        <!-- 创建歌单 -->
        <div id="Create"  class="w-[90vw] m-auto dark:bg-[#2C2C2C] bg-white rounded-[2vw] p-[3vw]">
            <div class="flex justify-between items-center">
                <p class="text-[3vw] text-gray-400">创建歌单({{CreatePlaylists.length}}个)</p>
                <div class="flex justify-between items-center w-[15%]">
                    <Icon icon="lets-icons:add-light" color="#ccc" class="text-[5vw]" />
                    <Icon icon="mingcute:more-2-fill" color="#ccc" :horizontalFlip="true"  class="text-[5vw]" />
                </div>
            </div>
            <div class="w-[60%] mt-[2vw]">
                <div class="flex items-center justify-around mt-[2vw]" v-for="item in CreatePlaylists" :key="item.id">
                    <div class="w-[30%] h-[15vw] rounded-[2vw] overflow-hidden">
                        <img :src="item.coverImgUrl">
                    </div>
                    <div class="text-[3.5vw] w-[60%]">
                        <p>{{item.name}}</p>
                        <p class="text-gray-300">{{item.trackCount}}首</p>
                    </div>
                </div>
                <div class="flex items-center justify-around mt-[2vw]">
                    <div class="w-[30%] h-[15vw] relative rounded-[2vw] overflow-hidde bg-gray-100">
                        <Icon icon="mingcute:file-import-line" class="text-[10vw] absolute top-[15%] left-[15%]" />
                    </div>
                    <div class="text-[3.5vw] w-[60%]">
                        <p>一键导入外步音乐</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 收藏歌单 -->
        <div id="Collect" class="w-[90vw] m-auto mt-[3vw] dark:bg-[#2C2C2C] bg-white rounded-[2vw] p-[3vw]">
            <div class="flex justify-between items-center">
                <p class="text-[3vw] text-gray-400">收藏歌单<span v-if="CollectPlaylists.length != 0">({{CollectPlaylists.length}}个)</span></p>
                <div class="flex justify-between items-center">
                    <Icon icon="mingcute:more-2-fill" color="#ccc" :horizontalFlip="true"  class="text-[5vw]" />
                </div>
            </div>
            <div class="w-[100%] mt-[2vw]">
                <div v-if="CollectPlaylists.length != 0">
                    <div class="flex items-center justify-between mt-[2vw]" v-for="item in CollectPlaylists" :key="item.id">
                        <div class="w-[20%] h-[15vw] rounded-[2vw] overflow-hidden">
                            <img :src="item.coverImgUrl">
                        </div>
                        <div class="text-[3.5vw] w-[77%]">
                            <p class="line-clamp-1">{{item.name}}</p>
                            <p class="text-gray-300">{{item.trackCount}}首&nbsp;<span>by&nbsp;{{item.creator.nickname}}</span></p>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="flex justify-center items-center mt-[2vw]">
                        <div class="text-[3.5vw] p-[2vw]">
                            <p class="text-gray-400 text-center">暂无收藏的歌单</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <!-- 歌单助手 -->
        <div id="Assistant" class="w-[90vw] m-auto mt-[3vw] bg-white dark:bg-[#2C2C2C] rounded-[2vw] p-[3vw] mb-[3vw]">
            <div class="flex justify-between items-center">
                <p class="text-[3vw] text-gray-400">歌单助手</p>
            </div>
            <div class="flex flex-col items-center mt-[2vw]">
                <p class="text-gray-400 text-[3.5vw]">你可以从歌单中筛选出</p>
                <div class="h-[10vw] overflow-hidden zhus">
                    <ul class="text-center text-[4vw]">
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                    </ul>
                    <ul class="text-center text-[4vw]">
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                        <li>最近一年陈奕迅发布新曲</li>
                        <li>80年代华语老歌</li>
                    </ul>
                </div>
            </div>
        </div>
        <FootJump></FootJump>
    </div>
</template>

<script>
import { getUserDetail,getUserPlaylist } from '@/service'
export default {
    data(){
        return {
            UserData:{},
            profile:{},
            HeadShow:false,
            opacity:1,
            MyFavorite:{},
            CreatePlaylists:{},
            CollectPlaylists:{},
            Playlists:[
                {id:1,anchor:'Create',point:'创建歌单'},
                {id:2,anchor:'Collect',point:'收藏歌单'},
                {id:3,anchor:'Assistant',point:'歌单助手'},
            ]
        }
    },
    async created() {
        // console.log(this.$store.state.auth.account.id);
        // 用户详情
        const [err,res] = await getUserDetail({uid:this.$store.state.auth.account.id})
        if(err) return console.log(err)
        this.UserData = res.data
        this.profile = res.data.profile
        // 用户歌单
        const [PlaylistErr,Playlist] = await getUserPlaylist({uid:this.$store.state.auth.account.id})
        if(PlaylistErr) return console.log(PlaylistErr)
        let {data:{playlist}} = Playlist
        console.log('用户歌单',playlist);
        this.MyFavorite = playlist[0]
        this.CreatePlaylists = playlist.filter((item,index)=>index != 0 && !item.subscribed) 
        this.CollectPlaylists = playlist.filter(item => item.subscribed) 
    },
    methods:{
        UserShow(){
            this.opacity = 1-window.scrollY/100;
            if(this.opacity <= 0){
                this.opacity = 0
                this.HeadShow = true
            } else {
                this.HeadShow = false
            }
        },
    },
    mounted(){
        window.addEventListener("scroll", this.UserShow);
    }
}
</script>

<style scoped>
 .BG{
    background: white;
    z-index: 100;
 }

 .follows li{
    position: relative;
 }

 .follows li::after{
    content: "";
    position: absolute;
    width: 0.1vw;
    height: 3vw;
    right: -4vw;
    background: #e3e3e3;
    top: 1vw;
 }

 .follows li:nth-child(3)::after{
    content: "";
    width: 0;
 }

 /* .ge li{
    position: relative;
 }

  .ge li.active{
    color: black;
  }

  .ge li.active::before {
    content: "";
    position: absolute;
    bottom: -1vw;
    left: 50%;
    transform: translateX(-50%);
    width: 3vw;
    height: 0.6vw;
    border-radius: 2vw;
    background: rgb(255, 1, 1);
  }

 .ge li::after{
    content: "";
    position: absolute;
    width: 0.1vw;
    height: 3vw;
    right: -6vw;
    background: #e3e3e3;
    top: 1.5vw;
 }

 .ge li:nth-child(3)::after{
    content: "";
    width: 0;
 } */

 .zhus ul {
    line-height: 7vw;
    animation: zhun 20s 3s infinite;
 }

 @keyframes zhun {
    0% {
        transform: translateY(0);
    }
    10% {
        transform: translateY(-10%);
    }
    20% {
        transform: translateY(-20%);
    }
    50% {
        transform: translateY(-50%);
    }
    100% {
        transform: translateY(-100%);
    }
 }

 
</style>