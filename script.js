// ----- SELECT ELEMENTS -----
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const tryAgain = document.getElementById("tryAgain");
const page1 = document.getElementById("page1");


// ----- NO BUTTON RUNS AWAY -----
let moveSpeed = 78; // the higher, the faster

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 335 - 150;
    const y = Math.random() * 335 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


// ----- NO BUTTON (IF SHE CLICKED) -----
noBtn.addEventListener("click", () => {
    page1.classList.add("hidden");
    tryAgain.classList.remove("hidden");
});


// ----- YES BUTTON GOES TO PAGE 2 -----
if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        window.location.href = "gifts.html";
    });
}


// ----- RESET (IF YOU NEED IT) -----
function resetPage() {
    tryAgain.classList.add("hidden");
    page1.classList.remove("hidden");

    // Reset NO button position
    noBtn.style.transform = "translate(0,0)";
}

window.resetPage = resetPage;