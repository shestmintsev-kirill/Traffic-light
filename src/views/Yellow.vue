<template>
  <section class="outer">
    <Spotlight :light="light" />
    <Counter :nowCounter="3" />
  </section>
</template>

<script>
import Counter from "../components/Counter.vue";
import Spotlight from "../components/Spotlight.vue";
export default {
  components: { Counter, Spotlight },
  name: "Yellow",
  data: () => ({
    light: "yellow",
    switchValue: null,
  }),
  mounted() {
    localStorage.light = JSON.stringify(this.light);
    if (this.$route.params.switchLight) {
      this.switchValue = this.$route.params.switchLight;
      localStorage.switchValue = JSON.stringify(this.switchValue);
    }
    if (localStorage.switchValue) {
      this.switchValue = JSON.parse(localStorage.switchValue);
      const sissionLight = JSON.parse(localStorage.switchValue);
      if (sissionLight === "toGreen") {
        setTimeout(() => {
          this.$router.push({ name: "Green" });
        }, 3000);
      } else if (sissionLight === "toRed") {
        setTimeout(() => {
          this.$router.push({ name: "Red" });
        }, 3000);
      }
    } else {
      setTimeout(() => {
        this.$router.push({ name: "Green" });
      }, 3000);
    }
  },
};
</script>
