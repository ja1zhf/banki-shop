<script lang="ts">
import { defineComponent } from "vue";
import Painting from "@/type.ts";
import SliderComponent from "./slider.vue";
import ButtonComponent from "../components/button.vue";
import "../assets/window.css";

export default defineComponent({
  components: {
    SliderComponent,
    ButtonComponent,
  },
  props: {
    closeModal: Function,
    formatNumber: Function,
    painting: {
      type: Object as () => Painting,
      required: true,
    },
  },
  methods: {
    handleClick(event: MouseEvent) {
      if (event.target === this.$el) {
        this.closeModal();
      }
    },
  },
});
</script>

<template>
  <div class="overlay" @click="handleClick">
    <div class="window">
      <SliderComponent :imgs="painting.imgsSrc" />
      <div class="info">
        <h2 class="h2">{{ painting.title }}</h2>
        <p class="h5">
          {{ painting.description }}
        </p>
        <div class="buy">
          <div class="price">
            <p
              class="h6"
              :class="{ stroked: painting.isAvailable }"
              v-if="painting.prevPrice !== 0"
            >
              {{ formatNumber(painting.prevPrice) }} $
            </p>
            <p class="h3" v-if="painting.price !== 0">
              {{ formatNumber(painting.price) }} $
            </p>
            <p class="h3 selled" v-if="!painting.isAvailable">
              Продана на аукционе
            </p>
          </div>
          <ButtonComponent
            :id="painting.id"
            :isAvailable="painting.isAvailable"
          />
        </div>
      </div>
    </div>
  </div>
</template>
