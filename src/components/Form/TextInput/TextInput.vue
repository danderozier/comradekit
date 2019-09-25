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
      ref="input"
      v-model="computedValue"
      v-on="inputListeners"
      :aria-describedby="ariaDescribedby"
      :aria-labelledby="ariaLabelledby"
      :aria-required="required"
      :disabled="isDisabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :required="required"
      :type="inputType"
      @focus="onInputFocus"
      @blur="onInputBlur"
    />
    <Icon v-if="icon" slot="icon-before" :icon="icon" />
  </TextInputWrapper>
</template>

<script>
import TextInputWrapper from "@components/Form/_TextInputWrapper";
import Icon from "@components/Icon/Icon";
import InputMixin from "@mixins/InputMixin";

export default {
  name: "TextInput",
  mixins: [InputMixin],
  components: { TextInputWrapper, Icon },
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
    icon: String,
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
  computed: {
    /**
     * Filter listeners before passing along to input.
     */
    inputListeners() {
      // eslint-disable-next-line
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
    inputType() {
      return "text";
    }
  },
  inject: {
    ariaDescribedby: { default: null },
    ariaLabelledby: { default: null }
    // fieldProps: { default: {} }
  }
};
</script>
