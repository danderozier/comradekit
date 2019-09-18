export default {
  props: {
    /**
     * If true, component will automatically gain focus
     * when mounted.
     */
    autoFocus: {
      type: Boolean,
      default: false
    },
    /**
     * Toggle the component's `disabled` state.
     */
    isDisabled: {
      type: Boolean,
      default: false
    },
    /**
     * Toggle the component's `invalid` state.
     */
    isInvalid: {
      type: Boolean,
      default: false
    },
    /**
     * Toggle the component's `loading` state.
     */
    isLoading: {
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
