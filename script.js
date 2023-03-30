var guess = 0
var number = -1
function guessedNumber(){
    guess = document.getElementById("guess").value
}

function createNumber(){
    if(number == -1){
        number = Math.floor(Math.random() * 100) + 1;
    }
}

function checkNumber(){
    var result = document.getElementById("result")
    var make = document.getElementById("make")
    if(guess < number){
        make.innerHTML = "Higher than " + guess
    }
    else if(guess == number){
        make.innerHTML = "Perfect! Number was "+ number
    }
    else{
        make.innerHTML = "Less than " + guess
    }
    if(guess == number){
        result.innerHTML = "Result: True"
        return 1
    }
    else{
        result.innerHTML = "Result: Wrong"
        return 0
    }
}
function game(){
    guessedNumber()
    createNumber()
    checkNumber()
    console.log(guess)
    console.log(number)
    console.log(checkNumber())
    result.style.display = "block"
    make.style.display = "block"
}

function reset(){
    guess = 0
    number = -1
    var result = document.getElementById("result")
    var make = document.getElementById("make")
    result.style.display = "none"
    make.style.display = "none"
}