<template>
    <video id="player" class="player" ref="player" playsinline controls>
        <source :src="url" type="video/mp4" />
    </video>
</template>

<script>
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

export default {
    name:'VideoPlayder',
    data(){
        return {
            player:null
        }
    },
    props:{
        url:{
            type:String,
            required:true
        }
    },
    mounted() {
        this.player = new Plyr(this.$refs.player,{
            controls:['play'],
            autoplay:true,
        });
    }
}
</script>

<style scoped>
   
</style>