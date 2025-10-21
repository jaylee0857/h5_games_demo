<template>
  <div class="pb-32">
    <slot />
  </div>
  <div class="fixed bottom-0 left-0 w-full z-10">
    <div
      class="h-[60px] bg-gradient-to-b from-[#72c1db] via-[#318ccc] to-[#1b4d91] flex items-center w-full fixed bottom-0 grid grid-cols-5 z-10 rounded-t-[20px] footer_mo"
    >
      <div>
        <div class="flex flex-col items-center justify-start">
          <img
            class="w-[28px] h-[28px]"
            src="https://reo88.3a1788.tw/img/footer/mobile/icon-home.png"
            alt="首頁"
          />
          <div class="text-white text-3lg mt-[2px] break-words text-center">
            {{ t("首頁") }}
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center justify-start">
          <img
            class="w-[28px] h-[28px]"
            src="https://reo88.3a1788.tw/img/footer/mobile/icon-sale.png"
            alt="優惠"
          />
          <div class="text-white text-3lg mt-[2px] break-words text-center">
            {{ t("優惠") }}
          </div>
        </div>
      </div>
      <div>
        <div
          class="flex flex-col items-center justify-center w-[80px] h-[80px] bg-white border-[#1f9fbf] border-[2px] absolute rounded-full bottom-[5px] drop-shadow-[0_0.5px_1px_rgba(0,0,0,0.5)]"
        >
          <img
            class="w-[45px] h-[45px]"
            src="https://reo88.3a1788.tw/img/footer/mobile/icon-wallet.png"
            alt="錢包"
          />

          <div class="text-[#318ca3] text-3lg break-words text-center">
            {{ t("錢包") }}
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center justify-start">
          <img
            class="w-[28px] h-[28px]"
            src="https://reo88.3a1788.tw/img/footer/mobile/icon-service.png"
            alt="客服"
          />
          <div class="text-white text-3lg mt-[2px] break-words text-center">
            {{ t("客服") }}
          </div>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center justify-start">
          <img
            class="w-[28px] h-[28px]"
            src="https://reo88.3a1788.tw/img/footer/mobile/icon-my.png"
            alt="我的"
          />
          <div class="text-white text-3lg mt-[2px] break-words text-center">
            {{ t("我的") }}
          </div>
        </div>
      </div>
    </div>
    <div class="nav z-10" :class="{ show: showNav.list.item.length !== 0 }">
      <ul
        :class="{
          service: showNav.type === 'service',
        }"
        v-bg-image-load:image="{
          old: getImageUrl('background_main_wallet_sm.png'),
          cover: getImageUrl('background_main_wallet.png'),
          custom: 'height: 100%;border-radius: 40px 40px 0 0;z-index: -1',
        }"
      >
        <li
          v-for="data in showNav.list.item"
          :key="data.icon"
          v-show="data.page !== ''"
        >
          <!-- 專為Demo建立，用於觸發無反應 -->
          <a v-if="showNav.type === 'service'" @click.prevent>
            <span class="icon" :class="data.icon"></span>
            <span>{{ data.name }}</span>
          </a>
          <!-- 用於a連結 -->
          <a v-else-if="data.blank" target="_blank" :href="data.page">
            <span class="icon" :class="data.icon"></span>
            <span>{{ data.name }}</span>
          </a>
          <!-- 用於路由切換 -->
          <router-link v-else :to="data.route">
            <span class="icon nav-icon" :class="[data.icon]"></span>
            <span>{{ data.name }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import useI18n from "@/hooks/use-i18n";
import { reactive, computed } from "vue";
import { getImageUrl } from "@/utils/getImageUrl";

export default {
  setup() {
    const { t } = useI18n();
    const form = reactive({
      realName: false,
      phone: false,
    });
    const navItem = {
      //子選單選項
      wallet: {
        item: [
          {
            icon: "topup",
            route: { path: "/topup", state: { from: "存款" } },
            name: t("存款"),
          },
          {
            icon: "withdraw",
            route: { path: "/withdraw", state: { from: "取款" } },
            name: t("取款"),
          },
          {
            icon: "recommend",
            route: { path: "/recommend", state: { from: "推廣" } },
            name: t("推廣"),
          },
        ],
      },
      service: {
        item: [
          {
            icon: "line",
            page: "https://line.me/R/ti/p/@xxxxxx",
            name: t("app.menu.line"),
            blank: true,
          },
          {
            icon: "zalo",
            page: "https://line.me/R/ti/p/@xxxxxx",
            name: t("app.menu.zalo"),
            blank: true,
          },
          // {
          //   icon: "telegram",
          //   page: store.state.app.serviceUrl.telegram_url,
          //   name: t("app.menu.telegram"),
          //   blank: true,
          // },
          // {
          //   icon: "kakao",
          //   page: store.state.app.serviceUrl.kakao_url,
          //   name: t("app.menu.kakao"),
          //   blank: true,
          // },
        ],
      },
      close: {
        item: [],
      },
    };
    const showNav = reactive({
      list: computed(() => navItem[showNav.type]),
      type: "close",
    });
    const callNav = (type) => {
      /* 一樣type就關閉 */
      if (type === showNav.type) showNav.type = "close";
      else showNav.type = type;
    };

    return {
      t,
      callNav,
      getImageUrl,
      form,
      navItem,
      showNav,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/hub/layout.scss";
.layout-show {
  visibility: visible;
}
.layout-hide {
  visibility: hidden;
}
.notify-tip {
  &::before {
    right: 0.4rem;
    top: 3px;
  }
  &.nav-icon {
    &::before {
      right: -4px;
      top: 2px;
    }
  }
}
</style>
