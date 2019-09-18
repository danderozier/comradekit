<template>
  <div
    class="text-input-wrapper"
    v-on="$listeners"
    :is-focused="isFocused"
    :is-select="isSelect"
    :is-loading="isLoading"
    :is-inline="isInline"
  >
    <slot name="icon-before" />
    <slot />
    <slot name="icon-after">
      <Icon icon="close" v-if="isInline" />
    </slot>
  </div>
</template>

<script>
import Icon from "@components/Icon/Icon";

export default {
  name: "TextInputWrapper",
  components: { Icon },
  props: {
    isFocused: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isSelect: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
textarea,
input,
.text-renderer {
  padding: $input-padding;
}

textarea,
input {
  background: transparent;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: inherit;
  font-size: inherit;
  margin: 0;
  outline: none;

  letter-spacing: inherit;
  line-height: inherit;
  width: 100%;

  &::-ms-clear {
    display: none;
  }

  &::-moz-placeholder,
  &:-moz-placeholder,
  &::-ms-input-placeholder {
    color: $input-muted-text-color;
    opacity: 1;
  }
}

textarea {
  resize: vertical;
}

.text-input-wrapper {
  align-items: center;
  background-color: $input-background-color;
  border: $input-border-width $input-border-style $input-border-color;
  border-radius: $input-border-radius;
  box-sizing: border-box;
  color: $input-text-color;
  display: flex;
  flex: 1 0 auto;
  font-size: $input-font-size;
  justify-content: flex-start;
  max-width: 100%;
  overflow: hidden;

  position: relative;
  transition: background-color $input-transition, border-color $input-transition;
  word-wrap: break-word;

  .icon {
    transition: opacity $input-transition;
  }

  &:hover {
    background-color: $input-background-color-hover;
  }

  &[is-inline]:not([is-focused]):not(:hover) {
    background-color: transparent;
    border-color: transparent;

    .icon:last-child {
      opacity: 0;
    }
  }

  &[is-inline]:not([is-focused]):not([disabled]) {
    cursor: pointer;
  }

  &[is-focused] {
    &:not([disabled]):not([is-loading]) {
      background-color: $input-background-color-focused;
      border-color: $input-border-color-focused;
    }
  }

  &[is-disabled] {
    background-color: $input-background-color-disabled;
    pointer-events: none;
  }

  &[is-invalid] {
    &:not([disabled]):not([is-loading]) {
      border-color: $input-border-color-invalid;
      animation: shake 0.5s linear;
    }
  }

  &[is-editable] {
    &:not([is-focused]) {
      background-color: inherit;
      border: transparent;
    }
  }

  &[is-select] {
    &:not([is-focused]) {
      cursor: pointer;
    }

    &:not([is-focused]):not([is-loading]):not([is-invalid]) {
      background-color: $input-background-color-select;
      border-color: $input-border-color-select;
    }

    &:not([is-focused]):not([disabled]):not([is-invalid]):hover {
      background-color: $input-background-color-select-hover;
      border-color: $input-border-color-select-hover;
    }
  }

  &[is-loading] {
    background-color: white;
    animation: loading 1s linear infinite;
    background-image: linear-gradient(
      90deg,
      transparentize(#000, 0.92) 30%,
      transparentize(#000, 0.84) 50%,
      transparentize(#000, 0.92) 70%
    );
    background-size: 300%;
    background-position: 0% 0%;

    ::v-deep {
      textarea,
      input {
        visibility: hidden;
      }
    }
  }

  &[is-compact] {
    ::v-deep > textarea,
    ::v-deep > input {
      padding: 0;
    }
  }
}

@keyframes loading {
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
}

@keyframes shake {
  8%,
  41% {
    transform: translateX(-0.5rem);
  }
  25%,
  58% {
    transform: translateX(0.5rem);
  }
  75% {
    transform: translateX(-0.25rem);
  }
  92% {
    transform: translateX(0.25rem);
  }
  0%,
  100% {
    transform: translateX(0);
  }
}
</style>
