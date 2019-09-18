<template>
  <IconWrapper v-bind="$attrs" v-on="$listeners">
    <ChevronDown />
  </IconWrapper>
</template>

<script>
import IconWrapper from "@/components/icons/IconWrapper";
import ChevronDown from "@/assets/svg/chevron-down.svg";

export default {
  name: "ChevronDownIcon",
  components: { IconWrapper, ChevronDown }
};
</script>
