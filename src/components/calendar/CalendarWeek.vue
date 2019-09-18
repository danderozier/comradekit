<template>
  <div class="calendar-week">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CalendarWeek"
};
</script>

<style lang="scss" scoped>
.calendar-week {
  display: flex;

  > * {
    flex: 14.2857%;
    margin: 0 0.125rem 0.25rem;
  }
}
</style>
