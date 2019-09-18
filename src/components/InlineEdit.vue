<template>
  <div class="inline-edit-wrapper" :is-editing="isEditing">
    <div class="inline-edit" ref="inlineEditor">
      <slot
        v-if="isEditing"
        name="input"
        :value="modifiedValue"
        :input="onInput"
        :blur="onBlur"
        :focus="onFocus"
        :confirm="confirmEdit"
        :cancel="cancelEdit"
        :is-focused="isFocused"
        :is-invalid="!!error"
        :is-loading="isLoading"
      />
      <InlineEditToggle
        v-else
        ref="value"
        :is-compact="isCompact"
        @edit="onEdit"
      >
        <slot />
      </InlineEditToggle>
    </div>
    <Popper
      v-if="isEditing && !isLoading"
      ref="buttons"
      :offset="offset"
      :target-element="$refs['inlineEditor']"
    >
      <InlineEditButtons />
    </Popper>
  </div>
</template>

<script>
import Popper from "@components/Popper/Popper";
// import TextInputWrapper from "@components/Form/_TextInputWrapper";
import InlineEditButtons from "@/components/InlineEditButtons";
import InlineEditToggle from "@/components/InlineEditToggle";

export default {
  name: "InlineEditWrapper",
  components: { Popper, InlineEditButtons, InlineEditToggle },
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
    // this.isEditing = true;
  },
  data() {
    return {
      isEditing: false,
      isFocused: false,
      isLoading: false,
      error: false,
      modifiedValue: this.value,
      isDirty: false
    };
  },
  computed: {
    computedValue() {
      return this.value;
    }
  },
  methods: {
    onEdit() {
      this.isEditing = true;
      this.isFocused = true;
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.focus();
        }
      });
    },
    onInput(value) {
      this.modifiedValue = value;
    },
    onKeyUp() {
      // if (e.keyCode === ENTER) this.confirmEdit();
      // if (e.keyCode === ESC) this.cancelEdit();
    },
    onFocus() {},
    onBlur() {},
    confirmEdit(error) {
      this.isDirty = false;
      if (error) {
        this.onError(error);
        return;
      }
      this.isLoading = false;
      this.isEditing = false;
      this.editingValue = this.value;
    },
    cancelEdit() {
      this.isEditing = false;
      this.modifiedValue = this.value;
    },
    onError() {}
  }
};
</script>

<style lang="scss" scoped></style>
