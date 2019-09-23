```vue
<template>
  <div>
    <Badge :value="35" />
    <Badge :value="35" type="is-primary"/>
    <Badge :value="350" :maximum="100" type="is-warning"/>
    <Badge :value="25000" :maximum="3000" type="is-danger"/>
  </div>
</template>
```
