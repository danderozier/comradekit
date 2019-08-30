<template>
  <IconWrapper v-bind="$attrs" v-on="$listeners">
    <CloseOutline />
  </IconWrapper>
</template>

<script>
import IconWrapper from "@/components/icons/IconWrapper";
import CloseOutline from "@/assets/svg/close-outline.svg";

export default {
  name: "CloseIcon",
  components: { IconWrapper, CloseOutline }
};
</script>
