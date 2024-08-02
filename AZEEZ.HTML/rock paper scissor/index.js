function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById('playerChoice').innerHTML = `You chose: <strong>${playerChoice}</strong>`;
    document.getElementById('computerChoice').innerHTML = `Computer chose: <strong>${computerChoice}</strong>`;
    
    const result = determineWinner(playerChoice, computerChoice);
    
    document.getElementById('result').innerHTML = `<strong>${result}</strong>`;
  }
  
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  