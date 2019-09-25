<template>
  <transition name="fade" @enter="showInner" @close="close">
    <div class="ck-dialog" v-if="overlayIsVisible">
      <Overlay :is-visible="true" :is-closable="isClosable" @click="cancel" />
      <div class="ck-dialog__close" v-if="isClosable">
        <Icon icon="close" @click="cancel" />
      </div>
      <transition name="slide-up" @before-leave="hideInner">
        <div class="ck-dialog__wrapper" v-show="dialogIsVisible">
          <div class="ck-dialog__content" role="dialog" tabindex="-1">
            <div class="ck-dialog__title">
              <!-- @slot Replace the dialog title -->
              <slot name="title">
                <h1 class="heading is-5">{{ title }}</h1>
              </slot>
            </div>

            <div class="ck-dialog__body">
              <slot name="content" />
              <!-- @slot Dialog message -->
              <slot>
                <p>{{ message }}</p>
              </slot>
            </div>

            <div class="ck-dialog__actions">
              <!-- @slot Replace the dialog actions -->
              <slot name="actions">
                <ButtonGroup>
                  <Button type="is-default" v-if="canCancel" @click="cancel">{{
                    cancelText
                  }}</Button>
                  <Button
                    @click="confirm"
                    :type="type"
                    :is-loading="isLoading"
                    >{{ confirmText }}</Button
                  >
                </ButtonGroup>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import Overlay from "@components/Overlay/Overlay";
import { removeElement } from "@utilities/helpers";

export default {
  name: "Dialog",
  components: { Overlay },
  props: {
    title: {
      type: String,
      required: () => {
        !!this.$props.title;
      }
    },
    type: {
      type: String,
      default: "is-primary"
    },
    canCancel: {
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      required: false,
      default: "Cancel"
    },
    confirmText: {
      type: String,
      required: false,
      default: "OK"
    },
    isClosable: {
      type: Boolean,
      default: true
    },
    message: {
      type: String,
      default: undefined
    },
    onCancel: {
      type: Function,
      default: () => true
    },
    onConfirm: {
      type: Function,
      default: () => true
    },
    content: {
      required: false
    }
  },
  beforeMount() {
    // Insert the Dialog component in body tag
    if (typeof window !== "undefined") {
      this.$nextTick(() => {
        // this.$slots.content = this.content;
        document.body.appendChild(this.$el);
      });
    }
  },
  mounted() {
    this.overlayIsVisible = true;
  },
  data() {
    return {
      isLoading: false,
      overlayIsVisible: false,
      dialogIsVisible: false
    };
  },
  methods: {
    /**
     * Open the modal and trigger outer transition.
     */
    open() {
      this.overlayIsVisible = true;
    },
    /**
     * Trigger inner enter transition after outer transition begins.
     */
    showInner() {
      this.$nextTick(() => {
        this.dialogIsVisible = true;
      });
    },
    /**
     * Close the modal.
     */
    close() {
      this.dialogIsVisible = false;
      this.isActive = false;

      setTimeout(() => {
        this.$destroy();
        removeElement(this.$el);
      }, 500);
    },
    /**
     * Trigger inner leave transition before updating modal state.
     */
    hideInner() {
      this.overlayIsVisible = false;
      this.$emit("update:isOpen", false);
    },
    async cancel() {
      this.isLoading = true;
      if (await this.onCancel()) {
        this.isLoading = false;
        this.close();
      } else {
        this.isLoading = false;
      }
    },
    async confirm() {
      this.isLoading = true;
      if (await this.onConfirm()) {
        this.isLoading = false;
        this.close();
      } else {
        this.isLoading = false;
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

.ck-dialog {
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

  &__actions {
    display: flex;
    justify-content: flex-end;
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
