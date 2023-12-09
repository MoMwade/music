<template>
    <div class="h-[100%] bg-gray-100 dark:bg-black dark:text-[#ccc]">
        <HeadSearch></HeadSearch>
        <Block v-for="item in blocks" :key="item.id" :resource="item"></Block>
        <!-- <router-link to="SingingListDetails/:1825">歌单</router-link> -->
        <FootJump></FootJump>
    </div>
</template>

<script>
import Block from './chlider/block.vue'
import { mapState } from 'vuex'

export default {
    components: {
        Block,
    },
    computed:{
        ...mapState(['blocks'])
    }
}
</script>

<style>

</style>