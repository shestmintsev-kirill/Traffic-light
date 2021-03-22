<template>
  <p class="count">{{ counter }}</p>
</template>

<script>
export default {
  name: "Counter",
  data: () => ({
    counter: null,
  }),
  props: {
    nowCounter: {
      type: Number,
    },
  },
  methods: {
    countTimer() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.counter -= 1;
          this.countTimer();
        }, 1000);
        resolve();
      });
    },
  },
  async created() {
    this.counter = this.nowCounter;
    await this.countTimer();
  },
};
</script>

<style scoped lang="scss">
.count {
  text-align: center;
  font-size: 20px;
}
</style>
