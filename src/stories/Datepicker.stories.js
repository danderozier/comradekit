import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import Datepicker from "@/components/Datepicker";
import Field from "@/components/Field";

storiesOf("Datepicker", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        Field,
        Datepicker
      },
      template: `
            <div>
              <Field label="Datepicker">
                <Datepicker placeholder="Datepicker a character" v-model="Datepickered" :options="options" />
              </Field>
              <code>Value: {{ Datepickered }}</code>
            </div>
            `,
      data: () => ({
        Datepickered: undefined,
        multiDatepickered: [],
        options: ["Dilbert", "Dogbert’s Glasses", "Cåtbért"]
      })
    };
  })
  .add("With Objects", () => {
    return {
      components: {
        Field,
        Datepicker
      },
      template: `
            <div>
              <Field label="Datepicker">
                <Datepicker placeholder="Datepicker a character" v-model="Datepickered" :options="options" :label-field="field" />
              </Field>
              <code>Value: {{ Datepickered }}</code>
            </div>
            `,
      data: () => ({
        field: "label",
        Datepickered: undefined,
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
