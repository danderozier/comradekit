```vue
<template>
  <div>
    <Checkbox
      v-model="value"
      :native-value="nativeValue"
      :indeterminate="indeterminate"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      @change="onChange"
      >Click me!</Checkbox
    >
    <pre>Selected value: {{ value }}</pre>
    <CheckboxField label="Options">
      <Checkbox v-model="indeterminate">Indeterminate</Checkbox>
      <Checkbox v-model="isDisabled">Disabled</Checkbox>
      <Checkbox v-model="isInvalid">Invalid</Checkbox>
      <Checkbox v-model="isLoading">Loading</Checkbox>
    </CheckboxField>
    <Field label="Native Value">
      <TextInput v-model="nativeValue" />
    </Field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indeterminate: false,
      isDisabled: false,
      isInvalid: false,
      isLoading: false,
      nativeValue: undefined,
      value: undefined,
      secondValue: []
    }
  },
  methods: {
    onChange() {
      this.indeterminate = false
    }
  }
}
</script>
```
