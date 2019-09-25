import Overlay from "./Overlay";

import { use, registerComponent } from "@utilities/helpers";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Overlay);
  }
};

use(Plugin);

export default Plugin;
