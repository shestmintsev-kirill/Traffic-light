<template>
  <section class="outer">
    <Spotlight :activeTime="activeTime" :light="light" />
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
    activeTime: 10000,
  }),
  methods: {
    switchRoute() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.$router.push({
            name: "Yellow",
            params: { switchLight: "toGreen" },
          });
        }, this.activeTime);
        resolve();
      });
    },
  },
  async created() {
    localStorage.light = JSON.stringify(this.light);
    await this.switchRoute();
  },
};
</script>
