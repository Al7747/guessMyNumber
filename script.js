'use strict';
//This is a method
//If it's a class you use the Dot if it is a class use the har
//For live server open the terminal and type live-server 
//Multiple Dot operators are executed left to right 
//First type of Dom manipulation 


//What is DOM and DOm manipulation 

//DOM: Document Object Model: Structured Representation of HTMl Documents. Allows JS to access HTML elem and style to manipulate them. 

//The DOM is a complete representation of the HTML document. This gives us the proper structure to manipulate the documents within the DOM 

//DOM Methods and Properties for DOM Manipulation is not JS. 
//The DOM and DOM methods are actually part of API's WEB API's 
// API"s Application Programing interface. WEB API's are basically libraries that are written on JS, but they happen behind the scene. 

//The Follwoing line of code is an example of DOM manipulation
//By using the document.querySelector we asked for the 'message' class  and this allowed us to bring forth that piece of the code and the '.textContent allowed us view the actual string content within that line of code. When we added the = sign we put a new value within that line of code to equal New  Number 

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!  🎊'
console.log(document.querySelector('.message').textContent);

//Here is another example of DOM manipulation and how you can use the .text content to change the number 


document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10

//The value property is used to get input fields 

document.querySelector('.guess').value = 10;

console.log(document.querySelector('.guess').value); 
*/
//Something that happens in the DOM 
//Event listener waits for an event to happen and reacts to it 


//The addEventListener is a method same as everything else this why you need the parenthesis to actually make it work 

//the addEventListener needs expects a argument function value after the action argument. 

//Remeber the .value for input elements 

//Your input elements from the users art tipically strings and these string allow us to convert the value of the tring with the Number function  within JS 

//HEre we have the Math Operator that l
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20; 
let highscore = 0; 


//document.querySelector('.number').textContent = secretNumber; 

//This is the generation of the secret number
document.querySelector('.check').addEventListener('click', function(){
const guess = Number((document.querySelector('.guess').value));
console.log(guess, typeof guess);

//Here we use the negation operator to show the value 
//These are the different scenarios we can see with the game
//Dry principle Don't repeat yourself within the code 
//For bigger projects you should avoid duplicate code 
//Re-factoring code, this eliminates duplicate code 

if (!guess){
    document.querySelector('.message').textContent = '🚱 No number'


} else if(guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!  🎊'
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore; 
    }

    

//This block of ode consolidated the needed  code logic to put the else if statement with a terciary ine of code to do both the higher number and the lower number functionality in the same place. 
//Since we tackle the message code on both areas this is where it can be consolidated 


} else if (guess !== secretNumber){
    if(score > 1)  {document.querySelector('.message').textContent = guess > secretNumber ? 'Lower number! 👇' : 'higher Number 👆' ;
    score = score - 1
        document.querySelector('.score').textContent = score
    } else {
    document.querySelector('.message').textConten = '💥 You lost the game';
    } ;
}})


/*
else if (guess > secretNumber){

    if(score > 0)  {document.querySelector('.message').textContent = 'Lower number 👇';
    score = score - 1
    document.querySelector('.score').textContent = score
    } else {
    document.querySelector('.message').textConten = '💥 You lost the game';
    } document.querySelector('.score').textContent = 0; 


}else if( guess < secretNumber){
    document.querySelector('.message').textContent = 'Higher number 👆';
    score = score - 1; 
    document.querySelector('.score').textContent = score;
}
})
*/
;

//This block of code is responsible for the again button. The purpose is to reset everything within the prgram to play the game again 
document.querySelector('.again').addEventListener('click', function () {

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

    
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//Score board 
;


//implementing game logic; 
//We need to implement what  happens when the guess is correct too low or too high 


