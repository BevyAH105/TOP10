const numSteps = 20.0;

let wipeElement;

// Set things up
window.addEventListener(
  "load",
  (event) => {
    wipeElement = document.querySelector("#wipe");

    createObserver();
  },
  false
);

function createObserver() {
  let observer;
  observer = new IntersectionObserver(handleIntersect);
  observer.observe(wipeElement);
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      wipeElement.classList.add("wipe-animation");
    } else {
      wipeElement.classList.remove("wipe-animation");
    }
  });
}
