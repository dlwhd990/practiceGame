function Enemy(target) {
  this.state;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    target.innerHTML = this.state;
  };
}

export default Enemy;
