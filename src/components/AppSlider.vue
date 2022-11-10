<template>
  <Swiper
    class="swiper"
    :modules="modules"
    :autoplay="{
      delay: 7000,
      disableOnInteraction: false,
    }"
    :pagination="{ type: 'bullets' }"
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :speed="1000"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="slide in slidesData" :key="slide.imgUrl">
      <product-slide :imgUrl="slide.imgUrl" @buttonClick="console.log(true)" />
    </swiper-slide>
    <div class="swiper__counter">
      <span class="swiper__counterCurrent">{{ index }}</span>
      /4
    </div>
    <!-- <ChecklistDialog
        isOpen={isOpenCheckList}
        onClose={() => setIsOpenChecklist(false)}
      /> -->
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "swiper/vue";
import { Autoplay, Pagination, A11y } from "swiper";
import AppProductSlide from "./AppProductSlide.vue";
import "swiper/css";
import "swiper/css/pagination";
import imageSlide1 from "../assets/images/sofa-01.png";
import imageSlide2 from "../assets/images/sofa-02.png";
import imageSlide3 from "../assets/images/sofa-03.png";
import imageSlide4 from "../assets/images/sofa-04.png";
export default {
  data() {
    return {
      index: 0,
      slidesData: [
        { imgUrl: imageSlide1 },
        { imgUrl: imageSlide2 },
        { imgUrl: imageSlide3 },
        { imgUrl: imageSlide4 },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    "product-slide": AppProductSlide,
  },
  setup() {
    const swiperSlide = useSwiper();
    const onSlideChange = () => {
      //   this.index = swiper.realIndex + 1;
      console.log("sw", swiperSlide);
    };
    return {
      swiperSlide,
      onSlideChange,
      modules: [Pagination, Autoplay, A11y],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.swiper {
  [class~="swiper-pagination-bullets"] {
    bottom: 203px;
    @media (min-width: 477px) {
      bottom: 184px;
    }
    @media (min-width: 1200px) {
      bottom: 59px;
    }
  }
  [class~="swiper-pagination"] {
    padding-left: 16px;
    padding-right: 81px;
    @media (min-width: 1200px) {
      @include padding_left_right;
      text-align: left;
    }
  }
  [class~="swiper-pagination-bullet"] {
    height: 2px;
    width: 30px;
    border-radius: 0;
    background-color: $color_bg_black;
    opacity: 1;
    margin: 0 10px !important;
    position: relative;
    @media (min-width: 375px) {
      width: 35px;
      margin: 0 12px !important;
    }
    @media (min-width: 1200px) {
      width: 18px;
      margin: 0 8px !important;
    }
    &::before {
      position: absolute;
      content: "";
      left: 0;
      bottom: 50%;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: transparent;
      transform: translate(-100%, 50%);
      transition: transform linear 7.2s 0.3s;
    }
  }
  [class~="swiper-pagination-bullet-active"] {
    background-color: $color_bg_accent;
  }
  [class~="swiper-pagination-bullet-active"][class~="swiper-pagination-bullet"]::before {
    background-color: $color_text_accent;
    transform: translate(300%, 50%);
    transition: transform linear 7.2s 0.3s;
    @media (min-width: 1200px) {
      transform: translate(180%, 50%);
    }
  }
}

.swiper__counter {
  position: absolute;
  height: 46px;
  font-weight: 600;
  font-size: 18px;
  line-height: 46px;
  letter-spacing: 0.1em;
  bottom: 196px;
  left: 50%;
  transform: translateX(80px);
  @media (min-width: 375px) {
    transform: translateX(97.5px);
  }
  @media (min-width: 477px) {
    bottom: 178px;
  }
  @media (min-width: 1200px) {
    bottom: 52px;
    left: 161px;
    transform: none;
    @include padding_left_right;
  }
  .swiper__counterCurrent {
    color: $color_text_accent;
    font-weight: 600;
    font-size: 24px;
    line-height: 46px;
  }
}
</style>
