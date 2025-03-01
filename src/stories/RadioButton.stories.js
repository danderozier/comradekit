import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import RadioButton from "@/components/RadioButton.vue";
import FieldGroup from "@/components/FieldGroup.vue";

// const config =

storiesOf("RadioButton", module)
  .addDecorator(withKnobs)
  .add("Single Radio Button", () => {
    return {
      components: {
        RadioButton,
        FieldGroup
      },
      props: {
        isDisabled: {
          default: boolean("Disabled", false)
        },
        isInvalid: {
          default: boolean("Invalid", false)
        }
      },
      template: `
            <FieldGroup label="Single Radio Button" required :errors="errors">
              <RadioButton
                v-model="value"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :native-value="true"
                >Radio Button</RadioButton
              >
              <pre>{{ value }}</pre>
            </FieldGroup>`,
      data: () => ({
        value: null
      })
    };
  })
  .add("Inline Radio Buttons", () => {
    return {
      components: {
        RadioButton,
        FieldGroup
      },
      props: {
        isDisabled: {
          default: boolean("Disabled", false)
        },
        isInvalid: {
          default: boolean("Invalid", false)
        }
      },
      template: `
            <FieldGroup label="Inline Radio Buttons" required :errors="errors">
              <RadioButton
                v-model="value"
                native-value="one"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >One</RadioButton
              >
              <RadioButton
                v-model="value"
                native-value="two"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >Two</RadioButton
              >
              <RadioButton
                v-model="value"
                native-value="three"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >Three</RadioButton
              >
              <RadioButton
                v-model="value"
                native-value="four"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >Four</RadioButton
              >
              <pre>{{ value }}</pre>
            </FieldGroup>`,
      data: () => ({
        value: null
      })
    };
  })
  .add("Block Radio Buttons", () => {
    return {
      components: {
        RadioButton,
        FieldGroup
      },
      props: {
        isDisabled: {
          default: boolean("Disabled", false)
        },
        isInvalid: {
          default: boolean("Invalid", false)
        }
      },
      template: `
            <FieldGroup label="Block Radio Buttons" required :errors="errors">
              <RadioButton
                v-model="value"
                native-value="one"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >One</RadioButton
              >
              <RadioButton
                v-model="value"
                native-value="two"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >Two</RadioButton
              >
              <RadioButton
                v-model="value"
                native-value="three"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >Three</RadioButton
              >
              <RadioButton
                v-model="value"
                native-value="four"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >Four</RadioButton
              >
              <pre>{{ value }}</pre>
            </FieldGroup>`,
      data: () => ({
        value: null
      })
    };
  });
