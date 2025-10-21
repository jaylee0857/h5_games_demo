<template>
  <div class="home">
    <div class="home__header" :class="[env]" ref="head">
      <img style="width: 78px" src="@/assets/images/home/88win2-logo-pc.png" />
      <div class="login_reg" style="display: flex">
        <div class="log_btn reg" id="register">註冊</div>
        <div class="log_btn log">登入</div>
      </div>
      <!-- <router-link
        :to="{ path: '/news', state: { from: '消息中心' } }"
        class="home__message"
        >&nbsp;</router-link
      > -->
    </div>
    <!-- 輪播圖 -->
    <div class="home__banner">
      <div class="home__banner__inner">
        <Banner />
      </div>
    </div>
    <!-- 跑馬燈 -->
    <!-- <div class="home__marquee">
      <div class="home__marquee__inner">
        <Marquee :texts="tempMarquee" />
      </div>
    </div> -->
    <!-- 登入與註冊 -->
    <div class="home__action" v-if="isEmpty(user)">
      <router-link
        class="home__action__link home__action__link--login"
        to="/login"
      >
        {{ t("pages.login.title") }}
      </router-link>
      <router-link
        class="home__action__link home__action__link--register"
        :class="{ ph: lang === 'en-ph' }"
        to="/signup"
      >
        {{ t("pages.register.title") }}
      </router-link>
    </div>
    <!-- 會員顯示介面 -->
    <!-- <div class="home__user__action" v-else>
      <div class="user__data">
        <div class="user__account">
          <div class="account">{{ user.account }}</div>
          <div class="vip__bg" :class="`v${user.vip.vip}`">VIP</div>
        </div>
        <div class="user__credit">
          <div class="user__icon money"></div>
          <div>{{ parseInt(user.credit) }}</div>
          <div
            class="user__icon refresh"
            :class="{ turn: refreshFlag }"
            @click="reFresh"
          ></div>
        </div>
      </div>
      <div class="user__action" :class="{ ph: lang === 'en-ph' }">
        <router-link to="/withdraw" class="item">
          <div class="user__icon withdraw"></div>
          <div>
            {{ t("app.menu.info.withdraw") }}
          </div>
        </router-link>
        <a @click="checkPhone" class="item">
          <div class="user__icon promotion"></div>
          <div>
            {{ t("app.menu.info.activity") }}
          </div>
        </a>
        <router-link to="/recommend" @click="setIndex" class="item">
          <div class="user__icon commission"></div>
          <div>
            {{ t("app.menu.info.promote") }}
          </div>
        </router-link>
        <router-link to="/ranking" class="item">
          <div class="user__icon chart"></div>
          <div>
            {{ t("app.menu.info.ranking") }}
          </div>
        </router-link>
      </div>
    </div> -->
    <!-- 遊戲選單 -->
    <div class="home__game" @touchmove.stop>
      <Game />
    </div>
  </div>
  <!-- 若小遊戲遊玩次數為0則隱藏 目前為測試用所以都先固定顯示 -->
  <!-- <Buoy :num="playQuantity" /> -->
  <!-- <div class="home__bg"></div>
  <div class="home__bg2"></div>
  <div class="home__bg3"></div> -->
  <Fab :parent="'.home'" />
</template>

<script setup>
// import { onMounted } from "vue";
import { defineOptions } from "vue";
import { useI18n } from "@/hooks/use-i18n";
import { isEmpty } from "ramda";
/** components */
import Banner from "@/widgets/pages/max/banner";
// import Marquee from "@/widgets/pages/max/home/marquee";
import Game from "@/widgets/pages/max/game";
import Fab from "@/widgets/fab.vue";
// import Buoy from "@/widgets/pages/home/buoy";
// import Download from "@/widgets/download";
// import User from "@/widgets/pages/home/user.vue";
/** 元件meta 讓_app/pages可以吃到設定資料 */
defineOptions({
  layout: "layout-max-home",
});
const { t } = useI18n();
const user = {
  id: 5,
  account: "prodvivifae00001",
  realname: "",
  nickname: "",
  credit: "789.66",
  lock_credit: 0,
  promote_code: "103",
  status: 1,
  sex: null,
  birthday: null,
  phone: "0977883551",
  parent: null,
  commission: "0",
  avatar: "/vivi/profile/2a324bcc4c22856ce8ce79b7b5d1a323.jpg",
  level: 0,
  vip: {
    vip: "1",
    exp: 0,
    vip_percent: "0%",
    total_deposit_count: 2,
    deposit_amount: "200",
    deposit_percent: "0%",
    withdraw_fee_free_count: 0,
  },
  upgrade_percentage: 100,
  email: "viviadmin",
  register_ip: null,
  public_ip: "27.51.82.160",
  is_agent_member: 0,
  is_commission_auth: false,
};
// const playQuantity = 3;
const env = "prod";
// const tempMarquee = [
//   {
//     title: "測試跑馬燈1",
//   },
//   {
//     title: "測試跑馬燈2",
//   },
//   {
//     title: "測試跑馬燈3",
//   },
// ];
</script>

<style lang="scss" scoped>
@import "@/assets/scss/max/home.scss";
@import "@/assets/scss/max/main.scss";
</style>
