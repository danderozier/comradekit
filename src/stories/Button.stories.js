import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import Button from "@/components/Button.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        Button,
        CloseIcon
      },
      props: {
        isSelected: {
          default: boolean("Selected", false)
        },
        isDisabled: {
          default: boolean("Disabled", false)
        },
        type: {
          default: text("Type", undefined)
        },
        autoFocus: {
          default: boolean("Autofocus", false)
        },
        isLoading: {
          default: boolean("Loading", false)
        },
        spacing: {
          default: text("Spacing", "default")
        }
      },
      template: `
            <Button
              :is-selected="isSelected"
              :is-disabled="isDisabled"
              :auto-focus="autoFocus"
              :is-loading="isLoading"
              :spacing="spacing"
              :type="type"
            >
              Text
            </Button>`,
      data: () => ({})
    };
  });
