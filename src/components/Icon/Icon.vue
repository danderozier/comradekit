<template>
  <span class="icon" :size="size" v-on="$listeners">
    <component :is="iconComponent" />
  </span>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  data() {
    return {
      iconComponent: undefined
    };
  },
  watch: {
    icon() {
      this.updateSvg();
    }
  },
  mounted() {
    this.updateSvg();
  },
  methods: {
    async updateSvg() {
      try {
        const component = await import(`@assets/svg/${this.icon}.svg`);
        this.iconComponent = component.default;
      } catch (error) {
        console.error("Unrecognized icon type:", error.message);
      }
    }
  }
};
</script>

<style lang="scss">
span.icon {
  height: $icon-size-normal;
  width: $icon-size-normal;
  color: currentcolor;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  line-height: 1;

  & > svg {
    height: $icon-size-normal;
    width: $icon-size-normal;
    max-height: 100%;
    max-width: 100%;
    pointer-events: none;
    vertical-align: bottom;
    overflow: hidden;
  }
  &[size="is-xsmall"],
  &[size="is-xsmall"] > svg {
    width: $icon-size-xsmall;
    height: $icon-size-xsmall;
  }
  &[size="is-small"],
  &[size="is-small"] > svg {
    width: $icon-size-small;
    height: $icon-size-small;
  }
  &[size="is-large"],
  &[size="is-large"] > svg {
    width: $icon-size-large;
    height: $icon-size-large;
  }
  &[size="is-xlarge"],
  &[size="is-xlarge"] > svg {
    width: $icon-size-xlarge;
    height: $icon-size-xlarge;
  }
}
</style>
