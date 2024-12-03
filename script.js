var current = 'page1';
//tic-tac-toe
var turn = 0;
const places = ['11', '12', '13', '14', '15', '16', '17', '18', '19']
const divNames = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9"]
var box = 0;
var compchoice = 0;
var choice = "";
var gameWon = false;

//coinGame
const pile1 = [document.getElementById("coin1"),document.getElementById("coin2"),document.getElementById("coin3")]
const pile2 = [document.getElementById("coin4"),document.getElementById("coin5"),document.getElementById("coin6"),document.getElementById("coin7"),document.getElementById("coin8")]
const pile3 = [document.getElementById("coin9"), document.getElementById("coin10"), document.getElementById("coin11"), document.getElementById("coin12"), document.getElementById("coin13"), document.getElementById("coin14"), document.getElementById("coin15")]
var grabbedCoins = 0;
var coinTurn = 0;
var currentPile = "pile1";
var coinWin = false;

//cup game
var round = 0;
  var safetyCont = "";
  var safetyCont2 = "";
  var cupTime = 0;
  var shuffled = 0;
  var animationPlay = false;
  var cupGameRun = false;
  var correctCup = false;
  
//ball game
var clicks = 0;
var time = 0;
var gameRun = false;

//chopsticks
var csRun = false;
var attackCs = "";
var moveTo = "";
var csTurn = 0;
var turnStep = 0;


function showit(var1) {
document.getElementById(current).style.display = 'none';
document.getElementById(var1).style.display = 'block';
current = var1;
}


// tic-tac-toe-----------------------------------------------
function select(input, value) {
if (gameWon != true){
	box = value;  
	if (turn % 2 === 0) {
		document.getElementById(input.id).innerText = "X";
		document.getElementById(input.id).className = "player1";
  	turn +=1;
    places[box] = 1;
    tWinCheck(1);
     if (document.getElementById("compcheck").checked === true && gameWon != true && turn != 9){
     for (let i = 0; i < 1; i ++){ 	
        compchoice = Math.floor(Math.random() * 9);
      	choice = divNames[compchoice];
        if (places[compchoice] === 1 || places [compchoice] === 2){
        i -= 1;
        
        }
      }
      document.getElementById(choice).innerText = "O";
      document.getElementById(choice).className = "player2";
      turn += 1;
      places[compchoice] = 2;
      tWinCheck(2);
    }
 	}
	else{
  	document.getElementById(input.id).innerText = "O";
		document.getElementById(input.id).className = "player2";
  	turn += 1;
    places[box] = 2;
    tWinCheck(2);
	}
}
}

function tWinCheck(player) {
if (gameWon != true){
  if (places.at(0) === places.at(1) && places.at(1) === places.at(2)) {
    document.getElementById("winner").innerText = "The Winner is player " + player; 
    gameWon = true;
  }
  else if (places.at(3) === places.at(4) && places.at(4) === places.at(5)) {
    document.getElementById("winner").innerText = "The Winner is player " + player;
    gameWon = true;
  }
  else if (places.at(6) === places.at(7) && places.at(7) === places.at(8)) {
    document.getElementById("winner").innerText = "The Winner is player " + player;
    gameWon = true;
  }
  else if (places.at(0) === places.at(3) && places.at(3) === places.at(6)) {
    document.getElementById("winner").innerText = "The Winner is player " + player;
    gameWon = true;
  }
  else if (places.at(1) === places.at(4) && places.at(4) === places.at(7)) {
    document.getElementById("winner").innerText = "The Winner is player " + player;
    gameWon = true;
  }
  else if (places.at(2) === places.at(5) && places.at(5) === places.at(8)) {
    document.getElementById("winner").innerText = "The Winner is player " + player;
    gameWon = true;
  }
  else if (places.at(0) === places.at(4) && places.at(4) === places.at(8)) {
    document.getElementById("winner").innerText = "The Winner is player " + player;
    gameWon = true;
  }
  else if (places.at(2) === places.at(4) && places.at(4) === places.at(6)) {
    document.getElementById("winner").innerText = "The Winner is player " + player;
    gameWon = true;
  }
 }
}

function reset() {
turn = 0;
gameWon = false;
count = 0;
while (count < 9){
  places[count] = count + 11;
  count += 1;
}
document.getElementById("div1").innerText = "";
document.getElementById("div1").className = "blank";
document.getElementById("div2").innerText = "";
document.getElementById("div2").className = "blank";
document.getElementById("div3").innerText = "";
document.getElementById("div3").className = "blank";
document.getElementById("div4").innerText = "";
document.getElementById("div4").className = "blank";
document.getElementById("div5").innerText = "";
document.getElementById("div5").className = "blank";
document.getElementById("div6").innerText = "";
document.getElementById("div6").className = "blank";
document.getElementById("div7").innerText = "";
document.getElementById("div7").className = "blank";
document.getElementById("div8").innerText = "";
document.getElementById("div8").className = "blank";
document.getElementById("div9").innerText = "";
document.getElementById("div9").className = "blank";
document.getElementById("winner").innerText = "";
}

//coin game ----------------------------------------
function coinPick1(coin){
if (currentPile != "pile1"){
pileReset(pile2, false);
pileReset(pile3, false);
currentPile = "pile1";
}
  if (document.getElementById(coin.id).className === "coin"){
    document.getElementById(coin.id).className = "coin selected";
  }
  else{
    document.getElementById(coin.id).className = "coin";
  }
}

function coinPick2(coin){
if (currentPile != "pile2"){
pileReset(pile1, false);
pileReset(pile3, false);
currentPile = "pile2";

}
  if (document.getElementById(coin.id).className === "coin"){
    document.getElementById(coin.id).className = "coin selected";
  }
  else{
    document.getElementById(coin.id).className = "coin";
  }
}

function coinPick3(coin){
if (currentPile != "pile3"){
pileReset(pile1, false);
pileReset(pile2, false);
currentPile = "pile3";
}
  if (document.getElementById(coin.id).className === "coin"){
    document.getElementById(coin.id).className = "coin selected";
  }
  else{
    document.getElementById(coin.id).className = "coin";
  }
}

function coinTurnSub(){
coinTurn += 1;
if (currentPile === "pile1"){
	for (let i=0; i < pile1.length; i++){
  if (document.getElementById((pile1[i]).id).className === "coin selected" && document.getElementById((pile1[i]).id).style.display != "none"){
  document.getElementById((pile1[i]).id).style.display = "none";
  grabbedCoins += 1;
  }
}
}
else if (currentPile === "pile2"){
	for (let i=0; i < pile2.length; i++){
  if (document.getElementById((pile2[i]).id).className === "coin selected" && document.getElementById((pile2[i]).id).style.display != "none"){
  document.getElementById((pile2[i]).id).style.display = "none";
  grabbedCoins += 1;
}
}
}
else if (currentPile === "pile3"){
	for (let i=0; i < pile3.length; i++){
  if (document.getElementById((pile3[i]).id).className === "coin selected" && document.getElementById((pile3[i]).id).style.display != "none"){
  document.getElementById((pile3[i]).id).style.display = "none";
  grabbedCoins += 1;
}
}
}
coinWinCheck();
}

function pileReset(pile, gameReset){
for (let i=0; i < pile.length; i++){
  document.getElementById((pile[i]).id).className = "coin";
  if (gameReset === true){
  document.getElementById((pile[i]).id).style.display = "inline-block";
  }
}

}

function coinWinCheck() {
if (grabbedCoins === 15){
	coinWin = true;
  if (coinTurn % 2 === 0){
  document.getElementById("coinWinnerHead").innerText = "The Winner is Player 1";
	}
  else{
    document.getElementById("coinWinnerHead").innerText = "The Winner is Player 2";
  }
}
}

function coinReset(){
pileReset(pile1, true);
pileReset(pile2, true);
pileReset(pile3, true);
grabbedCoins = 0;
coinTurn = 0;
currentPile = "pile1";
document.getElementById("coinWinnerHead").innerText = "";
}

//cup game -------------------------------------------------
function startCup(){
    round += 1;
    cupGameRun = true;
    rounds()
  }

  function resetCup(){
  	correctCup = false;
    round = 0;
    animationPlay = false;
    clearInterval(cupTime);
    shuffled = 0;
    cupGameRun = false;
    document.getElementById("cupGameWin").innerText = "";
  }

  function rounds(){
    if (round === 1){
      document.getElementById("cup1").style.transition = 1 + "s";
      document.getElementById("cup2").style.transition = 1 + "s";
      document.getElementById("cup3").style.transition = 1 + "s";
      cupTime = setInterval(shuffle, 1000);

    }
    else if (round === 2){
      document.getElementById("cup1").style.transition = 0.5 + "s";
      document.getElementById("cup2").style.transition = 0.5 + "s";
      document.getElementById("cup3").style.transition = 0.5 + "s";
      cupTime = setInterval(shuffle, 500);
    }
    else if (round === 3){
      document.getElementById("cup1").style.transition = 0.25 + "s";
      document.getElementById("cup2").style.transition = 0.25 + "s";
      document.getElementById("cup3").style.transition = 0.55 + "s";
      cupTime = setInterval(shuffle, 250);
    }
  }

  function shuffle(){
    animationPlay = true;
    shuffled += 1;
    let shuffler = Math.floor(Math.random() * 3) + 1;
    if (shuffler === 1){
      safetyCont = document.getElementById('cup1').className;
      document.getElementById('cup1').className = document.getElementById('cup2').className;
      document.getElementById("cup2").className = safetyCont;
    }
    else if (shuffler === 2){
      safetyCont = document.getElementById('cup1').className;
      document.getElementById('cup1').className = document.getElementById('cup3').className;
      document.getElementById("cup3").className = safetyCont;
    }
    if (shuffler === 3){
      safetyCont = document.getElementById('cup2').className;
      document.getElementById('cup2').className = document.getElementById('cup3').className;
      document.getElementById("cup3").className = safetyCont;
    }
    if (shuffled === (round + 2) * 2){
      clearInterval(cupTime);
      shuffled = 0;
      animationPlay = false;
    }

  }

  function guessCup(cup){
    if (animationPlay === false){
    animationPlay = true;
    safetyCont = document.getElementById(cup.id).className;
    document.getElementById(cup.id).className = safetyCont + " cupReveal";
    if (cup.id === "cup2"){
    correctCup = true;
      if (safetyCont === "pos1"){
        document.getElementById("cupBall1").style.display = "block";
        if (cupGameRun === true){
        round +=1;
        if (round === 4){
          resetCup()
          document.getElementById("cupGameWin").innerText = "Congrats! You Win";
        }
        }
      }
      else if (safetyCont === "pos2"){
        document.getElementById("cupBall2").style.display = "block";
        if (cupGameRun === true){
        round +=1;
        if (round === 4){
          resetCup()
          document.getElementById("cupGameWin").innerText = "Congrats! You Win";
        }
        }
      }
      else if (safetyCont === "pos3"){
        document.getElementById("cupBall3").style.display = "block";
        if (cupGameRun === true){
        round +=1;
        if (round === 4){
          resetCup()
          document.getElementById("cupGameWin").innerText = "Congrats! You Win";
        }
        }
        }
       }
      setTimeout(function(){cupReplace(cup, safetyCont)}, 1000); 
    }
 }

  function cupReplace(cup, pos){
    document.getElementById(cup.id).className = pos;
    document.getElementById("cupBall1").style.display = "none";
    document.getElementById("cupBall2").style.display = "none";
    document.getElementById("cupBall3").style.display = "none";
    if (correctCup != true){
    	safetyCont = document.getElementById("cup2").className
    	document.getElementById("cup2").className = safetyCont + " cupReveal";
      if (safetyCont === "pos1"){
        document.getElementById("cupBall1").style.display = "block";
      }
      else if (safetyCont === "pos2"){
        document.getElementById("cupBall2").style.display = "block";
      }
      else if (safetyCont === "pos3"){
        document.getElementById("cupBall3").style.display = "block";
      }
			setTimeout(correctCupReveal, 1000); 
      }
      else{
    correctCup = false;
    animationPlay = false;
    rounds()
    }
  }
  
  function correctCupReveal(){
  	document.getElementById("cup2").className = safetyCont;
    document.getElementById("cupBall1").style.display = "none";
    document.getElementById("cupBall2").style.display = "none";
    document.getElementById("cupBall3").style.display = "none";
    correctCup = false;
    animationPlay = false;
    rounds()
  }
  
// ball game -----------------------------------------------
function startGame(){
	if (gameRun === false){
  document.getElementById("ballCount").innerText = ""
 setTimeout(ballReset, 20000);
 time = setInterval(rand, 1500)
 gameRun = true;
	}
}


function ballReset(){
 clearInterval(time);
 document.getElementById("ballCount").innerText = "Times Clicked " + clicks;
 clicks = 0;
 gameRun = false;
 rand();
}

function ballClicked(){
	if (gameRun === true){
	rand();
	clicks += 1;
  clearInterval(time);
  time = setInterval(rand, 1500)
}
}

function rand(){
  x = Math.floor(Math.random() * 374);
  y = Math.floor(Math.random() * 96);
  document.getElementById("ball").style.marginTop = x + "px";
  document.getElementById("ball").style.marginLeft = y + "%";
}

//chopsticks ----------------------------------------------
function csStart(){
	csRun = true;
  showOps(0, 1);
}

function csReset(){
	document.getElementById("cs1").className = "csBox";
	document.getElementById("cs2").className = "csBox";
	document.getElementById("cs3").className = "csBox";
	document.getElementById("cs4").className = "csBox";
  document.getElementById("cs1").innerText = "1";
  document.getElementById("cs2").innerText = "1";
  document.getElementById("cs3").innerText = "1";
  document.getElementById("cs4").innerText = "1";
  document.getElementById("csWinner").innerText = "";
	csRun = false;
	attackCs = "";
	csTurn = 0;
	turnStep = 0;
}

function csChoice(v, player){
if(csRun === true){
	if(turnStep === 0){
  	if(document.getElementById(v.id).className === "csBox csSel1"){
  		attackCs = v;
    	turnStep += 1;
    	showOps(1, 1)
    }
  }
  else if(turnStep === 1){
  	if(document.getElementById(v.id).className === "csBox csSel2"){
    if(csTurn % 2 === 0 && (document.getElementById(v.id) === document.getElementById("cs1") || document.getElementById(v.id) === document.getElementById("cs3"))){
    	document.getElementById("splitbuttons").style.display = "block";
      document.getElementById("cs2").className = "csBox";
      document.getElementById("cs4").className = "csBox";
      moveTo = v;
    }
    else if(csTurn % 2 != 0 && (document.getElementById(v.id) === document.getElementById("cs2") || document.getElementById(v.id) === document.getElementById("cs4"))){
    	document.getElementById("splitbuttons").style.display = "block";
      document.getElementById("cs1").className = "csBox";
      document.getElementById("cs3").className = "csBox";
      moveTo = v;
    }
    else{
    document.getElementById(v.id).innerText = Number(document.getElementById(attackCs.id).innerText) + Number(document.getElementById(v.id).innerText);
      if(document.getElementById(v.id).innerText === "5"){
      	document.getElementById(v.id).innerText = "";
      }
      else if (Number(document.getElementById(v.id).innerText) > 5){
      	document.getElementById(v.id).innerText = Number(document.getElementById(v.id).innerText) - 5
      }
      turnStep -=1;
      csWinCheck();
      csTurn += 1;
      if (csTurn % 2 === 0){
      	showOps(0,1);
      }
      else{
      	showOps(0,1)
      }
     }
    }
  }
}
}

function split(){
document.getElementById("splitResult").innerText = "Select the amount to move";
let num = 0;
if (document.getElementsByName("amount")[0].checked){
num = Number(document.getElementsByName("amount")[0].value);
document.getElementsByName("amount")[0].checked = false;
}
else if (document.getElementsByName("amount")[1].checked){
num = Number(document.getElementsByName("amount")[1].value);
document.getElementsByName("amount")[1].checked = false;
}
else if (document.getElementsByName("amount")[2].checked){
num = Number(document.getElementsByName("amount")[2].value);
document.getElementsByName("amount")[2].checked = false;
}
else if (document.getElementsByName("amount")[3].checked){
num = Number(document.getElementsByName("amount")[3].value);
document.getElementsByName("amount")[3].checked = false;
}
else if (document.getElementsByName("amount")[4].checked){
num = Number(document.getElementsByName("amount")[4].value);
document.getElementsByName("amount")[4].checked = false;
}
if (num <= Number(document.getElementById(attackCs.id).innerText)){
document.getElementById(moveTo.id).innerText = num + Number(document.getElementById(moveTo.id).innerText);
document.getElementById(attackCs.id).innerText = Number(document.getElementById(attackCs.id).innerText) - num;
if(document.getElementById(attackCs.id).innerText === "0"){
      	document.getElementById(attackCs.id).innerText = "";
}
      if(document.getElementById(moveTo.id).innerText === "5"){
      	document.getElementById(moveTo.id).innerText = "";
      }
      else if (Number(document.getElementById(moveTo.id).innerText) > 5){
      	document.getElementById(moveTo.id).innerText = Number(document.getElementById(moveTo.id).innerText) - 5;
      }
      turnStep -=1;
      csWinCheck();
      csTurn += 1;
      if (csTurn % 2 === 0){
      	showOps(0,1);
      }
      else{
      	showOps(0,1)
      }      
      document.getElementById("splitbuttons").style.display = "none";
}
else {
document.getElementById("splitResult").innerText = "Not enough to move";
}
}

function showOps(box,player){
document.getElementById("cs1").className = "csBox";
document.getElementById("cs2").className = "csBox";
document.getElementById("cs3").className = "csBox";
document.getElementById("cs4").className = "csBox";
	if (turnStep === 0){
  	if (csTurn % 2 === 0){
    	if(document.getElementById("cs1").innerText != ""){
    		document.getElementById("cs1").className += " csSel1";
       }
      if(document.getElementById("cs3").innerText != ""){
        document.getElementById("cs3").className += " csSel1";
      }
    }
    else {
      if(document.getElementById("cs2").innerText != ""){
    		document.getElementById("cs2").className += " csSel1";
       }
      if(document.getElementById("cs4").innerText != ""){
    		document.getElementById("cs4").className += " csSel1";
       }
    }
  }
  else if (turnStep === 1){
  	if (box != 0){
    	if (csTurn % 2 === 0){
        if(document.getElementById("cs2").innerText != ""){
          document.getElementById("cs2").className += " csSel2";
        }
        if(document.getElementById("cs4").innerText != ""){
          document.getElementById("cs4").className += " csSel2";
        }
        document.getElementById("cs1").className += " csSel2";
      	document.getElementById("cs3").className += " csSel2";
      }
      else{
        if(document.getElementById("cs1").innerText != ""){
          document.getElementById("cs1").className += " csSel2";
        }
        if(document.getElementById("cs3").innerText != ""){
          document.getElementById("cs3").className += " csSel2";
        }
      document.getElementById("cs2").className += " csSel2";
      document.getElementById("cs4").className += " csSel2";
      }
      document.getElementById(attackCs.id).className = "csBox";
    }
  }

}

function csWinCheck(){
	if(document.getElementById("cs1").innerText === "" && document.getElementById("cs3").innerText === ""){
  	document.getElementById("csWinner").innerText = "Player 2 wins!";
  }
  else if(document.getElementById("cs2").innerText === "" && document.getElementById("cs4").innerText === ""){
  	document.getElementById("csWinner").innerText = "Player 1 wins!";
  }	
}
