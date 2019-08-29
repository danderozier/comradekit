<template>
  <IconWrapper v-bind="$attrs" v-on="$listeners">
    <RadioButton />
  </IconWrapper>
</template>

<script>
import IconWrapper from "@/components/icons/IconWrapper";
import RadioButton from "@/assets/svg/radio_button.svg";

export default {
  name: "CheckboxIcon",
  components: { IconWrapper, RadioButton }
};
</script>
