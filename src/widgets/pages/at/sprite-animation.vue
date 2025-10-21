<template>
  <div class="sprite-animation">
    <div
      class="sprite-animation-num-wrap"
      :style="{ transform: `translateY(${state.position})` }"
    >
      <div
        class="sprite-animation-num"
        v-for="(item, index) in 10"
        :key="`sprite-${item}`"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, defineProps, computed } from "vue";
const props = defineProps({
  num: Number,
});

const state = reactive({
  position: computed(() => {
    return `-${props.num * 40}px`; // 根據css設定的sprite-animation-num高度
  }),
});
</script>
<style lang="scss">
@import "@/assets/scss/sprite-animation.scss";
</style>
