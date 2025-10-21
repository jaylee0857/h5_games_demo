<template>
  <div class="at-game">
    <div class="at-game-category">
      <div
        class="at-game-category-item"
        v-for="item in state.categoryList"
        :key="item"
        :class="[
          `at-game-category-item--${item.iconClass}`,
          {
            active: item.iconClass === state.activeCategory,
          },
        ]"
        @click="clickCategory(item)"
      >
        {{ t(item.label) }}
      </div>
    </div>
    <div class="at-game-list">
      <swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        ref="gswiper"
        :style="{ height: `${state.swiperHeight}px` }"
        :grabCursor="true"
        :direction="'vertical'"
        :effect="'creative'"
        :creativeEffect="{
          prev: {
            shadow: true,
            origin: 'center top',
            translate: [0, '-100%', 0],
            rotate: [0, 0, 0],
            scale: 1,
          },
          next: {
            shadow: true,
            origin: 'center bottom',
            translate: [0, '100%', 0],
            rotate: [0, 0, 0],
            scale: 1,
          },
        }"
        :modules="[EffectCreative]"
        class="game-swiper"
      >
        <!-- 熱門 -->
        <swiper-slide>
          <div class="at-game-list-slide at-game-list-slide-hot">
            <div
              class="at-game-list-slide-hot-item"
              v-for="item in HOT_LIST"
              :key="item.label"
            >
              <div class="at-game-list-slide-hot-box">
                <div class="at-game-list-slide-hot-box-content">
                  <img :src="item.icon" alt="" />
                </div>
              </div>
              <div class="at-game-list-slide-hot-label">{{ item.label }}</div>
            </div>
            <div class="at-game-list-slide-hot-link">
              <div>
                <img :src="getImageUrl('at/10021.png')" alt="" />
                <span>粉絲專頁</span>
              </div>
              <div>
                <img :src="getImageUrl('at/10022.png')" alt="" />
                <span>活動中心</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 真人 -->
        <swiper-slide>
          <div class="at-game-list-slide at-game-list-slide-platform">
            <div
              class="at-game-list-slide-platform-item"
              v-for="item in LIVE_LIST"
              :key="item.label"
            >
              <img
                class="at-game-list-slide-platform-item-bg"
                :src="getImageUrl('at/10035.png')"
                alt=""
              />
              <img
                class="at-game-list-slide-platform-item-img"
                :src="item.image"
                alt=""
              />
              <div class="at-game-list-slide-platform-item-content">
                <img :src="item.icon" class="game-logo" />
                <div class="at-game-list-slide-platform-item-content-title">
                  {{ item.label }}
                </div>
                <div class="at-game-list-slide-platform-item-content-desc">
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 電子 -->
        <swiper-slide>
          <div class="at-game-list-slide at-game-list-slide-game">
            <div class="at-game-list-slide-game-header">
              <q-icon name="chevron_left" color="white" size="28px"></q-icon>
              <div class="tab-scroll-bar">
                <div class="at-game-list-slide-game-header-item active">BE</div>
                <div class="at-game-list-slide-game-header-item">AG</div>
                <div class="at-game-list-slide-game-header-item">SP</div>
                <div class="at-game-list-slide-game-header-item">RG</div>
                <div class="at-game-list-slide-game-header-item">DS</div>
                <div class="at-game-list-slide-game-header-item">KK</div>
                <div class="at-game-list-slide-game-header-item">KC</div>
                <div class="at-game-list-slide-game-header-item">KB</div>
                <div class="at-game-list-slide-game-header-item">MC</div>
              </div>
              <q-icon name="chevron_right" color="white" size="28px"></q-icon>
            </div>
            <div class="at-game-list-slide-game-main">
              <div
                class="at-game-list-slide-game-main-item"
                v-for="item in SLOT_LIST"
                :key="item.label"
              >
                <img
                  class="at-game-list-slide-game-main-img"
                  :src="item.image"
                  alt=""
                />
                <span class="at-game-list-slide-game-main-label">{{
                  item.label
                }}</span>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- 彩票/棋牌/捕魚/體育 -->
        <swiper-slide
          v-for="(category, index) in [
            LOTTERY_LIST,
            CHESS_LIST,
            FISH_LIST,
            SPORT_LIST,
          ]"
          :key="`categore-${index}`"
        >
          <div class="at-game-list-slide at-game-list-slide-platform">
            <div
              class="at-game-list-slide-platform-item"
              v-for="item in category"
              :key="item.label"
            >
              <img
                class="at-game-list-slide-platform-item-bg"
                :src="getImageUrl('at/10035.png')"
                alt=""
              />
              <img
                class="at-game-list-slide-platform-item-img"
                :src="item.image"
                alt=""
              />
              <div class="at-game-list-slide-platform-item-content">
                <img :src="item.icon" class="game-logo" />
                <div class="at-game-list-slide-platform-item-content-title">
                  {{ item.label }}
                </div>
                <div class="at-game-list-slide-platform-item-content-desc">
                  {{ item.desc }}
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { reactive, onMounted, ref } from "vue";
import { useI18n } from "@/hooks/use-i18n";
import { getImageUrl } from "@/utils/getImageUrl";
import {
  CATEGORY_LIST,
  HOT_LIST,
  LIVE_LIST,
  SLOT_LIST,
  LOTTERY_LIST,
  SPORT_LIST,
  CHESS_LIST,
  FISH_LIST,
} from "@/constants/game.js";

const useSwiper = ref(null);

const { t } = useI18n();

const state = reactive({
  categoryList: [...CATEGORY_LIST],
  activeCategory: "hot",
  swiperHeight: 0,
});

const clickCategory = (item) => {
  state.activeCategory = item.iconClass;
  goToSlide(item.slideIndex);
};

const goToSlide = (index) => {
  useSwiper.value.slideTo(index);
};

const onSwiper = (swiper) => {
  useSwiper.value = swiper;
};

const onSlideChange = (swiper) => {
  const activeIndex = swiper.activeIndex;
  const activeCategory = state.categoryList.find(
    (item) => item.slideIndex === activeIndex
  );
  state.activeCategory = activeCategory.iconClass;
};

onMounted(() => {
  const height = document.querySelector(".at-game-category").clientHeight;
  state.swiperHeight = height;
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/at/home.scss";
.game-swiper {
  width: 100%;
  height: 300px;
}
</style>
