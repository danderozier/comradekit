import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import TextInput from "@/components/TextInput.vue";
import TextInputWrapper from "@/components/utilities/TextInputWrapper.vue";
import TextRenderer from "@/components/TextRenderer.vue";
import InlineTextInput from "@/components/InlineTextInput.vue";
import Field from "@/components/Form/Field/Field.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

// const config =

storiesOf("TextInput", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        TextInput,
        TextInputWrapper,
        TextRenderer,
        CloseIcon,
        Field,
        InlineTextInput
      },
      props: {
        placeholder: {
          default: text("Placeholder", "Placeholder Text")
        },
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
            <Field label="Text Input" required>
              <TextInput
                v-model="text"
                :placeholder="placeholder"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-select="isSelect"
                :is-loading="isLoading"
              />
              <code>Value: {{ text }}</code>
            </Field>`,
      data: () => ({
        isSelect: false,
        text: "Ginbo"
      })
    };
  });
