<script setup>
import ModeService from "@/services/mode-service";
import { useRouter } from "vue-router";

const router = useRouter();

const changeMode = () => {
  // console.log(ModeService);
  ModeService.changeMode("version1");
  router.push({ path: "/version1/home" });
};
</script>
<template>
  <div>樣式二</div>
  <q-btn @click="changeMode" color="red" icon-right="send" label="切換樣式一" />
</template>
