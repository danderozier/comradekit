<template>
  <TextInputWrapper
    :is-focused="isFocused"
    :is-invalid="isInvalid"
    :is-loading="isLoading"
    :is-disabled="isDisabled"
    :style="{ width }"
  >
    <textarea
      ref="input"
      v-bind="$attrs"
      v-model="computedValue"
      :auto="height === 'auto'"
      :disabled="isDisabled"
      :rows="rows"
      :style="{ height: currentHeight, maxHeight }"
      v-on="listeners"
      @keydown="resize"
      @input="resize"
    />
  </TextInputWrapper>
</template>

<script>
import TextInputWrapper from "@/components/utilities/TextInputWrapper";
import inputtable from "@mixins/inputtable";

export default {
  name: "TextArea",
  mixins: [inputtable],
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
      required: true
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
    /**
     * Strip out 'input' listener.
     */
    listeners() {
      const { input, ...listeners } = this.$listeners;
      input;
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
