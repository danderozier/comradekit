<template>
  <div
    tabindex="0"
    prevent-outline
    @keyup.enter="onEnter"
    @click="onClick"
    @mousedown="onMouseDown"
  >
    <div class="label" tabindex="-1">
      <slot />
      <div class="pencil-icon">
        <!-- <EditFilledIcon size="xsmall" /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import EditFilledIcon from "../Icon/EditFilledIcon";

const DRAG_THRESHOLD = 5;

export default {
  name: "InlineEditToggle",
  // components: { EditFilledIcon },
  data() {
    return {
      startX: 0,
      startY: 0
    };
  },
  methods: {
    onMouseDown(e) {
      this.startX = e.clientX;
      this.startY = e.clientY;
    },
    onEnter() {
      this.$emit("edit");
    },
    onClick(e) {
      if (this.mouseHasMoved(e)) return;
      this.$emit("edit");
    },
    mouseHasMoved({ clientX, clientY }) {
      return (
        Math.abs(this.startX - clientX) >= DRAG_THRESHOLD ||
        Math.abs(this.startY - clientY) >= DRAG_THRESHOLD
      );
    }
  }
};
</script>

<style lang="scss" scoped>
[prevent-outline] {
  outline: none;
}

.label {
  align-items: center;
  background-color: transparent;
  border: transparent $input-border-width $input-border-style;
  border-radius: $input-border-radius;
  color: $input-text-color;
  cursor: pointer;
  display: flex;
  min-width: 44px;
  outline: none;
  padding: $input-padding;
}

[compact] > .label {
  padding: 0;
}

:focus > .label {
  border: 2px solid #4c9aff;
  background: #fff;
}

.label:hover {
  background-color: #ebecf0;
}

.pencil-icon {
  align-items: center;
  margin-left: auto;
  padding: 0 5px;
  font-size: initial;
  opacity: 0;
  display: inline-flex;
}

.label:hover .pencil-icon {
  opacity: 1;
}
</style>
