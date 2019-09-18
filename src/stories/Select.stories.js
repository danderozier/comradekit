import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import Select from "@/components/Select";
import Field from "@/components/Field";

storiesOf("Select", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        Field,
        Select
      },
      template: `
            <div>
              <Field label="Select">
                <Select placeholder="Select a character" v-model="selected" :options="options" />
              </Field>
              <code>Value: {{ selected }}</code>
            </div>
            `,
      data: () => ({
        selected: undefined,
        multiSelected: [],
        options: ["Dilbert", "Dogbert’s Glasses", "Cåtbért"]
      })
    };
  })
  .add("With Objects", () => {
    return {
      components: {
        Field,
        Select
      },
      template: `
            <div>
              <Field label="Select">
                <Select placeholder="Select a character" v-model="selected" :options="options" :label-field="field" />
              </Field>
              <code>Value: {{ selected }}</code>
            </div>
            `,
      data: () => ({
        field: "label",
        selected: undefined,
        options: [
          {
            label: "Dilbert",
            value: "dilbert"
          },
          {
            label: "Dogbert",
            value: "dogbert"
          },
          {
            label: "Catbert",
            value: "catbert"
          }
        ]
      })
    };
  });
