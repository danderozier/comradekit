<template>
  <div class="buttons-wrapper">
    <Button spacing="compact" @click="onConfirm" @focus="onFocus">
      <Icon icon="checkmark" slot="icon-before" size="small" />
    </Button>
    <Button spacing="compact" @click="onCancel" @focus="onFocus">
      <Icon icon="close" slot="icon-before" size="small" />
    </Button>
    <span tabindex="0" @focus="onBlur"></span>
  </div>
</template>

<script>
import Icon from "@components/Icon/Icon";
import Button from "@/components/Button/Button";

export default {
  name: "InlineEditButtons",
  components: { Button, Icon },
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
