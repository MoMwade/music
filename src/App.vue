<template>
  <div id="app" :class="{dark:isDarkMode}">
        <router-view class="dark:bg-black"></router-view>
  </div>
</template>

<script>
// import AudioPlayer from '@/components/AudioPlayer'
import { mapState } from 'vuex'
export default {
  name: 'App',
  // components: {
  //     AudioPlayer
  // },
  computed:{
    ...mapState(['isDarkMode'])
  },
  created(){
    this.$store.dispatch('requestBlockPage')
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
