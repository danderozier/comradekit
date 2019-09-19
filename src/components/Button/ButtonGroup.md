### Examples

```vue
<template>
  <div>
    <Field label="Default spacing">
      <ButtonGroup>
        <Button>Save</Button>
        <Button type="is-primary">Publish</Button>
      </ButtonGroup>
    </Field>

    <Field label="Compact spacing">
      <ButtonGroup spacing="compact">
        <Button>Save</Button>
        <Button type="is-primary">Publish</Button>
      </ButtonGroup>
    </Field>

    <Field label="No spacing">
      <ButtonGroup spacing="none">
        <Button type="is-primary">Option One</Button>
        <Button type="is-primary">Option Two</Button>
        <Button type="is-primary">Option Three</Button>
      </ButtonGroup>
    </Field>
  </div>
</template>

<script>
import Button from '@components/Button/Button';
import ButtonGroup from '@components/Button/ButtonGroup';

export default {
  components: { ButtonGroup, Button },
  data() {
    return {
      label: 'Label',
    }
  }
};
</script>
```
