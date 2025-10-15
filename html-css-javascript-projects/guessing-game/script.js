let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10; 
function checkGuess(){
  attempts--;
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = Number(inputElement.value);

  while(attempts > 0){
    if(guess === randomNumber){
      feedbackElement.innerHTML = "You guessed the number correctly!";
      feedbackElement.style.color = "green";
      attempts = 0;
      break;
    }else if(guess < randomNumber){
      feedbackElement.innerHTML = "Too low!";
      feedbackElement.style.color = "red";
      break;
    }else{
      feedbackElement.innerHTML = "Too high!";
      feedbackElement.style.color = "red";
      break;
    }
  }
  if(attempts === 0 && guess != randomNumber){
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = "Game over, the correct number was " + randomNumber;
  }
  
}
