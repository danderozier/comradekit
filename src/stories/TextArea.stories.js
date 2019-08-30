import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";

import TextArea from "@/components/TextArea.vue";
import FieldGroup from "@/components/FieldGroup.vue";

storiesOf("TextArea", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        TextArea,
        FieldGroup
      },
      props: {
        isDisabled: {
          default: boolean("Disabled", false)
        },
        isInvalid: {
          default: boolean("Invalid", false)
        },
        isLoading: {
          default: boolean("Loading", false)
        },
        height: {
          default: text("Height", "auto")
        },
        maxHeight: {
          default: text("Max Height", "auto")
        },
        rows: {
          default: number("Rows", 5)
        },
        width: {
          default: text("Width", "100%")
        }
      },
      template: `
            <FieldGroup label="Text Input" required>
              <TextArea
                v-model="text"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-loading="isLoading"
                :height="height"
                :max-height="maxHeight"
                :rows="rows"
                :width="width"
                :auto-focus="autoFocus"
              />
            </FieldGroup>`,
      data: () => ({
        text: "Sample text",
        autoFocus: true
      })
    };
  });
