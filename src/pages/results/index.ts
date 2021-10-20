import { state } from "../../state";



export function resultsPage(params) {
  function resultGame() {
    const currentState = state.getState();
    const myPlay = currentState.currentGame.myPlay;
    const computerPlay = currentState.currentGame.computerPlay;
    return state.whoWins(myPlay, computerPlay);
  }

  function selectfondo() {
    const result = resultGame();
    let background = "";

    if(result =="Ganaste"){
      background = "#1EF962";
    }
    if(result =="Perdiste"){
      background ="#F91E3C";
    }
    if(result =="Empate"){
      background = "#F0F91E";
    }
    return background;


  }

  const background = selectfondo();
  console.log(background);

  const result = resultGame();
  const myScore = state.getScore().ganados;
  const computerScore = state.getScore().perdidos;


  const resultsPage = document.createElement("section");
  resultsPage.className = "results";
  resultsPage.innerHTML = `
  <div class="result-container">
    <div class="result-imagen">
    <star-el tag="${result}" width="280px" height="260px">${result}</star-el>
    </div>
    <div class="result-score">
        <div class="result-title">
            <custom-text size="55px">Score</custom-text>
        </div>
        <div class="result">
            <custom-text size="45px">Vos: ${myScore}</custom-text>
              <custom-text size="45px">Máquina:${computerScore}</custom-text>
        </div>
    </div>
    <div class="result-button">
        <custom-button class="button">Volver a jugar</custom-button>
    </div>
  </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
  
    .result-container{
        width:100%;
        height:100vh;
        padding:0;
        background-color: ${background};
       
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .result-imagen{
        width:300px;
        height:290px;
        margin-bottom:10px;
    }
    .result-score{
      width:259px;
      height:280px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:space-evenly;
      margin-bottom:20px;
      border:10px solid #000;
      border-radius:10px;
      background: #ffffff;
    }
    .result{
     
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  
    .result-button{
      width:330px;
      height:90px;
    }
  `;
  resultsPage.appendChild(style);
  const boton = resultsPage.querySelector(".button");
  boton.addEventListener("click", () => {
    params.goTo("/src/pages/rules/index.ts");
  });

  return resultsPage;
}