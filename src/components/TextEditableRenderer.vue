<template>
  <InlineEdit v-if="editable" :value="value" @save="onSave">
    <slot>
      <TextRenderer :value="value" />
    </slot>
  </InlineEdit>
  <TextRenderer v-else :value="value" />
</template>

<script>
import TextRenderer from "@/components/TextRenderer";
import InlineEdit from "@/components/InlineEdit";

export default {
  name: "TextEditableRenderer",
  components: { TextRenderer, InlineEdit },
  props: {
    value: {
      type: String,
      default: undefined
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onSave(...args) {
      this.$emit("save", ...args);
    }
  }
};
</script>
