Provides a textarea input. Similar to native `<textarea>` tag.

```vue
<template>
  <div>
    <TextArea v-model="data" placeholder="Type here!" :is-invalid="isInvalid" :is-required="isRequired" :is-loading="isLoading" :is-disabled="isDisabled"/>

    <pre><code>Value: {{ data }}</code></pre>
    <Field label="Toggle input state:">
      <Checkbox v-model="isInvalid">Invalid</Checkbox>
      <Checkbox v-model="isRequired">Required</Checkbox>
      <Checkbox v-model="isLoading">Loading</Checkbox>
      <Checkbox v-model="isDisabled">Disabled</Checkbox>
    </Field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: undefined,
      isInvalid: false,
      isRequired: false,
      isLoading: false,
      isDisabled: false
    }
  }
}
</script>
```
