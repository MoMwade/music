<template>
    <div class="dark:bg-black dark:text-[#ccc]">
        <div class="p-[3vw] text-center">
            <h3 class="text-[4.8vw] font-[600]">MV排行榜</h3>
        </div>
        <van-tabs v-model="activeName" animated background='rgba(255, 0, 0, 0)'>
            <van-tab  v-for="(item,index) in area" :key="index+1" :title="item" :name="item" @click="getMvData()" >
                    <div class="w-[90vw] dark:bg-black  m-auto pt-[2vw] pb-[2vw]" v-for="(artist,index) in MVdata" :key="artist.id">
                        <router-link :to="{path:`/pv/`,query:{id:artist.id}}" tag="div">
                            <div class="w-[100%] h-[52vw] rounded-[3vw] overflow-hidden">
                                <img class="w-[100%] h-[100%]" :src="artist.cover">
                            </div>
                            <div class="flex text-[4.3vw] mt-[2vw]">
                                <p :class="{Popular:index<3}">{{index+1}}</p>
                                <div class="text-[4vw] ml-[5vw]">
                                    <p>{{artist.name}}</p>
                                    <p class="text-[2vw] text-[#e5e7eb]">{{artist.artistName}}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
            </van-tab>
        </van-tabs>
        <FootJump></FootJump>
    </div>
</template>

<script>
import { getTopMv } from "@/service";

export default {
    data() {
        return {
            activeName: '港台',
            area:['内地','港台','欧美','日本','韩国'],
            MVdata:[],
            
        };
    },
    methods: {
        // 获取排行榜
        async getMvData() {
            const [err,res] = await getTopMv({area:this.activeName,limit:50});
            if(err) return console.log(err);
            let MVdata = res.data.data;
            this.MVdata = MVdata;
            console.log(this.MVdata);

           
        }
    },
    watch:{
        activeName(){
            this.getMvData();
        }
    },
    created() {
        this.getMvData();
    },
}
</script>

<style scoped>
    .Popular {
        color: #ff0000;
    }
</style>