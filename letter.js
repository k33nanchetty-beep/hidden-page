const clickMe = document.getElementById("clickMe");
const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

clickMe.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

okBtn.addEventListener("click", () => {
  // Smooth fade + go back to Page 1
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 350);
});