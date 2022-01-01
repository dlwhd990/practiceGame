function Game(target, filter, finishFilter, timerContainer, start) {
  let time = 0;
  let timer = setInterval(() => {
    time += 0.01;
    timerContainer.innerHTML = `${time.toFixed(2)}초`;
  }, [10]);

  this.state;
  this.openedState = [];

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.setOpenedState = (openedCard) => {
    let count = 0;
    this.openedState = [...this.openedState, openedCard];
    //두장을 선택한 경우
    if (this.openedState.length === 2) {
      filter.classList.add("on");
      setTimeout(() => {
        //선택된 두 카드를 id 오름차순으로 정렬하기
        this.openedState.sort(function (a, b) {
          return a.id - b.id;
        });
        const first = this.openedState[0];
        const second = this.openedState[1];

        //같은 카드를 뒤집은 경우 정답 처리
        if (this.openedState[0].icon === this.openedState[1].icon) {
          console.log("correct!");
          this.setState([
            ...this.state.slice(0, first.id),
            {
              ...first,
              correct: true,
            },
            ...this.state.slice(first.id + 1, second.id),
            {
              ...second,
              correct: true,
            },
            ...this.state.slice(second.id + 1),
          ]);
          setTimeout(() => {
            this.setState([
              ...this.state.slice(0, first.id),
              {
                ...first,
                finished: true,
              },
              ...this.state.slice(first.id + 1, second.id),
              {
                ...second,
                finished: true,
              },
              ...this.state.slice(second.id + 1),
            ]);
            this.state.forEach((item) => {
              if (item.finished) {
                count++;
              }
            });
            if (count === this.state.length) {
              clearInterval(timer);
              finishFilter.classList.add("finished_on");
              finishFilter.innerHTML = `
              <p>게임 종료</p>
              <p>기록: ${timerContainer.innerText}</p>
              <button class="start">다시 시작</button>
              `;
              document.querySelector(".start").addEventListener("click", start);
            }
          }, [200]);
        } else {
          //다른 카드를 뒤집은 경우 오답 처리 (다시 뒷면으로)
          console.log("wrong");
          this.setState([
            ...this.state.slice(0, first.id),
            {
              ...first,
              isOpen: false,
            },
            ...this.state.slice(first.id + 1, second.id),
            {
              ...second,
              isOpen: false,
            },
            ...this.state.slice(second.id + 1),
          ]);
        }
        this.openedState = [];
        filter.classList.remove("on");
      }, [500]);
    }
  };

  const cardClickEvent = (e) => {
    const id = parseInt(e.currentTarget.dataset.id);
    this.setState([
      ...this.state.slice(0, id),
      {
        id,
        icon: this.state[id].icon,
        isOpen: true,
        correct: false,
        finished: false,
      },
      ...this.state.slice(id + 1),
    ]);

    this.setOpenedState(this.state[id]);
  };

  this.render = () => {
    target.innerHTML = this.state
      .map(
        (card) => `
      <div class="card ${card.isOpen ? "open" : "close"} ${
          card.correct ? "correct" : ""
        } ${card.finished ? "finished" : ""}" data-id="${card.id}">
        <div class="icon">${card.icon}</div>
      </div>
    `
      )
      .join("");

    const cardElements = document.querySelectorAll(".card");
    cardElements.forEach((card) => {
      const id = parseInt(card.dataset.id);
      if (this.state[id].isOpen) {
        card.removeEventListener("click", cardClickEvent);
        return;
      }
      card.addEventListener("click", cardClickEvent);
    });
  };
}

export default Game;
