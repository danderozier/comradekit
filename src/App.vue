<template>
  <div id="app">
    <label>
      <input type="checkbox" v-model="isInvalid" />
      isInvalid
    </label>
    <label>
      <input type="checkbox" v-model="isDisabled" />
      isDisabled
    </label>
    <label>
      <input type="checkbox" v-model="isSelect" />
      isSelect
    </label>
    <label>
      <input type="checkbox" v-model="isLoading" />
      isLoading
    </label>

    <Field label="Text Input" required>
      <TextInput
        v-model="text"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        :is-select="isSelect"
        :is-loading="isLoading"
      />
    </Field>

    <Field label="Textarea" required :errors="errors">
      <TextArea
        v-model="textarea"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        :is-select="isSelect"
        :is-loading="isLoading"
      />
    </Field>

    <Checkbox
      v-model="checkbox"
      :is-invalid="isInvalid"
      :is-disabled="isDisabled"
      :is-select="isSelect"
      :is-loading="isLoading"
      >Checkbox</Checkbox
    >

    <Field label="Inline Checkboxes" required :errors="errors">
      <Checkbox
        v-model="checkboxes"
        native-value="one"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >One</Checkbox
      >
      <Checkbox
        v-model="checkboxes"
        native-value="two"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Two</Checkbox
      >
      <Checkbox
        v-model="checkboxes"
        native-value="three"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Three</Checkbox
      >
      <Checkbox
        v-model="checkboxes"
        native-value="four"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Four</Checkbox
      >
    </Field>

    <Field label="Block Checkboxes" required :errors="errors">
      <Checkbox
        v-model="checkboxes"
        native-value="one"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >One</Checkbox
      >
      <Checkbox
        v-model="checkboxes"
        native-value="two"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Two</Checkbox
      >
      <Checkbox
        v-model="checkboxes"
        native-value="three"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Three</Checkbox
      >
      <Checkbox
        v-model="checkboxes"
        native-value="four"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Four</Checkbox
      >
    </Field>

    <p>{{ radiobuttons }}</p>

    <Field label="Inline Radio Buttons" required :errors="errors">
      <RadioButton
        v-model="radiobuttons"
        native-value="one"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >One</RadioButton
      >
      <RadioButton
        v-model="radiobuttons"
        native-value="two"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Two</RadioButton
      >
      <RadioButton
        v-model="radiobuttons"
        native-value="three"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Three</RadioButton
      >
      <RadioButton
        v-model="radiobuttons"
        native-value="four"
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Four</RadioButton
      >
    </Field>

    <Field label="Block RadioButtons" required :errors="errors">
      <RadioButton
        v-model="radiobuttons"
        native-value="one"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >One</RadioButton
      >
      <RadioButton
        v-model="radiobuttons"
        native-value="two"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Two</RadioButton
      >
      <RadioButton
        v-model="radiobuttons"
        native-value="three"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Three</RadioButton
      >
      <RadioButton
        v-model="radiobuttons"
        native-value="four"
        is-block
        :is-invalid="isInvalid"
        :is-disabled="isDisabled"
        >Four</RadioButton
      >
    </Field>
  </div>
</template>

<script>
import Field from "@/components/Form/Field/Field";
import TextInput from "@/components/Input";
import TextArea from "@/components/TextArea";
import Checkbox from "@/components/Form/Checkbox/Checkbox";
import RadioButton from "@/components/RadioButton";

export default {
  name: "app",
  components: {
    Field,
    TextInput,
    TextArea,
    Checkbox,
    RadioButton
  },
  data() {
    return {
      text: "",
      textarea: "",
      checkbox: false,
      checkboxes: [],
      radiobuttons: "",
      isInvalid: false,
      isDisabled: false,
      isSelect: false,
      isLoading: false
    };
  },
  computed: {
    errors() {
      return this.isInvalid
        ? ["must be present", "must be more than 300 words"]
        : null;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
