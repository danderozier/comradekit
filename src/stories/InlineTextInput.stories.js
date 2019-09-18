import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import InlineTextInput from "@/components/InlineTextInput.vue";
import Field from "@/components/Field.vue";

// const config =

storiesOf("InlineTextInput", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        InlineTextInput,
        Field
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
        }
      },
      template: `
            <div style="padding: 2rem;">
              <Field label="Text Input" required>
                <InlineTextInput
                  v-model="text"
                  :is-editable="true"
                  :is-invalid="isInvalid"
                />
              </Field>
            </div>`,
      data: () => ({
        isSelect: false,
        text: "Sample text"
      })
    };
  });
