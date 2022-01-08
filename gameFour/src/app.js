function App(target) {
  this.state;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    target.innerHTML = this.state
      .map(
        (item) => `
    <div class="item"></div>
    `
      )
      .join("");
  };
}

export default App;
