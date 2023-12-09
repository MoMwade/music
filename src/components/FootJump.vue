<template>
    <div>
        <div class="h-[18vw]"></div>
        <div class="fixed bottom-0 w-[100%] h-[18vw] bg-white dark:bg-[#2C2C2C] z-40 ">
            <ul class="flex justify-around items-center text-center text-[3vw]  w-[100%] h-[18vw] bg-white dark:bg-[#2C2C2C]">
                <li class="w-[15%] h-[60%] flex flex-col justify-around items-center">
                    <router-link to="/HomePage" tag="div">
                        <Icon icon="ri:netease-cloud-music-fill" color="#ccc" class="text-[6vw]"/>
                        <p class=" text-zinc-400">首页</p>
                    </router-link>
                </li>

                <li class="w-[15%] h-[60%] flex flex-col justify-around items-center">
                    <router-link to="/MV" tag="div">
                        <Icon icon="fa6-solid:ranking-star" color="#ccc" class="text-[6vw]"/>
                        <p class=" text-zinc-400">排行榜</p>
                    </router-link>
                </li>
                <li class="w-[15%] h-[60%] flex flex-col justify-around items-center">
                    <router-link to="/user" tag="div">
                        <Icon icon="wpf:musical-notes" color="#ccc" class="text-[6vw]"/>
                        <p class=" text-zinc-400">我的</p>
                    </router-link>
                </li>
                <li class="w-[15%] h-[60%] flex flex-col justify-around items-center">
                    <Icon icon="fluent-mdl2:reminder-person" color="#ccc" class="text-[6vw]"/>
                    <p class=" text-zinc-400">关注</p>
                </li>
                <li class="w-[15%] h-[60%] flex flex-col justify-around items-center">
                    <Icon icon="pixelarticons:message-text" color="#ccc" class="text-[6vw]"/>
                    <p class=" text-zinc-400">社区</p>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>
   
</style>