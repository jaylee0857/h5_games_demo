import { ref, onMounted, computed } from "vue";

export const useScaleDimensions = (originWidth, originHeight) => {
  /** 原始寬高 */
  const constant = {
    originWidth,
    originHeight,
  };

  /** 螢幕寬高 */
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  /** 更新螢幕寬高 */
  function updateDimensions() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }
  window.addEventListener("resize", updateDimensions);

  onMounted(() => {
    updateDimensions(); // 初始化
  });

  // 計算縮放比例
  const scaleDimensions = computed(() => {
    const scale = width.value / constant.originWidth;
    const translateX = 0;
    const translateY = 0;
    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      transformOrigin: "left top",
    };
  });

  return {
    scaleDimensions,
  };
};
