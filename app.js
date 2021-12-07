const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgressBar = () => {
  let sectionHieght = -section.getBoundingClientRect().top;
  let progressBarWidth = (sectionHieght / (section.getBoundingClientRect().height -document.documentElement.clientHeight))*100;
  console.log(progressBarWidth);

  progressBar.style.width = progressBarWidth + "%";
}

window.addEventListener('scroll', animateProgressBar);
