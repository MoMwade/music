<template>
  <div>
    <div class="flex items-center justify-between pl-[8vw] pr-[8vw] text-[3.5vw] font-black font-mono">
        <div class="flex">
          {{ title }}
          <Icon icon="lets-icons:expand-right-light" width="20" height="20" />
        </div>
        <Icon icon="ri:more-line" width="20" height="20" />
    </div>
    <div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title: {
          type: String,
          required: true,
        },
    },
}
</script>

<style>
  
</style>