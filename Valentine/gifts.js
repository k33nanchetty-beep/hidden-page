// PAGE 2: handle gift clicks
document.addEventListener("DOMContentLoaded", () => {
  const giftDinner   = document.getElementById("giftDinner");
  const giftFunday   = document.getElementById("giftFunday");
  const giftSurprise = document.getElementById("giftSurprise");

  if (giftDinner) {
    giftDinner.addEventListener("click", () => {
      window.location.href = "dinner.html";
    });
  }

  if (giftFunday) {
    giftFunday.addEventListener("click", () => {
      window.location.href = "funday.html";
    });
  }

  if (giftSurprise) {
    giftSurprise.addEventListener("click", () => {
      window.location.href = "surprise.html";
    });
  }
});
