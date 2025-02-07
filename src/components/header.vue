<script lang="ts">
import BurgerIcon from "@/assets/icons/burger.svg";
import "../assets/header.css";

export default {
  name: "HeaderComponent",
  components: {
    BurgerIcon,
  },
  data() {
    return {
      searchQuery: "",
      isActive: false,
      isSmallScreen: window.innerWidth <= 1110,
      links: [
        { text: "Каталог", url: "/" },
        { text: "Доставка", url: "/" },
        { text: "Оплата", url: "/" },
        { text: "Контакты", url: "/" },
        { text: "О компании", url: "/" },
      ],
    };
  },
  watch: {
    "$route.query.search"(newSearch) {
      this.searchQuery = newSearch || "";
    },
  },
  methods: {
    updateSearchQuery() {
      this.$router.push({ query: { search: this.searchQuery } });
    },
    toggleActive() {
      this.isActive = !this.isActive;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 1110;
    },
  },
  mounted() {
    this.searchQuery = (this.$route.query.search as string) || "";
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<template>
  <header>
    <nav>
      <div
        class="links"
        :class="{
          hidden: !isActive && isSmallScreen,
          visible: isActive && isSmallScreen,
        }"
      >
        <a
          class="h5"
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          >{{ link.text }}</a
        >
      </div>
      <button class="burger-menu regular-button" @click="toggleActive">
        <BurgerIcon />
      </button>
      <div class="input">
        <input
          class="h5"
          type="text"
          v-model="searchQuery"
          placeholder="Поиск по названию картины"
        />
        <button class="regular-button" @click="updateSearchQuery">Найти</button>
      </div>
    </nav>
  </header>
</template>
