<template>
  <div class="overlay" @click="onClick()"></div>
</template>

<script>
export default {
  name: "Overlay",
  props: {
    isClosable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick(e) {
      if (this.isClosable) {
        this.$emit("close");
        this.$emit("click", e);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 500;
  background: rgb(0, 0, 0, 0.75);
  opacity: 1;
}
</style>
