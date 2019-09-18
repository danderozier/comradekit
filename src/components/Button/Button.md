### Examples

#### Button types
```vue
<template>
  <div>
    <ButtonGroup>
      <Button
        type="is-default"
        :is-disabled="isDisabled"
        :is-selected="isSelected"
        :is-loading="isLoading"
        >Default
      </Button>
      <Button
        type="is-primary"
        :is-disabled="isDisabled"
        :is-selected="isSelected"
        :is-loading="isLoading"
        >Default
      </Button>
      <Button
        type="is-warning"
        :is-disabled="isDisabled"
        :is-selected="isSelected"
        :is-loading="isLoading"
        >Default
      </Button>
      <Button
        type="is-danger"
        :is-disabled="isDisabled"
        :is-selected="isSelected"
        :is-loading="isLoading"
        >Default
      </Button>
      <Button
        type="is-link"
        :is-disabled="isDisabled"
        :is-selected="isSelected"
        :is-loading="isLoading"
        >Default
      </Button>
      <Button
        type="is-text"
        :is-disabled="isDisabled"
        :is-selected="isSelected"
        :is-loading="isLoading"
        >Default
      </Button>
    </ButtonGroup>
    <Field label="Button states">
      <Checkbox v-model="isDisabled">Disabled</Checkbox>
      <Checkbox v-model="isLoading">Loading</Checkbox>
      <Checkbox v-model="isSelected">Selected</Checkbox>
    </Field>
  </div>
</template>

<script>
import ButtonGroup from '@components/Button/ButtonGroup';
import Checkbox from '@components/Form/Checkbox/Checkbox';
import Field from '@components/Form/Field/Field';

export default {
  components: { ButtonGroup, Checkbox, Field },
  data() {
    return {
      label: 'Label',
      isDisabled: false,
      isLoading: false,
      isSelected: false
    }
  }
};
</script>
```

#### Spacing
```jsx
<Button spacing="default">Default</Button>
<Button spacing="compact">Default</Button>
<Button spacing="none">Default</Button>
```

#### Icons
```vue
<template>
  <div>
    <div>
      <Button>
        <Icon icon="close" slot="icon-before"/>
        {{ label }}
      </Button>
      <Button>
        <Icon icon="close" slot="icon-after"/>
        {{ label }}
      </Button>
      <Button>
        <Icon icon="close" slot="icon-before"/>
        {{ label }}
        <Icon icon="close" slot="icon-after"/>
      </Button>
      <Button>
        <Icon icon="close" slot="icon-before"/>
      </Button>
    </div>
  </div>
</template>

<script>
import Icon from '@components/Icon/Icon';

export default {
  components: { Icon },
  data() {
    return {
      label: 'Label'
    }
  }
};
</script>
```
