<template>
  <div>
    <TextArea
      ref="input"
      v-model="dirtyValue"
      v-bind="$attrs"
      v-on="listeners"
    />
    <Popper v-if="isDirty" :target-element="$refs.input.$el">
      <InlineEditButtons @confirm="onConfirm" @cancel="onCancel" />
    </Popper>
  </div>
</template>

<script>
import TextArea from "@components/TextArea";
import confirmable from "@mixins/confirmable";

export default {
  name: "InlineTextArea",
  mixins: [confirmable],
  components: { TextArea }
};
</script>
