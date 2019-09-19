<template>
  <TextInputWrapper
    ref="wrapper"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    :is-loading="isLoading"
    :style="{ width }"
  >
    <input
      type="text"
      ref="input"
      v-model="computedValue"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :aria-describedby="ariaDescribedby"
      :aria-labelledby="ariaLabelledby"
      :aria-required="required"
      :required="required"
      @focus="onFocus"
      @blur="onBlur"
    />
  </TextInputWrapper>
</template>

<script>
import TextInputWrapper from "@components/Form/_TextInputWrapper";
import inputtable from "@mixins/inputtable";

export default {
  name: "TextInput",
  mixins: [inputtable],
  components: { TextInputWrapper },
  // data() {
  //   var result = {};
  //   for (var key in this.fieldProps) {
  //     if (this.$props.hasOwnProperty(key) && this.$props["key"] !== undefined) {
  //       result[key] = this.fieldProps[key];
  //     }
  //   }
  //   console.log("wtf", this.$props, result);
  //   return {
  //     ...this.fieldProps
  //   };
  // },
  props: {
    // test: {
    //   type: String,
    //   default() {
    //     console.log("what");
    //     return this.fieldProps.label;
    //   }
    // },
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
  },
  inject: {
    ariaDescribedby: { default: null },
    ariaLabelledby: { default: null }
    // fieldProps: { default: {} }
  }
};
</script>
