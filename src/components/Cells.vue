<template>
    <div class="m-[2vw] bg-white rounded-[3vw]">
        <div v-show="titleShow">
            <div class="p-[2.5vw] pl-[5vw] border-b-[0.1vw] border-[#f5f5f5]">
                <p class="text-[3vw] text-[#969696]">{{title}}</p>
            </div>
        </div>
        <div class="pt-[1vw] pb-[1vw] pl-[5vw] pr-[5vw] PackRow text-[4vw]" :class="{divider:divider}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'Cells',
    props:{
        // 标题
        title:{
            type:String,
            default:''
        },
        // 是否显示标题
        titleShow:{
            type:Boolean,
            default:true
        },
        // 是否显示分割线
        divider:{
            type:Boolean,
            default:true
        }
    },
    // 参数
    // divider:false, //分割线
    // titleShow:false, //标题是否显示
    // title:'音乐服务', //标题
}
</script>

<style scoped>
    .PackRow > * {
        margin: 1.5vw 0;
        line-height: 8vw;
    }

    .divider > * {
       border-bottom: 1px solid #f5f5f5;
    }

    .divider > *:last-child {
         border:none;
    }
</style>