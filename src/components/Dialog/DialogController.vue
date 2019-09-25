<template>
  <div class="dialog-controller" @click="openDialog">
    <!-- @slot Trigger to open dialog when clicked -->
    <slot name="trigger" />
  </div>
</template>

<script>
import Dialog from "@components/Dialog/Dialog";
import Vue from "vue";

export default {
  name: "DialogController",
  mounted() {
    console.log("mounted", this);
  },
  methods: {
    openDialog() {
      // const vm = this;
      const DialogComponent = Vue.extend(Dialog);
      const component = new DialogComponent({
        el: document.createElement("div"),
        propsData: {
          title: "Dingle"
        }
      });
      component.$slots.content = this.$slots.default;

      if (typeof window !== "undefined") {
        this.$nextTick(() => {
          // this.$slots.content = this.content;
          document.body.appendChild(component.$el);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-controller {
  display: inline-flex;
}
</style>
