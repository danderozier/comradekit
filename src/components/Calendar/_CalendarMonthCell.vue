<template>
  <div class="calendar-month__cell">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CalendarMonthCell"
};
</script>

<style lang="scss" scoped>
.calendar-month__cell {
  display: table-cell;
}
</style>
