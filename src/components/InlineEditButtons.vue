<template>
  <div class="buttons-wrapper">
    <Button spacing="compact" @click="onConfirm" @focus="onFocus">
      <CheckmarkIcon slot="icon-before" size="small" />
    </Button>
    <Button spacing="compact" @click="onCancel" @focus="onFocus">
      <CloseIcon slot="icon-before" size="small" />
    </Button>
    <span tabindex="0" @focus="onBlur"></span>
  </div>
</template>

<script>
import CheckmarkIcon from "@/components/icons/CheckmarkIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import Button from "@/components/Button";

export default {
  name: "InlineEditButtons",
  components: { CheckmarkIcon, Button, CloseIcon },
  methods: {
    onConfirm() {
      this.$emit("confirm");
    },
    onCancel() {
      this.$emit("cancel");
    },
    onFocus(event) {
      console.log("InlineEditButtons onFocus", event);
      this.$emit("focus", event);
    },
    onBlur(e) {
      console.log("InlineEditButtons onBlur", e);
      this.$emit("blur", e);
    }
  }
};
</script>

<style lang="scss" scoped>
button ~ button {
  margin-left: 0.25rem;
}
</style>
