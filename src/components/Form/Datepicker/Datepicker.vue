<template>
  <div class="datepicker" ref="wrapper">
    <Dropdown ref="dropdown">
      <SelectInputWrapper
        slot="trigger"
        :is-focused="isFocused"
        :is-loading="isLoading"
        :is-invalid="isInvalid"
      >
        <input
          type="text"
          ref="input"
          v-model="searchText"
          :placeholder="!value ? placeholder : ''"
          @focus="onInputFocus"
          @blur="onInputBlur"
          @keydown.delete="onKeyboardDelete"
          @keydown="dingle"
        />
        <TextRenderer v-if="!searchText" :value="labelFor(value)" />
      </SelectInputWrapper>

      <Calendar v-model="value" />
    </Dropdown>
  </div>
</template>

<script>
import Calendar from "@components/Calendar/Calendar";
import Dropdown from "@components/Dropdown/Dropdown";
import SelectInputWrapper from "@components/Form/_SelectInputWrapper";
import TextRenderer from "@/components/Form/_TextRenderer";
import _ from "lodash";
import InputMixin from "@mixins/InputMixin";

export default {
  name: "Datepicker",
  mixins: [InputMixin],
  components: {
    Calendar,
    Dropdown,
    SelectInputWrapper,
    TextRenderer
  },
  props: {
    allowCreate: {
      type: Boolean,
      default: true
    },
    labelField: {
      type: String,
      default: undefined
    },
    normalizer: {
      type: Function,
      default: value => _.lowerCase(_.deburr(value)).replace(/s+/g, "")
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default: undefined
    },
    value: {
      type: [String, Number, Object, Array],
      default: undefined
    }
  },
  data() {
    return {
      searchText: undefined
    };
  },
  computed: {
    normalizedSearchText() {
      return this.normalizer(this.searchText);
    },
    filteredOptions() {
      var options = _.map(this.options, option => {
        return {
          label: this.labelFor(option),
          value: option
        };
      });

      if (this.searchText) {
        options = _.filter(options, o => {
          return (
            this.normalizer(o.label).search(this.normalizedSearchText) > -1
          );
        });

        if (this.allowCreate) {
          options.push({
            label: `Add "${this.searchText}"`,
            value: this.searchText
          });
        }
      }

      return options;
    }
  },
  methods: {
    dingle(e) {
      console.log("dingle", e);
    },
    isSelected(value) {
      return this.value === value;
    },
    labelFor(option) {
      return _.isObject(option) ? option[this.labelField] : option;
    },
    selectOption(option) {
      this.$emit("input", option.value);
      this.searchText = undefined;
    },
    onKeyboardDelete(e) {
      if (!this.searchText) {
        e.preventDefault();
        this.$emit("input", undefined);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  position: relative;

  ::v-deep .dropdown-content {
    width: 100%;
  }
}

.text-renderer {
  position: absolute;
  cursor: text;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.125rem;
  margin-right: -0.25rem;
}

input {
  width: auto;
  flex: auto;
}

.datepicker .calendar {
  padding: 0 0.5rem;
}
</style>
