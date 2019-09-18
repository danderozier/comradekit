<template>
  <CalendarMonthCell>
    <div class="calendar__day" :class="computedClasses"></div>
  </CalendarMonthCell>
</template>

<script>
import CalendarMonthCell from "@components/Calendar/_CalendarMonthCell";

export default {
  name: "CalendarDay",
  components: { CalendarMonthCell },
  props: {
    data: {
      type: Object,
      required: true
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClasses() {
      return {
        "is-previous": this.data.type === "previous",
        "is-current": this.data.type === "current",
        "is-next": this.data.type === "next",
        "is-selected": this.isSelected
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar__day {
  border-radius: $input-border-radius;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 3rem;

  &:hover {
    background: #eee;
  }

  time {
    font-size: 0.875rem;
  }

  &.is-previous,
  &.is-next {
    color: gray;
  }

  &.is-selected {
    background: yellow;
  }
}
</style>
