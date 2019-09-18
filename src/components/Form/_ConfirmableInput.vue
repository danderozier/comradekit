<template>
  <div>
    <slot
      ref="input"
      v-bind="$attrs"
      v-on="$listeners"
      :value="dirtyValue"
      @input="dirtyValue = $event.target.value"
    />
  </div>
</template>

<script>
import InlineEditButtons from "@/components/InlineEditButtons";
import Popper from "@/components/Popper";

export default {
  name: "ConfirmableInput",

  props: {
    value: {
      type: [Number, String],
      default: undefined
    }
  }
};
</script>
