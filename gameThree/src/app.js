import Game from "./game.js";

function App() {
  const startButton = document.querySelector(".start");
  const target = document.querySelector(".main");
  const filter = document.querySelector(".filter");
  const finishFilter = document.querySelector(".finish_filter");
  const timerContainer = document.querySelector(".timer");

  const start = () => {
    finishFilter.classList.remove("finished_on");
    const cardList = ["🍔", "🍙", "🍭", "🥩", "🍄", "🍟"];

    const extendedCardList = cardList.concat(cardList);
    extendedCardList.sort(function () {
      return Math.random() - Math.random();
    });
    const game = new Game(target, filter, finishFilter, timerContainer, start);
    game.setState(
      extendedCardList.map((card, index) => ({
        id: index,
        icon: card,
        isOpen: false,
        correct: false,
        finished: false,
      }))
    );
  };

  startButton.addEventListener("click", start);
}

export default App;
