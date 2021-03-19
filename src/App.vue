<template>
  <router-view />
</template>

<script>
export default {
  name: "Red",
  data: () => ({
    nowLight: null,
  }),
  created() {
    if (localStorage.light) {
      this.nowLight = JSON.parse(localStorage.light);
      this.$router.push(`/${this.nowLight}`);
    } else {
      this.$router.push("/red");
    }
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.outer {
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>
