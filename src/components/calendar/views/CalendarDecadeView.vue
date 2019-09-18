<template>
  <div>
    <CalendarHeader @prev="prevDecade" @next="nextDecade">
      <Button type="is-text" :disabled="true">
        <strong>{{ label }}</strong>
      </Button>
    </CalendarHeader>

    <div class="calendar__view--decade">
      <div class="calendar-grid">
        <Button
          type="is-text"
          v-for="(year, index) in yearsOfDecade"
          :key="index"
          @click="update(year)"
        >
          {{ year }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@components/Button";
import CalendarHeader from "@components/calendar/CalendarHeader";
import moment from "moment";
import _ from "lodash";

export default {
  name: "CalendarDecadeView",
  components: {
    Button,
    CalendarHeader
  },
  computed: {
    label() {
      return `${this.yearsOfDecade[0]} - ${this.yearsOfDecade[9]}`;
    },
    cursor() {
      return this.$parent.cursor;
    },
    currentYear() {
      return this.cursor.getFullYear();
    },
    yearsOfDecade() {
      const temp = Math.floor(this.currentYear / 10) * 10;
      return _.range(temp, temp + 10);
    }
  },
  methods: {
    prevDecade() {
      this.$parent.cursor = moment(this.cursor)
        .subtract(10, "years")
        .toDate();
    },
    nextDecade() {
      this.$parent.cursor = moment(this.cursor)
        .add(10, "years")
        .toDate();
    },
    update(year) {
      this.$parent.cursor = moment(this.cursor)
        .year(year)
        .toDate();
      this.$parent.context = "year";
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-grid {
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: 20%;
    margin: 0 0 0.5rem;
  }
}
</style>
