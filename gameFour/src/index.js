import App from "./app.js";
const target = document.querySelector(".main");

const app = new App(target);

const order = [1, 2, 3, 4, 5, 6, 7, 8, 9];

order.sort(function () {
  return Math.random() - Math.random();
});

app.setState({
  order,
  turn: 1,
});
