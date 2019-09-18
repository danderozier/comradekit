<template>
  <div class="tag" :appearance="type" :is-closable="closable">
    <span>{{ label }}</span>
    <CloseIcon slot="icon-before" size="is-xsmall" @click="$emit('close')" v-if="closable" />
  </div>
</template>

<script>
import CloseIcon from "@/components/icons/CloseIcon";

export default {
  name: "Tag",
  components: { CloseIcon },
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "default"
    },
    closable: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
$tag-padding: 0.125rem 0.25rem;
$tag-border-radius: 0.25rem;
$tag-font-size: 0.75rem;
$tag-spacing: 0.125rem;

.tag {
  align-items: center;
  background: blue;
  border-radius: $tag-border-radius;
  color: white;
  display: flex;
  font-size: $tag-font-size;
  padding: $tag-padding;

  // > * {
  //   padding: $tag-padding;
  // }

  // .icon {
  //   padding: 0.125rem;
  // }

  .icon {
    margin-left: $tag-spacing;
    margin-right: -$tag-spacing;
  }

  &:hover .icon {
    background: rgba(0, 0, 0, 0.5);
  }
}

.tags .tag {
  margin: $tag-spacing;
}
</style>
