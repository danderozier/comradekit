import { findParentComponent } from "@utilities/helpers";

export default {
  props: ["value"],
  computed: {
    parentForm() {
      return findParentComponent(this, "Form");
    }
  }
};
