<template>
  <div
    @click="isShowActions = !isShowActions"
    ref="draggableElement"
    class="draggable"
    @mousedown="startDrag"
    @touchstart="startDrag"
    :style="{ top: position.y + 'px', left: position.x + 'px' }"
    style="
      position: absolute;
      cursor: pointer;
      user-select: none;
      touch-action: none;
    "
  >
    <div>切換版本</div>
    <div class="draggable-actions" v-if="isShowActions">
      <div
        v-for="item in state.modeList"
        :key="item.value"
        @click="changeMode(item)"
      >
        <q-icon name="play_circle"></q-icon>
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted,
  onUnmounted,
  nextTick,
  defineProps,
} from "vue";
import ModeService from "@/services/mode-service";
import { useRouter } from "vue-router";
const props = defineProps({
  parent: {
    type: String,
    default: "",
  },
});
const router = useRouter();

const draggableElement = ref(null);
const isShowActions = ref(false);
const state = reactive({
  modeList: [
    { value: "at", title: "AT" },
    // { value: "hub", title: "HUB" },
    { value: "max", title: "MAX" },
    { value: "no6", title: "NO6" },
    // { value: "en-US", title: "English" },
  ],
});
const position = reactive({ x: 0, y: 0 });
let isDragging = false;
let start = { x: 0, y: 0 };

function changeMode({ value }) {
  const mode = value;
  // console.log(ModeService);
  ModeService.changeMode(mode);
  router.push({ path: `/${mode}/home` });
}

function startDrag(event) {
  isDragging = true;
  const clientX = event.type.includes("touch")
    ? event.touches[0].clientX
    : event.clientX;
  const clientY = event.type.includes("touch")
    ? event.touches[0].clientY
    : event.clientY;
  start.x = clientX - position.x;
  start.y = clientY - position.y;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("touchmove", onDrag, { passive: false });
  document.addEventListener("touchend", stopDrag);
}

function onDrag(event) {
  if (!isDragging) return;
  const clientX = event.type.includes("touch")
    ? event.touches[0].clientX
    : event.clientX;
  const clientY = event.type.includes("touch")
    ? event.touches[0].clientY
    : event.clientY;
  position.x = clientX - start.x;
  position.y = clientY - start.y;
}

function stopDrag() {
  isDragging = false;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("touchend", stopDrag);
}

onMounted(() => {
  nextTick().then(() => {
    if (draggableElement.value) {
      const propsParent = props.parent || null;
      const parent = propsParent
        ? document.querySelector(propsParent)
        : draggableElement.value.parentNode;
      position.x = parent.offsetWidth - draggableElement.value.offsetWidth - 10;
      position.y =
        parent.offsetHeight - draggableElement.value.offsetHeight - 50;
    }
  });
});

onUnmounted(() => {
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
  document.removeEventListener("touchmove", onDrag);
  document.removeEventListener("touchend", stopDrag);
});
</script>

<style lang="scss">
.draggable {
  width: 100px;
  height: 50px;
  background: linear-gradient(
    90deg,
    rgba(3, 3, 3, 0.6) 0%,
    rgba(51, 66, 107, 0.9) 100%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  border: 1px solid #3aa2ec;
  z-index: 200;
  &-actions {
    position: absolute;
    right: 100px;
    display: flex;
    padding: 5px 0;
    width: 100px;
    gap: 5px;
    flex-direction: column;
    align-items: stretch;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #3aa2ec;
    border-radius: 5px;
    z-index: 11;
    & > div {
      display: flex;
      align-items: center;
      padding: 0 0.2rem;
      gap: 5px;
    }
  }
}
</style>
