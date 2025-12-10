// Дуже простий скрипт для випадкових параметрів руху покемонів

document.addEventListener("DOMContentLoaded", () => {
  const pokemons = document.querySelectorAll(".pokemon");

  pokemons.forEach((el) => {
    // Підставляємо картинку з data-img
    const img = el.getAttribute("data-img");
    if (img) {
      el.style.backgroundImage = `url("${img}")`;
    }

    // Випадкова висота (відносно сцени)
    const top = 10 + Math.random() * 50; // від 10% до 60%
    el.style.top = `${top}%`;

    // Випадкова тривалість руху та "підстрибування"
    const moveDuration = 5 + Math.random() * 5; // 5–10 секунд
    const bobDuration = 2 + Math.random() * 2; // 2–4 секунди
    el.style.animationDuration = `${moveDuration}s, ${bobDuration}s`;

    // Випадкова затримка старту
    const delay = Math.random() * 5; // 0–5 секунд
    el.style.animationDelay = `${delay}s, 0s`;
  });
});






