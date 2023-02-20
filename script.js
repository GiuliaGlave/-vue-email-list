const app = Vue.createApp({
  data() {
    return {
      emailList: [],
    };
  },

  mounted() {
    //richiedo 10 email random in un ciclo
    for (let i = this.emailList.length; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          /* console.log(response.data.response); */
          this.emailList.push(response.data.response);
        });
    }
  },
});

app.mount("#app");
