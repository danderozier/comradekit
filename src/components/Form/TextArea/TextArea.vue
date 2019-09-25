<template>
  <TextInputWrapper
    ref="wrapper"
    :is-disabled="isDisabled"
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    :is-loading="isLoading"
    :style="{ width }"
  >
    <textarea
      ref="input"
      v-model="computedValue"
      v-on="inputListeners"
      :aria-describedby="ariaDescribedby"
      :aria-labelledby="ariaLabelledby"
      :aria-required="required"
      :class="inputClasses"
      :disabled="isDisabled"
      :rows="rows"
      :style="{ height: currentHeight, maxHeight }"
      @keydown="resize"
      @input="resize"
      @focus="onInputFocus"
      @blur="onInputBlur"
    />
  </TextInputWrapper>
</template>

<script>
import TextInputWrapper from "@components/Form/_TextInputWrapper";
import InputMixin from "@mixins/InputMixin";

export default {
  name: "TextArea",
  mixins: [InputMixin],
  components: { TextInputWrapper },
  props: {
    height: {
      type: [Number, String],
      default: "auto"
    },
    maxHeight: {
      type: [Number, String],
      default: "auto"
    },
    rows: {
      type: [Number, String],
      default: "3"
    },
    value: {
      type: String,
      default: undefined
    },
    width: {
      type: [Number, String],
      default: "100%"
    }
  },
  data() {
    return {
      currentHeight: this.height
    };
  },
  computed: {
    inputClasses() {
      return {
        "has-auto-height": this.height === "auto"
      };
    },
    /**
     * Filter listeners before passing along to input.
     */
    inputListeners() {
      // eslint-disable-next-line
      const { input, ...listeners } = this.$listeners;
      return listeners;
    }
  },
  mounted() {
    if (this.height === "auto") {
      this.setCurrentHeight();
    }
  },
  methods: {
    setCurrentHeight() {
      this.currentHeight = `${this.$refs.input.scrollHeight}px`;
    },
    resize() {
      if (this.height !== "auto") return;

      this.currentHeight = "auto";
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.setCurrentHeight();
        }
      });
    }
  },
  inject: {
    ariaDescribedby: { default: null },
    ariaLabelledby: { default: null }
  }
};
</script>

<style lang="scss" scoped>
textarea {
  overflow: auto;
  resize: vertical;
  font-family: inherit;
  color: inherit;
}

textarea.has-auto-height {
  resize: none;
}
</style>
