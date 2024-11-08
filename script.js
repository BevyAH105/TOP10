document.addEventListener("DOMContentLoaded", (event) => {
  const wipeElements = document.querySelectorAll(".wipe");
  createObserver(wipeElements);
});

function createObserver(wipeElement) {
  let observer = new IntersectionObserver(handleIntersect);
  wipeElement.forEach((el) => observer.observe(el));
}

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("wipe-animation");
    } else {
      entry.target.classList.remove("wipe-animation");
    }
  });
}
