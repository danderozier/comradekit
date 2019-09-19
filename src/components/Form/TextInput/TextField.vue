<template>
  <Field v-bind="attrs.fieldAttrs" v-on="$listeners" :required="attrs.required">
    <TextInput
      v-bind="attrs.inputAttrs"
      v-model="computedValue"
      :required="attrs.required"
    />
  </Field>
</template>

<script>
import Field from "@components/Form/Field/Field";
import TextInput from "@components/Form/TextInput/TextInput";

export default {
  name: "TextField",
  inheritAttrs: false,
  components: { Field, TextInput },
  computed: {
    attrs() {
      const {
        value,
        description,
        errors,
        label,
        required,
        ...inputAttrs
      } = this.$attrs;
      return {
        value,
        required,
        inputAttrs,
        fieldAttrs: {
          errors,
          description,
          label
        }
      };
    },
    computedValue: {
      get() {
        return this.attrs.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
