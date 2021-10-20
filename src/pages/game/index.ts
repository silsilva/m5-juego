import { state } from "../../state";

const piedraImg = require("url:../../assets/piedra.svg");
const papelImg = require("url:../../assets/papel.svg");
const tijeraImg = require("url:../../assets/tijera.svg");

export function initGamePage(params) {
  const div = document.createElement("div");
  
  div.innerHTML = `
  <div class="container">
    <div class="computer-container">
    </div>

    <div class="countdown-container">
      <custom-countdown class= "time" count="3"></custom-countdown>
    </div>

    <div class="my-play">
      <hands-el class="hands" class="tijera" tag="tijera"></hands-el>
      <hands-el class="hands" class="piedra"tag="piedra"></hands-el>
      <hands-el class="hands" class="papel"tag="papel"></hands-el>
    </div>
  </div>
  `;
  const style = document.createElement("style");
  style.innerHTML = `
 .container{
  display: flex;
  justify-content: space-around;
  min-width: 255px;
  align-items: flex-end;
 }
 @media(min-width:900px){
  .container{
    
    width:100%;
  height:100%;
  margin-top:10%;
    margin-left:30%;
    width:500px;
    height:250px;
  }
 }
 .hands{
  width:100px;
  heigth:200px;
 }
 .hands:hover{
 margin-bottom:20%;
 }

  .countdown-container{
    margin-top:20px;
    margin-right:15%;
  }
  @media(min-width:900px){
    .countdown-container{
      padding-top:80px;
      margin-top:80px;
      margin-right:50%;
    }
  }
  .my-play{
    width:375px;
    height:200px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    position:absolute;
    bottom:0px;
  }
  
  .computer-container{
    width:100%;
    height: 100%;
    position:absolute;
    top:0;
    
  }
  .computer-hand{
    width:100px;
    heigth:200px;
    transform:rotateX(180deg) scaleY(1.5) translateY(-30px);
    position:absolute;
    left:45%; 
  }

  
  `;
  div.appendChild(style);

  
  
  (function selectMove() {
    const containerHands = div.querySelector(".my-play");
    const handsEls = div.querySelectorAll("hands-el");
    for (const hand of handsEls) {
      hand.addEventListener("change", (e: any) => {
        computerMove();
        state.myMove(e.detail.myPlay);
        
        
        style.innerHTML = `
        .container{
          display: flex;
          justify-content: space-around;
          min-width: 255px;
          align-items: flex-end;
         }
         @media(min-width:700px){
          .container{
            
            width:100%;
          height:100%;
          margin-top:10%;
            margin-left:30%;
            width:500px;
            height:250px;
          }
         }
         .hands{
          width:100px;
          heigth:200px;
         }
         .hands:hover{
         margin-bottom:20%;
         }
        
          .countdown-container{
            display:none;
            margin-top:20px;
            margin-right:15%;
          }
          @media(min-width:700px){
            .countdown-container{
              padding-top:80px;
              margin-top:80px;
              margin-right:50%;
            }
          }
          .my-play{
            width:375px;
            height:200px;
            display:flex;
            align-items:center;
            justify-content:space-around;
            position:absolute;
            bottom:0px;
          }
          
          .computer-container{
            width:100%;
            height: 100%;
            position:absolute;
            top:0;
            
          }
          .computer-hand{
            width:100px;
            heigth:200px;
            transform:rotateX(180deg) scaleY(1.5) translateY(-30px);
            position:absolute;
            left:45%; 
          }
        
        
        `;
        
        setTimeout(() => {
          containerHands.innerHTML = `
          <hands-el tag="${e.detail.myPlay}"></hands-el>
          `;
          
          goToResults();
        }, 1500);
      });
      state.resetMyPlay();
    }
  })();


  
  
  
  function goToResults() {
    setTimeout(() => {
      params.goTo("/results");
    }, 1000);
  }

 
    function computerMove() {

    let tijera = 0;
    let piedra = 1;
    let papel = 2;
    const computerContainer = div.querySelector(".computer-container");

  

    const computerMove = Math.floor(Math.random() * (3 - 0) + 0);
    
      if (computerMove == tijera) {
        state.computerMove("tijera")
        computerContainer.innerHTML =`
        <hands-el class="computer-hand" tag="tijera" ></hands-el>
        `
      } 
        if (computerMove == piedra) { 
          state.computerMove("piedra")
          computerContainer.innerHTML =`
          <hands-el class="computer-hand" tag="piedra"></hands-el>
          `
      }
      
      if (computerMove == papel) { 
        state.computerMove("papel")
        computerContainer.innerHTML =`
        <hands-el class="computer-hand" tag="papel"></hands-el>
        `

      }
    }

  


  (function returnRules() {
    setTimeout(() => {
      const currentState = state.getState();
      const myPlay = currentState.currentGame.myPlay;
      const gameContainer = div.querySelector(".container");
      if (myPlay == "") {
        
          params.goTo("/rules");
      }
    }, 4000);
  })();

 
  return div;
}
