type Jugada = "piedra" | "papel" | "tijera";
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: [],
  },
  listeners: [],
  
  getData() {
    const localData = localStorage.getItem("new-move");
    const localDataParse = JSON.parse(localData);
    if (localDataParse == null) {
      const currentState = this.getState();
      this.setState(currentState);
    } else {
      this.setState(localDataParse);
    }
  },
  
  getState() {
    return this.data;
  },

  
  resetMyPlay() {
    const currentState = this.getState();
    currentState.currentGame.myPlay = "";
  },

  getScore() {
    let ganados = 0;
    let perdidos = 0;
    let history = state.data.history
    console.log(history)
    
    for(const s of history){
      if(this.whoWins(s.myPlay, s.computerPlay)=="Ganaste")
      ganados++;
      if(this.whoWins(s.myPlay, s.computerPlay)=="Perdiste")
      perdidos++;
    }
    return{ganados,perdidos}
  },
  
  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
    localStorage.setItem("new-move", JSON.stringify(newState));
    console.log("Soy el state, he cambiado", this.data);
  },

  suscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  
  
  
  computerMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.computerPlay = move;
    
  },
  
  myMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.pushToHistory(currentState);
  },


  pushToHistory(currentState) {
    const myPlay = currentState.currentGame.myPlay;
    const computerPlay = currentState.currentGame.computerPlay;
    currentState.history.push({
      myPlay: myPlay,
      computerPlay: computerPlay,
    });
    this.setState(currentState);
  },


  
  whoWins(myPlay: Jugada, computerPlay:Jugada){
    if(myPlay =="piedra"){
      if(computerPlay == "papel")
      return"Perdiste";
      if(computerPlay == "tijera")
      return"Ganaste";
      if(computerPlay == "piedra")
      return"Empate";
    }
    if(myPlay =="tijera"){
      if(computerPlay == "papel")
      return"Ganaste";
      if(computerPlay == "piedra")
      return"Perdiste";
      if(computerPlay == "tijera")
      return"Empate";
    }
    if(myPlay =="papel"){
      if(computerPlay == "piedra")
      return"Ganaste";
      if(computerPlay == "tijera")
      return"Perdiste";
      if(computerPlay == "papel")
      return"Empate";
    }
  },
  
  
};
  

export { state };