<template>
  <TextInputWrapper v-on="$listeners" v-bind="$attrs" :is-select="true">
    <slot name="icon-before" />
    <slot />
    <icon icon="chevron-down" slot="icon-after" />
  </TextInputWrapper>
</template>

<script>
import Icon from "@components/Icon/Icon";
import TextInputWrapper from "@components/Form/_TextInputWrapper";

export default {
  name: "SelectInputWrapper",
  components: { Icon, TextInputWrapper }
};
</script>
