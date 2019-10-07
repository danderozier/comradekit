<template>
  <div
    class="dropdown-input"
    ref="wrapper"
    tabindex="0"
    @focus.capture="onFocus"
  >
    <pre>isFocused: {{ isFocused }}</pre>
    <Dropdown ref="dropdown" :is-scrollable="true">
      <input
        v-model="searchText"
        ref="input"
        slot="trigger"
        tabindex="-1"
        type="text"
        @keydown="onKeydown"
        @focusout="onFocusOut"
      />
      <!-- @slot Dropdown content -->
      <slot name="content" />
    </Dropdown>
  </div>
</template>

<script>
/**
 * Components extending this must implement:
 * - onKeydown() method to handle keypresses
 */
import Vue from "vue";
import Dropdown from "@components/Dropdown/Dropdown";
const eventBus = new Vue();

export default {
  name: "Dingle",
  components: { Dropdown },
  provide() {
    return { eventBus };
  },
  data() {
    return {
      isFocused: false,
      searchText: undefined
    };
  },
  methods: {
    /**
     * When component receives focus, set internal state and
     * transfer focus to the <input>.
     */
    onFocus() {
      this.isFocused = true;
      // this.focusInput();
    },
    /**
     * We watch for `focusout` instead of `blur` because `focusout`
     * bubbles, and the Dropdown needs to detect the change in
     * focus in order to know when to close.
     *
     * The <input> should always have focus, so we only
     * need to watch for focusout here. If the event is internal
     * to the component, stop propagation; otherwise update
     * internal state.
     */
    onFocusOut(e) {
      if (e && this.$refs.wrapper.contains(e.relatedTarget)) {
        console.log("inside");
        e.stopPropagation();
      } else {
        console.log("outside");
        this.isFocused = false;
      }
    },
    // TODO: remove
    onKeydown() {
      // console.log("any", e);
      // eventBus.$emit("keydown", e);
      // console.log("fungus");
    },
    onKeydownup() {
      // console.log("up", e);
    },

    focus(e) {
      console.log("wtf");
      this.isFocused = true;
      if (!e || e.target !== this.$refs.input) {
        this.$nextTick(() => this.$refs.input.focus());
      }
    },

    focusInput() {
      this.$nextTick(() => this.$refs.input.focus());
    },
    blurInput() {
      this.$nextTick(() => this.$refs.input.blur());
    }
  },
  watch: {
    isFocused: {
      handler(isFocused) {
        if (isFocused) {
          this.focusInput();
        } else {
          this.blurInput();
        }
      },
      immediate: true
    }
  }
};
</script>
