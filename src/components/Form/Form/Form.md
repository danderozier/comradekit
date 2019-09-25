```vue
<template>
  <Form v-model="data" :errors="errors" @submit="handleSubmit">
    <Field label="First Name" property="firstName">
      <TextInput v-model="data.firstName" />
    </Field>
    <pre>Data: {{data}}</pre>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      data: {
        firstName: undefined,
        lastName: undefined
      },
      errors: {}
    }
  },
  methods: {
    handleSubmit() {

    }
  }
}
</script>
```
