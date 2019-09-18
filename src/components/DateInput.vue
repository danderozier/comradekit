<template>
  <div class="select">
    <TextInputWrapper :is-select="true">Select</TextInputWrapper>
  </div>
</template>

<script>
import TextInputWrapper from "@/components/utilities/TextInputWrapper";

export default {
  name: "DateInput",
  components: { TextInputWrapper }
};
</script>
