export function rulesPage(params) {
    const rulesPage = document.createElement("section");
   
    rulesPage.innerHTML = `
      <div class="rules-container">
          <div class="rules-text">
              <custom-text tag="h3" size="47px">
              Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
              </custom-text>
          </div>
          <div class="rules-button">
              <custom-button class="button">¡Jugar!</custom-button>
          </div>
          <div class="rules-hands">
              <hands-el tag="tijera" class= "hands" ></hands-el>
              <hands-el tag="piedra" class= "hands" ></hands-el>
              <hands-el tag="papel" class= "hands" ></hands-el>
          </div>
      </div>
      `;
    const style = document.createElement("style");
    style.innerHTML = `
    .rules-container{
      display: flex;
      flex-direction:column;
      align-items: center;
    }
    
    .hands{
      width:100px;
      heigth:200px;
    }
    .rules-text{
   
      margin-top:5%;
      width:384px;
      height:250px;
     
    }
    @media(min-width:900px){
      .rules-text{
        margin-top:5%;
      }
    }
    .rules-button{
      margin-top:20%;
      display: flex;
      justify-content:center;
      aligh-items: center;
     
      width:322px;
      height:87px;
    }
    @media(min-width:900px){
      .rules-button{
        margin-top:3%;
      }
    }
    .rules-hands{
      margin-top:23%;
  
    
      width:373px;
      height:130px;
      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    @media(min-width:900px){
      .rules-hands{
        margin-top:5%;
      }
    }
    `;
    rulesPage.appendChild(style);
    const boton = rulesPage.querySelector(".button");
    boton.addEventListener("click", () => {
      params.goTo("/game");
    });
  
    return rulesPage;
  }