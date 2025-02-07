<script lang="ts">
import PhoneIcon from "@/assets/icons/phone.svg";
import AddressIcon from "@/assets/icons/address.svg";
import "../assets/footer.css";

export default {
  name: "FooterComponent",
  components: {
    PhoneIcon,
    AddressIcon,
  },
  data() {
    return {
      links: [
        { text: "Каталог", url: "/" },
        { text: "Доставка", url: "/" },
        { text: "Оплата", url: "/" },
        { text: "Контакты", url: "/" },
        { text: "О компании", url: "/" },
      ],
      phone: "+7 (812) 555-55-55",
      address: "г. Санкт-Петербург, ул. Ефимова, 3",
    };
  },
};
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="links">
        <a
          class="h5"
          v-for="(link, index) in links"
          :key="index"
          :href="link.url"
          >{{ link.text }}</a
        >
      </div>
      <div class="contacts">
        <div class="contact">
          <PhoneIcon />
          <p class="h5">{{ phone }}</p>
        </div>
        <div class="contact">
          <AddressIcon />
          <p class="h5">{{ address }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>
