<template>
  <div class="text-renderer" :title="value" v-text="value" />
</template>

<script>
export default {
  name: "TextRenderer",
  props: {
    value: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style scoped>
.text-renderer {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.string-line-wrapper:empty::after {
  content: "\feff";
  visibility: hidden;
}
</style>
