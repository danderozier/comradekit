<template>
  <div class="select" ref="wrapper">
    <Dropdown ref="dropdown">
      <SelectInputWrapper
        slot="trigger"
        :is-focused="isFocused"
        :is-loading="isLoading"
        :is-invalid="isInvalid"
      >
        <input
          ref="input"
          type="text"
          v-model="searchText"
          :placeholder="!value ? placeholder : ''"
          @focus="onInputFocus"
          @blur="onInputBlur"
          @keydown.delete="onKeyboardDelete"
        />
        <TextRenderer v-if="!searchText" :value="labelFor(value)" />
      </SelectInputWrapper>

      <DropdownItem
        v-for="(option, index) in filteredOptions"
        :key="index"
        :selected="isSelected(option)"
        @select="onSelect(option)"
      >
        <slot name="dropdown-item">{{ labelFor(option) }}</slot>
      </DropdownItem>

      <DropdownItem v-if="showCreateItem" @click="create()">
        <!-- @slot Custom template for "add" item -->
        <slot name="add">Add "{{ searchText }}"</slot>
      </DropdownItem>

      <DropdownItem v-if="filteredOptions.length === 0" :disabled="true">
        <!-- @slot Custom template for "empty" item -->
        <slot name="empty">No options</slot>
      </DropdownItem>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "@components/Dropdown/Dropdown";
import DropdownItem from "@components/Dropdown/DropdownItem";
import SelectInputWrapper from "@components/Form/_SelectInputWrapper";
import TextRenderer from "@components/Form/_TextRenderer";
import _ from "lodash";
import InputMixin from "@mixins/InputMixin";

export default {
  name: "Select",
  mixins: [InputMixin],
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
      default: "label"
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
    // computedValue: {
    //   get() {
    //     if (_.isObject(this.value)) {
    //       return _.find(this.value);
    //     }
    //   }
    // },
    showCreateItem() {
      if (!this.allowCreate || !this.searchText) return false;

      console.log();

      return (
        _.filter(this.options, o => {
          return this.labelFor(o) === this.searchText;
        }).length === 0
      );
    },
    normalizedSearchText() {
      return this.normalizer(this.searchText);
    },
    filteredOptions() {
      // var options = _.map(this.options, option => {
      //   return {
      //     label: this.labelFor(option),
      //     value: option
      //   };
      // });
      return _.filter(this.options, o => {
        if (!this.searchText) return true;

        return (
          this.normalizer(this.labelFor(o)).search(
            this.normalizer(this.searchText)
          ) > -1
        );
      });

      // if (this.searchText) {
      //   options = _.filter(options, o => {
      //     return (
      //       this.normalizer(o.label).search(this.normalizedSearchText) > -1
      //     );
      //   });

      // if (this.allowCreate) {
      //   options.push({
      //     label: `Add "${this.searchText}"`,
      //     value: this.searchText
      //   });
      // }
      // }

      // return options;
    }
  },
  methods: {
    /**
     * We can't assume what to do with a newly-created option,
     * so we pass it up the chain via an event.
     */
    create() {
      this.$emit("create", this.searchText);
    },
    isSelected(value) {
      return this.value === value;
    },
    labelFor(option) {
      console.log("labelFor", option);
      return _.isObject(option) ? option[this.labelField] : option;
    },
    onSelect(option) {
      this.$emit("input", option);
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

  ::v-deep .dropdown {
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
