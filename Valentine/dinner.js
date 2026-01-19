const clickMe = document.getElementById("clickMe");
const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

clickMe.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

okBtn.addEventListener("click", () => {
  // Smooth transition, then go to the letter page
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "letter.html";
  }, 380);
});