let position = 0;
const box = document.querySelector(".box");

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        position += 5;
        box.style.transform = `translate(${position}px)`;
    }
    if (e.key === "ArrowLeft") {
        position -= 5;
        box.style.transform = `translate(${position}px)`;
    }
});
