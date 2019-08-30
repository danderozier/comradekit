<template>
  <IconWrapper v-bind="$attrs" v-on="$listeners">
    <CheckmarkOutline />
  </IconWrapper>
</template>

<script>
import IconWrapper from "@/components/icons/IconWrapper";
import CheckmarkOutline from "@/assets/svg/checkmark-outline.svg";

export default {
  name: "CheckmarkIcon",
  components: { IconWrapper, CheckmarkOutline }
};
</script>
