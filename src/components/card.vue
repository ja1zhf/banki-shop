<script lang="ts">
import { defineComponent } from "vue";
import WindowComponent from "../components/window.vue";
import ButtonComponent from "../components/button.vue";
import "../assets/card.css";
import Painting from "@/type.ts";

export default defineComponent({
  name: "CardComponent",
  components: {
    WindowComponent,
    ButtonComponent,
  },
  props: {
    painting: {
      type: Object as () => Painting,
      required: true,
    },
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    formatNumber(value: number): string {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
});
</script>

<template>
  <div class="card" :class="{ inactive: !painting.isAvailable }">
    <img
      class="card-img"
      v-if="painting.imgsSrc && painting.imgsSrc.length > 0"
      :src="painting.imgsSrc[0]"
      @click="openModal"
    />
    <div class="info">
      <h2 class="h2" @click="openModal">{{ painting.title }}</h2>
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
  <WindowComponent
    :painting="painting"
    :closeModal="closeModal"
    :formatNumber="formatNumber"
    v-if="isModalOpen"
  />
</template>
