const checkBtn = document.querySelector("#check-btn");
const userOutput = document.querySelector("#user-output");

// console.log(checkBtn);

const checkPalindrome = (event) => {
  event.preventDefault();
  const number = document.querySelector("#user-input").value;

  // console.log(number);
  let userNumber = number.toString();
  let newNumber = number;
  newNumber = newNumber.toString().split("").reverse().join("");
  // console.log(newNumber);

  if (userNumber == newNumber) {
    userOutput.innerHTML = `<h1>${userNumber}</h1> it's Palindrome`;
  } else {
    userOutput.innerHTML = `<h1>${userNumber}</h1> it's not a Palindrome`;
  }
};

checkBtn.addEventListener("click", checkPalindrome);
