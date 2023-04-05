const $playerSelect     = $("#select-player")
const $computerSelect   = $("#select-computer")
const $themeSelect      = $("#theme")
const $game             = $("#game")
const $start            = $("#start")
const $selection        = $("#selection")
const $heading          = $("#heading")
const $wrapper          = $("#wrapper")
const audio             = document.querySelector("#song")
const audio2            = document.querySelector("#song2")

let gameOn              = false
let delayBG             = 100
let counter             = 0
let bgAnimation

$wrapper.mousemove(function(){
    if (!gameOn){
        audio.volume = 0.15;
        audio.play()
    }
})

bgAnimation = requestAnimationFrame(setBG)

$playerSelect.change(function(){
    playerSelection()
})

$computerSelect.change(function(){
    computerSelection()
})

$themeSelect.change(function(){
    themeSelection()
})

$start.click(function(){
    gameOn = true

    audio.volume = 0;
    audio2.currentTime = 0;
    audio2.volume = 0.15;
    audio2.play()
    $selection.css(`display`, `none`)
    $game.css(`display`, `block`)
    $heading.html(`VERSUS`)
    $roll.removeClass(`default`)
    $("#player h2").css(`display`, `none`)
    $("#computer h2").css(`display`, `none`)
})

function playerSelection(){
    let i = $( "#select-player option:selected" ).text();
    let name = i.toUpperCase()
    let input = i.toLowerCase()
    let select = `../images/${input}-idle.gif`
    $("#player-img").prop(`src`, `${select}`)
    $("#player-img").prop(`alt`, `${name}`)
    $("#player h2").html(`Player: <br>${name}`)
}

function computerSelection(){
    let i = $( "#select-computer option:selected" ).text();
    let name = i.toUpperCase()
    let input = i.toLowerCase()
    let select = `../images/${input}-idle.gif`
    $("#computer-img").prop(`src`, `${select}`)
    $("#computer-img").prop(`alt`, `${name}`)
    $("#computer h2").html(`Computer: <br>${name}`)
}

function playerWinDisplay(){
    let i = $( "#select-player option:selected" ).text();
    let input = i.toLowerCase()
    let select = `../images/${input}-victory.gif`
    $("#player-img").prop(`src`, `${select}`)
}

function playerLoseDisplay(){
    let i = $( "#select-player option:selected" ).text();
    let input = i.toLowerCase()
    let select = `../images/${input}-lose.gif`
    $("#player-img").prop(`src`, `${select}`)
}

function computerWinDisplay(){
    let i = $( "#select-computer option:selected" ).text();
    let input = i.toLowerCase()
    let select = `../images/${input}-victory.gif`
    $("#computer-img").prop(`src`, `${select}`)
}

function computerLoseDisplay(){
    let i = $( "#select-computer option:selected" ).text();
    let input = i.toLowerCase()
    let select = `../images/${input}-lose.gif`
    $("#computer-img").prop(`src`, `${select}`)
}

function setBG(){
    setTimeout(function(){
        bgAnimation = requestAnimationFrame( setBG );
    }, delayBG)
    counter++
    $("#versus").css(`background-position`, `0% ${counter}%`)

    if(counter > 100){
       counter = 1 
    }    

}

function themeSelection(){
    let i = $( "#theme option:selected" ).text();
    let input = i.toLowerCase()
    let select = `url("../images/${input}-background.jpg")`
    $("#versus").css(`background-image`, `${select}`)
}