'use strict'
const userName = prompt("Hello! What is your name?")
var count = 0;
var guesses = 0;
var selectedNumber = 5;
var response;
var answers = ["dota 2", "cs:go", "fallout 4", "call of duty"];
var aboutMeQuestions = ["Is my name Elias?", "Am I older than 25?", "Is green my favorite color?", "Do I have a bachelor's degree in electrical engineering?", "Am I Jordanian?"];
var answersAboutMe = ["yes", "no", "no", "yes", "yes"];
// console.log("Welcome to my website, " + userName);
alert("Nice to meet you, " + userName)
guessAboutMeGame();
guessNumber();
seventhQuestion();
console.log("Welcome to my website, " + userName)
alert(`Welcome to my website, ${userName}. Your score: ${count}/7`)
document.write(`<p id = "score">Score: ${count}/7</p>`)

function guessAboutMeGame(){
    for (let i = 0; i<aboutMeQuestions.length; i++){
        response = prompt(aboutMeQuestions[i])
        response = response.toLowerCase();
        response = (response === "y" || response === "yes")? "yes" : "no";
        if(response === answersAboutMe[i]){
            console.log("Correct")
            alert("Correct")
        } else{
            // console.log("Wrong")
            alert("Wrong")
        }
    }
}
function guessNumber(){
    for(let i = 0; i < 4; i++){
        response = prompt("Guess a number between 1-10")
        if(Number(response) === selectedNumber){
            console.log("Your guess is correct")
            alert("Your guess is correct")
            count++;
            break;
        } else if(response > selectedNumber && i < 3){
            console.log("Wrong. Try again. Number of guesses left: " + (3 - i))
            alert("Wrong. Too high. Number of guesses left: " + (3 - i))
        } else if(response < selectedNumber && i <3){
            console.log("Wrong. Too low. Number of guesses left: " + (3-i))
            alert("Wrong. Too low. Number of guesses left: " + (3-i))
        } else{
            console.log("Wrong. You ran out of attempts. The correct answer is " + selectedNumber)
            alert("Wrong. You ran out of attempts. The correct answer is " + selectedNumber)
        }
    }
}
function seventhQuestion(){
    guesses = 0;
    response = prompt("What is one of my favorite games?")
    response = response.toLowerCase();
    var wrongResponse = true;
    while(guesses < 6 && wrongResponse){
        guesses++;
        for(let i = 0; i<answers.length; i++){
            if(response === answers[i]){
                console.log("Correct")
                alert("Correct. All of these answers are correct: " + joinAnswers())
                count++;
                wrongResponse = false;
            }
        }
        if(!wrongResponse){
            break;
        }
        if(guesses < 6){
            console.log("Wrong. Number of attempts left: " + (6 - guesses))
            alert("Wrong. Number of attempts left: " + (6 - guesses))
            response = prompt("What is one of my favorite games?")
        } else{
            alert("You ran out of attempts. Correct answers: " + joinAnswers())
        }
    }
    
}
// function seventhQuestion(){
//     guesses = 0;
//     response = prompt("What is one of my favorite games?")
//     var wrongResponse = true;
//     while(guesses < 6 && wrongResponse){
//         guesses++;
//         for(let i = 0; i<answers.length; i++){
//             if(response === answers[i]){
//                 console.log("Correct")
//                 alert("Correct. All of these answers are correct: " + joinAnswers())
//                 count++;
//                 wrongResponse = false;
//             }
//         }
//         if(!wrongResponse){
//             break;
//         }
//         if(guesses < 6){
//             console.log("Wrong. Number of attempts left: " + (6 - guesses))
//             alert("Wrong. Number of attempts left: " + (6 - guesses))
//             response = prompt("What is one of my favorite games?")
//         } else{
//             alert("You ran out of attempts. Correct answers: " + joinAnswers())
//         }
//     }
// }
// function checkResponseYes(response){
//     response = response.toLowerCase();
//     if(response === "y" || response === "yes"){
//         // console.log("Correct")
//         alert("Correct")
//         count++;
//     } else if(response === "n" || response === "no"){
//         // console.log("Wrong")
//         alert("Wrong")
//     } else{
//         // console.log("Not a valid input")
//         alert("Not a valid input")
//     }
// }
// function checkResponseNo(response){
//     response = response.toLowerCase();
//     if(response === "y" || response === "yes"){
//         // console.log("Wrong")
//         alert("Wrong")
//     } else if(response === "n" || response === "no"){
//         // console.log("Correct")
//         alert("Correct")
//         count++;
//     } else{
//         // console.log("Not a valid input")
//         alert("Not a valid input")
//     }
// }
// function joinAnswers(){
//     var str = "";
//     for(let i = 0; i<answers.length -1; i++){
//         str+= answers[i] + ", "
//     }
//     str += answers[answers.length-1]
//     return str;
// }
