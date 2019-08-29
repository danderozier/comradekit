<template>
  <div class="input-wrapper" v-on="$listeners" :is-focused="isFocused">
    <slot />
  </div>
</template>

<script>
export default {
  name: "input-wrapper",
  props: {
    isFocused: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
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
  padding: $input-padding;
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

.input-wrapper {
  align-items: center;
  background-color: $input-background-color;
  border: $input-border-width $input-border-style $input-border-color;
  border-radius: $input-border-radius;
  box-sizing: border-box;
  color: $input-text-color;
  display: flex;
  flex: 1 0 auto;
  font-size: $input-font-size;
  justify-content: space-between;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  transition: background-color $input-transition, border-color $input-transition;
  word-wrap: break-word;

  &:hover {
    background-color: $input-background-color-hover;
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
    &:not([is-disabled]):not([is-loading]) {
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
    &:not([is-loading]) {
      background-color: $input-background-color-select;
      border-color: $input-border-color-select;
    }

    &:not([is-focused]):not([disabled]):hover {
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
  }

  &[is-compact] {
    > textarea,
    > input {
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
