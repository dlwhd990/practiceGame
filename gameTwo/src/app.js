import Game from "./game.js";

function App() {
  const target = document.querySelector(".main");
  const result = document.querySelector(".result");

  const defaultWord = "멵";
  const targetWord = "먽";

  const game = new Game(target, targetWord, result);

  const targetPosition = parseInt(Math.random() * 100);
  const gameList = new Array(100).fill("tmp");
  gameList.fill(defaultWord, 0, targetPosition);
  gameList.fill(targetWord, targetPosition, targetPosition + 1);
  gameList.fill(defaultWord, targetPosition + 1, 100);

  //Game Setting
  game.setState(gameList);
}

export default App;
