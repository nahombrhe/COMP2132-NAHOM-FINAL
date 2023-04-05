const $playerBox      = $("#player")
const $playerDie1     = $("#player-die1")
const $playerDie2     = $("#player-die2")
const $playerValues   = $("#player-values")
const $playerRoll     = $("#player-roll")
const $playerTotal    = $("#player-total")

const $computerBox    = $("#computer")
const $computerDie1   = $("#computer-die1")
const $computerDie2   = $("#computer-die2")
const $computerValues = $("#computer-values")
const $computerRoll   = $("#computer-roll")
const $computerTotal  = $("#computer-total")

const $rollNum        = $("#roll-num")
const $roll           = $("#roll")
const $restart        = $("#restart")
const $popUp          = $("#pop-up")
const audio3          = document.querySelector("#song3")

let delay         = 2750
let playerVal1    = ``
let playerVal2    = ``
let playerRoll    = 0
let playerTally   = 0 
let computerVal1  = ``
let computerVal2  = ``
let computerRoll  = 0
let computerTally = 0
let rollRound     = 0

/*class Die{
    constructor(face){
        this.face  = face
        this.faces   = [1, 2, 3, 4, 5, 6];   
        
        this.dice = []
             
        for (let face = 0; face < this.faces.length; face ++){
            let returnstring = `dice${this.faces[face]}.png`;
                let die = `../images/${returnstring.toLocaleLowerCase()}`
                this.dice.push(die)
        }
    }
}

i couldn't think of a way to properly incorporate an object :/ 

*/


$roll.click(function(){

    playerActive()
    computerActive()

    setTimeout(function(){
        rollRoundNum()
        rollDice()
        tallyScore()
    }, delay);
})

$restart.click(function(){
    defaultState()
})

function defaultState(){
    $selection.css(`display`, `block`)
    $game.css(`display`, `none`)
    $heading.html(`CHARACTER SELECTION`)
    $heading.css(`color`, `white`)
    $("#player h2").css(`display`, `block`)
    $("#computer h2").css(`display`, `block`)

    $playerDie1.prop(`src`, "../images/dice.png")
    $playerDie2.prop(`src`, "../images/dice.png")
    $playerValues.html(`Values: `)

    $computerDie1.prop(`src`, "../images/dice.png")
    $computerDie2.prop(`src`, "../images/dice.png")
    $computerValues.html(`Values: `)

    $playerRoll.html(`Current Roll: 0`)
    $playerTotal.html(`Total Score: 0`)

    $computerRoll.html(`Current Roll: 0`)
    $computerTotal.html(`Total Score: 0`)  
     
    $rollNum.html(`ROUND: 0/3`)
    playerTally   = 0
    playerRoll    = 0
    computerTally = 0
    computerRoll  = 0
    rollRound     = 0

    $popUp.css(`display`, `none`)
    $roll.prop(`disabled`, ``)
    playerSelection()
    computerSelection()

    audio.volume       = 0.15;
    audio.currentTime  = 0;
    audio2.volume      = 0
    audio2.currentTime = 0;
    audio3.volume      = 0;
    audio3.currentTime = 0;
}
  
function rollDice(){
    let dieVal1 = Math.floor(Math.random() * 6) + 1;
    let dieVal2 = Math.floor(Math.random() * 6) + 1;
    let dieVal3 = Math.floor(Math.random() * 6) + 1;
    let dieVal4 = Math.floor(Math.random() * 6) + 1;

    let die1    = `../images/dice${dieVal1}.png`
    let die2    = `../images/dice${dieVal2}.png`
    let die3    = `../images/dice${dieVal3}.png`
    let die4    = `../images/dice${dieVal4}.png`

    playerVal1 = dieVal1
    playerVal2 = dieVal2
    $playerDie1.prop(`src`, die1)
    $playerDie2.prop(`src`, die2)
    $playerValues.html(`Values: ${dieVal1} & ${dieVal2}`)

    computerVal1 = dieVal3
    computerVal2 = dieVal4
    $computerDie1.prop(`src`, die3)
    $computerDie2.prop(`src`, die4)
    $computerValues.html(`Values: ${dieVal3} & ${dieVal4}`)
}

function tallyScore(){

    if (rollRound < 4){
        if(playerVal1 == 1 || 
            playerVal2 == 1){
            playerRoll = 0
            playerTally += playerRoll
            $playerRoll.html(`Current Roll: ${playerRoll}`)
            $playerTotal.html(`Total Score: ${playerTally}`)
        } 
        else if(playerVal1 == playerVal2){
            playerRoll = playerVal1 * 4
            playerTally += playerRoll
            $playerRoll.html(`Current Roll: ${playerRoll}`)
            $playerTotal.html(`Total Score: ${playerTally}`)
        }
        else if(!(playerVal1 == 1 || 
            playerVal2 == 1) && !(playerVal1 == playerVal2)){
            playerRoll = playerVal1 + playerVal2
            playerTally += playerRoll
            $playerRoll.html(`Current Roll: ${playerRoll}`)
            $playerTotal.html(`Total Score: ${playerTally}`)
        }

        if(computerVal1 == 1 || 
            computerVal2 == 1){
            computerRoll = 0
            computerTally += computerRoll
            $computerRoll.html(`Current Roll: ${computerRoll}`)
            $computerTotal.html(`Total Score: ${computerTally}`)
        }
        else if(computerVal1 == computerVal2){
            computerRoll = computerVal1 * 4 
            computerTally += computerRoll
            $computerRoll.html(`Current Roll: ${computerRoll}`)
            $computerTotal.html(`Total Score: ${computerTally}`)
        }else if(!(computerVal1 == 1 || 
            computerVal2 == 1) && !(computerVal1 == computerVal2)){
            computerRoll = computerVal1 + computerVal2
            computerTally += computerRoll
            $computerRoll.html(`Current Roll: ${computerRoll}`)
            $computerTotal.html(`Total Score: ${computerTally}`)
        }
    }

    

}

function rollRoundNum(){
    rollRound ++
    $rollNum.html(`ROUND: ${rollRound}/3`)

    if (rollRound == 3){
        $rollNum.html(`ROUND: ${rollRound}/3`)

        $heading.html(`GAME OVER`)
        $heading.css(`color`, `rgb(253, 86, 86)`)

        if(playerTally > computerTally){
            playerWinDisplay()
            computerLoseDisplay()

            $popUp.html(`<p>WINNER! <br>
            Click 'New Match' for a new game.</p>`)
        }

        if(computerTally > playerTally){
            computerWinDisplay()
            playerLoseDisplay()

            $popUp.html(`<p>LOSER! <br>
            Click 'New Match' for a new game.</p>`)
        }

        if(playerTally == computerTally){
            playerWinDisplay()
            computerWinDisplay()

            $popUp.html(`<p>A TIE! <br>
            Click 'New Match' for a new game.</p>`)
        }

        $popUp.css(`display`, `block`)
        
        $roll.prop(`disabled`, `disabled`)
        $roll.addClass(`default`)

        audio2.currentTime = 0;
        audio2.volume      = 0;
        audio3.volume      = 0.15;
        audio3.currentTime = 0;
        audio3.play();

    }

}

function playerActive(){
    let i = $( "#select-player option:selected" ).text();
    let input = i.toLowerCase()

    let select1 = `../images/${input}-active1.gif`
    let select2 = `../images/${input}-active2.gif`
    let select3 = `../images/${input}-active3.gif`

    if(rollRound == 0){
        $("#player-img").prop(`src`, `${select1}`)
    }
    
    if(rollRound == 1){
        $("#player-img").prop(`src`, `${select2}`)
    }

    if(rollRound == 2){
        $("#player-img").prop(`src`, `${select3}`)
    }
}

function computerActive(){
    let i = $( "#select-computer option:selected" ).text();
    let input = i.toLowerCase()
    let select1 = `../images/${input}-active1.gif`
    let select2 = `../images/${input}-active2.gif`
    let select3 = `../images/${input}-active3.gif`
    if(rollRound == 0){
        $("#computer-img").prop(`src`, `${select1}`)
    }

    if(rollRound == 1){
        $("#computer-img").prop(`src`, `${select2}`)
    }

    if(rollRound == 2){
        $("#computer-img").prop(`src`, `${select3}`)
    }
}