<template>
  <card :title="resource.uiElement.subTitle.title">
        <Scroll class="overflow-hidden w-[82%] m-auto">
            <div class="flex dark:text-[#ccc]" :style="{ width: `${this.resource.creatives.length * 75}vw` }">
                <div v-for="creative in digital" :key="creative.id" >
                    <div v-for="res in creative.resources" :key="res.id">
                        <div class="w-[75vw] flex justify-around mt-[3vw]">
                            <div class="w-[18vw] h-[18vw] rounded-[2vw] overflow-hidden">
                                <img :src="res.uiElement.image.imageUrl">
                            </div>
                            <div class="w-[50vw] h-[20vw] pt-[2.5vw]">
                                <p class="text-gray-300 text-[3vw]">{{res.uiElement.mainTitle.title}}</p>
                                <p class=" text-slate-400 text-[2.5vw]" v-if="res.uiElement.subTitle">
                                    {{res.uiElement.subTitle.title}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Scroll>
  </card>
</template>

<script>
export default {
    data(){
        return {
            digital:[]
        }
    },
    props:{
        resource:{
            type:Object,
            required:true
        }
    },
    created(){
        let {creatives} = this.resource;
        console.log('新歌新碟/数字专辑接收的数据',creatives);
        this.digital = creatives;
    },
}
</script>

<style>
    
</style>