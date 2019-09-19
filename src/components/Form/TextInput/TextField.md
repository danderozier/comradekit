```vue
<template>
<div>
  <TextField
    v-model="value"
    label="Label"
    placeholder="Placeholder"
    :auto-focus="autoFocus"
    :description="description"
    :errors="errors"
    :is-disabled="isDisabled"
    :is-invalid="isInvalid"
    :is-loading="isLoading"
    :maxlength="maxlength"
    :required="required"
    :width="width"
  />
  <pre>Value: {{ value }}</pre>
</div>
</template>

<script>
export default {
  data() {
    return {
      autoFocus: true,
      description: 'Description for the text field',
      errors: ['This field is invalid, for some reason'],
      isDisabled: false,
      isInvalid: false,
      isLoading: false,
      maxlength: 5,
      required: true,
      value: undefined,
      width: '100%'
    };
  }
}
</script>
```
