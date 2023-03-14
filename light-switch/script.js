Vue.createApp({
  data() {
    return {
      darkmode: false,
    };
  },
  methods: {
    toggleDarkmodeOnBody() {
      this.darkmode = !this.darkmode;
      document.body.classList.toggle("body--dark", this.darkmode);
    },
  },
}).mount("#app");
