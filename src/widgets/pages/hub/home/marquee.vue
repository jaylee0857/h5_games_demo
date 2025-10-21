<template>
  <div class="flex marquee_content">
    <div class="title">公告</div>
    <vue3-marquee :speed="20" direction="left" :pauseOnHover="true">
      <!-- 使用 v-for 和 :key，并绑定 item.text -->
      <div v-for="(item, index) in items" :key="index" class="marquee-item">
        {{ item.text }}
      </div>
    </vue3-marquee>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Vue3Marquee } from "vue3-marquee";

// eslint-disable-next-line no-unused-vars
const items = ref([
  { text: "★【金流部門通知】★" },
  { text: "★【營運部門通知】★" },
  { text: "★【官方公告】★" },
  { text: "【綁定帳戶注意事項】" },
  { text: "★【3A商城正式上線通知】★" },
  { text: "【鄭重聲明】請認明唯一官方Line帳號: @aaa1788 " },
]);
</script>

<style scoped lang="scss">
.marquee_content {
  display: flex;
  flex-flow: nowrap;
  background-color: #217ab8;
  color: white;
  padding: 4px 5px;
  .title {
    width: 12%;
    text-align: center;
  }
  .marquee-item {
    margin: 0 10px;
  }
}
</style>
