import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import TextEditableRenderer from "@/components/TextEditableRenderer.vue";
import FieldGroup from "@/components/FieldGroup.vue";

// const config =

storiesOf("TextEditableRenderer", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        TextEditableRenderer,
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
        }
      },
      template: `
            <div style="padding: 2rem;">
              <FieldGroup label="Text Input" required>
                <TextEditableRenderer
                  v-model="text"
                  :is-editable="true"
                  :is-invalid="isInvalid"
                />
              </FieldGroup>
            </div>`,
      data: () => ({
        isSelect: false,
        text: "Sample text"
      })
    };
  });
