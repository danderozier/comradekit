<template>
  <IconWrapper v-bind="$attrs" v-on="$listeners">
    <CheckboxIndeterminate />
  </IconWrapper>
</template>

<script>
import IconWrapper from "@/components/icons/IconWrapper";
import CheckboxIndeterminate from "@/assets/svg/checkbox_indeterminate.svg";

export default {
  name: "CheckboxIndeterminateIcon",
  components: { IconWrapper, CheckboxIndeterminate }
};
</script>
