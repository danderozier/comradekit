```vue
<template>
  <div>
    <Field label="Display checkboxes as:">
      <RadioButton v-model="layout" native-value="block">Block</RadioButton>
      <RadioButton v-model="layout" native-value="inline">Inline</RadioButton>
    </Field>
    <CheckboxField label="Checkbox Field" :layout="layout" v-model="value">
      <Checkbox native-value="option_1">Option 1</Checkbox>
      <Checkbox native-value="option_2">Option 2</Checkbox>
      <Checkbox native-value="option_3">Option 3</Checkbox>
      <Checkbox native-value="option_4">Option 4</Checkbox>
    </CheckboxField>
    <pre>Selected options: {{ value }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: 'block',
      text: undefined,
      value: []
    }
  },
  computed: {
    displayErrors() {
      return this.isInvalid ? this.errors : []
    }
  }
}
</script>
