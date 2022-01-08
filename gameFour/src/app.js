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
  };
}

export default App;
