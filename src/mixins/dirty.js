export const dirty = {
  data() {
    return {
      dirtyValue: this.value
    };
  },
  computed: {
    isDirty: () => this.dirtyValue !== this.value
  },
  methods: {
    rollback() {
      this.dirtyValue = this.value;
    }
  }
};
