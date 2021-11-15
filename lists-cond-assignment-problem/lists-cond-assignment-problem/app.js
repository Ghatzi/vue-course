const app = Vue.createApp({
  data() {
    return { enteredValue: '', tasks: [], taskListIsVisible: true };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTasks() {
      this.tasks.push(this.enteredValue);
    },
    toggleTskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    }
  }
});

app.mount('#assignment');
