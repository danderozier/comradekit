```vue
<template>
  <div>
    <!--
    <Button @click="isOpen1 = true">Click me!</Button>
    <Modal :is-open.sync="isOpen1" >
      Lips
    </Modal>

    <Button @click="isOpen2 = true">Click me!</Button>
    <Modal :is-open.sync="isOpen2" :is-closable="false">
      <p>This modal can only be closed by clicking the button inside.</p>
      <Button @click="isOpen2 = false">Close</Button>
    </Modal>
  </div>
  -->
</template>

<script>
export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false
    }
  },
  methods: {
    onClick() {
      this.isOpen = true;
    }
  }
};
</script>
```
