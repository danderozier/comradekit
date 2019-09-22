/**
 * A simple mixin to detect external clicks.
 * Requires component to implement an `onClickaway` method.
 */
export default {
  methods: {
    _onDocumentClick(e) {
      if (!this.$refs.wrapper.contains(e.target)) {
        this.onClickaway();
      }
    }
  },
  created() {
    if (typeof window !== "undefined") {
      document.addEventListener("click", this._onDocumentClick);
    }
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      document.removeEventListener("click", this._onDocumentClick);
    }
  }
};
