let word = document.querySelector("input");
let button = document.querySelector("button");
let output = document.querySelector("p");
function calculate() {
  let wordLength = word.value;
  let style = document.createElement("style");

  if (wordLength.length == 0) {
    alert("Please enter a word");
    word.value = "";
  } else if (/\d/.test(wordLength)) {
    alert("we don't want any numbers");
    word.value = "";
  } else {
    output.textContent = `${wordLength.length}`;
    document.head.appendChild(style);
    style.sheet.insertRule(
      "p {background-color: rgb(0, 0, 0); width: 50px;height: 50px; display: flex;color: white; justify-content: center;align-items: center; border-bottom-left-radius: 5px; border-top-right-radius: 5px; font-size: 1.2em ;} "
    );
  }
}

button.addEventListener("click", calculate);
word.addEventListener("keypress", function (h) {
  if (h.key == "Enter") {
    calculate();
  }
});
