import * as components from "./components";

import config, { setOptions } from "@utilities/config";
import { use, registerComponentProgrammatic } from "@utilities/helpers";

/**
 * Vue plugin for Comradekit.
 */
const ComradeKit = {
  install(Vue, options = {}) {
    setOptions(Object.assign(config, options));

    for (let key in components) {
      Vue.use(components[key]);
    }
    // const BuefyProgrammatic = {
    //   setOptions(options) {
    //     setOptions(Object.assign(config, options));
    //   }
    // };
    // registerComponentProgrammatic(Vue, "config", BuefyProgrammatic);
  }
};

use(ComradeKit);

export default ComradeKit;

// export all components as vue plugin
export * from "./components";
// export programmatic components
// export { DialogProgrammatic } from "./components/dialog";
// export { LoadingProgrammatic } from "./components/loading";
// export { ModalProgrammatic } from "./components/modal";
// export { NotificationProgrammatic } from "./components/notification";
// export { SnackbarProgrammatic } from "./components/snackbar";
// export { ToastProgrammatic } from "./components/toast";
