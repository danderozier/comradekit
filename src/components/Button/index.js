import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

import { use, registerComponent } from "@utilities/helpers";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Button);
    registerComponent(Vue, ButtonGroup);
  }
};

use(Plugin);

export default Plugin;
