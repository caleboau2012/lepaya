var app = new Vue({
  el: "#app",
  data: {
    no: 8,
    nos: [],
    isEnabled: false,
    isFlipped: false,
    ans: [],
    given: [],
    expected: [],
    won: false,
    status: {
      info: true,
      success: false,
      danger: false
    },
    message: "Select your difficulty and click Play to start",
    history: [],
    time: -1
  },
  methods: {
    generate: function() {
      this.nos = new Array(this.no);
      this.ans = [];
      this.given = [];
      this.isEnabled = false;
      this.isFlipped = false;

      axios
        .get(`/generate/${this.no}`)
        .then(response => {
          this.nos = response.data;
          this.computeAns(response.data);

          // show message to memorise now
          this.showMessage(
            "Study the numbers in the order they appear",
            "info"
          );
          this.time = 5;

          this.isFlipped = true;
          setTimeout(() => {
            this.isFlipped = false;
            this.isEnabled = true;
            // show message to start clicking
            this.showMessage("Now pick the cards, smallest first", "info");
          }, this.time * 1000);
        })
        .catch(error => {
          // handle error
          console.log(error);
        });
    },
    storeClick: function(i, n) {
      if (this.ans.length < this.nos.length) {
        this.ans.push(i);
        this.given.push(n);
      }

      if (this.ans.length === this.nos.length) this.checkStatus();
    },
    checkStatus: function() {
      let status = true;
      this.ans.map((a, i) => {
        if (a !== this.expected[i]) status = false;
      });

      this.won = status;

      if (status) {
        this.showMessage("CONGRATS!!! You won the game", "success");
      } else {
        this.showMessage("Bust!! You lost. Click Play to try again", "danger");
      }

      this.logHistory();
    },
    logHistory: function() {
      let difficulty = "";
      switch (this.nos.length) {
        case 4:
          difficulty = "easy";
          break;
        case 8:
          difficulty = "medium";
          break;
        case 12:
          difficulty = "hard";
      }

      this.history.push({
        time: new Date().toDateString(),
        difficulty,
        cards: this.nos,
        expected: [...this.nos].sort(),
        selection: this.given,
        won: this.won ? "Yes!!" : "No :-("
      });

      this.save();
    },
    save: function() {
      localStorage.setItem("history", JSON.stringify(this.history));
    },
    computeAns: function(answers) {
      const temp = [...answers];
      this.expected = [];

      temp.sort();
      temp.map(a => {
        this.expected.push(answers.indexOf(a));
      });

      console.log(answers, temp, this.expected);
    },
    showMessage: function(message, status) {
      this.message = message;
      this.status = {
        info: false,
        success: false,
        danger: false
      };

      this.status[status] = true;
    }
  },
  created: function() {
    this.history = JSON.parse(localStorage.getItem("history") || "[]");
    setInterval(() => {
      // this would prevent an overflow from excess subtractions
      this.time = this.time > -1 ? this.time - 1 : this.time;
    }, 1000);
  }
});
