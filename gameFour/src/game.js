function Game(target) {
  const itemElements = document.querySelectorAll(".item");

  this.state;
  this.goalState;
  this.nowState;

  this.setNowState = (clicked) => {
    this.nowState = [...this.nowState, clicked];
  };

  this.setGoalState = (nextGoalState) => {
    this.goalState = nextGoalState;
    //this.goalState.forEach((goal) => {
    //  itemElements.forEach((item) => {
    //    if (parseInt(item.dataset.id) === goal) {
    //      item.classList.add("on");
    //      return false;
    //    }
    //  });
    //});
    let time = 0;
    for (const goal of this.goalState) {
      time += 600; //0.6초마다 깜빡임
      setTimeout(() => {
        for (const item of itemElements) {
          if (goal === parseInt(item.dataset.id)) {
            item.classList.add("on");
            break;
          }
        }
      }, [time]);
    }
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.setGoalState(this.state.order.slice(0, this.state.turn + 2));
    console.log(this.goalState);
  };
}

export default Game;
