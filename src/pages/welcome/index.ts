export function welcomePage(params) {
    const welcome = document.createElement("section");
    
    welcome.innerHTML = `
    <div class="welcome-container">
      <div class="welcome-title">
          <custom-text>Piedra, Papel, ó Tijera</custom-text>
      </div>
      <div class="welcome-button">
          <custom-button class="button">Empezar</custom-button>
      </div>
      <div class="welcome-hands">
      <hands-el tag="tijera" class="hands" ></hands-el>
      <hands-el tag="piedra" class="hands"></hands-el>
      <hands-el tag="papel" class="hands"></hands-el>
      </div>
    </div>
    `;
    const style = document.createElement("style");
    style.innerHTML = `

.welcome-container{
  display: flex;
   flex-direction:column;
   
   align-items: center;
   width:100%;
   height:100vh;
 
    
}
  .welcome-title{
   margin-top:15%;

  }
  @media(min-width:900px){
   .welcome-title{
  margin-top:5%;
    }
  }
  .hands{
    width:100px;
    heigth:200px;
  }
    .welcome-button{
      margin-top:30%;
      display: flex;
      justify-content:center;
      aligh-items: center;
      
      width:330px;
      height:90px;
    }
    @media(min-width:900px){
      .welcome-button{
        margin-top:10%;
      }
    }
    .welcome-hands{
      margin-top:40%;
      width:373px;
      height:130px;
      display:flex;
      align-items:center;
      justify-content:space-between;
    }

@media(min-width:900px){
 .welcome-hands{
margin-top:10%;
  }
}

    `;
    welcome.appendChild(style);
    const boton = welcome.querySelector(".button");
    boton.addEventListener("click", () => {
      params.goTo("/rules");
    });
  
    return welcome;
  }