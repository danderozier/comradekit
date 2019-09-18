<template>
  <div class="select">
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
          @focus="onFocus"
          @blur="onBlur"
          @keydown.delete="onKeyboardDelete"
        />
        <TextRenderer v-if="!searchText" :value="labelFor(value)" />
      </SelectInputWrapper>

      <DropdownItem
        v-for="(option, index) in filteredOptions"
        :key="index"
        :selected="isSelected(option.value)"
        @click="selectOption(option)"
      >
        <slot name="dropdown-item">{{ option.label }}</slot>
      </DropdownItem>

      <DropdownItem
        v-if="filteredOptions.length === 0 && !allowCreate"
        :disabled="true"
        >No options</DropdownItem
      >
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import DropdownItem from "@/components/DropdownItem";
import SelectInputWrapper from "@/components/utilities/SelectInputWrapper";
import TextRenderer from "@/components/TextRenderer";
import _ from "lodash";
import inputtable from "@mixins/inputtable";

export default {
  name: "Select",
  mixins: [inputtable],
  components: {
    Dropdown,
    DropdownItem,
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
</style>
