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
      <div class="swiper-container">
        <swiper
          :direction="'vertical'"
          :pagination="{ clickable: true }"
          @slideChange="onSlideChange"
          @swiper="onSwiper"
        >
          <swiper-slide>
            <div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>ATG電子</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>RSG電子</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>DG真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>DG真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>DG真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>DG真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            ><div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide
            ><div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide
            ><div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide
            ><div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide
            ><div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide
            ><div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div></div
          ></swiper-slide>
          <swiper-slide
            ><div>
              <div
                class="item"
                :style="{
                  backgroundImage:
                    'url(' + getImageUrl('no6/images/game/live.png') + ')',
                }"
              >
                <p>歐博真人</p>
                <div class="logo">
                  <img :src="getImageUrl('no6/images/game/ATG.png')" alt="" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="reget" v-show="isReGetAPI">
      <span>{{ t("pages.home.empty") }}</span>
      <span @click="getGame">{{ t("pages.home.fetch") }}</span>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref } from "vue";
import useI18n from "@/hooks/use-i18n";
import { getImageUrl } from "@/utils/getImageUrl";

const { t } = useI18n();
const links = [
  {
    icon: `${getImageUrl("no6/images/home/hot.png")}`,
    title: "熱門",
  },
  {
    icon: `${getImageUrl("no6/images/home/sport.png")}`,
    title: "體育",
  },
  {
    icon: `${getImageUrl("no6/images/home/live.png")}`,
    title: "真人",
  },
  {
    icon: `${getImageUrl("no6/images/home/chess.png")}`,
    title: "棋牌",
  },
  {
    icon: `${getImageUrl("no6/images/home/slot.png")}`,
    title: "電子",
  },
  {
    icon: `${getImageUrl("no6/images/home/lotto.png")}`,
    title: "彩球",
  },
  {
    icon: `${getImageUrl("no6/images/home/fish.png")}`,
    title: "捕魚",
  },
  // 更多链接
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
const _sw = ref(null);
const sidebarActive = ref(0);
// 定义处理滑动更改事件的函数
const onSwiper = (swiper) => {
  console.log("Swiper instance created", swiper);
  _sw.value = swiper;
};
const onSlideChange = (aa) => {
  sidebarActive.value = aa.activeIndex;
};
const goToSlide = (index) => {
  _sw.value.slideTo(index);
  // sidebarActive.value = index;
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/no6/game.scss";
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
  margin-bottom: 1px;
  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    margin-bottom: 2px;
  }
}
.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  // padding-right: 2%;
  .sidebar-button {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    padding: 15px 0px;
    font-weight: bold;
    background: linear-gradient(
      135deg,
      rgb(75 65 90),
      rgb(70 60 84)
    ); /* 漸變背景 */
    color: white; /* 文字顏色 */
    border: none; /* 無邊框 */
    font-size: 0.31rem; /* 字體大小 */
    border-radius: 10px; /* 圓角設置，分別代表左上、右上、右下、左下的圓角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 阴影效果 */
    text-align: center; /* 文字居中 */
    letter-spacing: 3px;
    cursor: pointer; /* 鼠标形状为指针 */
    transition: all 0.3s ease; /* 過渡效果 */
    margin-bottom: 10px;
    &.active {
      background: linear-gradient(
        135deg,
        rgb(93 79 148),
        rgb(87 75 142)
      ); /* 漸變背景 */
    }
    .icon {
      min-width: 20px;
      min-height: 20px;
    }
  }
}
</style>
