<template>
    <div class="w-[100px] h-[100px] bg-red-400 rounded-md mx-auto mt-[100px]">
        Home
        {{count}}
        <div class="leading-[50px] text-center bg-lime-200" >
            div
        </div>
        <button @click="SET_COUNT()" class="bg-cyan-200">同步</button>
        <button @click="delayserCount()" class="bg-rose-300">异步</button>
    </div>
</template>

<script>
import { mapState,mapMutations,mapActions} from 'vuex'
import {SET_COUNT} from "@/store/mutation.type";
// import store from '@/store'
// import { mapState } from '@/store'
export default {
    name:'home-index',
    computed:{
        ...mapState(['count']),
        
    },
    methods:{
        ...mapMutations([SET_COUNT]),
        ...mapActions(['delayserCount'])
    },
    // created(){
    //     console.log(store == this.$store); //true
    // }
};
</script>

<style>

</style>