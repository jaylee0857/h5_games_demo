<template>
  <div class="game">
    <div class="sidebar" :class="{ none: isScrolled }" @scroll="showScrollbar">
      <button
        v-for="(item, index) in links"
        :key="item.title"
        @click="goToSlide(index)"
        class="sidebar-button"
        :class="{ active: index === sidebarActive }"
      >
        <img :src="item.icon" alt="" class="icon" />
        <span>{{ item.title }}</span>
      </button>
    </div>
    <div class="main">
      <div data-v-b71c44ad="" class="grid grid-cols-2 gap-1 h-[120px]">
        <div
          data-v-b71c44ad=""
          class="overflow-hidden relative rounded-[15px] border-[1px] border-[#e3e3e3] h-[120px] flex cursor-pointer"
          style="
            background: url('https://reo88.3a1788.tw/img/game/all/game_box_bg_live.jpg') -25px
              0px / 130% no-repeat;
          "
        >
          <!--v-if-->
          <div
            data-v-b71c44ad=""
            class="absolute left-[20px] w-[90%] h-[-webkit-fill-available]"
            style="
              background: url('https://reo88.3a1788.tw/img/game/all/mobile/live-dg.png')
                15px bottom / 110% no-repeat;
            "
          ></div>
          <div data-v-b71c44ad="" class="z-10 w-full">
            <img
              data-v-b71c44ad=""
              class="w-[50px] ml-[10px] mt-[35px]"
              src="https://reo88.3a1788.tw/img/factory/dg.png"
              alt="DG真人"
            />
            <div
              data-v-b71c44ad=""
              class="absolute top-[10px] left-[10px] z-10 text-ml text-left text-[#2a5774] w-full"
            >
              DG真人
            </div>
          </div>
        </div>
        <div
          data-v-b71c44ad=""
          class="overflow-hidden relative rounded-[15px] border-[1px] border-[#e3e3e3] h-full flex cursor-pointer"
          style="
            background: url('https://reo88.3a1788.tw/img/game/all/game_box_bg_live.jpg') -25px
              0px / 130% no-repeat;
          "
        >
          <!--v-if-->
          <div
            data-v-b71c44ad=""
            class="absolute left-[20px] w-[90%] h-[-webkit-fill-available]"
            style="
              background: url('https://reo88.3a1788.tw/img/game/all/mobile/game_156.png')
                15px bottom / 110% no-repeat;
            "
          ></div>
          <div data-v-b71c44ad="" class="z-10 w-full">
            <img
              data-v-b71c44ad=""
              class="w-[50px] ml-[10px] mt-[35px]"
              src="https://reo88.3a1788.tw/img/factory/gm.png"
              alt="MT真人"
            />
            <div
              data-v-b71c44ad=""
              class="absolute top-[10px] left-[10px] z-10 text-ml text-left text-[#2a5774] w-full"
            >
              MT真人
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reget" v-show="isReGetAPI">
      <span>{{ t("pages.home.empty") }}</span>
      <span @click="getGame">{{ t("pages.home.fetch") }}</span>
    </div>
  </div>
</template>

<script setup>
import "swiper/css";
import { ref } from "vue";
import useI18n from "@/hooks/use-i18n";

const { t } = useI18n();
const links = [
  {
    icon: "https://reo88.3a1788.tw/img/index/nav_live.png",
    title: "真人",
  },
  {
    icon: "https://reo88.3a1788.tw/img/index/nav_slots.png",
    title: "電子",
  },
  {
    icon: "https://reo88.3a1788.tw/img/index/nav_sports.png",
    title: "體育",
  },
  {
    icon: "https://reo88.3a1788.tw/img/index/nav_lottery.png",
    title: "彩票",
  },
  {
    icon: "https://reo88.3a1788.tw/img/index/nav_chess.png",
    title: "棋牌",
  },
  {
    icon: "https://reo88.3a1788.tw/img/index/nav_mall.png",
    title: "商城",
  },
];
const data = [
  {
    rout: 102, //
    platform: "ASTARLIVE",
    platform_logo: "",
    platform_img: "102.png",
  },
];
console.log(data);
const sidebarActive = ref(0);

const goToSlide = (index) => {
  console.log(index);
  sidebarActive.value = index;
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/hub/game.scss";
.label__icon {
  width: 0.5rem;
  height: 0.5rem;
}
.swiper-container {
  height: 100%; /* 调整视图高度或根据需要设置固定高度 */
  width: 100%; /* 根据需要调整宽度 */
}

.swiper {
  height: 100%;
}
.swiper-slide {
  height: auto;
  overflow: scroll;
}
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-right: 2%;
  .sidebar-button {
    border: none;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background-color: rgb(30, 114, 172);
    margin-bottom: 7px;
    border-radius: 5px;
    padding: 1px;
    max-height: 60px;
    color: white;
    font-weight: bold;
    &.active {
      color: rgb(255, 216, 0);
    }
    .icon {
      min-width: 18px;
      min-height: 18px;
      width: 3vh;
      height: 3vh;
    }
  }
}
</style>
