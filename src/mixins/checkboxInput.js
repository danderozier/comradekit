import _ from "lodash";

export default {
  props: {
    nativeValue: {
      type: null
    },
    value: {
      type: [Boolean, Array],
      default: null
    }
  },
  data() {
    return {
      id: undefined
    };
  },
  computed: {
    computedValue: {
      get() {
        if (Array.isArray(this.value)) {
          return _.find(this.value, o => o === this.nativeValue);
        } else {
          return this.value;
        }
      },
      set(value) {
        if (Array.isArray(this.value)) {
          if (value) {
            value = [...this.value, this.nativeValue];
          } else {
            value = this.value.filter(o => o !== this.nativeValue);
          }
        }
        this.$emit("input", value);
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
