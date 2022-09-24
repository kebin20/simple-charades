// Global variables
let correctAmt = 0;
let skipAmt = 0;
let MaxSkip = 0;
let images = initializeImages();
let index = 0;

// HTML Components

// Buttons
const nextBtn = document.querySelector("#next-btn");
const resetBtn = document.querySelector("#reset-btn");
const correctBtn = document.querySelector("#correct-btn");
const skipBtn = document.querySelector("#skip-btn");
const maxSkips = document.querySelector("#max-skips");

// Displays
const correctCtr = document.querySelector(".correct-ctr");
const skipCtr = document.querySelector(".skip-ctr");
const image = document.querySelector("img");

window.onload = () =>
  (document.getElementById("img-display").innerHTML = images[0]);

function initializeImages() {
  return (
    new Array(32)
      .fill(0)
      //The value in this .map()  is at 0, but the index (the array number) is always different, therefore we target this index part and randomise this part.
      .map((value, index) => {
        return index + 1;
      })
      .map((number) => {
        return `<img src="img/img-${number}.png" class="display-img">`;
      })
      .sort(randomSort)
  );
}

function randomSort(a, b) {
  return Math.random() < 0.5 ? -1 : 1;
}

function nextImage() {
  index++;
  if (index >= 32) {
    index = 0;
  }
  document.getElementById("img-display").innerHTML = images[index];
}

function reset() {
  correctAmt = 0;
  skipAmt = 0;
  correctCtr.textContent = correctAmt;
  skipCtr.textContent = skipAmt;
  skipBtn.disabled = false;
}

//Button and counter functions
nextBtn.addEventListener("click", () => nextImage());

resetBtn.addEventListener("click", reset);

correctBtn.addEventListener("click", () => {
  correctAmt += 1;
  correctCtr.textContent = correctAmt;
});

skipBtn.addEventListener("click", () => {
  skipAmt += 1;
  skipCtr.textContent = skipAmt;
  if (skipAmt === MaxSkip) {
    skipBtn.disabled = true;
  }
});

maxSkips.addEventListener("change", (e) => {
  MaxSkip = parseInt(e.target.value);
});
