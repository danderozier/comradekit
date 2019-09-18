<template>
  <div class="inline-input">
    <TextInputWrapper
      :is-focused="isFocused"
      :is-disabled="isDisabled"
      :is-inline="true"
      ref="wrapper"
    >
      <input
        ref="input"
        type="text"
        v-model="changedValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @focus="onFocus"
        @blur="onBlur"
      />
      <!-- <TextRenderer v-else :value="value" @click="ass" /> -->
    </TextInputWrapper>
    <Popper v-if="isDirty" :target-element="$refs.wrapper.$el">
      <InlineEditButtons
        @confirm="onConfirm"
        @cancel="onCancel"
        @focus="onFocus"
        @blur="onBlur"
      />
    </Popper>
  </div>
</template>

<script>
import TextInputWrapper from "@components/Form/_TextInputWrapper";
import InlineEditButtons from "@/components/InlineEditButtons";
import Popper from "@components/Popper/Popper";

export default {
  name: "InlineInput",
  components: { TextInputWrapper, InlineEditButtons, Popper },
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
      isFocused: false,
      changedValue: this.value
    };
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.input.focus();
    }
  },
  computed: {
    isDirty() {
      return this.changedValue !== this.value;
    }
  },
  methods: {
    onConfirm() {
      this.$emit("input", this.changedValue);
    },
    onCancel() {
      this.changedValue = this.value;
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

<style lang="scss" scoped>
.text-input-wrapper {
  margin-left: -$input-padding;
  margin-right: -$input-padding;

  &[is-focused] {
    background: purple;
  }
}
</style>
