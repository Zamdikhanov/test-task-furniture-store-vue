<template>
  <div class="productSlide">
    <h2 class="productSlide__title">Интернет магазин мебельной компании</h2>
    <div class="productSlide__subtitle">SWEETHOME</div>
    <div class="productSlide__text">
      Добро пожаловать на официальный сайт «SWEETHOME»! В каталоге компании
      представлен широкий выбор корпусной мебели от производителя — спальни,
      гостиные, прихожие, мебель для ванных комнат, кухонь, а также мягкая
      мебель и матрасы.
    </div>
    <div class="productSlide__imageBlock">
      <img :src="imgUrl" alt="sofa" />
    </div>
    <div class="productSlide__pagination"></div>
    <div class="productSlide__callingText">
      Рассчитайте стоимость мебели уже сейчас и вы получитье скидку
      <b>10</b>
      %.
    </div>
    <div class="productSlide__buttonContainer">
      <base-button buttonType="button" @click="buttonClick">
        Рассчитать стоимость
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: ["imgUrl"],
  components: {
    "base-button": BaseButton,
  },
  methods: {
    buttonClick() {
      this.$emit("buttonClick");
    },
  },
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.productSlide {
  @include padding_left_right;
  padding-top: 32px;
  padding-bottom: 32px;
  //   background-image: url(../assets/images/slide-bg.svg);
  background-position: 84.5% 27%;
  background-repeat: repeat;
  width: 100%;
  display: grid;
  grid-template-areas: "Title" "Subtitle" "Text" "Image" "Pagination" "Callingtext" "Button";
  @media (min-width: 768px) {
    padding-top: 48px;
  }
  @media (min-width: 1200px) {
    padding-right: 0px;
    padding-top: 64px;
    grid-template-areas: "Title Title" "Subtitle Image" "Text Image" "Callingtext Image" "Button Image" "Pagination Image";
    column-gap: 64px;
    grid-template-columns: calc(100vw * 0.2375 + 215px) auto;
    background-position: 25px -10px;
    background-repeat: no-repeat;
  }
  @media (min-width: 1600px) {
    padding-top: 88px;
    background-position: 85px 0px;
  }
  @media (min-width: 1920px) {
    padding-right: calc(100vw * 0.5 - 830px - 130px);
    grid-template-columns: 671px auto;
    background-position: left calc(50% - 27px) top 16px;
  }
}

.productSlide__title {
  grid-area: Title;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin-right: -1px;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
  @media (min-width: 1200px) {
    font-size: 36px;
    line-height: 46px;
    margin-bottom: 16px;
  }
}

.productSlide__subtitle {
  grid-area: Subtitle;
  width: 100%;
  color: $color_text_main;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
  @media (min-width: 1200px) {
    font-size: 36px;
    line-height: 46px;
  }
}

.productSlide__text {
  grid-area: Text;
  color: $color_text_main;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 8px;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 24px;
  }
  @media (min-width: 1600px) {
  }
}

.productSlide__imageBlock {
  grid-area: Image;
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  justify-content: center;
  @media (min-width: 1200px) {
    @include margin_right_minus;
    margin-bottom: 1px;
    justify-content: flex-end;
  }
  & img {
    display: block;
    object-fit: contain;
    @media (min-width: 1200px) {
      margin-top: 8px;
    }
  }
}

.productSlide__pagination {
  grid-area: Pagination;
  height: 46px;
  width: 200px;
  margin-bottom: 24px;
  @media (min-width: 1200px) {
    margin-bottom: 14px;
    width: 211px;
  }
}

.productSlide__callingText {
  grid-area: Callingtext;
  color: $color_text_accent;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0;
  margin-bottom: 40px;
  & b {
    font-weight: 700;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
    line-height: 30px;
  }
}

.productSlide__buttonContainer {
  grid-area: Button;
  @media (min-width: 1200px) {
    margin-bottom: 56px;
  }
}
</style>
