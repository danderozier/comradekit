<template>
  <div todo="input wrapper">
    <DropdownInputBase>
      <div slot="content">
        <DropdownMenu>
          <DropdownItem v-for="(date, index) in formattedDates" :key="index">
            {{ date }}
          </DropdownItem>
        </DropdownMenu>
      </div>
    </DropdownInputBase>
  </div>
</template>

<script>
// import TempKeyboardListener from "@components/Form/Datepicker/_TempKeyboardListener";
import DropdownInputBase from "@components/Form/Datepicker/_DropdownInputBase";
import DropdownMenu from "@components/Dropdown/DropdownMenu";
import { startOfToday, addMinutes } from "date-fns";

export default {
  name: "Timepicker",
  components: { DropdownInputBase, DropdownMenu },
  props: {
    /**
     * Interval between time options in minutes.
     */
    interval: {
      type: Number,
      default: 60
    },
    /**
     * Locale to use for displaying times.
     */
    locale: {
      type: String,
      default: "en-US"
    },
    /**
     * @model
     */
    value: {
      type: Date,
      default: undefined
    }
  },
  computed: {
    formatterOptions() {
      return {
        hour: "numeric",
        minute: "numeric"
      };
    },
    formatter() {
      return new Intl.DateTimeFormat(this.locale, this.formatterOptions);
    },
    dates() {
      const dates = [];
      let currentDate = startOfToday();
      let minutesAdded = 0;

      do {
        dates.push(currentDate);
        currentDate = addMinutes(currentDate, this.interval);
        minutesAdded += this.interval;
      } while (minutesAdded < 1440);

      return dates;
    },
    formattedDates() {
      // return this.dates.map(d => format(d, "p", { locale: this.locale }));
      return this.dates.map(d => this.formatter.format(d));
    }
  }
};
</script>
