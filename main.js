let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let outputAmount = document.querySelector(".output-amount");
let outputTotal = document.querySelector(".output-total");
function oneOutput() {
  one.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let calc = ((bill * 5) / 100 / people).toFixed(2);
    outputAmount.innerHTML = "$" + calc;
    let total = (((bill * 5) / 100 + parseInt(bill)) / people).toFixed(2);
    outputTotal.innerHTML = "$" + total;
    one.style.cssText =
      "  background-color: var(--Strong-cyan);  color: var(--Very-dark-cyan);";
  });
}

function twoOutput() {
  two.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let calc = ((bill * 10) / 100 / people).toFixed(2);
    outputAmount.innerHTML = "$" + calc;
    let total = (((bill * 10) / 100 + parseInt(bill)) / people).toFixed(2);
    outputTotal.innerHTML = "$" + total;
    two.style.cssText =
      "  background-color: var(--Strong-cyan);  color: var(--Very-dark-cyan);";
  });
}
function threeOutput() {
  three.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let calc = ((bill * 15) / 100 / people).toFixed(2);
    outputAmount.innerHTML = "$" + calc;
    let total = (((bill * 15) / 100 + parseInt(bill)) / people).toFixed(2);
    outputTotal.innerHTML = "$" + total;
    three.style.cssText =
      "  background-color: var(--Strong-cyan);  color: var(--Very-dark-cyan);";
  });
}
function fourOutput() {
  four.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let calc = ((bill * 25) / 100 / people).toFixed(2);
    outputAmount.innerHTML = "$" + calc;
    let total = (((bill * 25) / 100 + parseInt(bill)) / people).toFixed(2);
    outputTotal.innerHTML = "$" + total;
    four.style.cssText =
      "  background-color: var(--Strong-cyan);  color: var(--Very-dark-cyan);";
  });
}
function fiveOutput() {
  five.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let calc = ((bill * 50) / 100 / people).toFixed(2);
    outputAmount.innerHTML = "$" + calc;
    let total = (((bill * 50) / 100 + parseInt(bill)) / people).toFixed(2);
    outputTotal.innerHTML = "$" + total;
    five.style.cssText =
      "  background-color: var(--Strong-cyan);  color: var(--Very-dark-cyan);";
  });
}
function customOutput() {
  custom.addEventListener("click", () => {
    let bill = document.getElementById("bill").value;
    let people = document.getElementById("people").value;
    let custom = document.getElementById("custom").value;
    let calc = ((bill * parseInt(custom)) / 100 / people).toFixed(2);
    outputAmount.innerHTML = "$" + calc;
    let total = (
      ((bill * parseInt(custom)) / 100 + parseInt(bill)) /
      people
    ).toFixed(2);
    outputTotal.innerHTML = "$" + total;
  });
}
function validateInput() {
  let errorMsg = document.getElementById("error-msg");
  let people = document.getElementById("people");
  if (people.value === "0") {
    errorMsg.innerHTML = "Can't be zero";
    people.style.cssText =
      "border: 2px solid rgba(255, 0, 0, 0.692);  border-radius: 4px;";
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
}
function clearOutput() {
  let clear = document.getElementById("clear");
  clear.addEventListener("click", () => {
    outputAmount.innerHTML = "$0.00";
    outputTotal.innerHTML = "$0.00";
    custom.value = "";
    people.value = "";
    bill.value = "";
    one.style.cssText =
      "  background-color: var(--Very-dark-cyan);  color:white;";
    two.style.cssText =
      "  background-color: var(--Very-dark-cyan);  color:white;";
    three.style.cssText =
      "  background-color: var(--Very-dark-cyan);  color:white;";
    four.style.cssText =
      "  background-color: var(--Very-dark-cyan);  color:white;";
    five.style.cssText =
      "  background-color: var(--Very-dark-cyan);  color:white;";
  });
}
function outputBill() {
  oneOutput();
  twoOutput();
  threeOutput();
  fourOutput();
  fiveOutput();
  customOutput();
  clearOutput();
}
outputBill();
