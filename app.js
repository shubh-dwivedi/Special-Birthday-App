const dateOfBirth = document.querySelector("#input-date");
const luckyNumber = document.querySelector("#input-lucky-number");
const checkButton = document.querySelector("#button-check");
const displayMessage = document.querySelector("#message-final");

const calculateSum = (date) => {
    let sum = 0;
    date = date.replaceAll("-", "");
    for (let digit of date) {
      sum = sum + Number(digit);
    }
    return sum;
  };
  
  const checkIsNumberLucky = (sumOfDate, numToCheck) => {
    console.log(sumOfDate, numToCheck);
    if (sumOfDate % numToCheck === 0) {
      return showMessage(`Hurray! ${numToCheck} is a lucky number!! 🥳 🥳 🥳 `);
    }
    showMessage(`${numToCheck} is not that lucky for you 😕`);
  };
  
  const showMessage = (message) => {
    displayMessage.innerText = message;
  };
  
  checkButton.addEventListener("click", () => {
    const date = dateOfBirth.value;
    const numToCheck = luckyNumber.value;
    if ((date && numToCheck) && !(numToCheck <0)) {
      const sumOfDate = calculateSum(date);
      checkIsNumberLucky(sumOfDate, numToCheck);
    } else if(numToCheck < 0) {
      showMessage("Please enter a positive lucky number!");
    } else {
      showMessage("Please fill both the fields!")
    }
  });