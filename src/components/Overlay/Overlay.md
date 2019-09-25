```vue
<template>
  <div>
  <!--
    <Button @click="onClick">Click me!</Button>
    <transition name="fade">
      <Overlay v-if="isOpen" @close="isOpen = false" :is-closable="isClosable"/>
    </transition>
  </div>
  -->
</template>

<script>
export default {
  data() {
    return {
      isClosable: true,
      isOpen: false
    }
  },
  methods: {
    onClick() {
      this.isOpen = true;
    }
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
```
