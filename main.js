// --- Год в футер ---
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year")?.textContent = new Date().getFullYear();

    // --- Кибер-дождь ---
    const rain = document.querySelector(".rain");
    if (rain) {
        for (let i = 0; i < 60; i++) {
            const drop = document.createElement("div");
            drop.classList.add("drop");
            drop.style.left = Math.random() * 100 + "vw";
            drop.style.animationDuration = (Math.random() * 3 + 1) + "s";
            drop.style.animationDelay = Math.random() * 5 + "s";
            rain.appendChild(drop);
        }
    }
});
