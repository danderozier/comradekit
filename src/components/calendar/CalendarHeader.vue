<template>
  <div class="calendar__header">
    <Button type="is-text" @click="$emit('prev')">
      Prev
      <span slot="icon-before"></span>
    </Button>
    <slot />
    <Button type="is-text" @click="$emit('next')">
      Next
      <span slot="icon-after"></span>
    </Button>
  </div>
</template>

<script>
import Button from "@components/Button/Button";

export default {
  name: "CalendarHeader",
  components: { Button }
};
</script>

<style lang="scss" scoped>
.calendar__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}
</style>
