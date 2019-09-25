// KeyboardEvent.keyCode aliases
export const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34
});

/**
 * Shorthand for initializing Vue plugin. Inspired by Buefy.
 * @param {Vue} plugin
 */
export const use = plugin => {
  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(plugin);
  }
};

/**
 * Shorthand for registering Vue component. Inspired by Buefy.
 * @param {Vue} Vue
 * @param {Vue} component
 */
export const registerComponent = (Vue, component) => {
  Vue.component(component.name, component);
};

/**
 * Shorthand for registering Vue component for programmatic use.
 * Inspired by Buefy.
 *
 * @param {Vue} Vue
 * @param {String} property
 * @param {Vue} component
 */
export const registerComponentProgrammatic = (Vue, property, component) => {
  if (!Vue.prototype.$ck) Vue.prototype.$ck = {};
  Vue.prototype.$ck[property] = component;
};

export function removeElement(el) {
  if (typeof el.remove !== "undefined") {
    el.remove();
  } else if (typeof el.parentNode !== "undefined") {
    el.parentNode.removeChild(el);
  }
}

export function findParentComponent(vm, type, depth = 3) {
  let parent = vm.$parent;

  for (let i = 0; i < depth; i++) {
    if (!parent) break;

    if (parent.$options._componentTag === type) {
      return parent;
    } else {
      parent = parent.$parent;
    }
  }
  return false;
}
