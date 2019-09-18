### Examples

```vue
<template>
  <div>
    <ButtonGroup>
      <Button>Save</Button>
      <Button type="is-primary">Publish</Button>
    </ButtonGroup>
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
