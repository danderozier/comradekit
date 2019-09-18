<template>
  <div class="select">
    <TextInputWrapper :is-select="true">Select</TextInputWrapper>
  </div>
</template>

<script>
import TextInputWrapper from "@components/Form/_TextInputWrapper";

export default {
  name: "DateInput",
  components: { TextInputWrapper }
};
</script>
