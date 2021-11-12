const slides = document.querySelectorAll(".showcase .slide");
const btnPrev = document.querySelector(".showcase .btn-prev");
const btnNext = document.querySelector(".showcase .btn-next");

let currentSlide = null;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      currentSlide = entry.target;

      btnPrev.disabled = false;
      btnNext.disabled = false;
      if (currentSlide === currentSlide.parentElement.firstElementChild) {
        btnPrev.disabled = true;
      } else if (currentSlide === currentSlide.parentElement.lastElementChild) {
        btnNext.disabled = true;
      }
    });
  },
  {
    root: document.querySelector(".showcase .slider"),
    threshold: 0.5,
  }
);

slides.forEach((slide) => {
  observer.observe(slide);
});

btnPrev.addEventListener("click", () => {
  currentSlide.previousElementSibling.scrollIntoView({ block: "nearest" });
});

btnNext.addEventListener("click", () => {
  currentSlide.nextElementSibling.scrollIntoView({ block: "nearest" });
});
