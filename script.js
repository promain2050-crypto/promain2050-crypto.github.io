document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("imgModal");
    const closeBtn = document.querySelector(".close");

    // Ищем все картинки с классом preview-img
    const images = document.querySelectorAll(".preview-img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex"; // Показываем окно
            modalImg.src = img.src;       // Подставляем путь к картинке
        });
    });

    // Закрытие при клике на крестик
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Закрытие при клике на любое пустое место вокруг картинки
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// писало ИИ