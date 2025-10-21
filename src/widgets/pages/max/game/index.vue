<template>
  <div class="game">
    <div class="sidebar" :class="{ none: isScrolled }" @scroll="showScrollbar">
      <button
        v-for="(item, index) in links"
        :key="item.title"
        @click="goToSlide(index)"
        class="sidebar-button"
        :class="{ active: index === sidebarActive }"
        autofocus
      >
        <img :src="item.icon" alt="" class="icon" />
        <img :src="item.icon_focus" alt="" class="icon_focus" />
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
            <!-- <div class="platform_mode_2">
              <div class="platform_item">
                <div>
                  <span>DB電競</span>
                  <img
                    class="platform_logo"
                    src="	https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png"
                  />
                </div>
                <img
                  class="platform_img"
                  :src="getImageUrl('temp/esportsOT.png')"
                  alt=""
                />
              </div>
            </div> -->
            <div v-for="hot in hots" :key="hot.rout" class="platform_mode_4">
              <div class="platform_item">
                <img
                  class="platform_bg_img"
                  :src="hot.platform_bg_img"
                  alt=""
                />
                <div class="platform_item_logo">
                  <span
                    ><strong>{{ hot.platform_msg }}</strong></span
                  >
                  <img class="platform_logo" :src="hot.platform_logo" />
                </div>
                <div class="platform_item_img">
                  <img class="platform_img" :src="hot.platform_img" alt="" />
                </div>
                <img
                  v-if="hot.show_super_bonus"
                  class="show_super_bonus_img"
                  :src="getImageUrl('temp/icon_superGold.svg')"
                  alt=""
                />
              </div>
            </div>

            <div
              v-for="hot_draw in hot_draws"
              :key="hot_draw.rout"
              class="platform_mode_6"
            >
              <div class="platform_item">
                <img
                  class="platform_bg_img"
                  :src="hot_draw.platform_bg_img"
                  alt=""
                />
                <div class="platform_item_img_draw">
                  <img
                    class="platform_img"
                    :src="hot_draw.platform_img"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="platform_mode_5">
              <div class="platform_item platform_item_purple">
                <div class="g-container" style="display: flex">
                  <ul style="--s: 3">
                    <li>免費電影</li>
                  </ul>
                </div>
                <div class="platform_item_logo">
                  <img
                    class="platform_logo"
                    :src="getImageUrl('temp/logo_CI.svg')"
                    alt=""
                  />
                </div>
              </div>
              <div
                v-for="hot_extra in hot_extras"
                :key="hot_extra.rout"
                class="platform_item platform_item_purple"
              >
                <div class="platform_msg">
                  <span
                    ><strong
                      >{{ hot_extra.platform_msg }}<br />
                      {{ hot_extra.platform_msg2 }}</strong
                    ></span
                  >
                </div>
                <div class="platform_item_logo">
                  <img
                    class="platform_logo"
                    :src="hot_extra.platform_logo"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- <div class="platform_mode_2">
              <div class="platform_item">
                <div>
                  <span>DB電競</span>
                  <img
                    class="platform_logo"
                    src="	https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png"
                  />
                </div>
                <img
                  class="platform_img"
                  :src="getImageUrl('temp/esportsOT.png')"
                  alt=""
                />
              </div>
            </div> -->
            <div v-for="live in lives" :key="live.rout" class="platform_mode_7">
              <div class="platform_item">
                <img
                  v-if="live.show_super_bonus"
                  class="platform_bg_img"
                  :src="live.platform_bg_img"
                  alt=""
                />
                <div class="platform_item_logo">
                  <span>{{ live.platform_msg }}</span>
                  <img class="platform_logo" :src="live.platform_logo" />
                </div>
                <div class="platform_item_img">
                  <img class="platform_img" :src="live.platform_img" alt="" />
                </div>
                <img
                  v-if="live.show_super_bonus"
                  class="show_super_bonus_img"
                  :src="getImageUrl('temp/icon_superGold.svg')"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- <div class="platform_mode_2">
              <div class="platform_item">
                <div>
                  <span>DB電競</span>
                  <img
                    class="platform_logo"
                    src="	https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png"
                  />
                </div>
                <img
                  class="platform_img"
                  :src="getImageUrl('temp/esportsOT.png')"
                  alt=""
                />
              </div>
            </div> -->
            <div v-for="slot in slots" :key="slot.rout" class="platform_mode_4">
              <div class="platform_item">
                <div class="platform_item_logo">
                  <span>{{ slot.platform_msg }}</span>
                  <img class="platform_logo" :src="slot.platform_logo" />
                </div>
                <div class="platform_item_img">
                  <img class="platform_img" :src="slot.platform_img" alt="" />
                </div>
                <img
                  v-if="slot.show_hot"
                  class="show_hot_img"
                  :src="getImageUrl('temp/icon_hot.png')"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- <div class="platform_mode_2">
              <div class="platform_item">
                <div>
                  <span>DB電競</span>
                  <img
                    class="platform_logo"
                    src="	https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png"
                  />
                </div>
                <img
                  class="platform_img"
                  :src="getImageUrl('temp/esportsOT.png')"
                  alt=""
                />
              </div>
            </div> -->
            <div
              v-for="sport in sports"
              :key="sport.rout"
              class="platform_mode_3"
            >
              <div class="platform_item">
                <div class="platform_item_logo">
                  <span>{{ sport.platform_msg }}</span>
                  <img class="platform_logo" :src="sport.platform_logo" />
                </div>
                <div class="platform_item_img">
                  <img class="platform_img" :src="sport.platform_img" alt="" />
                </div>

                <img
                  v-if="sport.show_hot"
                  class="show_hot_img"
                  :src="getImageUrl('temp/icon_hot.png')"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- <div class="platform_mode_2">
              <div class="platform_item">
                <div>
                  <span>DB電競</span>
                  <img
                    class="platform_logo"
                    src="	https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png"
                  />
                </div>
                <img
                  class="platform_img"
                  :src="getImageUrl('temp/esportsOT.png')"
                  alt=""
                />
              </div>
            </div> -->
            <div v-for="loto in lotos" :key="loto.rout" class="platform_mode_2">
              <div class="platform_item">
                <img
                  v-if="loto.show_hot"
                  class="platform_bg_img"
                  :src="loto.platform_bg_img"
                  alt=""
                />
                <div class="platform_item_logo">
                  <span>{{ loto.platform_msg }}</span>
                  <img class="platform_logo" :src="loto.platform_logo" />
                </div>
                <div class="platform_item_img">
                  <img class="platform_img" :src="loto.platform_img" alt="" />
                </div>
                <img
                  v-if="loto.show_hot"
                  class="show_hot_img"
                  :src="getImageUrl('temp/icon_hot.png')"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- <div class="platform_mode_2">
              <div class="platform_item">
                <div>
                  <span>DB電競</span>
                  <img
                    class="platform_logo"
                    src="	https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png"
                  />
                </div>
                <img
                  class="platform_img"
                  :src="getImageUrl('temp/esportsOT.png')"
                  alt=""
                />
              </div></div> -->
            <div v-for="fish in fishs" :key="fish.rout" class="platform_mode_3">
              <div class="platform_item">
                <div class="platform_item_logo">
                  <span>{{ fish.platform_msg }}</span>
                  <img class="platform_logo" :src="fish.platform_logo" />
                </div>
                <img class="platform_img" :src="fish.platform_img" alt="" />
                <img
                  v-if="fish.show_hot"
                  class="show_hot_img"
                  :src="getImageUrl('temp/icon_hot.png')"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- <div class="platform_mode_2">
              <div class="platform_item">
                <div>
                  <span>DB電競</span>
                  <img
                    class="platform_logo"
                    src="	https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png"
                  />
                </div>
                <img
                  class="platform_img"
                  :src="getImageUrl('temp/esportsOT.png')"
                  alt=""
                />
              </div></div -->
            <div
              v-for="chess in chesss"
              :key="chess.rout"
              class="platform_mode_2"
            >
              <div class="platform_item">
                <div class="platform_item_logo">
                  <span>{{ chess.platform_msg }}</span>
                  <img class="platform_logo" :src="chess.platform_logo" />
                </div>
                <div class="platform_item_img">
                  <img class="platform_img" :src="chess.platform_img" alt="" />
                </div>
                <img
                  v-if="chess.show_hot"
                  class="show_hot_img"
                  :src="getImageUrl('temp/icon_hot.png')"
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div
              v-for="esport in esports"
              :key="esport.rout"
              class="platform_mode_2"
            >
              <div
                class="platform_item"
                :class="{ platform_item_gray: esport.isGray }"
              >
                <div class="platform_item_logo">
                  <span>{{ esport.platform_msg }}</span>
                  <img class="platform_logo" :src="esport.platform_logo" />
                </div>
                <div class="platform_item_img">
                  <img class="platform_img" :src="esport.platform_img" alt="" />
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
  // {
  //   icon: "https://www.newtha.com/Mobile/images/main/icon_hot.svg",
  //   icon_focus: getImageUrl("temp/icon_hot_on.svg"),
  //   title: "熱門",
  // },
  {
    icon: getImageUrl("home/OBmenu_M_live.png"),
    icon_focus: getImageUrl("temp/icon_live_on.svg"),
    title: "真人",
  },
  {
    icon: getImageUrl("home/OBmenu_M_egame.png"),
    icon_focus: getImageUrl("temp/icon_slot_on.png"),
    title: "電子",
  },
  {
    icon: getImageUrl("home/OBmenu_M_sport.png"),
    icon_focus: getImageUrl("temp/icon_sport_on.png"),
    title: "體育",
  },
  {
    icon: getImageUrl("home/OBmenu_M_lottery.png"),
    icon_focus: getImageUrl("temp/icon_loto_on.png"),
    title: "彩球",
  },
  {
    icon: getImageUrl("home/OBmenu_M_esport.png"),
    icon_focus: getImageUrl("temp/icon_fish_on.png"),
    title: "捕魚",
  },
  {
    icon: getImageUrl("home/OBmenu_M_esport.png"),
    icon_focus: getImageUrl("temp/icon_chess_on.png"),
    title: "對戰",
  },
  {
    icon: getImageUrl("home/OBmenu_M_esport.png"),
    icon_focus: getImageUrl("temp/icon_esport_on.png"),
    title: "電競",
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

const hots = [
  {
    rout: 70, //
    platform: "hot",
    platform_msg: "KU真人",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_hotOT8_1.png"),
    show_super_bonus: true,
    platform_bg_img: getImageUrl("temp/img_liveHotBG3.png"),
  },
  {
    rout: 71, //
    platform: "hot",
    platform_msg: "3D電子",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_hotOT8_2.png"),
    platform_bg_img: getImageUrl("temp/img_slotHotBG.png"),
  },
  {
    rout: 72, //
    platform: "hot",
    platform_msg: "KU體育",
    platform_logo: getImageUrl("temp/KUxOSASUNA1.svg"),
    platform_img: getImageUrl("temp/img_hotOT8_3.png"),
    platform_bg_img: getImageUrl("temp/img_sportHotBG.png"),
  },
  {
    rout: 73, //
    platform: "hot",
    platform_msg: "KU彩球",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_hotOT8_4.png"),
    platform_bg_img: getImageUrl("temp/img_lotoHotBG.png"),
  },
];

const hot_draws = [
  {
    rout: 74, //
    platform: "hot",
    platform_msg: "",
    platform_logo: "",
    platform_img: getImageUrl("temp/img_hotACT2.png"),
    platform_bg_img: getImageUrl("temp/img_hotBG2.png"),
  },
];

const hot_extras = [
  {
    rout: 76, //
    platform: "hot",
    platform_msg: "五大聯賽西甲",
    platform_msg2: "官方合作夥伴",
    platform_logo: getImageUrl("temp/logo_LaLiga2.svg"),
  },
];

const lives = [
  {
    rout: 77, //
    platform: "live",
    platform_msg: "KU真人",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_liveOT8_1.png"),
    show_super_bonus: true,
    platform_bg_img: getImageUrl("temp/img_liveKUBG1.png"),
  },
  {
    rout: 78, //
    platform: "live",
    platform_msg: "DG真人",
    platform_logo: getImageUrl("temp/logo_DG.png"),
    platform_img: getImageUrl("temp/img_liveOT8_2.png"),
    platform_bg_img: "",
  },
  {
    rout: 79, //
    platform: "live",
    platform_msg: "歐博真人",
    platform_logo: getImageUrl("temp/logo_allbet.png"),
    platform_img: getImageUrl("temp/img_liveOT8_3.png"),
  },
  {
    rout: 80, //
    platform: "live",
    platform_msg: "WM真人",
    platform_logo: getImageUrl("temp/logo_WM.png"),
    platform_img: getImageUrl("temp/img_liveOT8_4.png"),
  },
  {
    rout: 81, //
    platform: "live",
    platform_msg: "SA真人",
    platform_logo: getImageUrl("temp/logo_SA.png"),
    platform_img: getImageUrl("temp/img_liveOT8_5.png"),
  },
  {
    rout: 82, //
    platform: "live",
    platform_msg: "OG真人",
    platform_logo: getImageUrl("temp/logo_OG.png"),
    platform_img: getImageUrl("temp/img_liveOT8_6.png"),
  },
  {
    rout: 83, //
    platform: "live",
    platform_msg: "HG真人",
    platform_logo: getImageUrl("temp/logo_HG.png"),
    platform_img: getImageUrl("temp/img_liveOT8_7.png"),
  },
  {
    rout: 84, //
    platform: "live",
    platform_msg: "DB真人",
    platform_logo: getImageUrl("temp/logo_OBPoker.png"),
    platform_img: getImageUrl("temp/img_liveOT8_8.png"),
  },
];

const slots = [
  {
    rout: 85, //
    platform: "slot",
    platform_msg: "3D電子",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_slotOT_1.png"),
    show_hot: true,
  },
  {
    rout: 86, //
    platform: "slot",
    platform_msg: "BNG電子",
    platform_logo: getImageUrl("temp/logo_bng.png"),
    platform_img: getImageUrl("temp/img_slotOT_2.png"),
  },
  {
    rout: 87, //
    platform: "slot",
    platform_msg: "ZEBRA電子",
    platform_logo: getImageUrl("temp/logo_DS.png"),
    platform_img: getImageUrl("temp/img_slotOT_3.png"),
  },
  {
    rout: 88, //
    platform: "slot",
    platform_msg: "福星電子",
    platform_logo: getImageUrl("temp/logo_FTG.png"),
    platform_img: getImageUrl("temp/img_slotOT_4.png"),
  },
  {
    rout: 89, //
    platform: "slot",
    platform_msg: "RK5電子",
    platform_logo: getImageUrl("temp/logo_PS.png"),
    platform_img: getImageUrl("temp/img_slotOT_5.png"),
  },
  {
    rout: 90, //
    platform: "slot",
    platform_msg: "DB電子",
    platform_logo: getImageUrl("temp/logo_OBFish.png"),
    platform_img: getImageUrl("temp/img_slotOT_6.png"),
  },
];

const sports = [
  {
    rout: 91, //
    platform: "sport",
    platform_msg: "KU體育",
    platform_logo: getImageUrl("temp/KUxOSASUNA.svg"),
    platform_img: getImageUrl("temp/img_sportOT4_1.png"),
    show_hot: true,
  },
  {
    rout: 92, //
    platform: "sport",
    platform_msg: "JZ體育",
    platform_logo: getImageUrl("temp/logo_DS.png"),
    platform_img: getImageUrl("temp/img_sportOT4_2.png"),
  },
  {
    rout: 93, //
    platform: "sport",
    platform_msg: "平博體育",
    platform_logo: getImageUrl("temp/logo_PIN.png"),
    platform_img: getImageUrl("temp/img_sportOT4_3.png"),
  },
  {
    rout: 94, //
    platform: "sport",
    platform_msg: "熊貓體育",
    platform_logo: getImageUrl("temp/logo_OBFish.png"),
    platform_img: getImageUrl("temp/img_sportOT4_4.png"),
  },
];

const lotos = [
  {
    rout: 95, //
    platform: "loto",
    platform_msg: "KU彩球",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_lotoOT2_1.png"),
    show_hot: true,
    platform_bg_img: getImageUrl("temp/img_lotoKUBG.png"),
  },
  {
    rout: 96, //
    platform: "loto",
    platform_msg: "WG彩球",
    platform_logo: getImageUrl("temp/logo_WG.png"),
    platform_img: getImageUrl("temp/img_lotoOT2_2.png"),
    platform_bg_img: "",
  },
];

const fishs = [
  {
    rout: 97, //
    platform: "fish",
    platform_msg: "鯊皇傳說",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_fishOT_1.png"),
    show_hot: true,
  },
  {
    rout: 98, //
    platform: "fish",
    platform_msg: "三仙捕魚",
    platform_logo: getImageUrl("temp/logo_DS.png"),
    platform_img: getImageUrl("temp/img_fishOT_2.png"),
  },
  {
    rout: 99, //
    platform: "fish",
    platform_msg: "KS捕魚",
    platform_logo: getImageUrl("temp/logo_KS.png"),
    platform_img: getImageUrl("temp/img_fishOT_3.png"),
  },
  {
    rout: 100, //
    platform: "fish",
    platform_msg: "DB捕魚",
    platform_logo: getImageUrl("temp/logo_OBFish.png"),
    platform_img: getImageUrl("temp/img_fishOT_4.png"),
  },
];

const chesss = [
  {
    rout: 101, //
    platform: "chess",
    platform_msg: "3D對戰",
    platform_logo: getImageUrl("temp/logo_KU_G_2.svg"),
    platform_img: getImageUrl("temp/img_chessOT_top.png"),
    show_hot: true,
  },
  {
    rout: 102, //
    platform: "chess",
    platform_msg: "DB對戰",
    platform_logo: getImageUrl("temp/logo_OBPoker.png"),
    platform_img: getImageUrl("temp/img_chessOT_bottom.png"),
  },
];

const esports = [
  {
    rout: 103, //
    platform: "esport",
    platform_msg: "DB電競",
    platform_logo:
      "https://www.newtha.com/Mobile/images/TS5588/logo_OBEsports.png",
    platform_img: getImageUrl("temp/esportsOT.png"),
  },
  {
    rout: 104, //
    platform: "esport",
    platform_msg: "敬請期待",
    platform_logo: "",
    platform_img: getImageUrl("temp/img_esportNOT.png"),
    isGray: true,
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
@import "@/assets/scss/max/game.scss";
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
    background-color: #e2f0fb;
    margin-bottom: 7px;
    border-radius: 5px;
    padding: 1px;
    &.active {
    }
    .icon {
      min-width: 18px;
      min-height: 18px;
      width: 3vh;
      height: 3vh;
    }
  }
}

.icon_focus {
  display: none;
  min-width: 18px;
  min-height: 18px;
  width: 3vh;
  height: 3vh;
}

.sidebar-button:focus {
  border: 1px solid blue;
  .icon {
    display: none;
  }
  .icon_focus {
    display: flex;
  }
}

/* Icon Bob */
@-webkit-keyframes hvr-icon-bob {
  0% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  50% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@keyframes hvr-icon-bob {
  0% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  50% {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@-webkit-keyframes hvr-icon-bob-float {
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@keyframes hvr-icon-bob-float {
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
.sidebar-button {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.sidebar-button .icon_focus {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}
.sidebar-button:hover .icon_focus,
.sidebar-button:focus .icon_focus,
.sidebar-button:active .icon_focus {
  -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;
  animation-name: hvr-icon-bob-float, hvr-icon-bob;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}

li {
  list-style: none;
}

.g-container {
  height: calc(var(--h) * 2px);
  line-height: calc(var(--h) * 1px);
  font-size: 9px;
  overflow: hidden;
  display: block;
}

ul {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
}

ul li {
  flex-shrink: 0;
  width: 100%;
  padding-left: 10px;
  box-sizing: border-box;
}

ul {
  animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
}

ul li {
  white-space: nowrap;
  cursor: pointer;
  animation: liMove calc(var(--speed)) infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, calc(var(--s) * var(--h) * -1px));
  }
}

@keyframes liMove {
  0% {
    transform: translate(0, 0);
  }
  80%,
  100% {
    transform: translate(0, calc(var(--h) * -1px));
  }
}
</style>
