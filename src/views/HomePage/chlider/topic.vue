<template>
    <card :title="resource.uiElement.subTitle.title">
        <Scroll class="overflow-hidden w-[82%] m-auto">
            <div class="flex" :style="{ width: `${this.topicData.length * 35}vw` }">
                <div v-for="item in topicData" :key="item.id">
                    <router-link :to="{path:`/SingingListDetails/`,query:{id:item.creativeId}}" tag="div">
                        <div class="w-[35vw]">
                            <div class="w-[30vw] h-[30vw] rounded-[2vw] overflow-hidden">
                                <img :src="item.uiElement.image.imageUrl">
                            </div>
                            <div class="w-[30vw] line-clamp-2 dark:text-[#ccc]">
                                <p>{{item.uiElement.mainTitle.title}}</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </Scroll>
    </card>
</template>

<script>
export default {
    data(){
        return {
            topicData:[]
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
        console.log('雷达歌单的数据',creatives);
        this.topicData = creatives
    },
}
</script>

<style>

</style>