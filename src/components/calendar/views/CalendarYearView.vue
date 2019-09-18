<template>
  <div>
    <CalendarHeader @prev="prevYear" @next="nextYear">
      <Button type="is-text" @click="$parent.context = 'decade'">
        <strong>{{ label }}</strong>
      </Button>
    </CalendarHeader>

    <div class="calendar__view--year">
      <div class="calendar-grid">
        <Button
          type="is-text"
          v-for="(month, index) in monthsOfYear"
          :key="index"
          @click="update(index)"
        >
          {{ month }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@components/Button";
import CalendarHeader from "@components/calendar/CalendarHeader";
import CalendarDates from "calendar-dates";
import moment from "moment";

const calendarDates = new CalendarDates();

export default {
  name: "CalendarMonthView",
  components: {
    Button,
    CalendarHeader
  },
  data() {
    return {
      monthsOfYear: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  methods: {
    async setMatrix() {
      this.calendarMatrix = await calendarDates.getMatrix(this.cursor);
    },
    prevYear() {
      this.$parent.cursor = moment(this.cursor)
        .subtract(1, "years")
        .toDate();
    },
    nextYear() {
      this.$parent.cursor = moment(this.cursor)
        .add(1, "years")
        .toDate();
    },
    update(index) {
      this.$parent.cursor = moment(this.cursor)
        .month(index)
        .toDate();
      this.$parent.context = "month";
    }
  },
  computed: {
    cursor() {
      return this.$parent.cursor;
    },
    currentISODate() {
      return moment(this.cursor).format("YYYY-MM-DD");
    },
    label() {
      return moment(this.cursor).format("YYYY");
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

<style lang="scss" scoped>
.calendar__picker--day {
  display: table;
}

.calendar-grid {
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 25%;
    margin: 0 0 0.5rem;
  }
}
</style>
