import { storiesOf } from "@storybook/vue";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import Calendar from "@/components/Calendar.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";

storiesOf("Calendar", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    return {
      components: {
        Calendar,
        CloseIcon
      },
      props: {},
      data() {
        return {
          date: undefined
        };
      },
      template: `
            <div>
            <Calendar v-model="date">
            </Calendar>
            <code>Value: {{ date }}</code>
            </div>`
    };
  });
