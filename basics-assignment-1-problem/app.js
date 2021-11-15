const app = Vue.createApp({
  data() {
    return {
      name: 'George Hatzi',
      age: 40,
      googleLink:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/1024px-Football_iu_1996.jpg'
    };
  },
  methods: {
    outputAge() {
      if (this.age) {
        return this.age + 5;
      }
    },
    randomNum() {
      const randomNumber = Math.random();
      return randomNumber.toFixed(2);
    }
  }
});

app.mount('#assignment');
