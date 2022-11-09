<template>
  <div class="submenu">
    <ul class="subMunu__container">
      <li
        v-for="itemObj in productLinks"
        class="submenu__linkContainer"
        v-bind:key="itemObj.linkText"
      >
        <router-link :to="itemObj.linkUrl" custom v-slot="{ navigate, href }">
          <a
            href="#"
            @click="navigate"
            class="submenu__link"
            :class="{ submenu__link_active: $route.path.indexOf(href) !== -1 }"
          >
            {{ itemObj.linkText }}
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productLinks: [
        {
          linkText: "Диваны и кресла",
          linkUrl: "/sofa",
        },
        {
          linkText: "Кровати",
          linkUrl: "/bed",
        },
        {
          linkText: "Шкафы",
          linkUrl: "/closet",
        },
        {
          linkText: "Комоды и тумбы",
          linkUrl: "/dresser",
        },
        {
          linkText: "Матрасы",
          linkUrl: "/mattress",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";
.submenu {
  @include padding_left_right;
  height: 70px;
  width: 100%;
  overflow-x: auto;
  background-color: #ecf1f2;
  box-shadow: 0px 4px 20px rgba(53, 53, 53, 0.18);
}

.subMunu__container {
  display: flex;
  height: 100%;
  width: 100%;
}

.submenu__linkContainer {
  height: 100%;
  margin-right: 40px;
  @media (min-width: 1200px) {
    margin-right: 64px;
  }
  &:last-child {
    margin-right: 0px;
  }
}

.submenu__link {
  display: flex;
  width: max-content;
  align-items: center;
  height: 100%;
  text-decoration: none;
  color: $color_text_main;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0;
  transition: color ease-in-out 0.3s;
  &:hover {
    color: $color_text_accent;
  }
}

.submenu__link_active {
  box-shadow: inset 0 -2px 0 $color_text_accent;
  color: $color_text_accent;
}
</style>
