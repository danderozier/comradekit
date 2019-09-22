```vue
<template>
  <div>
    <Dropdown>
      <Button slot="trigger">Click me!</Button>
      <DropdownItem
        v-for="(item, key) in items"
        :key="key"
        @select="onSelect(item)"
      >
        {{ item }}
      </DropdownItem>

    </Dropdown>

    <Dropdown style="float: right;">
      <Button slot="trigger">Click me!</Button>
      <DropdownItem>Dropdown Item</DropdownItem>
    </Dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ]
    }
  },
  methods: {
    onSelect(item) {
      alert(`${item} selected`);
    }
  }
};
</script>
```
