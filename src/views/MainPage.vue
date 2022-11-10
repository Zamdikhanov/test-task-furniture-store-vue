<template>
  <app-header></app-header>
  <sub-menu></sub-menu>
  <main>
    <app-slider />
    <!-- <Slider /> -->
    <advantage-cards />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSubMenu from "@/components/AppSubMenu.vue";
import AdvantageCards from "@/components/AdvantageCards.vue";
import AppSlider from "@/components/AppSlider.vue";

export default {
  components: {
    "app-header": AppHeader,
    "sub-menu": AppSubMenu,
    "advantage-cards": AdvantageCards,
    "app-slider": AppSlider,
  },
};
</script>
<style lang=""></style>
