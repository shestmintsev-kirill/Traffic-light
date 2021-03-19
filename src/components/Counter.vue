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
      if (this.counter > 0) {
        setTimeout(() => {
          this.counter -= 1;
          this.countTimer();
        }, 1000);
      }
    },
  },
  created() {
    this.counter = this.nowCounter;
    this.countTimer();
  },
};
</script>

<style scoped lang="scss">
.count {
  text-align: center;
  font-size: 20px;
}
</style>
