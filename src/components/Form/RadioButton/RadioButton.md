```vue
<template>
  <div>
    <RadioButton
      v-model="value"
      native-value="dilbert"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      >
      Dilbert
    </RadioButton>
    <RadioButton
      v-model="value"
      native-value="dogbert"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      >
      Dogbert
    </RadioButton>
    <RadioButton
      v-model="value"
      native-value="catbert"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      >
      Catbert
    </RadioButton>
    <RadioButton
      v-model="value"
      native-value="ratbert"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      >
      Ratbert
    </RadioButton>
    <pre><code>Value: {{ value }}</code></pre>
    <Field label="Options">
      <Checkbox v-model="isDisabled">Disabled</Checkbox>
      <Checkbox v-model="isInvalid">Invalid</Checkbox>
      <Checkbox v-model="isLoading">Loading</Checkbox>
    </Field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false,
      isInvalid: false,
      isLoading: false,
      value: undefined,
    };
  }
}
</script>
```
