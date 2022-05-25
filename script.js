const text1_options = [
  "Your arms are my home.",
  "You my life, you are my reason.",
  "I want you to teach me what love is, an incomparable love.",
  "My love for you is unreal.",
  "You are my most beautiful and pure inspiration.",
  "You are worth the eternity of my lyrics.",
  "I want to possess you, to be able to enjoy you.",
  "You give direction to my existence.",
  "I would like to kiss the balm of your soul.",
  "I want to admire the soft beating of our hearts.",
  "You are the unbreakable shine of my life."
];
const text2_options = [
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_",
  "@karymemt_"
];
const color_options = ["#6E7C7C", "#D9E4DD","#AC7D88", "#BB6464", "#EEE4AB", "#A0BCC2", "#FFD5CD", "#BEDBBB", "#E08F62", "#F6D6AD", "#C2B092"];
const image_options = [
  "img/img1.jpeg",
  "img/img2.jpeg",
  "img/img3.jpeg",
  "img/img4.jpeg",
  "img/img5.jpeg",
  "img/img6.jpeg",
  "img/img7.jpeg",
  "img/img8.jpeg",
  "img/img9.jpeg",
  "img/img10.jpeg",
  "img/img11.jpeg"
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};