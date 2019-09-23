<template>
  <transition name="fade" @enter="showInner" @close="close">
    <div class="modal" v-if="isVisibleOuter">
      <Overlay
        :is-visible="true"
        :is-closable="isClosable"
        @click="requestCancel"
      />
      <div class="modal__close" v-if="isClosable">
        <Icon icon="close" @click="requestCancel" />
      </div>
      <transition name="slide-up" @before-leave="hideInner">
        <div class="modal__wrapper" v-show="isVisibleInner">
          <div class="modal__content" role="dialog" tabindex="-1">
            <slot v-on="$listeners" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Overlay from "@components/Overlay/Overlay";

export default {
  name: "Modal",
  components: { Overlay },
  props: {
    /**
     * Whether the modal is open or not. Use with .sync to
     * make this prop two-way binding.
     */
    isOpen: {
      type: Boolean,
      default: false
    },
    isClosable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    isOpen(state) {
      if (state) {
        this.open();
      } else {
        this.close();
      }
    }
  },
  data() {
    return {
      isVisibleOuter: false,
      isVisibleInner: false
    };
  },
  methods: {
    /**
     * Open the modal and trigger outer transition.
     */
    open() {
      this.isVisibleOuter = true;
    },
    /**
     * Trigger inner enter transition after outer transition begins.
     */
    showInner() {
      this.$nextTick(() => {
        this.isVisibleInner = true;
      });
    },
    /**
     * Close the modal.
     */
    close() {
      this.isVisibleInner = false;
    },
    /**
     * Trigger inner leave transition before updating modal state.
     */
    hideInner() {
      this.isVisibleOuter = false;
      this.$emit("update:isOpen", false);
    },
    requestCancel() {
      if (this.isClosable) {
        this.close();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@include transition-fade;

$border-radius-large: 0.5rem;
$modal-box-shadow: #091e4214 0px 0px 0px 1px, #091e4214 0px 2px 1px,
  #091e424f 0px 0px 20px -6px;

.modal {
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 60px;
  z-index: 1;

  &__wrapper {
    pointer-events: none;
    position: absolute;
    margin: 0 auto;
    top: 60px;
    max-width: 600px;
    left: 0;
    right: 0;
    z-index: 600;
    transform: translateY(0);
  }

  &__content {
    background: white;
    border-radius: $border-radius-small;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    outline: currentcolor none 0px;
    pointer-events: auto;
    box-shadow: $modal-box-shadow;
  }

  &__close {
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
    z-index: 600;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 500ms cubic-bezier(0.23, 1, 0.32, 1);
}
.slide-up-enter {
  transform: translateY(3rem);
}
.slide-up-leave-to {
  transform: translateY(-3rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
