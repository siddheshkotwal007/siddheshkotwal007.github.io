function copyNumber(button) {
  navigator.clipboard.writeText("+918369411532");

  button.textContent = "Copied!";

  setTimeout(() => {
    button.textContent = "Copy Number";
  }, 1500);
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  const current = slides[currentSlide];

  current.classList.remove("active");
  current.classList.add("exit");

  setTimeout(() => {
    current.classList.remove("exit");
  }, 800); 

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);

const aboutSection = document.querySelector(".about-cascade");
const aboutLines = document.querySelectorAll(".about-line");

let hasAnimated = false;
let timeouts = [];

function resetAbout() {
  timeouts.forEach(t => clearTimeout(t));
  timeouts = [];

  aboutLines.forEach(line => {
    line.classList.remove("show");
  });

  hasAnimated = false;
}

function revealOnScroll() {
  if (!aboutSection || aboutLines.length === 0) return;

  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.6;

  if (sectionTop < triggerPoint && !hasAnimated) {
    hasAnimated = true;

    const startDelay = 150;

    aboutLines.forEach((line, index) => {
      const t = setTimeout(() => {
        line.classList.add("show");
      }, startDelay + index * 720);

      timeouts.push(t);
    });
  }
}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("pageshow", (event) => {
  resetAbout();

  // delay ensures browser finishes restoring state
  setTimeout(revealOnScroll, 300);
});

/* initial load */
setTimeout(revealOnScroll, 300);