```vue
<template>
  <div>
    <Checkbox
      v-model="value"
      :indeterminate="indeterminate"
      :is-disabled="isDisabled"
      :is-invalid="isInvalid"
      :is-loading="isLoading"
      @change="onChange"
      >Click me!</Checkbox
    >
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

```vue
<template>
  <div>
    <Checkbox v-model="value" true-value="yes" false-value="no">Custom true/false values</Checkbox>
    <pre><code>Value: {{ value }}</code></pre>

  </div>
</template>

<script>
export default {
  data() {
    return {
      value: undefined
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



```vue
<template>
  <div>
    <Checkbox v-model="value" native-value="dilbert">Dilbert</Checkbox>
    <Checkbox v-model="value" native-value="dogbert">Dogbert</Checkbox>
    <Checkbox v-model="value" native-value="catbert">Catbert</Checkbox>
    <Checkbox v-model="value" native-value="ratbert">Ratbert</Checkbox>
    <pre><code>Value: {{ value }}</code></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: []
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
