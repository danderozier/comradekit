<template>
  <CalendarMonthCell>
    <div class="calendar-month__header">{{ value }}</div>
  </CalendarMonthCell>
</template>

<script>
import CalendarMonthCell from "@components/calendar/CalendarMonthCell";

export default {
  name: "CalendarDayHeader",
  components: { CalendarMonthCell },
  props: {
    value: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-month__header {
  color: gray;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
</style>
