<template>
  <section class="outer">
    <Spotlight :light="light" />
    <Counter :nowCounter="10" />
  </section>
</template>

<script>
import Counter from "../components/Counter.vue";
import Spotlight from "../components/Spotlight.vue";
export default {
  components: { Counter, Spotlight },
  name: "Red",
  data: () => ({
    light: "red",
  }),
  mounted() {
    localStorage.light = JSON.stringify(this.light);
    setTimeout(() => {
      this.$router.push({ name: "Yellow", params: { switchLight: "toGreen" } });
    }, 10000);
  },
};
</script>
