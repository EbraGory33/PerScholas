// let computerChoice = "rock"
// let playerChoice = "rock"

// Create a simple Rock-Paper-Scissors game using JavaScript conditionals

// The code should tell you if the player wins or loses

// Extra 1: ask for user input instead of hardcoding the value (hint: use window.prompt)
// Extra 2: make the computer choice random (hint: use math.random)



let playerChoice = window.prompt(
    "Enter your choice (rock, paper, or scissors)"
);

randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
case 0:
    computerChoice = "rock";
    break;
case 1:
    computerChoice = "paper";
    break;
case 2:
    computerChoice = "scissors";
    break;
}
alert(
"Computer Choice is " +
    computerChoice +
    " and Player Choice is " +
    playerChoice
);

console.log("Player Choice => " + playerChoice);

if (computerChoice === "rock") {
if (playerChoice === "rock") {
    console.log("It's a tie!");
} else if (playerChoice === "paper") {
    console.log("Player wins!");
} else {
    console.log("Computer wins!");
}
} else if (computerChoice === "paper") {
if (playerChoice === "paper") {
    console.log("It's a tie!");
} else if (playerChoice === "scissors") {
    console.log("Player wins!");
} else {
    console.log("Computer wins!");
}
} else {
if (playerChoice === "scissors") {
    console.log("It's a tie!");
} else if (playerChoice === "rock") {
    console.log("Player wins!");
} else {
    console.log("Computer wins!");
}
}

