```vue
<template>
  <div>
    <Checkbox v-model="value">Test</Checkbox>
    <Toggle
      v-model="value"
      :indeterminate="indeterminate"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      @change="onChange"
      >Click me!
    </Toggle>
    <pre><code>Value: {{ value }}</code></pre>
    <CheckboxField label="Options">
      <Checkbox v-model="indeterminate">Indeterminate</Checkbox>
      <Checkbox v-model="isDisabled">Disabled</Checkbox>
      <Checkbox v-model="isInvalid">Invalid</Checkbox>
      <Checkbox v-model="isLoading">Loading</Checkbox>
    </CheckboxField>
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
      value: undefined,
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
