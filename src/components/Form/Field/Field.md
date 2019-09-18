```vue
<template>
  <div>
    <Field label="Field with Text Input" :required="isRequired" :errors="displayErrors">
      <TextInput :is-invalid="isInvalid" v-model="text"/>
    </Field>
    <Field label="Field with Checkboxes">
      <Checkbox v-model="isInvalid">Invalid</Checkbox>
      <Checkbox v-model="isRequired">Required</Checkbox>
    </Field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: ["This input is invalid."],
      isInvalid: false,
      isRequired: false,
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
