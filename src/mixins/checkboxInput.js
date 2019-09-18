// import _ from "lodash";

export default {
  props: {
    /**
     * Same as native `value`
     */
    nativeValue: {
      type: null
    },
    /**
     * Binding value
     * @model
     */
    value: {
      type: [Boolean, String, Number, Object, Array],
      default: null
    }
  },
  data() {
    return {
      id: undefined
    };
  },
  computed: {
    hasParentField() {
      return this.$parent.$options._componentTag === "Field";
    },
    computedValue: {
      get() {
        return this.value;
      },
      set(value) {
        if (value) {
          this.$emit("input", this.nativeValue ? this.nativeValue : true);
          if (this.hasParentField) {
            this.$parent.$emit("input-add", this.nativeValue);
          }
        } else {
          this.$emit("input", this.nativeValue ? null : false);
          if (this.hasParentField) {
            this.$parent.$emit("input-remove", this.nativeValue);
          }
        }
      }
    }
  },
  created() {
    this.id = this._uid;
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    },
    onBlur(e) {
      if (!this.$refs.checkbox.contains(e.relatedTarget)) {
        this.$emit("blur", e);
      }
    }
  }
};
