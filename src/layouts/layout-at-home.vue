<template>
  <!-- <LayoutHeader /> -->
  <div class="layout-at">
    <slot />
    <div class="layout-at-actions">
      <!-- 首頁 -->
      <div
        v-show="!isInHome"
        class="layout-at-actions-items"
        @click="selectAction('home')"
      >
        <div class="layout-at-actions-items-icon">
          <q-img :src="getImageUrl('at/Home.png')" />
        </div>
        <div class="layout-at-actions-items-text">
          {{ t("pages.home.nav.home") }}
        </div>
      </div>
      <!-- 優惠 -->
      <div
        class="layout-at-actions-items"
        @click="selectAction('discount')"
        v-show="isInHome"
      >
        <div
          class="layout-at-actions-items-icon layout-at-actions-items-icon-discount"
        >
          <q-img :src="getImageUrl('at/10092.gif')" />
        </div>
        <div
          class="layout-at-actions-items-text"
          :class="{
            'layout-at-actions-items-text-active': activeAction === 'discount',
          }"
        >
          {{ t("pages.home.nav.discount") }}
        </div>
      </div>
      <!-- 帳務 -->
      <div class="layout-at-actions-items" @click="selectAction('trade')">
        <div class="layout-at-actions-items-icon">
          <q-img
            :src="getImageUrl('at/10093.png')"
            :class="{
              'layout-at-actions-items-icon-active': activeAction === 'trade',
            }"
          />
        </div>
        <div
          class="layout-at-actions-items-text"
          :class="{
            'layout-at-actions-items-text-active': activeAction === 'trade',
          }"
        >
          {{ t("pages.home.nav.trade") }}
        </div>
      </div>
      <!-- 存提 -->
      <div
        class="layout-at-actions-items"
        @click="selectAction('depositWithdrawal')"
      >
        <div
          class="layout-at-actions-items-icon layout-at-actions-items-icon-depositwithdrawal"
        >
          <q-img :src="getImageUrl('at/10094.svg')" />
        </div>
        <div class="layout-at-actions-items-text">
          {{ t("pages.home.nav.depositWithdrawal") }}
        </div>
      </div>
      <!-- 線上客服 -->
      <div class="layout-at-actions-items" @click="selectAction('service')">
        <div class="layout-at-actions-items-icon">
          <q-img
            :src="getImageUrl('at/10095.png')"
            :class="{
              'layout-at-actions-items-icon-active': activeAction === 'service',
            }"
          />
        </div>
        <div
          class="layout-at-actions-items-text"
          :class="{
            'layout-at-actions-items-text-active': activeAction === 'service',
          }"
        >
          {{ t("pages.home.nav.service") }}
        </div>
      </div>
      <!-- 我的 -->
      <div class="layout-at-actions-items" @click="selectAction('my')">
        <div class="layout-at-actions-items-icon">
          <q-img
            :src="getImageUrl('at/10096.png')"
            :class="{
              'layout-at-actions-items-icon-active': activeAction === 'my',
            }"
          />
        </div>
        <div
          class="layout-at-actions-items-text"
          :class="{
            'layout-at-actions-items-text-active': activeAction === 'my',
          }"
        >
          {{ t("pages.home.nav.my") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "@/hooks/use-i18n";
import { useRoute } from "vue-router";
import { getImageUrl } from "@/utils/getImageUrl";
import { ref, computed } from "vue";

const { t } = useI18n();
const route = useRoute();
console.log(route.path);
const isInHome = computed(() => route.path === "/at/home");
const activeAction = ref("discount");

const selectAction = (action) => {
  console.log(action);
  activeAction.value = action;
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/at/layout.scss";
</style>
