const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      lastName: ''
      // fullname: ''
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname === '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname === '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },

  computed: {
    fullname() {
      console.log('running...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    }
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      // this.name = `${event.target.value} ${lastName}`;
      this.name = `${event.target.value}`;
    },
    submitForm() {
      alert('Submitted');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    outputFullname() {
      // console.log('running...');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Hatzi';
    }
  }
});

app.mount('#events');
