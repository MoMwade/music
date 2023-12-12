<template>
    <div class="dark:bg-black">
        <div class="flex justify-around items-center w-[100%] h-[18vw] dark:text-[#ccc]">
            <div @click="showPopup">
                <Icon icon="material-symbols:menu" class="text-[7vw] dark:text-[#ccc] text-black" />
            </div>
            <div class="relative w-[68%]">
                <Icon icon="iconamoon:search-duotone" color="darkgray" class="text-[5vw] absolute left-[3vw] top-[25%]"/>
                <input type="text" placeholder="Love IS Gone(Acoustic)" class="w-[100%] h-[10vw] pl-[10vw] rounded-[5vw] border-solid border-[0.6vw] border-indigo-200 outline-none text-[4vw]">
                <Icon icon="tabler:line-scan" color="darkgray" class="text-[5vw] absolute right-[3vw] top-[25%]" />
            </div>
            <Icon icon="solar:microphone-large-bold-duotone" class="text-[7vw]" />
        </div>
        <van-popup 
        v-model="show"
        position="left" 
        :style="{ height: '100%',width: '85%',background:'#f1f1f1'}"> 
            <div class="dark:bg-black dark:text-[#ccc]">
                <Scroll :config="{scrollY: true, click: true, bindToWrapper: true}" style="height:100vh">
                    <div  class="p-[3vw] m-[0]" >
                        <!-- 登录状态 -->
                        <div class="flex justify-between items-center">
                            <div class="w-[80%]">
                                <div v-if="auth.cookie" class="flex justify-between items-center">
                                    <div class="w-[7vw] h-[7vw] rounded-[50%] flex justify-center items-center overflow-hidden">
                                        <img :src="UserInfor.profile.avatarUrl">
                                    </div>
                                    <router-link to="/user" tag="div" class="w-[85%] flex items-center">
                                        <p class="text-[4vw] mr-[2vw] line-clamp-1">{{UserInfor.profile.nickname}}</p>
                                        <Icon icon="ep:arrow-up" :rotate="1" class="text-[3vw]" />
                                    </router-link>
                                </div>
                                <div v-else class="flex justify-between items-center">
                                    <div class="bg-[#f4f4f1] w-[7vw] h-[7vw] rounded-[50%] flex justify-center items-center overflow-hidden">
                                        <Icon icon="mingcute:user-3-fill" class="text-[#f9dada] text-[7vw]" />
                                    </div>
                                    <router-link to="/login" tag="div" class="w-[85%] flex items-center">
                                        <p class="text-[4vw] mr-[2vw]">即刻登录</p>
                                        <Icon icon="ep:arrow-up" :rotate="1" class="text-[3vw]" />
                                    </router-link>
                                </div>
                            </div>
                            <div>
                                <Icon icon="fluent:scan-dash-20-filled" class="text-[8vw]" />
                            </div>
                        </div>
                        <!-- 单元格 -->
                        <Cells :divider='false' :titleShow='false' class="bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] mb-[5vw]">
                            <div class="flex justify-between leading-[8vw] items-center border-b-[1px] border-[#4c4544]">
                                <div class="text-[3vw] text-[#978989]">
                                    <h3 class="text-[4vw] text-[#f0e0de]">开通黑椒会员VIP</h3>
                                    <p>点击恢复超21项专享特权</p>
                                </div>
                                <div class="w-[18vw] h-[5vw] text-[#978989] border-[#978989] border-[1px] rounded-[3vw] flex justify-center items-center">
                                    <p class="text-[3vw]">会员中心</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center text-[#978989]">
                                <div class="text-[3vw]">
                                    <p>受邀专享,黑胶VIP低至0.27元/天!</p>
                                </div>
                                <div class="h-[6vw] w-[6vw] bg-[#e54701] leading-[3.2vw] text-[#fff] rounded-[1vw] text-[2vw] flex flex-col items-center">
                                    <p>受邀</p>
                                    <p>专享</p>
                                </div>
                            </div>
                        </Cells>

                        <Cells :divider='true' :titleShow='false' class="dark:bg-[#2C2C2C]">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="solar:letter-linear" />
                                    <span class="ml-[2vw]">我的消息</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="streamline:shell" />
                                    <span class="ml-[2vw]">云贝中心</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <span class="text-[3.5vw]">签到</span>
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="lets-icons:lamp-light" />
                                    <span class="ml-[2vw]">创作者中心</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                        </Cells>

                        <Cells :divider='false' :titleShow='true' :title="`音乐服务`" class="dark:bg-[#2C2C2C]">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="streamline:hexagram" />
                                    <span class="ml-[2vw]">趣测</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <span>点击查看今日运势</span>
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="ic:twotone-how-to-vote" />
                                    <span class="ml-[2vw]">云村有票</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mdi:question-box-outline" />
                                    <span class="ml-[2vw]">多多西西口袋</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mdi:shopping-outline" />
                                    <span class="ml-[2vw]">商城</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:electrocardiogram" />
                                    <span class="ml-[2vw]">Beat专区</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <span>顶尖制作邀你创作</span>
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="emojione-monotone:bell" />
                                    <span class="ml-[2vw]">口袋彩铃</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="arcticons:game-booster" />
                                    <span class="ml-[2vw]">游戏专区</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <span>音乐灌溉治愈花园</span>
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                        </Cells>

                        <Cells :divider='false' :titleShow='true' :title="`其他`" class="dark:bg-[#2C2C2C]">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="fluent:phone-link-setup-24-regular" />
                                    <span class="ml-[2vw]">设置</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="fluent:clock-alarm-16-regular" />
                                    <span class="ml-[2vw]">定时关闭</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="line-md:moon-loop" />
                                    <span class="ml-[2vw]">深色模式</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <van-switch v-model="iSdarkState" active-color="#ee0a24" inactive-color="#cccccc" size="5vw" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="ant-design:skin-outlined" />
                                    <span class="ml-[2vw]">个性装扮</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="arcticons:hibymusic" />
                                    <span class="ml-[2vw]">边听边存</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <span>未开启</span>
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="arcticons:airmusic" />
                                    <span class="ml-[2vw]">在线听歌免流量</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="pepicons-print:music-note-single-circle-off" />
                                    <span class="ml-[2vw]">音乐黑名单</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <span>未开启</span>
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mdi:timer-music-outline" />
                                    <span class="ml-[2vw]">音乐闹钟</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="material-symbols-light:account-child-outline" />
                                    <span class="ml-[2vw]">青少年模式</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <span class="ml-[2vw]">音乐黑名单</span>
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                        </Cells>

                        <Cells :divider='true' :titleShow='false' class="dark:bg-[#2C2C2C]">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="material-symbols-light:contract-edit-sharp" />
                                    <span class="ml-[2vw]">我的订单</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-outline:coupon" />
                                    <span class="ml-[2vw]">优惠卷</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="ri:customer-service-2-fill" />
                                    <span class="ml-[2vw]">我的客服</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="arcticons:musicbrainz" />
                                    <span class="ml-[2vw]">分享网易云音乐</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="material-symbols-light:contract-outline-rounded" />
                                    <span class="ml-[2vw]">个人信息收集与使用清单</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="carbon:license-third-party" />
                                    <span class="ml-[2vw]">个人信息第三方共享清单</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="icon-park-twotone:personal-privacy" />
                                    <span class="ml-[2vw]">个人信息与隐私保护</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <Icon icon="mdi:about-circle-outline" />
                                    <span class="ml-[2vw]">关于</span>
                                </div>
                                <div class="text-[#b5b5b5] flex items-center">
                                    <Icon icon="ep:arrow-up-bold" :rotate="1" class="pl-[1vw]" />
                                </div>
                            </div>
                        </Cells>

                        <Cells  :divider='false' :titleShow='false' class="flex justify-center items-center dark:bg-[#2C2C2C] text-[3.6vw] text-[#ef4239] mt-[5vw]">
                            <p>关闭云音乐</p>
                        </Cells>
                    </div>
                </Scroll>
            </div>
        </van-popup>
        
    </div>
    
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            show: false,
            exitShow:true
        };
    },
	components: {
		// Icon,
	},
    methods:{
        showPopup() {
            this.show = true;
        },
        exit() {
            this.exitShow = true;
            console.log(1111);
        },
        removeExit() {
            this.exitShow = false;
        }
    },
    computed:{
        ...mapState(['auth','UserInfor','isDarkMode']),
        iSdarkState:{
            get(){
                return this.isDarkMode;
            },
            set(){
                this.$store.commit('UpiSdarkState');
            }
        }
    }
}
</script>

<style scoped>
   /* .rbga {
       background-color: rgba(0, 0, 0, .4);
       transform: translateX(100%);
       transition: all 1s ease-in-out;
   } */

   .BgRbgA {
        background-color: rgba(0, 0, 0, .4);
   }

   .zIndex {
     z-index: 100;
   }
</style>