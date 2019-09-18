import InlineEditButtons from "@/components/InlineEditButtons";
import Popper from "@components/Popper/Popper";

export default {
  components: {
    InlineEditButtons,
    Popper
  },
  props: ["value"],
  data() {
    return {
      dirtyValue: this.value
    };
  },
  computed: {
    listeners() {
      // eslint-disable-next-line
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
    isDirty() {
      return this.dirtyValue !== this.value;
    }
  },
  methods: {
    onConfirm(e) {
      this.$emit("input", this.dirtyValue);
      this.$refs.input.blur(e);
    },
    onCancel(e) {
      this.dirtyValue = this.value;
      this.$refs.input.blur(e);
    }
  }
};
