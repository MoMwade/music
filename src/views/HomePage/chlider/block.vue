<template>
    <div>
        <component :is="blockTypeComponents[resource.blockCode]" :resource="resource"></component>
    </div>
</template>

<script>
import banner from './banner.vue'
import recommend from './recommend.vue'
import SongSheet from './SongSheet.vue'
import DigitalMusicTracks from './DigitalMusicTracks.vue'
import topic from './topic.vue'

const blockTypeComponents = {
    HOMEPAGE_BANNER:banner,
    HOMEPAGE_BLOCK_OLD_DRAGON_BALL:recommend,
    HOMEPAGE_BLOCK_PLAYLIST_RCMD:SongSheet,
    HOMEPAGE_BLOCK_STYLE_RCMD:DigitalMusicTracks,
    HOMEPAGE_BLOCK_MGC_PLAYLIST:topic,
}

export default {
    name:'Block',
    data(){
        return {
            blockTypeComponents
        } 
    },
    props:{
        resource:{
            type:Object,
            required:true
        }
    },
    created(){
        console.log(this.resource.blockCode);
    }
}
</script>

<style>

</style>