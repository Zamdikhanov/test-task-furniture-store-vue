<template>
  <button
    class="burger"
    :class="{ menu_button__active: isOpen }"
    type="button"
    aria-expanded="false"
    aria-label="Menu"
    aria-controls="mainnav"
  >
    <span></span>
  </button>
</template>

<script>
export default {
  props: ["isOpen"],
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.burger {
  display: block;
  height: 44px;
  width: 44px;
  position: relative;
  margin: 0 -8px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media (min-width: 1200px) {
    display: none;
  }
  & span,
  &::before,
  &::after {
    display: block;
    position: absolute;
    height: 3px;
    width: 28px;
    border-radius: 1.5px;
    background-color: #fff;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0);
    transition: all 0.5s ease 0s;
  }
  & span {
    top: 50%;
    transform: scale(1) translate(-50%, -50%);
  }
  &:hover span,
  &:hover::before,
  &:hover::after {
    background-color: $color_text_accent;
  }
  &:hover span {
    width: 22px;
  }
  &::before,
  &::after {
    content: "";
  }
  &::before {
    top: calc(50% - 8.5px);
  }
  &::after {
    bottom: calc(50% - 8.5px);
  }
  &.menu_button__active {
    &::before {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      bottom: 50%;
      transform: translate(-50%, 50%) rotate(-45deg);
    }
    & span {
      transform: scale(0);
    }
  }
}
</style>
