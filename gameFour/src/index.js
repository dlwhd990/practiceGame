import App from "./app.js";
const target = document.querySelector(".main");

const app = new App(target);

app.setState([0, 0, 0, 0, 0, 0, 0, 0]);
