import Game from "./game.js";

function App() {
  const target = document.querySelector(".main");
  const result = document.querySelector(".result");

  const defaultWord = "멵";
  const targetWord = "먽";

  const game = new Game(target, targetWord, result);

  //Game Setting!
  const setting = () => {
    const number = window.innerWidth < 768 ? 50 : 100;
    const targetPosition = parseInt(Math.random() * number);
    const gameList = new Array(number).fill("tmp");
    gameList.fill(defaultWord, 0, targetPosition);
    gameList.fill(targetWord, targetPosition, targetPosition + 1);
    gameList.fill(defaultWord, targetPosition + 1, number);
    game.setState(gameList);
  };

  setting();
}

export default App;
