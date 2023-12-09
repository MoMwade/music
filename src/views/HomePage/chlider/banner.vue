<template>
    <div class="swiper-container swiperBanner w-[95vw] h-[40vw] m-[auto] rounded-[3vw] text-center bg-red-100">
        <div class="swiper-wrapper" id="swiperBanner">
            <!-- <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div> -->
            <div class="swiper-slide w-[100%] h-[100%]" v-for="item in bannerArr" :key="item.id">
                <img :src="item.pic" class="w-[100%] h-[100%]">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
            
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
            
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </div>
</template>

<script scoped>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
    data(){
        return {
            bannerArr:[],
            thumbsArray:[]
        }
    },
    props:{
        resource: {
            type: Object,
            required: true,
        },
    }, 
    created(){
        console.log('轮播图接受的数据',this.resource.extInfo.banners);
        this.bannerArr = this.resource.extInfo.banners
    },
    mounted(){
        new Swiper ('.swiperBanner', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            
            
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },

            // 自动切换
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },

            
            // 如果需要滚动条
            scrollbar: {
            el: '.swiper-scrollbar',
            }
        })    
    }
}
</script>

<style>

</style>