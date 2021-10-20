import { state } from "../../state";

export function myPlay() {
  customElements.define(
    "my-play",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
     

      
       
      }
    }
  );
}