const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmedInput: ''
    };
  },

  methods: {
    alertMessage() {
      alert('any text of your choice');
    },
    registerInput(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.name;
    }
  }
});

app.mount('#assignment');
