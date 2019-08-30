import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import Checkbox from "@/components/Checkbox.vue";
import FieldGroup from "@/components/FieldGroup.vue";

// const config =

storiesOf("Checkbox", module)
  .addDecorator(withKnobs)
  .add("Single Checkbox", () => {
    return {
      components: {
        Checkbox,
        FieldGroup
      },
      props: {
        isDisabled: {
          default: boolean("Disabled", false)
        },
        isInvalid: {
          default: boolean("Invalid", false)
        },
        indeterminate: {
          default: boolean("Indeterminate", false)
        }
      },
      template: `
            <FieldGroup label="Single Checkbox" required :errors="errors">
              <Checkbox
                v-model="value"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :indeterminate="indeterminate"
                >Checkbox</Checkbox
              >
              <pre>{{ value }}</pre>
            </FieldGroup>`,
      data: () => ({
        value: null
      })
    };
  })
  .add("Inline Checkboxes", () => {
    return {
      components: {
        Checkbox,
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
            <FieldGroup label="Inline Checkboxes" required :errors="errors">
              <Checkbox
                v-model="value"
                native-value="one"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >One</Checkbox
              >
              <Checkbox
                v-model="value"
                native-value="two"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >Two</Checkbox
              >
              <Checkbox
                v-model="value"
                native-value="three"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >Three</Checkbox
              >
              <Checkbox
                v-model="value"
                native-value="four"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                >Four</Checkbox
              >
              <pre>{{ value }}</pre>
            </FieldGroup>`,
      data: () => ({
        value: []
      })
    };
  })
  .add("Block Checkboxes", () => {
    return {
      components: {
        Checkbox,
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
            <FieldGroup label="Inline Checkboxes" required :errors="errors">
              <Checkbox
                v-model="value"
                native-value="one"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >One</Checkbox
              >
              <Checkbox
                v-model="value"
                native-value="two"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >Two</Checkbox
              >
              <Checkbox
                v-model="value"
                native-value="three"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >Three</Checkbox
              >
              <Checkbox
                v-model="value"
                native-value="four"
                :is-invalid="isInvalid"
                :is-disabled="isDisabled"
                :is-block="true"
                >Four</Checkbox
              >
              <pre>{{ value }}</pre>
            </FieldGroup>`,
      data: () => ({
        value: []
      })
    };
  });
