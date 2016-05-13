var age = prompt("Age?")

if (age < 0) {
  console.log("Error")
}
else if (age === 21) {
  console.log("Happy Birthday")
}
if ((age % 2) === 1) {
  console.log("Your age is odd")
}
if (Math.sqrt(age) === Math.abs(Math.sqrt(age))) {
  console.log("Perfect Square!")
}
