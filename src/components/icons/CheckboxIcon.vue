<template>
  <IconWrapper v-bind="$attrs" v-on="$listeners">
    <checkbox />
  </IconWrapper>
</template>

<script>
import IconWrapper from "@/components/icons/IconWrapper";
import checkbox from "@/assets/svg/checkbox.svg";

export default {
  name: "CheckboxIcon",
  components: { IconWrapper, checkbox }
};
</script>
