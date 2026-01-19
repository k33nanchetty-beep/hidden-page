const clickBtn = document.getElementById("clickBtn");
const popup = document.getElementById("popup");
const okBtn = document.getElementById("okBtn");

clickBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

okBtn.addEventListener("click", () => {
  // smooth fade transition then go to letter
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "letter.html";
  }, 350);
});