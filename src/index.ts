import "../src/components/text";
import "../src/components/button";
import "../src/components/hands";
import "../src/components/countdown";
import "../src/components/star";


import { initRouter } from "../src/router";
import { state } from "../src/state";
import { myPlay } from "./components/play";


(function main() {
  state.getData();
  const rootEl = document.querySelector(".root");
  myPlay();
  initRouter(rootEl);
  
  
})();