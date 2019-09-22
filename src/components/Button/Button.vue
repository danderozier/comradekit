<template>
  <button
    ref="button"
    type="button"
    :appearance="type"
    :disabled="isDisabled"
    :selected="isSelected"
    :loading="isLoading"
    :spacing="spacing"
    v-on="computedListeners"
  >
    <span class="wrapper" tabindex="-1" :class="computedClasses">
      <!-- @slot Include an icon before button content -->
      <slot v-if="!isLoading" name="icon-before" />
      <span v-if="this.$slots.default" ref="label" class="label">
        <!-- @slot Button content -->
        <slot />
      </span>
      <!-- @slot Include an icon after button content -->
      <slot v-if="!isLoading" name="icon-after" />
      <Spinner
        v-if="isLoading"
        :size="spacing === 'default' ? 'is-small' : 'is-xsmall'"
      />
    </span>
  </button>
</template>

<script>
// import Spinner from "../Spinner/Spinner";

export default {
  name: "Button",
  components: {
    // Spinner
  },
  props: {
    /**
     * If true, component will automatically gain focus
     * when mounted.
     */
    autoFocus: { type: Boolean, default: false },
    /**
     * Toggle the component's `disabled` state.
     */
    isDisabled: { type: Boolean, default: false },
    /**
     * Toggle the component's `loading` state.
     */
    isLoading: { type: Boolean, default: false },
    /**
     * Toggle the component's `selected` state.
     */
    isSelected: { type: Boolean, default: false },
    /**
     * Set the button's spacing.
     * `default, compact, none`
     */
    spacing: { type: String, default: "default" },
    /**
     * Set the button's appearance.
     * `default, is-primary, is-link, is-text, is-warning, is-danger`
     */
    type: { type: String, default: "default" }
  },
  computed: {
    computedClasses() {
      return {
        "has-icon-before": this.hasIconBefore,
        "has-icon-after": this.hasIconAfter,
        "has-icon-only": this.hasIconOnly
      };
    },
    computedListeners() {
      return this.$listeners;
    },
    hasIconBefore() {
      return this.$slots.default && this.$slots["icon-before"];
    },
    hasIconAfter() {
      return this.$slots.default && this.$slots["icon-after"];
    },
    hasIconOnly() {
      return (
        !this.$slots.default &&
        (this.$slots["icon-before"] || this.$slots["icon-after"])
      );
    }
  },
  mounted() {
    if (this.autoFocus) {
      this.$refs.button.focus();
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  font-size: 14px;
  align-items: baseline;
  border-radius: 3px;
  border-width: 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-style: normal;
  margin: 0;
  max-width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 0;
}

button[spacing="default"] {
  height: 32px;
  line-height: 32px;
  min-width: 32px;
}

button[spacing="compact"] {
  height: 24px;
  line-height: 24px;
  min-width: 24px;
}

button[spacing="none"] {
  height: auto;
  line-height: inherit;
}

button[spacing="none"] span.wrapper {
  padding: 0;
}

span.wrapper {
  border-radius: 3px;
  outline: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  padding: 0 8px;

  &.has-icon-before {
    padding-left: 4px;
  }

  &.has-icon-after {
    padding-right: 4px;
  }

  &.has-icon-only {
    padding: 0 4px;
  }
}

span.wrapper[icon-is-only-child] {
  padding: 0 4px;
}

span.label {
  align-self: center;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0 4px;
}

span.label,
button[loading],
button[loading] span.wrapper {
  pointer-events: none;
}

button[loading] span.label {
  opacity: 0;
}

button[loading] {
  ::v-deep .spinner {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

button[loading][selected] {
  ::v-deep .spinner {
    color: #fff;
  }
}

button:focus {
  box-shadow: rgba(38, 132, 255, 0.6) 0 0 0 2px;
}

/*default*/
button {
  background: #f6f7f8;
  color: #505f79;

  &:not([disabled]) {
    &:not([selected]) {
      &:hover {
        background: #efeff2;
      }
      &:active {
        background-color: rgba(179, 212, 255, 0.6);
        color: #0052cc;
      }
    }
  }

  &:active {
    ::v-deep {
      svg {
        color: #0052cc;
      }
    }
  }
}

button[appearance="is-primary"] {
  background: #0052cc;
  color: #ffffff;

  &:not([disabled]):not([selected]):hover {
    background: #0065ff;
  }

  &:not([disabled]):not([selected]):active {
    background: #0747a6;
  }

  &[loading] {
    ::v-deep {
      .spinner {
        color: #fff;
      }
    }
  }
}

button[appearance="is-link"] {
  background: none;
  color: #0052cc;

  &:not([disabled]):not([selected]):hover {
    color: #0065ff;
    text-decoration: underline;
  }

  &:not([disabled]):not([selected]):active {
    text-decoration: none;
    color: #0747a6;
  }
}

button[appearance="is-text"] {
  background: none;
  color: inherit;

  &:not([disabled]):not([selected]):hover {
    color: inherit;
  }
}

button[appearance="is-warning"] {
  background: #ffab00;
  color: #172b4d;

  &:focus {
    box-shadow: #ff8b00 0 0 0 2px;
  }

  &:not([disabled]):not([selected]):hover {
    background: #ff991f;
    color: #172b4d;
  }

  &:not([disabled]):not([selected]):hover,
  &[selected],
  &[selected]:hover {
    background: #ff991f;
    color: #172b4d;

    ::v-deep svg {
      color: #172b4d;
    }
  }
}

button[appearance="is-danger"] {
  background: #de350b;
  color: #ffffff;

  &:focus {
    box-shadow: #ff8f73 0 0 0 2px;
  }

  &:not([disabled]):not([selected]):hover {
    background: #ff5630;
  }

  &:not([disabled]):not([selected]):hover,
  &[selected],
  &[selected]:hover {
    background: #bf2600;

    ::v-deep svg {
      color: #172b4d;
    }
  }

  &[loading] {
    ::v-deep .spinner {
      color: #fff;
    }
  }
}

button[selected],
button[selected]:hover,
button[selected]:active {
  background: #253858;
  color: rgb(244, 245, 247);
  text-decoration: none;
}

button[selected] ::v-deep svg,
button[selected]:hover ::v-deep svg,
button[selected]:active ::v-deep svg {
  color: rgb(244, 245, 247);
}

button[disabled] span.wrapper,
button[disabled] ::v-deep svg {
  color: rgb(165, 173, 186);
  pointer-events: none;
}

button[disabled] {
  cursor: not-allowed;
}

button[disabled]:not([appearance="subtle-link"]):not([appearance="link"]):not([appearance="subtle"]) {
  background: rgba(9, 30, 66, 0.04);
}

button::-moz-focus-inner,
span::-moz-focus-inner,
button::-moz-focus-inner {
  border: 0;
  margin: 0;
  padding: 0;
}

button ~ button {
  margin-left: 0.5rem;
}
</style>
