<template>
  <TextInputWrapper
    ref="wrapper"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    :is-loading="isLoading"
  >
    <input
      type="text"
      ref="input"
      v-model="computedValue"
      :maxlength="maxlength"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
    />
  </TextInputWrapper>
</template>

<script>
import TextInputWrapper from "@/components/utilities/TextInputWrapper";
import inputtable from "@mixins/inputtable";

export default {
  name: "TextInput",
  mixins: [inputtable],
  components: { TextInputWrapper },
  props: {
    maxlength: {
      type: Number,
      default: undefined
    },
    placeholder: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: "100%"
    },
    value: {
      type: [Number, String],
      default: undefined
    }
  }
};
</script>
