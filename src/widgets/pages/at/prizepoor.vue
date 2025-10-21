<template>
  <div class="at-home-prizepoor">
    <div class="at-home-prizepoor-numbers">
      <SpriteAnimation
        :num="state.prizepoorList[index]"
        v-for="(num, index) in 11"
        :key="`prizepoortList-${num}`"
      />
    </div>
  </div>
</template>
<script setup>
import SpriteAnimation from "@/widgets/pages/at/sprite-animation.vue";
import { reactive, computed } from "vue";
import { formatNumberToFixedLength } from "@/utils/formatNumberToFixedLength";
// import { useScaleDimensions } from "@/composable/dimensions";

// const { scaleDimensions } = useScaleDimensions(414, 103.5);

const state = reactive({
  prizepoor: 651234,
  prizepoorList: computed(() => {
    const strNumber = formatNumberToFixedLength(state.prizepoor);
    return strNumber.split("").map(Number);
  }),
});

const randomAdjust = (baseNumber, randomDigits) => {
  // 計算最大值
  const maxRandom = Math.pow(10, randomDigits) - 1;

  // 產生隨機數
  const randomValue = Math.floor(Math.random() * (maxRandom + 1));

  // 回傳結果
  return baseNumber + randomValue;
};

const setPrizepoor = () => {
  state.prizepoor = randomAdjust(state.prizepoor, 4);
};

const init = () => {
  setPrizepoor();
  /** 每5秒隨機產生亂數跑動 */
  setInterval(() => {
    setPrizepoor();
  }, 5000);
};

init();
</script>
<style lang="scss">
@import "@/assets/scss/at/home.scss";
</style>
