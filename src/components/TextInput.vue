<template>
  <TextInputWrapper :is-focused="isFocused" :is-disabled="isDisabled">
    <input
      ref="input"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
  </TextInputWrapper>
</template>

<script>
import TextInputWrapper from "@/components/utilities/TextInputWrapper";

export default {
  name: "TextInput",
  components: { TextInputWrapper },
  props: {
    value: {
      type: [Number, String],
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    maxlength: {
      type: Number,
      default: undefined
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      isFocused: false
    };
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.input.focus();
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    },
    onFocus(e) {
      this.isFocused = true;
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.isFocused = false;
      this.$emit("blur", e);
    }
  }
};
</script>
