<template>
  <div class="at-home">
    <div class="at-home-header">
      <q-img style="width: 165px" :src="getImageUrl('at/10003.png')" />
      <div class="at-home-header-actions">
        <div class="at-submit-btn">{{ t("pages.home.header.login") }}</div>
        <div class="at-submit-border-btn">
          {{ t("pages.home.header.register") }}
        </div>
        <div
          class="at-home-header-actions-lang"
          v-click-outside="() => (state.isOpenLangList = false)"
        >
          <div
            class="at-home-header-actions-lang-icon"
            @click="state.isOpenLangList = !state.isOpenLangList"
          >
            <q-img
              style="width: 22px; height: 22px"
              :src="getImageUrl(state.currentLang.icon)"
            />
            <q-icon name="keyboard_arrow_down" color="white" size="1.5rem" />
          </div>
          <div
            class="at-home-header-actions-lang-list"
            v-if="state.isOpenLangList"
          >
            <div
              v-for="item in state.langList"
              :key="item.value"
              @click="langSetting(item)"
            >
              <q-img
                style="width: 22px; height: 22px"
                :src="getImageUrl(item.icon)"
              />
              <div>{{ item.title }}</div>
            </div>
          </div>
          <!-- <q-icon name="style" color="white" size="3em" /> -->
        </div>
      </div>
    </div>
    <div class="at-home-marquee-wrap">
      <div class="at-home-marquee">
        <q-img
          class="at-home-marquee-icon"
          :src="getImageUrl('at/10115.png')"
        />
        <Marquee
          style="margin-left: 27px; transform: translateY(-5px)"
          :texts="tempMarquee"
        />
      </div>
    </div>
    <Banner />
    <Prizepoor />
    <Game />
    <Fab />
  </div>
</template>

<script setup>
import { useI18n } from "@/hooks/use-i18n";
import { getImageUrl } from "@/utils/getImageUrl";
import { defineOptions, reactive } from "vue";

/** components */
import Banner from "@/widgets/banner.vue";
import Marquee from "@/widgets/marquee.vue";
import Game from "@/widgets/pages/at/game.vue";
import Prizepoor from "@/widgets/pages/at/prizepoor.vue";
import Fab from "@/widgets/fab.vue";

/** 元件meta 讓_app/pages可以吃到設定資料 */
defineOptions({
  layout: "layout-at-home",
});

const { t, locale } = useI18n();

const state = reactive({
  isOpenLangList: false,
  currentLang: {
    title: "繁體中文",
    value: "zh-tw",
    icon: "at/10004.png",
  },
  langList: [
    {
      title: "繁體中文",
      value: "zh-tw",
      icon: "at/10004.png",
    },
    {
      title: "English",
      value: "en",
      icon: "at/10004.en.png",
    },
  ],
});

const tempMarquee = [
  {
    title: "",
  },
  {
    title: `⭐️004 臺灣銀行於 07/13  20:00至21:00 進行維護，維護期間暫停跨行交易服務，，感謝您的支持 ⭐AT99本月VIP會員福利【儲值回饋券】已發送至站內信箱，請聯繫線上客服申請儲值回饋。 ⭐由於目前銀行維護中，單筆提款最高為20萬，造成不便請見諒，感謝您的支持 ⭐臨時維護通知【TF 電競】即刻起進行臨時維護，結束時間另行通知，提醒您，維護期間玩家無法進入遊戲，感謝您的支持 ⭐臨時維護通知【DG真人】即刻起進行臨時維護，結束時間另行通知，提醒您，維護期間玩家無法進入遊戲，感謝您的支持 ⭐遊戲上線通知 :【FTG電子】新增遊戲：馬雅末日Maya Doomsday 感謝您的支持 ⭐遊戲上線通知 :【BNG電子】新增遊戲：777經典水果盤 777 Fruity Classic 感謝您的支持 ⭐遊戲上線通知 :【BT電子】新增遊戲：鳳凰公主2 Riches Phoenix2 感謝您的支持 ⭐遊戲上線通知 :【GR電子】新增遊戲：海賊王2（ONE PIECE 2）養雞場（Chicken Farm）感謝您的支持 ⭐敬告AT99會員：為確保會員帳號使用權益，即日起~重覆身份註冊之會員帳號，僅可保留使用第一個會員號(以註冊時間點判斷最早註冊之帳號)，若有帳號使用相關問題，請洽官方客服。 ⭐AT99歡迎所有會員提出各項建議，謝絕並不贊同進行詆譭同業與其他網站的行為，讓我們一起維護良好與清新的遊戲環境。 ⭐即日起，開放支持【合作金庫】進行儲值與託售；綁定【合作金庫】時， 請將【銀行存簿】與【銀行卡 (有卡號那一面)】擺放一起拍照上傳。 ⭐為保障會員娛樂及資金安全，務必使用【本人】銀行卡進行娛樂，如有不符將影響娛樂權益。 ⭐溫馨提醒需使用【綁定''託售"之銀行卡】進行儲值，以免影響儲值權益及速度。 ⭐感謝玩家熱烈支持，當前網站儲值、託售、優惠等皆積極處理中，感謝您的等候，我們將盡速完成。 ⭐歡迎光臨，AT99陪伴您渡過每一個遊戲的歡樂時光。`,
  },
];

const langSetting = (lang) => {
  state.currentLang = lang;
  state.isOpenLangList = false;
};

const initLnag = () => {
  state.currentLang = state.langList.find(
    (item) => item.value === locale.value
  );
};

const init = () => {
  initLnag();
  console.log(locale.value);
};

init();
</script>
<style lang="scss" scoped>
@import "@/assets/scss/at/home.scss";
</style>
