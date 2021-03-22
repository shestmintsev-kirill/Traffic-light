<template>
  <section class="outer">
    <Spotlight :activeTime="activeTime" :light="light" />
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
    activeTime: 15000,
  }),
  methods: {
    switchRoute() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.$router.push({
            name: "Yellow",
            params: { switchLight: "toRed" },
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
