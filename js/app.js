'use strict'
const userName = prompt("Hello! What is your name?")
var count = 0;
// console.log("Welcome to my website, " + userName);
alert("Nice to meet you, " + userName)
var response = prompt("Is my name Elias?")
checkResponseYes(response)
response = prompt("Am I older than 25?")
checkResponseNo(response)
response = prompt("Is green my favorite color?")
checkResponseNo(response)
response = prompt("Do I have a bachelor's degree in electrical engineering?")
checkResponseYes(response)
response = prompt("Am I Jordanian?")
checkResponseYes(response)
// console.log("Welcome to my website, " + userName)
alert("Welcome to my website, " + userName)
document.write(`<p id = "score">Score: ${count}/5</p>`)
function checkResponseYes(response){
    response = response.toLowerCase();
    if(response === "y" || response === "yes"){
        // console.log("Correct")
        alert("Correct")
        count++;
    } else if(response === "n" || response === "no"){
        // console.log("Wrong")
        alert("Wrong")
    } else{
        // console.log("Not a valid input")
        alert("Not a valid input")
    }
}
function checkResponseNo(response){
    response = response.toLowerCase();
    if(response === "y" || response === "yes"){
        // console.log("Wrong")
        alert("Wrong")
    } else if(response === "n" || response === "no"){
        // console.log("Correct")
        alert("Correct")
        count++;
    } else{
        // console.log("Not a valid input")
        alert("Not a valid input")
    }
}