Vue.createApp({
  data() {
    return {
      inputType: "password",
    };
  },
  computed: {
    buttonText() {
      if (this.inputType === "password") {
        return "Show Password";
      } else {
        return "Hide Password";
      }
    },
  },
  methods: {
    /**
     * toggle type attribut of input element between text or password
     */
    togglePasswordVisibility() {
      if (this.inputType === "password") {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
  },
}).mount("#app");
