import * as components from "./components";
import { Header, Nav, Main, Footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
  `;
}
render();
