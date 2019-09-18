import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "@/components/Button/Button.vue";
import Dropdown from "@/components/Dropdown.vue";
import DropdownItem from "@/components/DropdownItem.vue";

storiesOf("Dropdown", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        Button,
        Dropdown,
        DropdownItem
      },
      props: {},
      data() {
        return {
          currentItem: undefined
        };
      },
      methods: {
        log(msg) {
          console.log(msg);
        }
      },
      template: `
            <div style="position: relative">
              <p><code>Current item: {{ currentItem }}</code></p>
              <Dropdown v-model="currentItem">
                <Button slot="trigger" @click="log('Trigger clicked')">Click me!</Button>

                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem :disabled="true">Consectiteur</DropdownItem>
                <DropdownItem>Adipiscing Elit</DropdownItem>
              </Dropdown>
            </div>`
    };
  });
