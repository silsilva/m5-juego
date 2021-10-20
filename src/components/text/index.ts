class CustomText extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.render()
  }
  render(){
    var style = document.createElement("style");
    style.innerHTML=
    `
    .title{
      
      font-size: 30px;
      font-weight: 700;
      line-height: 50px;
      color: #009048;
      text-align:center;
    }
    
    `
    
    var shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(style)
    var text = document.createElement("h1")
    text.classList.add("title")
    text.textContent = this.textContent
    shadow.appendChild(text)
  }
}

customElements.define("custom-text", CustomText);