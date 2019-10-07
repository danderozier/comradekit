```vue
<template>
  <div>
    <Button @click="addItem">Focus!</Button>
    <Timepicker ref="dingle" />
    <pre><code>Value: {{ value }}</code></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: undefined,
      count: 3
    }
  },
  methods: {
    addItem() {
      this.count++;
    }
  }
}
</script>

```
