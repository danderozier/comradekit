<template>
  <TextInputWrapper v-on="$listeners" v-bind="$attrs" :is-select="true">
    <slot name="icon-before" />
    <slot />
    <ChevronDownIcon slot="icon-after" />
  </TextInputWrapper>
</template>

<script>
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import TextInputWrapper from "@/components/utilities/TextInputWrapper";

export default {
  name: "SelectInputWrapper",
  components: { ChevronDownIcon, TextInputWrapper }
};
</script>
