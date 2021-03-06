import Enemy from "./enemy.js";

function App() {
  const target = document.querySelector(".enemy");
  const buttonList = document.querySelectorAll(".button");
  const result = document.querySelector(".result");

  const enemy = new Enemy(target);
  let cnt = 0;
  const enemyList = ["βοΈ", "β", "π"];

  let enemyChanger = setInterval(() => {
    cnt++;
    enemy.setState(enemyList[cnt % 3]);
  }, [100]);

  const gameJudge = (button) => {
    result.classList.add("on");
    const enemyItem = target.innerText;
    const myItem = button.innerText;
    if (enemyItem === myItem) {
      result.innerHTML = "λΉκ²Όμ΅λλ€!";
    } else if (
      (enemyItem === "βοΈ" && myItem === "β") ||
      (enemyItem === "β" && myItem === "π") ||
      (enemyItem === "π" && myItem === "βοΈ")
    ) {
      result.innerHTML = "μ΄κ²Όμ΅λλ€!";
    } else if (
      (myItem === "βοΈ" && enemyItem === "β") ||
      (myItem === "β" && enemyItem === "π") ||
      (myItem === "π" && enemyItem === "βοΈ")
    ) {
      result.innerHTML = "μ‘μ΅λλ€!";
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
