// Пример скрипта для анимации на кнопке
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});
