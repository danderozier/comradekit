<template>
  <div class="calendar">
    <MonthView v-if="isMonthView" @select="onSelect" :value="value" />
    <YearView v-if="isYearView" />
    <DecadeView v-if="isDecadeView" />
  </div>
</template>

<script>
import MonthView from "@components/Calendar/views/_CalendarMonthView";
import YearView from "@components/Calendar/views/_CalendarYearView";
import DecadeView from "@components/Calendar/views/_CalendarDecadeView";
import moment from "moment";

export default {
  name: "Calendar",
  components: {
    MonthView,
    YearView,
    DecadeView
  },
  props: {
    value: {
      type: Date,
      required: false,
      default: () => new Date()
    },
    initialContext: {
      type: String,
      default: "month"
    }
  },
  data() {
    return {
      context: this.initialContext,
      cursor: this.value
    };
  },
  computed: {
    isMonthView() {
      return this.context === "month";
    },
    isYearView() {
      return this.context === "year";
    },
    isDecadeView() {
      return this.context === "decade";
    }
  },
  methods: {
    onUpdate(value) {
      this.cursor = value;
    },
    onChangeContext(context) {
      this.context = context;
    },
    onSelect(date) {
      const newDate = moment(date);
      this.$emit(
        "input",
        moment(this.value)
          .year(newDate.year())
          .month(newDate.month())
          .date(newDate.date())
          .toDate()
      );
    }
  }
};
</script>
