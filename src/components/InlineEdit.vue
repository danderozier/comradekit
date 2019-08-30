<template>
  <div class="inline-edit-wrapper" :is-editing="isEditing">
    <div class="inline-edit" ref="inlineEditor">
      <TextInputWrapper v-if="isEditing" @click.stop>
        <input ref="input" v-model="editingValue" :type="type" class="input" />
      </TextInputWrapper>
      <div v-else class="todo-wrapper-with-pencil">
        <slot />
      </div>
    </div>
    <Popper
      v-if="isEditing && !isLoading"
      ref="buttons"
      :offset="offset"
      :target-element="$refs['inlineEditor']"
    >
      <p>Derp</p>
    </Popper>
  </div>
</template>

<script>
import Popper from "@/components/Popper";
import TextInputWrapper from "@/components/utilities/TextInputWrapper";

export default {
  name: "InlineEditWrapper",
  components: { Popper, TextInputWrapper },
  props: {
    value: {
      type: [Number, String, Boolean, Array, Object],
      default: undefined
    },
    type: {
      type: String,
      default: "text"
    },
    offset: {
      type: String,
      default: "0,5"
    }
  },
  mounted() {
    this.isEditing = true;
  },
  data() {
    return {
      isEditing: false,
      isLoading: false
    };
  },
  computed: {
    editingValue() {
      return this.value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
