import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import TextInput from "@/components/TextInput.vue";
import FieldGroup from "@/components/FieldGroup.vue";

// const config =

storiesOf("TextInput", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        TextInput,
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
            <FieldGroup label="Text Input" required>
              <TextInput
                v-model="text"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-select="isSelect"
                :is-loading="isLoading"
              />
            </FieldGroup>`,
      data: () => ({
        isSelect: false,
        text: "Sample text"
      })
    };
  });
