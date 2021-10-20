const piedraImg = require("url:../../assets/piedra.svg");
const papelImg = require("url:../../assets/papel.svg");
const tijeraImg = require("url:../../assets/tijera.svg");

class Hands extends HTMLElement {
  shadow: ShadowRoot;
  tag: string;
  imgURL: string;
  myPlay: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.tag = this.getAttribute("tag");
    this.myPlay = this.tag;
  }

  connectedCallback() {
    this.selectHands();
    this.render();
  }

  selectHands() {
   if(this.tag =="papel"){
     this.imgURL = papelImg;
   }
   if(this.tag =="piedra"){
    this.imgURL = piedraImg;
  }
  if(this.tag =="tijera"){
    this.imgURL = tijeraImg;
  }
  }

  listeners() {
    const hand = this.shadow.querySelector(`.${this.tag}`);
    hand.addEventListener("click", (e: any) => {
      const event = new CustomEvent("change", {
        detail: { myPlay: this.myPlay },
      });
      this.dispatchEvent(event);
    });
  }

  render() {
    const rootEl = document.createElement("div");
    rootEl.className = "root";
  
    rootEl.innerHTML = `
    <img class="${this.tag}" src="${this.imgURL}" alt="this is a ${this.tag}">
    `;
    const style = document.createElement("style");
    style.innerHTML = `
    .root{
      width:80px;
      height:175px;
    }
    .piedra,.papel,.tijera{
      width:80px;
      height:175px; 
    }.
    
    `;
    this.shadow.appendChild(style);
    this.shadow.appendChild(rootEl);
    this.listeners();
  }
}

customElements.define("hands-el", Hands);