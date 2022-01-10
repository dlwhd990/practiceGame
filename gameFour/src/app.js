import Game from "./game.js";

function App(target) {
  this.state;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
    const game = new Game(target);
    game.setState(this.state);
  };

  this.render = () => {
    target.innerHTML = this.state.order
      .map(
        (item, index) => `
    <div class="item" data-id="${index + 1}"></div>
    `
      )
      .join("");

    const temp = document.querySelectorAll(".item");
    temp.forEach((tmp) => {
      tmp.addEventListener("click", () => {
        this.setState({
          ...this.state,
          clicked: [...this.state.clicked, parseInt(tmp.dataset.id)],
        });
        if (
          JSON.stringify(this.state.clicked) ===
          JSON.stringify(this.state.order.slice(0, this.state.turn))
        ) {
          this.setState({
            ...this.state,
            turn: this.state.turn + 1,
            clicked: [],
          });
        } else if (
          JSON.stringify(this.state.clicked) ===
          JSON.stringify(this.state.order.slice(0, this.state.clicked.length))
        ) {
          console.log("zz");
        } else {
          document.write("실패");
        }
      });
    });
  };
}

export default App;
