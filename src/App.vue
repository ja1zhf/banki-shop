<script lang="ts">
import HeaderComponent from "./components/header.vue";
import CardComponent from "./components/card.vue";
import FooterComponent from "./components/footer.vue";

export default {
  components: {
    HeaderComponent,
    CardComponent,
    FooterComponent,
  },
  data() {
    return {
      searchQuery: "",
      paintings: [
        {
          id: 1,
          title: "«Рождение Венеры» Сандро Боттичелли",
          description:
            "Шедевр эпохи Ренессанса, изображающий богиню Венеру, возникающую из морской пены. Картина наполнена изяществом, мягкими линиями и гармоничными пастельными тонами.",
          imgsSrc: [
            "/sandro/pic_1.png",
            "/sandro/pic_2.png",
            "/sandro/pic_3.png",
            "/sandro/pic_4.png",
          ],
          prevPrice: 2000000,
          price: 1000000,
          isAvailable: true,
        },
        {
          id: 2,
          title: "«Тайная вечеря»  Леонардо да Винчи",
          description:
            "Знаменитая фреска, изображающая момент, когда Иисус объявляет о предательстве. Глубокая перспектива, выразительные жесты и эмоции учеников создают драматическое напряжение.",
          imgsSrc: [
            "/leonardo/pic_1.png",
            "/leonardo/pic_2.png",
            "/leonardo/pic_3.png",
          ],
          prevPrice: 0,
          price: 3000000,
          isAvailable: true,
        },
        {
          id: 3,
          title: "«Сотворение Адама» Микеланджело",
          description:
            "Фреска Сикстинской капеллы, изображающая момент передачи жизни Адаму Богом. Динамичные позы, выразительные жесты и мастерская анатомия подчёркивают божественное происхождение человека.",
          imgsSrc: ["/mikelandzhelo/pic_1.png", "/mikelandzhelo/pic_2.png"],
          prevPrice: 6000000,
          price: 5000000,
          isAvailable: true,
        },
        {
          id: 4,
          title: "«Урок анатомии»  Рембрандт",
          description:
            "Картина, изображающая доктора Тюльпа, демонстрирующего анатомию человеческого тела. Мастерская игра света и тени подчёркивает реализм, внимание к деталям и научное любопытство.",
          imgsSrc: [
            "/rembrandt/pic_1.png",
            "/rembrandt/pic_2.png",
            "/rembrandt/pic_3.png",
          ],
          prevPrice: 0,
          price: 0,
          isAvailable: false,
        },
      ],
    };
  },
  computed: {
    filteredPaintings() {
      const searchQuery = this.$route.query.search as string;

      if (!searchQuery) {
        return this.paintings;
      }

      return this.paintings.filter((painting) =>
        painting.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    },
  },
  mounted() {
    this.searchQuery = (this.$route.query.search as string) || "";
  },
};
</script>

<template>
  <HeaderComponent />
  <main>
    <div class="container">
      <h1 class="h1">Картины эпохи Возрождения</h1>
      <div class="list">
        <CardComponent
          v-for="(painting, index) in filteredPaintings"
          :key="index"
          :painting="painting"
        />
      </div>
    </div>
  </main>
  <FooterComponent />
</template>
