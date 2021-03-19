<template>
  <div
    :class="{
      bgRed: light === 'red',
      bgYellow: light === 'yellow',
      bgGreen: light === 'green',
      blink: blink,
    }"
    class="light"
  ></div>
</template>

<script>
export default {
  name: "Spotlight",
  data: () => ({
    timer: null,
    blink: false,
  }),
  props: {
    light: {
      type: String,
    },
  },

  methods: {
    intervalBlink() {
      setTimeout(() => {
        setInterval(() => {
          this.blink = !this.blink;
        }, 1000);
      }, this.timer);
    },
  },
  created() {
    if (this.light === "red") {
      this.timer = 6000;
    } else if (this.light === "yellow") {
      this.timer = 0;
    } else if (this.light === "green") {
      this.timer = 11000;
    }
    this.intervalBlink();
  },
};
</script>

<style scoped lang="scss">
.outer {
  padding: 20px;
  width: 100vw;
  height: 100vh;
}

.light {
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
}

.bgRed {
  background: red;
}

.bgYellow {
  background: yellow;
}

.bgGreen {
  background: green;
}

.blink {
  opacity: 0.3;
}
</style>
