<script lang="ts">
import { defineComponent } from "vue";
import CartIcon from "@/assets/icons/cart.svg";
import LoadingIcon from "@/assets/icons/loading.svg";
import DoneIcon from "@/assets/icons/done.svg";

export default defineComponent({
  components: {
    CartIcon,
    LoadingIcon,
    DoneIcon,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      buttonState: "Купить" as string,
    };
  },
  created() {
    const savedState = localStorage.getItem(`buttonState_${this.id}`);
    if (savedState) {
      this.buttonState = savedState;
    }
  },
  methods: {
    handleClick() {
      if (
        this.buttonState !== "В корзине" &&
        this.buttonState !== "Обработка"
      ) {
        this.buttonState = "Обработка";

        setTimeout(() => {
          this.buttonState = "В корзине";
          localStorage.setItem(`buttonState_${this.id}`, this.buttonState);
        }, 2000);
      }
    },
  },
});
</script>

<template>
  <button
    class="regular-button"
    :class="{ 'selected-button': buttonState === 'В корзине' }"
    v-if="isAvailable"
    @click="handleClick"
  >
    <CartIcon v-if="buttonState === 'Купить'" />
    <LoadingIcon class="animated" v-if="buttonState === 'Обработка'" />
    <DoneIcon v-if="buttonState === 'В корзине'" />
    <p class="h4">{{ buttonState }}</p>
  </button>
</template>
