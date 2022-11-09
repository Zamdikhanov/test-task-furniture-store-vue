<template>
  <div class="advantageCards">
    <ul class="advantageCards__container">
      <li
        v-for="itemObj in advantages"
        class="advantageCard"
        v-bind:key="itemObj.description"
      >
        <base-icon
          :name="itemObj.iconName"
          class="advantageCard__svg"
        ></base-icon>
        <div class="advantageCard__description">
          {{ itemObj.description }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  data() {
    return {
      advantages: [
        {
          description: "Уникальный дизайн",
          iconName: "fluent-design",
        },
        {
          description: "Бесплатная доставка",
          iconName: "delivery",
        },
        {
          description: "Гарантия 10 лет",
          iconName: "protect",
        },
        {
          description: "Современные технологии",
          iconName: "machine-learning-model",
        },
      ],
    };
  },
  components: {
    "base-icon": BaseIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.advantageCards {
  @include padding_left_right;
  background-color: $color_bg_black;
}

.advantageCards__container {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 0;
  @media (min-width: 1200px) {
    padding: 0 0;
  }
}

.advantageCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 260px;
  padding: 16px 0;
  @media (min-width: 1200px) {
    padding: 40px 0;
  }
  &:nth-child(2) {
    @media (min-width: 1200px) {
      order: 2;
    }
  }
  &:nth-child(3) {
    @media (min-width: 1200px) {
      order: 3;
    }
  }
  &:nth-child(4) {
    @media (min-width: 1200px) {
      order: 1;
    }
  }
}

.advantageCard__svg {
  margin-bottom: 16px;
}

.advantageCard__description {
  width: min-content;
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  color: $color_text_light;
}
</style>
