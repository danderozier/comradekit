import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";

import TextInput from "./TextInput.vue";
import FieldGroup from "./FieldGroup.vue";

storiesOf("TextInput", module).add("default", () => {
  return {
    components: { TextInput, FieldGroup },
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
      text: "Sample text",
      isInvalid: false,
      isDisabled: false,
      isSelect: false,
      isLoading: false
    })
  };
});
