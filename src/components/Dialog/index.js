import Vue from "vue";
import Dialog from "./Dialog";

import {
  use,
  registerComponent,
  registerComponentProgrammatic
} from "@utilities/helpers";

function open(propsData, slotContent) {
  const vm = typeof window !== "undefined" && window.Vue ? window.Vue : Vue;
  const DialogComponent = vm.extend(Dialog);
  const component = new DialogComponent({
    el: document.createElement("div"),
    propsData
  });
  component.$slots.content = slotContent;
  return component;
}

const DialogProgrammatic = {
  alert(params, slotContent) {
    let message;
    if (typeof params === "string") message = params;
    const defaultParam = {
      canCancel: false,
      message
    };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData, slotContent);
  },
  confirm(params) {
    const defaultParam = {};
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },
  prompt(params) {
    const defaultParam = {
      hasInput: true,
      confirmText: "Done"
    };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  }
};

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Dialog);
    registerComponentProgrammatic(Vue, "dialog", DialogProgrammatic);
  }
};

use(Plugin);

export default Plugin;

export { DialogProgrammatic };
