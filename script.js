const images = [
  "/images/ballstealer.jpg",
  "/images/collagequotes.png",
  "/images/fly.jpg",
  "/images/ladders.png",
  "/images/wedontneedthememories.jpg",
];

const img = document.createElement("img");
img.src = images[0];
const imageContainer = document.querySelector(".image-container");
imageContainer.append(img);
let index = 0; 
let prev = 0;

const changePic = (idx) => {
    index = idx;
    img.src = images[idx];
    circleButtons[idx].classList.add("fill");
    circleButtons[prev].classList.remove("fill");
    prev = idx;
    autoSlide();
}
const clickCircle = (idx) => {
    changePic(idx);
}

const n = images.length;
const circleButtons = [];
const circles = document.querySelector(".circles");
for (let i = 0; i < n; i++) {
    const circle = document.createElement("div");
    circle.addEventListener("click", () => clickCircle(i));
    circle.classList.add("circle");
    circles.appendChild(circle);
    circleButtons.push(circle);
}
circleButtons[0].classList.add("fill");

const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", () => {
    index = (index - 1 + n) % n;
    changePic(index);
})

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", () => {
    index = (index + 1) % n;
    changePic(index);
})

let timerId;
function autoSlide() {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
        index = (index + 1) % n;
        changePic(index);
    }, 5000);
}
autoSlide();