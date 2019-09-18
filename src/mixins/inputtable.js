/**
 *
 * Input components must provide:
 * - a `value` prop
 *
 */

export default {
  props: {
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
    }
  },
  data() {
    return {
      isFocused: false
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    blur(e) {
      this.isFocused = false;
      this.$emit("blur", e);
    },
    focus(e) {
      this.isFocused = true;
      this.$emit("focus", e);
    },
    onFocus(e) {
      if (!this.isFocused) {
        this.isFocused = true;
        this.$emit("focus", e);
      }
    },
    onBlur(e) {
      this.isFocused = false;
      this.$emit("blur", e);
    }
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.input.focus();
    }
  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.$nextTick(() => this.$refs.input.focus());
        } else {
          this.$nextTick(() => this.$refs.input.blur());
        }
      },
      immediate: true
    }
  }
};
