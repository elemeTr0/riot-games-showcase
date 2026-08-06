const teamButton = document.getElementById("team");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeModal");

teamButton.addEventListener("click", () => {
    overlay.classList.add("show");
});

closeButton.addEventListener("click", () => {
    overlay.classList.remove("show");
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.remove("show");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.classList.remove("show");
    }
});