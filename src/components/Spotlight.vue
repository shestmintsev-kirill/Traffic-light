<template>
  <div
    :class="{
      red: light === 'red',
      blink: blink && light === 'red',
    }"
    class="light bgRed"
  ></div>
  <div
    :class="{ yellow: light === 'yellow', blink: blink && light === 'yellow' }"
    class="light bgYellow"
  ></div>
  <div
    :class="{ green: light === 'green', blink: blink && light === 'green' }"
    class="light bgGreen"
  ></div>
</template>

<script>
export default {
  name: "Spotlight",
  data: () => ({
    blink: false,
  }),
  props: {
    light: {
      type: String,
    },
    activeTime: {
      type: Number,
    },
  },

  methods: {
    intervalBlink() {
      setTimeout(() => {
        setInterval(() => {
          this.blink = !this.blink;
        }, 500);
      }, this.activeTime - 3000);
    },
  },
  created() {
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
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  & + .light {
    margin-top: 20px;
  }
}

.bgRed {
  background: rgba(255, 0, 0, 0.2);
}

.bgYellow {
  background: rgba(255, 255, 0, 0.2);
}

.bgGreen {
  background: rgba(0, 128, 0, 0.2);
}

.red {
  background: red;
}

.yellow {
  background: yellow;
}

.green {
  background: green;
}

.blink {
  opacity: 0.3;
}
</style>
