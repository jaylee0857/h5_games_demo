<template>
  <Swiper
    :slides-per-view="1"
    :space-between="0"
    :modules="modules"
    :loop="true"
    pagination
    autoplay
  >
    <SwiperSlide v-for="(item, idx) in images" :key="`banner-${idx}`">
      <img
        v-lazy="item?.isDefault ? item.mobile_image : url + item.mobile_image"
        class="w-full h-full"
        :src="`${
          item?.isDefault ? item.mobile_image : url + item.mobile_image
        }`"
        @click="toBannerUrl(item)"
      />
    </SwiperSlide>
    <!-- <SwiperSlide v-for="(image, idx) in images" :key="`banner-${idx}`">
      <img class="w-full h-full" :src="image" />
    </SwiperSlide> -->
  </Swiper>
  <!-- 輪播圖 -->
</template>
<script>
import { ref, onMounted } from "vue";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { getImageUrl } from "@/utils/getImageUrl";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = ref([
      getImageUrl("at/10009.jpg"),
      getImageUrl("at/10010.jpg"),
      getImageUrl("at/10011.jpg"),
    ]);
    const sortDefaultList = () => {
      images.value = images.value.map((image) => {
        return {
          mobile_image: image,
          mobile_url: "",
          isDefault: true,
        };
      });
    };

    const toBannerUrl = (item) => {
      if (item.mobile_url === "") return; //空字串則return
      let isAndroid = navigator.userAgent.indexOf("Mac") === -1; //判斷裝置 有掃到Mac為 iPhone and iPad
      if (isAndroid) {
        return window.open(item.mobile_url);
      }
      document.location.href = item.mobile_url;
    };

    onMounted(() => {
      sortDefaultList();
    });

    return {
      images,
      modules: [Autoplay, Pagination],
      toBannerUrl,
    };
  },
};
</script>
<style>
.swiper-pagination {
  line-height: 0;
}
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 6px;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 4px;
  background: #eee;
  border-radius: 9999px;
  transform-origin: center;
  opacity: 0.8;
  transition: width cubic-bezier(0.175, 0.885, 0.32, 1.275) 300ms;
}
.swiper-pagination-bullet-active {
  width: 16px;
  background: #fff;
  opacity: 1;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 2px;
}
</style>
