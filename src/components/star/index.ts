const ganador = require("url:../../../src/assets/ganador.svg");
const perdedor = require("url:../../../src/assets/perdedor.svg");
const empate = require("url:../../../src/assets/empate.svg");

class StarComp extends HTMLElement {
  shadow: ShadowRoot;
  tag: string;
  imgUrl: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.tag = this.getAttribute("tag");
  }

  connectedCallback() {
    this.selectImage();
    this.render();
  }
  selectImage() {
    if(this.tag == "Ganaste"){
      this.imgUrl=ganador;
    }
    if(this.tag == "Perdiste"){
      this.imgUrl= perdedor;
    }
    if(this.tag == "Empate"){
      this.imgUrl= empate;
    }
  }
  render() {
    const rootEl = document.createElement("div");
    rootEl.className = "root";
    const width = this.getAttribute("width") || "80px";
    const height = this.getAttribute("height") || "175px";
    const text = this.textContent;
    rootEl.innerHTML = `
      <img class="star" src="${this.imgUrl}" alt="this is a star with a result inside">
      <p class="texto">${text}</p>
      `;
    const style = document.createElement("style");
    style.innerHTML = `
      .root{
        width:${width};
        height:${height};
        position:relative;
      }
      .star{
        width:${width};
        height:${height};
      }
      .texto{
        margin:0px;
        position:absolute;
        top:90px;
        left:70px;
        font-size:40px;
        color:"#000";
      }
      `;
    this.shadow.appendChild(style);
    this.shadow.appendChild(rootEl);
  }
}

customElements.define("star-el", StarComp);