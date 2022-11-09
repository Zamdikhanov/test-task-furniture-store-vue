<template>
  <app-header></app-header>
  <sub-menu></sub-menu>
  <main>
    <!-- <Slider /> -->
    <advantage-cards />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSubMenu from "@/components/AppSubMenu.vue";
import AdvantageCards from "@/components/AdvantageCards.vue";
export default {
  components: {
    "app-header": AppHeader,
    "sub-menu": AppSubMenu,
    "advantage-cards": AdvantageCards,
  },
};
</script>
<style lang=""></style>
