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
    }
    // else {
    //   entry.target.classList.remove("wipe-animation");
    // }
  });
}

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const navContainer = document.querySelector(".nav-container");
  navContainer.style.backgroundPositionY = `${-700 + scrollPosition * 0.8}px`;
});

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("psw").value;
    const repeatPassword = document.getElementById("psw-repeat").value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); // Prevent form submission
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      event.preventDefault();
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match.");
      event.preventDefault();
      return;
    }

    alert("Form submitted successfully!");
  });
