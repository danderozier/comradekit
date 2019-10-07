<template>
  <div @keydown="onKeydown">Temp</div>
</template>

<script>
export default {
  name: "TempKeyboardListener",
  methods: {
    onKeydown() {}
  },
  /**
   * Optionally injects an event bus provided by
   * parent. Useful in cases where the child component
   * needs to listen to events occurring on a parent
   * or sibling (like a Dropdown trigger, for instance).
   */
  inject: {
    eventBus: { default: false }
  },
  created() {
    // If event bus is provided, listen for keydown event.
    if (this.eventBus) {
      this.eventBus.$on("keydown", this.onKeydown);
    }
  },
  beforeDestroy() {
    // If event bus is provided, remove keydown listener.
    if (this.eventBus) {
      this.eventBus.$off("keydown", this.onKeydown);
    }
  }
};
</script>
