'use strict';
/*
NOTE: '.' is a class selector '#' is a id selector
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉SCorrect Number!';
console.log(document.querySelector('.message').textContent)

Data Testing DOM Manipulation 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

Data Testing Vaules
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/

// Event listener with button configuration
const x = function(){
    console.log
}

/*
Code listens/outputs value stored in the '.check' variable from user input
to console.
'click' implements the code in the function with the arguement '.guess' only
if the event happens
*/
document.querySelector('.check').addEventListener('click', function(){
    console.log(document.querySelector('.guess').value)
})