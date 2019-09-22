<template>
  <div class="spinner" :size="size" :style="computedStyles">
    <svg
      focusable="false"
      :size="dimensions.size"
      :height="dimensions.size"
      :width="dimensions.size"
      :viewBox="`0 0 ${dimensions.size} ${dimensions.size}`"
      :style="computedSvgStyles"
    >
      <circle :cx="origin" :cy="origin" :r="dimensions.radius" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "medium"
    }
  },
  computed: {
    computedStyles() {
      return {
        width: `${this.dimensions.size}px`,
        height: `${this.dimensions.size}px`
      };
    },
    computedSvgStyles() {
      return {
        "stroke-dasharray": this.circumference,
        "stroke-dashoffset": this.circumference * this.spinnerLengthRatio,
        "stroke-width": Math.floor(
          this.dimensions.size * this.spinnerWidthRatio
        )
      };
    },
    dimensions() {
      switch (this.size) {
        case "is-xsmall":
          return {
            size: 14,
            radius: 5
          };
        case "is-small":
          return {
            size: 20,
            radius: 9
          };
        case "is-large":
          return {
            size: 42,
            radius: 19
          };
        case "is-xlarge":
          return {
            size: 50,
            radius: 22.5
          };
        default:
          return {
            size: 30,
            radius: 12
          };
      }
    },
    origin() {
      return this.dimensions.size / 2;
    },
    circumference() {
      return 2 * Math.PI * this.dimensions.radius;
    },
    spinnerLengthRatio() {
      return 0.7;
    },
    spinnerWidthRatio() {
      return 0.1;
    }
  }
};
</script>

<style lang="scss" scoped>
.spinner {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  z-index: 2000000000;
}

svg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite
    spinnerRotateAnimation;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: 3px;
  transform-origin: center;
}

@keyframes spinnerRotateAnimation {
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
