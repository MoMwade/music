<template>
  <div>
    <div class="flex items-center justify-between pl-[8vw] pr-[8vw] text-[3.5vw] font-black font-mono">
        <div class="flex">
          {{ resource.uiElement.subTitle.title }}
          <Icon icon="lets-icons:expand-right-light" width="20" height="20" />
        </div>
        <Icon icon="ri:more-line" width="20" height="20" />
    </div>
    <div class="horizontal-scrollbar-container dark:text-[#ccc]">
        <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <div class="scroll-item" v-for="(item,index) in song" :key="index">
                <template v-if="item.resources.length > 1">
                    <div class="swiper-container SwiperSongSheet">
                        <div class="swiper-wrapper w-[30vw] h-[40vw]">
                            <div class="swiper-slide w-[30vw] h-[28vw]" v-for="item2 in item.resources" :key="item2.encodeId">
                              <router-link :to="{path:`/SingingListDetails/`,query:{id:item.creativeId}}" tag="div">
                                <div class="flex flex-col justify-around items-center text-center">
                                  <img :src="item2.uiElement.image.imageUrl" class="w-[28vw] h-[28vw] rounded-[2vw] overflow-hidden">
                                  <p class="line-clamp-2 dark:text-[#ccc]">{{item2.uiElement.mainTitle.title}}</p>
                                </div>
                              </router-link>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <router-link :to="{path:`/SingingListDetails/`,query:{id:item.creativeId}}" tag="div">
                      <div class="w-[28vw] h-[28vw] rounded-[2vw] overflow-hidden">
                        <img class="w-[100%] h-[100%]" :src="item.resources[0].uiElement.image.imageUrl">
                      </div>
                      <p class="line-clamp-2 dark:text-[#ccc]">{{item.resources[0].uiElement.mainTitle.title}}</p>
                    </router-link>
                </template>
                
                
            </div>
        </div>
        </div>
    </div>

  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
BScroll.use(PullDown)
 export default {
    data () {
      return {
        song:[],
      }
    },
    props:{
      resource:{
        type:Object,
        required:true
      }
    },
    created() {
        let {creatives} = this.resource
        console.log('推荐歌单-数据',creatives);
        this.song = creatives
    },
    mounted() {
      this.init()
      new Swiper ('.SwiperSongSheet', {
            direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            // 自动切换
            autoplay: true,
            effect : 'flip',
            flipEffect: {
              slideShadows : true,
              limitRotation : true,
            }
        }) 
    },
    beforeDestroy() {
      this.scroll.destroy()
    },
    methods: {
      init() {
        this.scroll = new BScroll(this.$refs.scroll, {
          scrollX: true,
          scrollY: false,
          click: true,
          probeType: 1,
          scrollbar: {
            fade: false,
            interactive: true,
            scrollbarTrackClickable: true,
            scrollbarTrackOffsetType: 'clickedPoint' // can use 'step'
          }
        })
      },
    }
  }

</script>

<style scoped>
.horizontal-scrollbar-container .scroll-wrapper {
	 position: relative;
	 display: flex;
	 align-content: center;
	 width: 90%;
	 height: 40vw;
	 margin: 1vw auto;
	 white-space: nowrap;
	 border-radius: 5px;
	 overflow: hidden;
}
 .horizontal-scrollbar-container .scroll-wrapper .scroll-content {
	 display: flex; 
	 align-self: center;
}
 .horizontal-scrollbar-container .scroll-wrapper .scroll-item {
	 /* opacity: 0.6; */
	 color: #000;
	 box-sizing: border-box;
	 height: 38vw;
	 width: 30vw;
	 line-height: 10px;
	 /* border-radius: 50%; */
	 font-size: 12px;
	 display: inline-block;
	 text-align: center;
	 padding: 0 10px;
	 margin: 0 10px;
     display: flex;
     /* justify-content: center;
     align-items: center; */
     flex-direction: column;
}

.horizontal-scrollbar-container .scroll-wrapper .scroll-item p {
    width: 30vw;
    height: 10vw;
    line-height: 4.5vw;
    font-size: 3vw;
    word-wrap: break-word;
    white-space: normal;
    box-sizing: border-box;
	text-overflow: ellipsis;
    overflow: hidden;
}



</style>