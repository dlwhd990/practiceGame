import Enemy from "./enemy.js";

function App() {
  const target = document.querySelector(".enemy");
  const buttonList = document.querySelectorAll(".button");
  const result = document.querySelector(".result");

  const enemy = new Enemy(target);
  let cnt = 0;
  const enemyList = ["✌️", "✊", "🖐"];

  let enemyChanger = setInterval(() => {
    cnt++;
    enemy.setState(enemyList[cnt % 3]);
  }, [100]);

  const gameJudge = (button) => {
    const enemyItem = target.innerText;
    const myItem = button.innerText;
    if (enemyItem === myItem) {
      result.innerHTML = "비겼습니다!";
    } else if (
      (enemyItem === "✌️" && myItem === "✊") ||
      (enemyItem === "✊" && myItem === "🖐") ||
      (enemyItem === "🖐" && myItem === "✌️")
    ) {
      result.innerHTML = "이겼습니다!";
    } else if (
      (myItem === "✌️" && enemyItem === "✊") ||
      (myItem === "✊" && enemyItem === "🖐") ||
      (myItem === "🖐" && enemyItem === "✌️")
    ) {
      result.innerHTML = "졌습니다!";
    }
  };

  buttonList.forEach((button) => {
    button.addEventListener("click", () => {
      clearInterval(enemyChanger);
      gameJudge(button);
    });
  });
}

export default App;
