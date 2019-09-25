```vue
<template>
  <div>
    <Field :label="label" :required="isRequired" :errors="displayErrors" :description="description" :is-disabled="true">
      <TextInput :is-invalid="isInvalid" v-model="text"/>
    </Field>
    <pre>Value: {{ text }}</pre>
    <Field label="Field with Checkboxes">
      <Checkbox v-model="isInvalid">Invalid</Checkbox>
      <Checkbox v-model="isRequired">Required</Checkbox>
    </Field>
    <TextInput v-model="label" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: "Field with Text Input",
      description: "A brief description of this field.",
      errors: ["This input is invalid."],
      isInvalid: false,
      isRequired: true,
      text: undefined
    }
  },
  computed: {
    displayErrors() {
      return this.isInvalid ? this.errors : []
    }
  }
}
</script>
