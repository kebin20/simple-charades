// Global variables
let correctAmt = 0;
let skipAmt = 0;
let MaxSkip = 0;

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

// 1st solution
// let basePath = "img/";

// function imgRandom() {
//     for(i = 0; i < 10; i++)
//   const rand = imgArray[Math.floor(Math.random() * imgArray.length)];
//   let image = new Image();
//   image.src = basePath + rand;
//   displayImg.appendChild(image);
// }

// 2nd solution
// To randomise images
// let imgArray = [
//   "img-01.png",
//   "img-02.png",
//   "img-03.png",
//   "img-04.png",
//   "img-05.png",
//   "img-06.png",
//   "img-07.png",
//   "img-08.png",
//   "img-09.png",
//   "img-10.png",
//   "img-11.png",
//   "img-12.png",
//   "img-13.png",
//   "img-14.png",
//   "img-15.png",
//   "img-16.png",
//   "img-17.png",
//   "img-18.png",
//   "img-19.png",
//   "img-20.png",
//   "img-21.png",
//   "img-22.png",
//   "img-23.png",
//   "img-24.png",
//   "img-25.png",
//   "img-26.png",
//   "img-27.png",
//   "img-28.png",
//   "img-29.png",
//   "img-30.png",
//   "img-31.png",
//   "img-32.png",
// ];

// window.onload = () => imgRandom(imgArray);

// function imgRandom(array) {
//   let randomNum = Math.floor(Math.random() * array.length);
//   image.setAttribute("src", `img/${imgArray[randomNum]}`);
//   console.log(randomNum);
// }
// nextBtn.addEventListener("click", () => imgRandom(imgArray));

// 3rd solution
window.onload = () => getImages();

function getRandomImgArray() {
  return new Array(32).fill(0).map(() => {
    return Math.floor(Math.random() * 32) + 1;
  });
}

function getImages() {
  return getRandomImgArray().map((number) => {
    return (document.getElementById(
      "img-display"
    ).innerHTML = `<img src="img/img-${number}.png" class="display-img">`);
  });
}

function reset() {
  correctAmt = 0;
  skipAmt = 0;
  correctCtr.textContent = correctAmt;
  skipCtr.textContent = skipAmt;
  skipBtn.disabled = false;
}

//Button and counter functions
nextBtn.addEventListener("click", () => getImages());

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
