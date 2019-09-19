export default {
  name: "FocusableMixin",
  props: {
    /**
     * If true, component will automatically gain focus
     * when mounted.
     */
    autoFocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFocused: false
    };
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.input.focus();
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
    onInputBlur(e) {},
    onInputFocus(e) {}
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
