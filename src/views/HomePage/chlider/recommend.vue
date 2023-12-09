<template>
  <div class="horizontal-scrollbar-container dark:text-[#ccc]">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item flex flex-col justify-around items-center text-center" v-for="(item,index) in find" :key="index">
          <!--  -->
          <div v-if="item.uiElement.mainTitle.title == '每日推荐'" class="relative">
            <p class="absolute text-[4vw] top-[45%] left-[25%] font-black text-slate-50">{{day}}</p>
            <p><img :src="item.uiElement.image.imageUrl2"></p>
          </div>
          <div v-else>
            <p><img :src="item.uiElement.image.imageUrl2"></p>
          </div>
          <p class="text-[3vw] dark:text-[#ccc]">{{item.uiElement.mainTitle.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
BScroll.use(PullDown)
 export default {
    data () {
      return {
        find:[],
      }
    },
    props:{
      resource:{
        type:Object,
        required:true
      }
    },
    async created() {
        let {creatives} = this.resource
        console.log('发现接受的数据',creatives[0].resources);
        this.find = creatives[0].resources
    },
    mounted() {
      this.init()
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
      }
    },
    computed: {
        day(){
            return new Date().getDate()
        }
    }
  }

</script>

<style scoped>
.horizontal-scrollbar-container .scroll-wrapper {
	 position: relative;
	 display: flex;
	 align-content: center;
	 width: 90%;
	 height: 20vw;
	 margin: 1vw auto;
	 white-space: nowrap;
	 border-radius: 5px;
	 overflow: hidden;
}
 .horizontal-scrollbar-container .scroll-wrapper .scroll-content {
	 display: inline-block;
	 align-self: center;
}
 .horizontal-scrollbar-container .scroll-wrapper .scroll-item {
	 color: #325;
	 box-sizing: border-box;
	 height: 15vw;
	 width: 15vw;
	 line-height: 10px;
	 font-size: 18px;
	 display: inline-block;
	 text-align: center;
	 padding: 0 10px;
	 margin: 0 10px;
}
</style>