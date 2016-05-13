var nameFirst = prompt("What is your first name?");
var nameLast = prompt("What is your last name?");
var userAge = prompt("What is your age?");

console.log("Welcome to the site, " + nameFirst + " " + nameLast + ".");
console.log("You are " + userAge + " years old.");

var days = (userAge * 365) + (userAge % 4)
console.log("You are " days + " days old.")
