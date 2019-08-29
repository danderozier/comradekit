<template>
  <input-wrapper
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    :is-loading="isLoading"
    :is-disabled="isDisabled"
  >
    <textarea
      ref="textarea"
      v-model="computedValue"
      v-bind="$attrs"
      :auto="height === 'auto'"
      :disabled="isDisabled"
      :rows="rows"
      :style="{ height: currentHeight, width, maxHeight }"
      v-on="listeners"
      @keydown="resize"
      @input="resize"
      @focus="onFocus"
      @blur="onBlur"
    />
  </input-wrapper>
</template>

<script>
import InputWrapper from "@/components/InputWrapper";

export default {
  name: "TextArea",
  components: { InputWrapper },
  props: {
    value: {
      type: String,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    isInvalid: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String],
      default: "auto"
    },
    maxHeight: {
      type: [Number, String],
      default: "auto"
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    rows: {
      type: String,
      default: "3"
    }
  },
  data() {
    return {
      currentHeight: this.height,
      isFocused: false
    };
  },
  computed: {
    /**
     * Computed value
     */
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    /**
     * Strip out 'input' listener.
     */
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    }
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.textarea.focus();
    }

    if (this.height === "auto") {
      this.setCurrentHeight();
    }
  },
  methods: {
    setCurrentHeight() {
      this.currentHeight = `${this.$refs.textarea.scrollHeight}px`;
    },
    onFocus(e) {
      this.isFocused = true;
      this.$emit("focus", e);
    },
    onBlur(e) {
      this.isFocused = false;
      this.$emit("blur", e);
    },
    resize() {
      if (this.height !== "auto") return;

      this.currentHeight = "auto";
      this.$nextTick(() => {
        if (this.$refs.textarea) {
          this.setCurrentHeight();
        }
      });
    }
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

textarea[auto] {
  resize: none;
}
</style>
