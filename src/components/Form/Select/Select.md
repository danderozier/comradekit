```vue
<template>
  <div>
    <Select
      v-model="value"
      label-field="name"
      value-field="user_id"
      :options="options"
      :allow-create="allowCreate"
      @create="onCreate"/>
    <pre><code>Value: {{ value }}</code></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allowCreate: true,
      value: undefined,
      options: [
        { name: 'Dilbert', user_id: '1' },
        { name: 'Dogbert', user_id: '2' },
        { name: 'Catbert', user_id: '3' }
      ]
    }
  },
  methods: {
    onCreate(value) {
      this.options.push({ name: value, user_id: null });
    }
  }
}
</script>

```
