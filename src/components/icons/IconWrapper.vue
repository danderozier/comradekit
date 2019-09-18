<template>
  <span class="icon" :size="size" v-on="$listeners">
    <slot />
  </span>
</template>

<script>
export default {
  name: "IconWrapper",
  props: {
    size: {
      type: String,
      default: "medium"
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
  &[size="small"],
  &[size="small"] > svg {
    width: $icon-size-small;
    height: $icon-size-small;
  }
  &[size="large"],
  &[size="large"] > svg {
    width: $icon-size-large;
    height: $icon-size-large;
  }
  &[size="xlarge"],
  &[size="xlarge"] > svg {
    width: $icon-size-xlarge;
    height: $icon-size-xlarge;
  }
}
</style>
