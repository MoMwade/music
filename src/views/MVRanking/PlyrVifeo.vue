<template>
   <div class="w-[100vw] h-[100vh] overflow-hidden bg-black relative text-white">
        <div class="p-[5vw] flex justify-between items-center text-[7vw]">
            <div class="w-[70%]">
                <Icon icon="ion:chevron-back-sharp" />
            </div>
            <div  class="w-[25%] flex justify-between items-center">
                <Icon icon="ri:picture-in-picture-2-fill" />
                <Icon icon="mingcute:more-2-fill" />    
            </div>
        </div>
        <div v-if="mvUrl">
            <!-- <video :src="mvUrl" autoplay></video> -->
            <VideoPlayer :url="mvUrl"></VideoPlayer>
        </div>
        <ul class="absolute text-[6vw] leading-[15vw] top-[50%] right-[5vw]">
            <li class="flex items-center">
                <Icon icon="mdi:like" />
                <p class="text-[4vw]">{{mvInfo.likedCount}}</p>
            </li>
            <li class="flex items-center">
                <Icon icon="ant-design:comment-outlined" />
                <p class="text-[4vw]">{{mvInfo.commentCount}}</p>
            </li>
            <li class="flex items-center">
                <Icon icon="entypo:forward" />
                <p class="text-[4vw]">{{mvInfo.shareCount}}</p>
            </li>
            <li class="flex flex-col items-center leading-[6vw]">
                <Icon icon="fluent:collections-16-filled" />
                <p class="text-[4vw]">收藏</p>
            </li>
        </ul>
        <div class="fixed w-[100%] bottom-0 pl-[5vw] pr-[5vw]">
            <div class="text-[4vw] flex items-center">
                <div class="flex items-center">
                    <div class="w-[10vw] h-[10vw] rounded-[50%] border-[0.5vw] border-white overflow-hidden">
                        <img :src="artists.img1v1Url">
                    </div>
                    <p class="pl-[2vw] pr-[2vw]">{{mvDetail.artistName}}</p>
                </div>
                <div class="rounded-[50%] relative w-[8vw] h-[8vw] text-[8vw]">
                    <Icon icon="icon-park-solid:add-one" color="red" class="absolute z-10" />
                    <div class="absolute rounded-[50%] bg-white top-[1vw] left-[1vw] w-[6vw] h-[6vw]"></div>
                </div>
            </div>
            <div class="w-[70vw] mt-[2vw] mb-[4vw]">
                <div class="flex justify-between items-center">
                    <span class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC] text-[4vw]">MV</span>
                    <div class="w-[75%] line-clamp-1">
                        {{mvDetail.name}}
                    </div>
                    <div @click="iSdesc = !iSdesc">
                        <Icon icon="ri:arrow-up-s-line" :rotate="2" />
                    </div> 
                </div>
                <div :class="{tran:iSdesc,}" class="tranShow max-h-[40vh] overflow-y-auto">
                    {{mvDetail.desc}}
                </div>

            </div>
            <div class="flex justify-between">
                <div class="w-[60%] flex justify-between items-center">
                    <Icon icon="mingcute:music-2-fill" />
                    <div class="w-[80%] overflow-hidden father flex items-center">
                        <marquee v-if="mvDetail.desc">{{mvDetail.desc}}</marquee>
                    </div>
                    <Icon icon="ph:heart-light" />
                </div>
                <div class="w-[8vw] h-[8vw] rounded-[50%]  overflow-hidden">
                    <img class="w-[100%] h-[100%]" :src="mvDetail.cover">
                </div>
            </div>
            <div class="text-[4vw] pt-[3vw] pb-[3vw] text-gray-200 flex justify-between items-center">
                <div>
                    <p>发条评论结识有趣的人</p>
                </div>
                <Icon icon="ci:expand" :rotate="1" />
            </div>
        </div>
   </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer";
import { getMvUrl,getMvDetailInfo,getMvDetail } from "@/service";
export default {
    data(){
        return {
            mvUrl:'',
            mvInfo:{},
            mvDetail:{},
            artists:{},
            iSdesc:true
        }
    },
    async created() {
        const [err,res] = await getMvUrl({id:this.$route.query.id});
        if(err) return console.log(err);
        this.mvUrl = res.data.data.url;
        // 传入 mvid ,可获取对应 MV 点赞转发评论数数据
        const [Infoerr,Infores] = await getMvDetailInfo({mvid:this.$route.query.id});
        if(Infoerr) return console.log(Infoerr);
        this.mvInfo = Infores.data;
        //获取 mv 数据
        const [Mverr,Mvres] = await getMvDetail({mvid:this.$route.query.id});
        if(Mverr) return console.log(Mverr);
        console.log(Mvres);
        this.mvDetail = Mvres.data.data;
        this.artists = this.mvDetail.artists[0]
        console.log('mv 数据',this.mvDetail);
    },
    components: {
        VideoPlayer,
    },
}
</script>

<style scoped>
    .tran {
        max-height: 0;
        overflow: hidden;
    }

    .tranShow {
        transition: max-height 1s;
    }

    .DynamicEffect {
        animation: dnect 3s linear infinite both alternate;
    }

    @keyframes dnect {
        0% {
            transform: translateX(0);
        }

        25% {
            transform: translateX(-25%);
        }

        50% {
            transform: translateX(-50%);
        }

        75% {
            transform: translateX(-70%);
        }

        100% {
            transform: translateX(-100%);
        }
    }


</style>