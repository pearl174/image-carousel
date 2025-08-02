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

const clickCircle = (idx) => {
    index = idx;
    img.src = images[idx];
}

const n = images.length;
const circles = document.querySelector(".circles");
for (let i = 0; i < n; i++) {
    const circle = document.createElement("div");
    circle.addEventListener("click", () => clickCircle(i));
    circle.classList.add("circle");
    circles.appendChild(circle);
}


const leftArrow = document.querySelector(".left-arrow");
leftArrow.addEventListener("click", () => {
    index = (index - 1 + n) % n;
    img.src = images[index];
})

const rightArrow = document.querySelector(".right-arrow");
rightArrow.addEventListener("click", () => {
    index = (index + 1) % n;
    img.src = images[index];
})
