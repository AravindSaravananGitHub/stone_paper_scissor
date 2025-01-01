const game = document.getElementById("Game");

// Button click to start game 
game.addEventListener("click", () => {
  gameStart();
});

function gameStart() {
  const playGame = confirm("Do you wants to play game with Prime AI");

  if (playGame) {
    // Game content
    const playerChoice = prompt("Enter Stone, Paper or Scissor");

    if (playerChoice) {
      const playerValue = playerChoice.trim().toLocaleLowerCase();
      if (
        playerValue === "stone" ||
        playerValue === "paper" ||
        playerValue === "scissor"
      ) {
        const computerChoice = Math.floor(Math.random() * 3 + 1);
        const computerValue =
          computerChoice == 1
            ? "scissor"
            : computerChoice == 2
            ? "paper"
            : "stone";
        const result =
          computerValue === playerValue
            ? `Your Value : ${playerValue}\nComputer Value : ${computerValue} \nTie Game....! 😏`
            : playerValue === "stone" && computerValue == "paper"
            ? `Your Value : ${playerValue}\nComputer Value : ${computerValue} \nPrime computer AI WIN..! 😜`
            : playerValue == "paper" && computerValue === "scissor"
            ? `Your Value : ${playerValue}\nComputer Value : ${computerValue} \nPrime computer AI WIN..! 😜`
            : playerValue === "scissor" && computerValue === "stone"
            ? `Your Value : ${playerValue}\nComputer Value : ${computerValue} \nPrime computer AI WIN..! 😜`
            : `Your Value : ${playerValue}\nComputer Value : ${computerValue} \nYou win..! 🥳`;
        alert(result);
        const playAgain = confirm("Do you wants to play again");
        if (playAgain) {
          alert("Press the play button again");
          setTimeout(() => {
            location.reload();
          }, 700);
        } else {
          alert("Okay ! Thanks for playing with me. 🫡");
          setTimeout(() => {
            location.reload();
          }, 700);
        }
      } else {
        alert(
          "You didn't enter the valid choice, May be you made spelling mistake 🤔"
        );
        setTimeout(() => {
          location.reload();
        }, 700);
      }
    } else {
      alert("I guess you changed your mind may be next time.. 🥺");
    }
  } else {
    alert("Okay may be next time.. 🙃");
    setTimeout(() => {
      location.reload();
    }, 700);
  }
}