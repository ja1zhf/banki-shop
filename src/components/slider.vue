<script lang="ts">
import { defineComponent } from "vue";
import "../assets/slider.css";

export default defineComponent({
  props: {
    imgs: {
      type: Array as () => string[],
      required: true,
    },
  },
  data() {
    return {
      index: 0,
      intervalId: null as any,
    };
  },
  methods: {
    next() {
      this.index = (this.index + 1) % this.imgs.length;
    },
    prev() {
      this.index = (this.index - 1 + this.imgs.length) % this.imgs.length;
    },
    startSlider() {
      this.intervalId = setInterval(this.next, 5000);
    },
  },
  mounted() {
    this.startSlider();
  },
});
</script>

<template>
  <div class="img-wrapper">
    <button class="h4 swap" @click="prev">Предыдущая</button>
    <img v-if="imgs && imgs.length > 0" :src="imgs[index]" />
    <button class="h4 swap" @click="next">Следующая</button>
  </div>
</template>
