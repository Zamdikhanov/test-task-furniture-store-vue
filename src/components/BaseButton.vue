<template>
  <router-link v-if="buttonType === 'link'" class="button" to="url ? url : '/'">
    <slot></slot>
  </router-link>
  <button v-else class="button" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["buttonType"],
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: 56px;
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: $color_bg_accent;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0;
  color: $color_text_light;
  box-shadow: 0px 4px 20px rgba(242, 176, 48, 0.2);
  cursor: pointer;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  &:hover {
    color: $color_text_accent;
    background-color: transparent;
    animation: pulse 1s;
    box-shadow: 0 0 0 32px rgba(#fff, 0),
      inset 0px 0px 0px 4px rgba($color_bg_accent, 0.8);
  }
  &:active {
    outline: 2px solid $color_text_accent;
  }
  @media (min-width: 768px) {
    min-width: 260px;
    width: fit-content;
    padding-left: 19px;
    padding-right: 19px;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba($color_bg_accent, 0.4);
  }
}

.button:disabled {
  cursor: default;
  color: $color_bg_gray_dark;
  background-color: $color_bg_gray_light;
  box-shadow: none;
  &:hover {
    box-shadow: none;
  }
  &:active {
    outline: none;
  }
}
</style>
