var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number1: 0,
    number2: 0,
    number3: 0,
    number4: 0,
    number5: 0,
    number6: 0,
    number7: 0,
    number8: 0,
    number9: 0,
    sum: "",
    sub: "",
    avg: ""
  },
  methods: {
    computeSum: function () {

      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    computeSub: function () {

      this.sub = parseInt(this.number4) - parseInt(this.number5) - parseInt(this.number6);
      console.log(parseInt(this.number4) - parseInt(this.number5) - parseInt(this.number6));

    },
    computeAvg: function () {

      this.avg = parseInt((this.number7) + parseInt(this.number8) + parseInt(this.number9) / 3);
      console.log(parseInt((this.number7) + parseInt(this.number8) + parseInt(this.number9) / 3));

    },
  }
});