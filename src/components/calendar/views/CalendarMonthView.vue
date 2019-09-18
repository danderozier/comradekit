<template>
  <div>
    <CalendarHeader @prev="prevMonth" @next="nextMonth">
      <Button type="is-text" @click="$parent.context = 'year'">
        <strong>{{ label }}</strong>
      </Button>
    </CalendarHeader>

    <div class="calendar__picker--day">
      <CalendarWeek>
        <CalendarDayHeader
          v-for="(dow, index) in daysOfWeek"
          :key="index"
          :value="dow"
        />
      </CalendarWeek>
      <CalendarWeek v-for="(week, rowIndex) in calendarMatrix" :key="rowIndex">
        <Button
          type="is-text"
          v-for="(day, colIndex) in week"
          :key="colIndex"
          :is-selected="day.iso === currentISODate"
          @click="select(day.iso)"
        >
          <time :datetime="day.iso">{{ day.date }}</time>
        </Button>
      </CalendarWeek>
    </div>
  </div>
</template>

<script>
import Button from "@components/Button";
import CalendarHeader from "@components/calendar/CalendarHeader";
import CalendarDayHeader from "@components/calendar/CalendarDayHeader";
import CalendarWeek from "@components/calendar/CalendarWeek";
import CalendarDates from "calendar-dates";
import moment from "moment";

const calendarDates = new CalendarDates();

export default {
  name: "CalendarMonthView",
  components: {
    Button,
    CalendarHeader,
    CalendarWeek,
    CalendarDayHeader
  },
  props: {
    value: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      calendarMatrix: []
    };
  },
  methods: {
    async setMatrix() {
      this.calendarMatrix = await calendarDates.getMatrix(this.cursor);
    },
    prevMonth() {
      this.$parent.cursor = moment(this.cursor)
        .subtract(1, "months")
        .toDate();
    },
    nextMonth() {
      this.$parent.cursor = moment(this.cursor)
        .add(1, "months")
        .toDate();
    },
    select(day) {
      this.$emit("select", day);
    }
  },
  computed: {
    cursor() {
      return this.$parent.cursor;
    },
    currentISODate() {
      return moment(this.value).format("YYYY-MM-DD");
    },
    label() {
      return moment(this.cursor).format("MMMM YYYY");
    }
  },
  mounted() {
    this.setMatrix();
  },
  watch: {
    cursor() {
      this.setMatrix();
    }
  }
};
</script>

<style lang="scss" scoped></style>
