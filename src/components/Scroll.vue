<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      scroller: null,
    };
  },
  props: {
    config: {
      type: Object,
      default: () => ({ scrollX: true ,click: true }),
    },
  },
  methods: {
    initScroll() {
      this.scroller = new BScroll(this.$refs.wrapper, this.config);
  }},
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  updated() {
    this.$nextTick(() =>{
      this.scroller.refresh();
    })
  },
};
</script>

<style scoped>
.wrapper{
  overflow: hidden;
}
</style>