<template>
  <section class="outer">
    <Spotlight :activeTime="activeTime" :light="light" />
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
    activeTime: 3000,
  }),
  created() {
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
        }, this.activeTime);
      } else if (sissionLight === "toRed") {
        setTimeout(() => {
          this.$router.push({ name: "Red" });
        }, this.activeTime);
      }
    } else {
      setTimeout(() => {
        this.$router.push({ name: "Green" });
      }, this.activeTime);
    }
  },
};
</script>
