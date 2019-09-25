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
    },
    /**
     * Same as native `required`.
     */
    required: {
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
    /**
     * Blur the input.
     *
     * @public
     */
    blur(e) {
      this.isFocused = false;
      this.$emit("blur", e);
    },
    /**
     * Focus the input.
     *
     * @public
     */
    focus(e) {
      this.isFocused = true;
      this.$emit("focus", e);
    },
    blurInput() {
      this.$nextTick(() => this.$refs.input.blur());
    },
    focusInput() {
      this.$nextTick(() => this.$refs.input.focus());
    },
    onInputFocus(e) {
      if (!this.isFocused) {
        this.isFocused = true;
        this.$emit("focus", e);
      }
    },
    onInputBlur(e) {
      // this.$emit("blur", e);
      // Emit blur event only when the input blur target is external.
      if (!this.$refs.wrapper.contains(e.relatedTarget)) {
        this.isFocused = false;
        this.$emit("blur", e);
      }
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
          this.focusInput();
        } else {
          this.blurInput();
        }
      },
      immediate: true
    }
  }
};
