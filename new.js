let cal = (main) => {
  let inputs = (document.getElementById("inp").value += main);
};
let plusfunc = (num1, mum2) => {
  let result = document.getElementById("inp");
  result.value = eval(result.value);
};
function clr() {
  document.getElementById("inp").value = "";
}
function deleteLastTwo() {
  let a = document.getElementById("inp");
  let currentInput = a.value;
  if (currentInput.length > 1) {
    a.value = currentInput.slice(0, -1);
  } else {
    a.value = "";
  }
}
