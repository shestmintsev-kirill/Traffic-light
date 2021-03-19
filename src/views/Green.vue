<template>
  <section class="outer">
    <Spotlight :light="light" />
    <Counter :nowCounter="15" />
  </section>
</template>

<script>
import Counter from "../components/Counter.vue";
import Spotlight from "../components/Spotlight.vue";
export default {
  components: { Counter, Spotlight },
  name: "Green",
  data: () => ({
    light: "green",
  }),
  mounted() {
    localStorage.light = JSON.stringify(this.light);
    setTimeout(() => {
      this.$router.push({ name: "Yellow", params: { switchLight: "toRed" } });
    }, 15000);
  },
};
</script>
