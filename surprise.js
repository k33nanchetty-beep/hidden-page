// CHANGE THIS to your real 4th page filename:
const NEXT_PAGE = "letter.html"; // e.g. "dinner.html" or "final.html"

// Fade IN on load
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    document.body.classList.remove("page--fade-in");
  });
});

const clickMe = document.getElementById("clickMe");
const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

// Show popup
clickMe.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// On Okayyy: close popup + smooth fade out + go to page 4
okBtn.addEventListener("click", () => {
  popup.classList.add("hidden");

  // smooth transition to next page
  document.body.classList.add("page--fade-out");
  setTimeout(() => {
    window.location.href = NEXT_PAGE;
  }, 280);
});
