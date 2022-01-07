function Game(target, targetWord, result, desc) {
  this.state;
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    desc.innerHTML = `정답: ${targetWord}`;
    target.innerHTML = this.state
      .map(
        (item) => `
      <div class="item">${item}</div>
    `
      )
      .join("");

    const itemList = document.querySelectorAll(".item");
    itemList.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.innerText === targetWord) {
          result.classList.remove("wrong");
          result.classList.add("correct");
          result.innerHTML = "맞았습니다!";
        } else {
          result.classList.remove("correct");
          result.classList.add("wrong");
          result.innerHTML = "틀렸습니다!";
        }
      });
    });
  };
}

export default Game;
